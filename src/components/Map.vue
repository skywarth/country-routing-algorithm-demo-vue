
<template >
  <div style="height:90vh;" >
    <l-map ref="map" v-model:zoom="zoom" :center="[47.334852, -1.509485]">
      <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
      ></l-tile-layer>
      <l-polyline
          :lat-lngs="polyLineLatLngs"
          color="green"
      />
    </l-map>
  </div>
</template>
<script lang="ts">
import { LMap, LPolyline, LTileLayer,LGeoJson,LCircleMarker  } from "@vue-leaflet/vue-leaflet";


export default {
  components: {
    LMap,
    LTileLayer,
    LPolyline,
  },
  data() {
    return {
      zoom: 9,
      polyLineLatLngs:[
        [47.334852, -1.509485],
        [47.342596, -1.328731],
        [47.241487, -1.190568],
        [47.234787, -1.358337],
      ]

    };
  },
  methods:{
    test(){
      this.polyLineLatLngs=[
        [48.334852, -1.1],
        [46.342596, -5.328731],
        [35.241487, -11.190568],
      ]
    }
  },
  async beforeMount() {
    // HERE is where to load Leaflet components!

    // And now the Leaflet circleMarker function can be used by the options:

  },
};



/*

let poly= createApp(LPolyline,{
  latLngs:[[47.334852, -1.509485],
    [47.342596, -1.328731],
    [47.241487, -1.190568],
    [47.234787, -1.358337]]
});
poly.mount(this);
console.log(poly);
*/



</script>

