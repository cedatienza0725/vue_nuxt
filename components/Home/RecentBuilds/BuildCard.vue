<template>
    <li class="bg-gray-800 text-center rounded-lg">
        <div>
            <img
                class="mx-auto object-cover shadow-lg rounded-t-lg"
                :src="build.image"
                :alt="build.name"
            />

            <div
                class="py-10 px-6 space-y-2 xl:flex xl:items-center xl:justify-between xl:px-10 xl:text-left"
            >
                <div class="font-medium text-lg leading-6 space-y-1">
                    <h3 class="text-white">{{ build.name }}</h3>

                    <!-- <li v-if="build.lift" class="text-white text-sm mt-2">
                        {{ build.lift }}
                    </li>
                    <li v-if="build.wheel" class="text-white text-sm mt-2">
                        {{ build.wheel }}
                    </li>
                    <li v-if="build.tire" class="text-white text-sm mt-2">
                        {{ build.tire }}
                    </li> -->

                    <div class="text-2xl font-semibold text-blue-600">
                        ${{ build.price }}
                        <span class="text-sm font-medium text-gray-200">
                            in modifications
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        build: {
            type: Object,
            required: true,
        },
    },
}
</script>
