<template>
  <l-marker  :lat-lng="countryCenterLatLng" >
    <!-- Didn't use the foundPathLatLngs because we'll need the attributes for the popup -->
    <l-icon :icon-url="iconUrl" :icon-size="iconSize" />
    <l-popup :options="{maxWidth:700}">
        <div>
          <p class="text-center mb-0">{{this.flag}}</p>
          <h3 class="text-center mt-0">{{this.country.attributes.name.common}} ({{this.country.countryCode}})</h3>
          <p>LatLng: {{this.countryCenterLatLng}}</p>
          <p>Distance to Destination: {{this.distanceToFinalDestination}} KM </p>
          <p>Distance between Node: {{this.distanceBetweenNode}} KM </p>

        </div>
    </l-popup>
  </l-marker>
</template>

<script>
import {LMarker,LPopup,LIcon} from "@vue-leaflet/vue-leaflet";
import marker from '@/assets/marker2.png' // Import the marker image


import CRA from "country-routing-algorithm";
export default {
  name: "MapCountryMarker",
  components: {
    LIcon,
    LMarker,
    LPopup
  },
  props: {
    country:CRA.TraverseCountryNode
  },
  data(){
    return{

    }
  },
  computed:{
    iconUrl() {
      return marker;
    },
    iconSize(){
      return [24, 24];
    },



    countryCenterLatLng(){
      return this.country.attributes.latlng;
    },
    distanceToFinalDestination(){
      return Math.round(this.country.distanceToFinalDestination);
    },
    distanceBetweenNode(){
      return Math.round(this.country.distanceBetweenNode);
    },

    flag(){
      return this.country.attributes.flag
    }

  },
}
</script>

<style scoped>

</style>