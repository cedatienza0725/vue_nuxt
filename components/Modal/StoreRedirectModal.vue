<template>
    <portal to="modal">
        <Modal :showing="open" class-width="md:max-w-sm" @close="close">
            <div>
                <div
                    class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100"
                >
                    <CogIcon class="h-6 w-6 text-blue-600" />
                </div>
                <div class="mt-3 text-center sm:mt-5">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Ready to lift your rig?
                    </h3>
                    <p class="mt-2 text-sm text-gray-500">
                        To select your {{ curType.name }}, we're going to need
                        some details about your vehicle. We're ready to build
                        your dream truck or SUV with the highest quality parts
                        and accessories.
                    </p>
                </div>
            </div>
            <div class="mt-5 sm:mt-6">
                <button
                    type="button"
                    class="w-full button flex items-center justify-center px-4 py-2 border border-transparent text-base rounded-sm shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 transition ease-in duration-300 sm:px-4"
                    @click="toBuildPage"
                >
                    Start Your Build
                </button>
            </div>
        </Modal>
    </portal>
</template>

<script>
import Modal from '@/components/Modal'
import CogIcon from '@/assets/svg/icons/cog-solid.svg?inline'

export default {
    components: {
        Modal,
        CogIcon,
    },
    props: {
        open: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            typeSchema: {
                tires: {
                    name: 'tires',
                },
                lift: {
                    name: 'lift kit',
                },
                wheels: {
                    name: 'wheels',
                },
            },
            fallBack: 'lift',
        }
    },
    computed: {
        curType() {
            return this.typeSchema[this.type]
                ? this.typeSchema[this.type]
                : this.typeSchema[this.fallBack]
        },
    },
    methods: {
        close() {
            this.$emit('close')
        },
        toBuildPage() {
            this.close()
            this.$router.push('/build')
        },
    },
}
</script>

<style></style>
