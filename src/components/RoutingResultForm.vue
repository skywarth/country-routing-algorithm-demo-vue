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
</template>

<script>
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
import TriStateCheckbox from 'primevue/tristatecheckbox';


export default {
  name: "RoutingResultForm",
  components: {
    InputNumber,
    InputText,
    TriStateCheckbox
  },
  props: {
    pathDistance:Number,
    countryCount:Number,
    isClosest:Boolean
  },
  data(){
    return {

    }
  }
}
</script>

<style scoped>

</style>