<template>
    <div class="relative bg-gray-800 overflow-hidden">
        <div class="absolute inset-0">
            <img
                class="w-full h-full object-cover"
                :src="require('~/assets/image/banner.jpeg')"
                sizes="sm:100vw md:50vw lg:1920px"
                alt=""
            />
            <div
                class="absolute inset-0 bg-gray-500 mix-blend-multiply"
                aria-hidden="true"
            ></div>
        </div>

        <div class="relative pt-6 pb-16 sm:pb-24">
            <main class="mt-16 sm:mt-24">
                <div class="mx-auto max-w-7xl">
                    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div
                            class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
                        >
                            <div>
                                <h1
                                    class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"
                                >
                                    <span class="md:block">Services</span>
                                </h1>
                                <p
                                    class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                                >
                                    We offer everything from lift kit
                                    installations to off-road accessories,
                                    custom wheels, and more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
