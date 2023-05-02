
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
          :lat-lngs="this.polyLineLatLngs"
          color="green"
      />
    </l-map>
  </div>
</template>
<script lang="ts">
import { LMap, LPolyline, LTileLayer,LControlScale} from "@vue-leaflet/vue-leaflet";


export default {
  props: {
    polyLineLatLngs: Array
  },
  components: {
    LMap,
    LTileLayer,
    LPolyline,
    LControlScale
  },
  data() {
    return {
      zoom: 3,
    };
  },
  methods:{
    setViewToContainAll(){
      this.$refs.map.leafletObject.fitBounds(this.polyLineLatLngs);
      //this.zoom-=0.5;
    }

  },
  watch: {

    polyLineLatLngs(newQuestion, oldQuestion) {
      this.setViewToContainAll();

    }
  },
  setup() {

  },
};


</script>

