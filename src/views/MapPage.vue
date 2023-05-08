<template>
  <div class="surface-card p-4 shadow-2 border-round">
    <div class="grid">
      <div class="col-4">
        <Fieldset>
          <template #legend>
            <div class="flex align-items-center text-primary">
              <span class="pi pi-map-marker mr-2"></span>
              <span class="font-bold text-lg">Routing Targets</span>
            </div>
          </template>
          <p class="m-0">
            <RoutingForm @form-submitted="routingFormSubmitted"></RoutingForm>
          </p>
        </Fieldset>
        <Fieldset class="mt-4"><!--need v-if here-->
          <template #legend>
            <div class="flex align-items-center text-primary">
              <span class="pi pi-map mr-2"></span>
              <span class="font-bold text-lg">Result</span>
            </div>
          </template>
          <RoutingResultForm></RoutingResultForm>


        </Fieldset>
      </div>
      <div class="col-8">
        <Map :found-path="mapFoundPath"></Map>
      </div>
    </div>


  </div>
</template>

<script>
import Map from "../components/Map.vue";
import RoutingForm from "@/components/RoutingForm.vue";
import RoutingResultForm from "@/components/RoutingResultForm.vue";

import Graph from 'graphology';
import CountryRoutingAlgorithm,{countriesDataset} from "country-routing-algorithm"
import Fieldset from "primevue/fieldset";


const graphController=new CountryRoutingAlgorithm.GraphController(countriesDataset,new Graph());
graphController.insertCountriesToGraph();


export default {
  name: "MapPage",
  components: {
    RoutingResultForm,
    RoutingForm,
    Map,
    Fieldset,
  },
  data(){
    return {
      fromCountryCode:String,
      toCountryCode:String,
      mapFoundPath:[],
      graphController:null,
      router:null,
      routingResult:null,
    }
  },

  methods:{
    routingFormSubmitted({fromCountryCode,toCountryCode}){
      this.fromCountryCode=fromCountryCode;
      this.toCountryCode=toCountryCode;
      this.findRoute();
    },


    findRoute(){

      const router=new CountryRoutingAlgorithm.Router(
          graphController.graphInstance,
          this.fromCountryCode,
          this.toCountryCode
      );
      let result=router.findRoute();
      this.mapFoundPath=result.getFoundPath();



    }
  },
}
</script>

<style scoped>

</style>