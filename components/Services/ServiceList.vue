<template>
    <!-- Gradient Feature Section -->
    <div class="bg-gradient-to-r from-blue-800 to-blue-700">
        <div
            class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8"
        >
            <h2 class="text-3xl text-white tracking-tight">
                Services We Offer at The Lift Shop
            </h2>
            <!-- <p class="mt-4 max-w-3xl text-lg text-blue-200">
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                Et magna sit morbi lobortis. Blandit aliquam sit nisl euismod
                mattis in.
            </p> -->
            <div
                class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16"
            >
                <nuxt-link
                    v-for="(service, index) in services"
                    :key="index"
                    :to="`/services/${service.link}`"
                >
                    <div>
                        <span
                            class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10"
                        >
                            <CogIcon class="h-6 w-6 text-white" />
                        </span>
                    </div>
                    <div class="mt-6">
                        <h3 class="text-lg font-medium text-white">
                            {{ service.name }}
                        </h3>
                        <p class="mt-2 text-base text-blue-200">
                            {{ service.description }}
                        </p>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import CogIcon from '@/assets/svg/icons/cog-solid.svg?inline'

export default {
    components: {
        CogIcon,
    },
    data() {
        return {
            services: [
                {
                    name: '4x4 Customization',
                    link: '4x4-customization',
                    description:
                        "Your new 4x4 may be the envy of the neighborhood because it's shiny, new, and fresh off the dealer’s lot. There’s nothing like the new car smell and the smooth gloss exterior.",
                },
                {
                    name: 'Custom Wheels',
                    link: 'custom-wheels',
                    description:
                        "The Lift Shop is here to complete your vehicle's customization with quality wheels and tires. You can trust our team to take you to another level.",
                },
                {
                    name: 'Leveling Kits',
                    link: 'leveling-kits',
                    description:
                        'The most popular upgrade for an off-road vehicle is the leveling kit, which levels both the front and rear suspension.',
                },
                {
                    name: 'Lift Kits',
                    link: 'lift-kits',
                    description:
                        "The lift kit is your vehicle's answer to the call of the wild! The great outdoors has lured a many truck, Jeep, and SUV drivers to challenge its rugged terrains.",
                },
                {
                    name: 'Off-Road Accessories',
                    link: 'off-road-accessories',
                    description:
                        'The team at The Lift Shop has been providing the quality truck customizations for years.',
                },
                {
                    name: 'Off-Road Bumpers',
                    link: 'off-road-bumpers',
                    description:
                        "When it comes to off-roading, the sky's the limit to how far you can modify your vehicle. One area in particular, and popularly, to focus on is the bumpers.",
                },
                {
                    name: 'Off-Road Lighting',
                    link: 'off-road-lighting',
                    description:
                        'When it comes to driving off-road at night, you need to come prepared. And that means having the right lighting equipment on your vehicle!',
                },
            ],
        }
    },
}
</script>
