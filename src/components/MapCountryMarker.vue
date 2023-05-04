<template>
  <l-marker  :lat-lng="countryCenterLatLng" >
    <!-- Didn't use the foundPathLatLngs because we'll need the attributes for the popup -->
    <l-popup>
        <div>
          <h3 class="text-center">{{this.country.attributes.name.common}}</h3>
          <p>hey</p>
          <p>wazzup?</p>
        </div>
    </l-popup>
  </l-marker>
</template>

<script>
import {LMarker,LPopup} from "@vue-leaflet/vue-leaflet";
export default {
  name: "MapCountryMarker",
  components: {
    LMarker,
    LPopup
  },
  props: {
    country:Object
  },
  computed:{
    countryCenterLatLng(){
      return this.country.attributes.latlng;
    }

  },
}
</script>

<style scoped>

</style>