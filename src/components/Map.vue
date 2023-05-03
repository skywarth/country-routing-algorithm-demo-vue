
<template >
  <div style="height:90vh;" >
    <l-map ref="map" v-model:zoom="zoom" :center="[47.334852, 20.509485]" :use-global-leaflet="false" >
      <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
      ></l-tile-layer>
      <l-control-scale position="topright" :imperial="false" :metric="true"></l-control-scale>
      <l-polyline
          :lat-lngs="this.foundPathLatLngs"
          color="green"
      />
      <l-marker v-for="country in this.foundPath" :lat-lng="country.attributes.latlng" :key="country.id">
        <!-- Didn't use the foundPathLatLngs because we'll need the attributes for the popup -->
        <l-popup>Wazzaaaap</l-popup>
      </l-marker>
    </l-map>
  </div>
</template>
<script lang="ts">
import { LMap, LPolyline, LTileLayer,LControlScale, LMarker, LPopup} from "@vue-leaflet/vue-leaflet";


export default {
  props: {
    foundPath:Array
  },
  components: {
    LMap,
    LTileLayer,
    LPolyline,
    LControlScale,
    LMarker,
    LPopup
  },
  data() {
    return {
      zoom: 4,
    };
  },
  computed:{
    foundPathLatLngs(){
        return this.foundPath.map(x=>x.attributes.latlng);
    }

  },
  methods:{
    setViewToContainAll(){
      this.$refs.map.leafletObject.fitBounds(this.foundPathLatLngs);
      //this.zoom-=0.5;
    }



  },
  watch: {

    foundPath(newVal, oldVal) {
      this.setViewToContainAll();
      console.log(newVal);
      //debugger

    }
  },
  setup() {

  },
};


</script>

