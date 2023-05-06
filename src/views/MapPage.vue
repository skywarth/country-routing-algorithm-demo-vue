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
          <p class="m-0">
          </p>
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

import Graph from 'graphology';
import CountryRoutingAlgorithm,{countriesDataset} from "country-routing-algorithm"
import Fieldset from "primevue/fieldset";


export default {
  name: "MapPage",
  components: {
    RoutingForm,
    Map,
    Fieldset
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

      let result=this.router.findRoute();
      this.mapFoundPath=result.getFoundPath()



    }
  },
  mounted(){
    this.graphController=new CountryRoutingAlgorithm.GraphController(countriesDataset,new Graph());
    this.graphController.insertCountriesToGraph();
    this.router=new CountryRoutingAlgorithm.Router(
        this.graphController.graphInstance,
        this.fromCountryCode,
        this.toCountryCode
    );

  }
}
</script>

<style scoped>

</style>