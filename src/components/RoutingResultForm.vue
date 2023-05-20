<template>
  <div class="flex-auto mb-3">
    <label for="path-distance">Total Distance</label>
    <div class="p-inputgroup flex-1">
      <InputNumber v-model="this.pathDistance" id="path-distance" readonly :minFractionDigits="2" :maxFractionDigits="5"/>
      <span class="p-inputgroup-addon">Km</span>
    </div>
  </div>
  <div class="flex-auto">
    <label for="country-count" >Country Count </label>
    <InputNumber v-model="this.countryCount" inputId="country-count" readonly class="w-full mb-3"/>
  </div>
  <div class="flex-auto">
    <label for="country-count" >Is closest ? </label>
    <TriStateCheckbox v-model="this.isClosest" disabled/>

  </div>
  <div class="flex-auto">
    <label for="country-count" >Chips </label>

    <div class="flex flex-wrap">

      <!--          v-tooltip.bottom="traversedCountry.countryCode"-->
      <Chip
          v-for="traversedCountry in this.traversedCountries"
          :v-tooltip="traversedCountry.countryCode" placeholder="Right"
          :label="traversedCountry.countryCode"
          :distance-to-final-destination="traversedCountry.distanceToFinalDestination"
          :some-attribute="traversedCountry.countryCode"
          @mouseover="displayTraversedCountryDetails($event,traversedCountry)"
          @mouseleave="hideOverlay"
          @click="traversedCountriesOverlayForceOpen=true"

      />

      <OverlayPanel :showCloseIcon="true"  ref="op" @hide="()=>traversedCountriesOverlayForceOpen=false">
        <ul>
          <li>
            <span>Distance to final destination: {{this.$refs.op.traversedCountry.distanceToFinalDestination}}</span>
          </li>
        </ul>
      </OverlayPanel>
    </div>

  </div>
</template>

<script>
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
import TriStateCheckbox from 'primevue/tristatecheckbox';
import Chip from 'primevue/chip';
import OverlayPanel from 'primevue/overlaypanel';




export default {
  name: "RoutingResultForm",
  components: {
    InputNumber,
    InputText,
    TriStateCheckbox,
    Chip,
    OverlayPanel
  },
  props: {
    pathDistance:Number,
    countryCount:Number,
    isClosest:Boolean,
    traversedCountries:Array
  },
  data(){
    return {
      traversedCountriesOverlayForceOpen:false
    }
  },
  methods:{
    displayTraversedCountryDetails(event,traversedCountry){
      this.$refs.op.traversedCountry=traversedCountry;
      this.$refs.op.show(event);
    },

    hideOverlay(event){
      if(this.traversedCountriesOverlayForceOpen===false){
        this.$refs.op.hide();
      }
    },
  }
}
</script>

<style scoped>

</style>