<template>
    <div class="w-full h-full flex flex-col sm:flex-row">
        <div class="w-full sm:w-1/2 h-96 object-cover">
            <GMap
                ref="gMap"
                language="en"
                :center="{ lat: locations[0].lat, lng: locations[0].lng }"
                :options="{ fullscreenControl: false }"
                :zoom="5"
            >
                <GMapMarker
                    v-for="location in locations"
                    :key="location.id"
                    :position="{ lat: location.lat, lng: location.lng }"
                >
                    <GMapInfoWindow :options="{ maxWidth: 200 }">
                        <code>
                            <span class="font-semibold">The Lift Shop</span>

                            <br />
                            {{ location.street }}
                            <br />
                            {{ location.cityStateZip }}
                            <br /><br />
                            <a
                                class="text-blue-700 font-semibold"
                                :href="location.url"
                                target="_blank"
                                >Get Directions</a
                            >
                        </code>
                    </GMapInfoWindow>
                </GMapMarker>
            </GMap>
        </div>
        <div class="w-full sm:w-1/2 h-96 object-cover">
            <iframe
                src="https://www.google.com/maps/embed?pb=!4v1660343684300!6m8!1m7!1sCAoSLEFGMVFpcE5TVnBNSE55TVo1QjBjSUVQQ0otZ3QzUFR4UURTSktqNHAwTWVB!2m2!1d33.633766910821!2d-112.0304626276!3f148.13!4f10.75!5f0.4000000000000002"
                class="w-full h-96"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            currentLocation: {},
        }
    },

    computed: {
        ...mapState('location', ['locations']),
    },
}
</script>
