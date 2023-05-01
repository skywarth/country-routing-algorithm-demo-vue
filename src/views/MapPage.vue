<template>
  <div class="surface-card p-4 shadow-2 border-round">
    <div class="grid">
      <div class="col-4">
<!--        <div class="text-3xl font-medium text-900 mb-2">Card Title</div>
        <div class="font-medium text-500 mb-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
        <div style="height: 150px" class="border-2 border-dashed surface-border">qwqwe</div>-->
        <RoutingForm @form-submitted="routingFormSubmitted"></RoutingForm>
      </div>
      <div class="col-8">
        <Map :poly-line-lat-lngs="mapPolylineLatLngs"></Map>
      </div>
    </div>


  </div>
</template>

<script>
import Map from "../components/Map.vue";
import RoutingForm from "@/components/RoutingForm.vue";

import Graph from 'graphology';
import CountryRoutingAlgorithm,{countriesDataset} from "country-routing-algorithm"


export default {
  name: "test",
  components: {
    RoutingForm,
    Map
  },
  data(){
    return {
      fromCountryCode:String,
      toCountryCode:String,
      mapPolylineLatLngs:[],
    }
  },

  methods:{
    routingFormSubmitted({fromCountryCode,toCountryCode}){
      this.fromCountryCode=fromCountryCode;
      this.toCountryCode=toCountryCode;
      this.findRoute();
    },


    findRoute(){

      let graphController=new CountryRoutingAlgorithm.GraphController(countriesDataset,new Graph());
      graphController.insertCountriesToGraph();
      const router=new CountryRoutingAlgorithm.Router(
          graphController.graphInstance,
          this.fromCountryCode,
          this.toCountryCode
      );
      let result=router.findRoute();
      let foundPath=result.getFoundPath()
      this.mapPolylineLatLngs=foundPath.map(x=>x.attributes.latlng);



    }
  },
}
</script>

<style scoped>

</style>