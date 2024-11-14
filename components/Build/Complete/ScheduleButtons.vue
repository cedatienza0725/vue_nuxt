<template>
    <div class="flex flex-col gap-4">
        <nuxt-link
            to="/appointment"
            class="font-roboto font-black italic uppercase text-center flex-1 bg-blue-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-white transition ease-in duration-300"
        >
            Schedule An Appointment
        </nuxt-link>
        <a
            :href="`tel:${$store.getters.ContactNumber}`"
            class="font-roboto font-black italic uppercase text-center flex-1 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
            Call Now
        </a>
    </div>
</template>
