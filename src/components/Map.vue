
<template >
  <div style="height:90vh;" >
    <l-map ref="map" v-model:zoom="zoom" :center="[47.334852, 20.509485]" :use-global-leaflet="false" >
      <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
      ></l-tile-layer>
      <l-polyline
          :lat-lngs="this.polyLineLatLngs"
          color="green"
      />
    </l-map>
  </div>
</template>
<script lang="ts">
import { LMap, LPolyline, LTileLayer} from "@vue-leaflet/vue-leaflet";


export default {
  props: {
    polyLineLatLngs: Array
  },
  components: {
    LMap,
    LTileLayer,
    LPolyline,
  },
  data() {
    return {
      zoom: 3,
    };
  },
  methods:{

  },
  async beforeMount() {
    // HERE is where to load Leaflet components!


  },
};


</script>

