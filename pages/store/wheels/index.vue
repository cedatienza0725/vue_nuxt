<template>
    <store-layout>
        <div class="flex justify-between">
            <div class="space-x-2">
                <h1
                    id="wheelHeader"
                    class="uppercase text-3xl font-extrabold tracking-tight text-gray-900 inline-block"
                >
                    Wheels
                </h1>
                <span
                    v-if="meta"
                    class="inline-block text-sm uppercase font-bold"
                    >({{ meta.pagination.total }})</span
                >
            </div>
        </div>
        <div class="my-6">
            <p v-if="$fetchState.pending">Fetching wheels...</p>
            <p v-else-if="$fetchState.error">An error occurred.</p>
            <div v-else>
                <ul
                    class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <WheelCard
                        v-for="wheel in wheelsWithImages"
                        :key="wheel.id"
                        :wheel="wheel"
                    />
                </ul>

                <Pagination
                    class="mt-14"
                    :records="meta.pagination ? meta.pagination.total : 0"
                    :per-page="limit"
                    :start="$route.query.page ? parseInt($route.query.page) : 1"
                    @paginate="updatePage"
                />
            </div>
        </div>
    </store-layout>
</template>

<script>
import StoreLayout from '@/components/Store/StoreLayout'
import WheelCard from '@/components/Store/Wheel/WheelCard'
import Pagination from '@/components/Shared/Pagination'

export default {
    components: {
        StoreLayout,
        WheelCard,
        Pagination,
    },
    data() {
        return {
            wheels: {},
            meta: null,
            limit: 24,
        }
    },
    async fetch() {
        await this.getWheels(this.$route.query.page)
    },
    head() {
        return {
            title: 'Wheels',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Select your wheels.',
                },
            ],
        }
    },
    computed: {
        wheelsWithImages() {
            return this.wheels.map((item) => {
                item.image =
                    item.wheelFinishes.data.length > 0
                        ? item.wheelFinishes.data[0].image
                        : null
                return item
            })
        },
    },
    methods: {
        async getWheels(page) {
            const params = {
                include: 'wheelFinishes',
                wheelFinishesRelationExists: true,
                limit: this.limit,
                sort: 'position.desc,brand.asc',
            }

            if (page) {
                params.page = page
            }

            const wheelsObj = await this.$axios
                .get('/p/v1/wheel_models', {
                    params,
                })
                .then((res) => res.data)

            this.wheels = wheelsObj.data
            this.meta = wheelsObj.meta
        },
        updatePage(page) {
            this.getWheels(page).then(() => {
                const routeObj = {
                    path: '/store/wheels',
                }

                if (parseInt(page) > 1) {
                    routeObj.query = { page }
                }

                this.$router.push(routeObj)
                this.$scrollTo('#wheelHeader', 1000, {
                    easing: 'ease',
                    cancelable: false,
                })
            })
        },
    },
    fetchOnServer: false,
}
</script>
