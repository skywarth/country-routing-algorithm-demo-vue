<template>
  <div class="flex-auto mb-3">
    <label for="path-distance">Distance</label>
    <div class="p-inputgroup flex-1">
      <InputNumber id="path-distance" readonly :minFractionDigits="2" :maxFractionDigits="5"/>
      <span class="p-inputgroup-addon">Km</span>
    </div>
  </div>
  <div class="flex-auto">
    <label for="country-count" > Country Count </label>
    <InputNumber  inputId="country-count" readonly class="w-full mb-3"/>
  </div>
</template>

<script>
import InputNumber from "primevue/inputnumber";

export default {
  name: "RoutingResultForm",
  components: {
    InputNumber
  },
}
</script>

<style scoped>

</style>