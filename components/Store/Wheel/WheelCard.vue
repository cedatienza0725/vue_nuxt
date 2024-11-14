<template>
    <div>
        <li
            v-scroll-to="'#header'"
            class="relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus-within:ring-1 focus-within:ring-blue-600"
            @click.prevent="updateOption(wheel.name)"
        >
            <div class="flex flex-col w-full">
                <div
                    :style="{ backgroundImage: `url(${wheel.image})` }"
                    class="bg-white h-64 w-full rounded-t-md bg-cover bg-center"
                ></div>
                <div class="w-full p-2 text-left">
                    <div class="title">{{ wheel.name }}</div>
                    <div class="text-sm">{{ wheel.brand }}</div>
                    <!-- <div class="text-sm">20", 22"</div> -->
                </div>
            </div>

            <div
                class="absolute -inset-px rounded-lg border-2 pointer-events-none"
                :class="[
                    completedOptions.wheels &&
                    completedOptions.wheels.includes(wheel.name)
                        ? 'border-blue-600'
                        : 'border-transparent',
                ]"
                aria-hidden="true"
            ></div>
        </li>

        <StoreRedirectModal
            :open="modalIsOpen"
            type="wheels"
            @close="modalIsOpen = false"
        />
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import StoreRedirectModal from '@/components/Modal/StoreRedirectModal'

export default {
    components: {
        StoreRedirectModal,
    },
    props: {
        wheel: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            modalIsOpen: false,
        }
    },
    computed: {
        ...mapState('build', ['completedOptions', 'buildData']),
    },
    methods: {
        ...mapActions('build', ['updateCompletedOption']),
        updateOption(wheels) {
            if (this.buildData) {
                this.updateCompletedOption({
                    option: 'wheels',
                    value: wheels,
                })
            } else {
                this.modalIsOpen = true
            }
        },
    },
}
</script>
