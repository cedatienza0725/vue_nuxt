<template>
    <nav
        v-if="shouldPaginate"
        class="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0"
    >
        <div class="w-0 flex-1 flex">
            <button
                class="-mt-px border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition ease-in-out duration-150 cursor-pointer"
                :class="{ 'cursor-not-allowed opacity-50': Page === 1 }"
                @click="setPage(Page - 1)"
            >
                <icon-arrow-thin-left class="mr-3 h-4 w-4 text-gray-400" />
                Previous
            </button>
        </div>
        <div class="hidden md:flex">
            <button
                v-if="showStart"
                class="-mt-px border-t-2 border-transparent pt-4 px-4 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition ease-in-out duration-150"
                @click="setPage(1)"
            >
                1
            </button>
            <span
                v-if="showStart"
                class="-mt-px border-t-2 border-transparent pt-4 px-4 inline-flex items-center text-sm leading-5 font-medium text-gray-500"
            >
                ...
            </span>
            <button
                v-for="(page, index) in chunkGroup"
                :key="index"
                :class="getClasses(page)"
                @click="setPage(page)"
            >
                {{ page }}
            </button>
            <span
                v-if="showEnd"
                class="-mt-px border-t-2 border-transparent pt-4 px-4 inline-flex items-center text-sm leading-5 font-medium text-gray-500"
            >
                ...
            </span>
            <button
                v-if="showEnd"
                class="-mt-px border-t-2 border-transparent pt-4 px-4 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition ease-in-out duration-150"
                @click="setPage(totalPages)"
            >
                {{ totalPages }}
            </button>
        </div>
        <div class="w-0 flex-1 flex justify-end">
            <button
                class="-mt-px border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition ease-in-out duration-150 cursor-pointer"
                :class="{
                    'cursor-not-allowed opacity-50': Page === totalPages,
                }"
                @click="setPage(Page + 1)"
            >
                Next
                <icon-arrow-thin-right class="ml-3 h-4 w-4 text-gray-400" />
            </button>
        </div>
    </nav>
</template>

<script>
import IconArrowThinLeft from '@/assets/svg/icons/arrow-thin-left.svg?inline'
import IconArrowThinRight from '@/assets/svg/icons/arrow-thin-right.svg?inline'

export default {
    components: {
        IconArrowThinLeft,
        IconArrowThinRight,
    },
    props: {
        records: {
            type: Number,
            required: true,
        },
        perPage: {
            type: Number,
            default: 24,
        },
        start: {
            type: Number,
            default: 1,
        },
        options: {
            type: Object,
            default: () => {
                return {}
            },
        },
        chunk: {
            type: Number,
            default: 3,
        },
        showTotals: {
            type: Boolean,
            default: true,
        },
        type: {
            type: String,
            default: 'items',
        },
    },
    data() {
        return {
            startNum: 1,
            endNum: 0,
            curPage:
                this.start && !isNaN(parseInt(this.start))
                    ? parseInt(this.start)
                    : 1,
        }
    },
    computed: {
        theme() {
            return this.$store.state.global.theme
        },
        Page: {
            get() {
                return this.curPage
            },
            set(val) {
                this.curPage = val
            },
        },
        shouldPaginate() {
            return this.records > this.perPage
        },
        shouldShowExtras() {
            return this.totalPages > this.chunk
        },
        chunkGroup() {
            if (this.shouldShowExtras) {
                const startCheck = this.Page - Math.floor(this.chunk / 2)
                const endCheck = this.Page + Math.floor(this.chunk / 2)

                if (startCheck <= 1) {
                    return this.createChunk(1, this.chunk)
                } else if (endCheck >= this.totalPages) {
                    return this.createChunk(
                        this.totalPages - this.chunk + 1,
                        this.totalPages
                    )
                } else {
                    return this.createChunk(startCheck, endCheck)
                }
            } else {
                return this.createChunk(1, this.totalPages)
            }
        },
        totalPages() {
            return Math.ceil(this.records / this.perPage)
        },
        showStart() {
            return (
                this.chunk < this.totalPages &&
                this.Page > Math.ceil(this.chunk / 2)
            )
        },
        showEnd() {
            return (
                this.chunk < this.totalPages &&
                this.totalPages - Math.ceil(this.chunk / 2) >= this.Page
            )
        },
        statsTo() {
            return this.perPage * (this.Page - 1) + 1
        },
        statsFrom() {
            const amount = this.perPage * this.Page
            return amount <= this.records ? amount : this.records
        },
    },
    watch: {
        start() {
            this.Page =
                this.start && !isNaN(parseInt(this.start))
                    ? parseInt(this.start)
                    : 1
        },
    },
    mounted() {
        // this.showStart()
        // this.showEnd()
    },
    methods: {
        setPage(page) {
            if (this.allowedPage(page)) {
                this.paginate(page)
            }
        },
        allowedPage(page) {
            return page >= 1 && page <= this.totalPages
        },
        createChunk(start, end) {
            const returnArr = []

            for (let i = start; i <= end; i++) {
                returnArr.push(i)
            }

            return returnArr
        },
        paginate(page) {
            this.Page = page

            // emit paginate action
            this.$emit('paginate', page)
        },
        getClasses(page) {
            if (page === this.Page) {
                return '-mt-px border-t-2 border-blue-500 pt-4 px-4 inline-flex items-center text-sm leading-5 font-medium text-blue-600 transition ease-in-out duration-150'
            } else {
                return '-mt-px border-t-2 border-transparent pt-4 px-4 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition ease-in-out duration-150'
            }
        },
    },
}
</script>

<style scoped></style>
