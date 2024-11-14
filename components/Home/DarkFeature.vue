<template>
    <div class="bg-gradient-to-r from-blue-800 to-blue-700">
        <div class="pt-16 pb-32 overflow-hidden">
            <div
                class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mx-auto lg:max-w-7xl"
            >
                <div class="relative mt-12 sm:mt-16 lg:mt-18">
                    <div
                        class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"
                    >
                        <div class="lg:col-start-2">
                            <h2
                                class="text-3xl font-extrabold tracking-tight text-white"
                            >
                                CUSTOMIZING THE NATION'S TOUGHEST TRUCKS
                            </h2>
                            <p class="mt-3 text-lg text-blue-200">
                                Give your vehicle the “legs” it needs to travel
                                over, through, and around all landscapes. Your
                                vehicle's peak performance starts right here!
                                Our customization expertise isn't what separate
                                us from other shops (though it doesn't hurt).
                                When we say we treat you like family, we mean
                                it. Like a family of off-road trucking and
                                traveling enthusiasts.
                            </p>
                            <p class="mt-3 text-lg text-blue-200">
                                We want your driving experiences to be as safe
                                and effective as you need them to be.
                                Understanding the performance expectations for
                                your truck or SUV, as well as your driving
                                purposes will help us provide comprehensive lift
                                care and services. We believe in long-term
                                relationships. When you receive our quality
                                parts and services, you'll leave our facility
                                completely confident that your vehicle is ready
                                to face all terrains.
                            </p>
                            <div class="mt-6">
                                <nuxt-link
                                    to="/appointment"
                                    class="button flex items-center justify-center px-4 py-2 border border-transparent text-base rounded-sm shadow-sm bg-white text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 transition ease-in duration-300"
                                    >Schedule Appointment</nuxt-link
                                >
                            </div>
                        </div>

                        <div class="mt-10 relative lg:mt-0 lg:col-start-1">
                            <img
                                v-scroll-reveal.reset="{ distance: '25px' }"
                                class="relative mx-auto"
                                :src="require('~/assets/image/liftkit.png')"
                                alt="Lift Kit"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            services: [
                {
                    name: '4x4 Customization',
                    link: '4x4-customization',
                    description:
                        "Your new 4x4 may be the envy of the neighborhood because it's shiny, new, and fresh off the dealer's lot. There's nothing like the new car smell and the smooth gloss exterior",
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
                        "The lift kit is your vehicle's answer to the call of the wild! The great outdoors has lured a many truck, Jeep, and SUV driver to challenge its rugged terrains.",
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
