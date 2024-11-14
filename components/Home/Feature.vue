<template>
    <div class="relative bg-white pt-16 pb-32">
        <div class="relative">
            <div
                class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
            >
                <div
                    class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0"
                >
                    <div>
                        <div>
                            <span
                                class="h-12 w-12 rounded-md flex items-center justify-center bg-blue-600"
                            >
                                <IconInbox class="h-6 w-6 text-white" />
                            </span>
                        </div>
                        <div class="mt-6">
                            <h1
                                class="text-3xl font-extrabold tracking-tight text-gray-900"
                            >
                                The ultimate off-road shop
                            </h1>
                            <p class="mt-4 text-lg text-gray-500">
                                Most off-road trucking enthusiasts hang out on
                                another level than most motorists. They venture
                                into parts and places unknown, blazing new
                                trails that others can't or don't dare follow.
                                That is if they're part of The Lift Shop family!
                                We understand our customers and they understand
                                everything we do for their vehicle to make it
                                off-road ready. We're the professionals that
                                handle your truck the way it deserves to be
                                treated. With our vast experience in the truck
                                lift and parts installation market, there's no
                                better service destination in Southwest United
                                States for your vehicle.
                            </p>
                            <p class="mt-4 text-lg text-gray-500">
                                If you're behind the wheel of a Jeep, Truck, or
                                SUV and you feel the urge for an off-road
                                excursion, we should be your first stop. Our
                                team knows truck lift installations inside and
                                out. Coming from backgrounds in supplies,
                                accessories, installations, and sales, you can
                                all us the know-it-all and do-it-alls of the
                                truck lift industry.
                            </p>
                            <div class="mt-6">
                                <StartYourBuildButton />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="px-4 max-w-xl mx-4 my-12 sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 relative h-96"
                >
                    <img
                        v-scroll-reveal.reset="{ distance: '25px' }"
                        class="absolute left-0 top-0 w-64 sm:w-96 border-8 border-white"
                        alt=""
                        :src="require('~/assets/image/jeep.jpg')"
                    />

                    <img
                        v-scroll-reveal.reset="{
                            delay: 250,
                            distance: '25px',
                        }"
                        class="absolute left-28 sm:left-64 top-48 sm:top-64 w-48 sm:w-64 border-8 border-white"
                        alt=""
                        :src="require('~/assets/image/gmc.jpg')"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StartYourBuildButton from '@/components/Buttons/StartYourBuildButton'
import IconInbox from '@/assets/svg/icons/inbox-outline.svg?inline'

export default {
    components: {
        StartYourBuildButton,
        IconInbox,
    },
}
</script>
