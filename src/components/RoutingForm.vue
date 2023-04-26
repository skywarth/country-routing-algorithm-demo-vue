<template>
  <div class="field">
    <label for="firstname1">Departure</label>
    <CountryDropdown class="w-full" :countries="dropdownCountries"></CountryDropdown>
  </div>

  <div class="field">
    <label for="firstname1">Arrival</label>
    <CountryDropdown class="w-full" :countries="dropdownCountries" test="qwe"></CountryDropdown>
  </div>


  <Button @click="x" >Do ya thingx</Button>
</template>

<script>

import CountryDropdown from "./CountryDropdown.vue";
import {countriesDataset} from "country-routing-algorithm/data/full";

export default {
  name: "RoutingForm",
  components: {CountryDropdown},

  data() {
    return {
      countriesDataset,
      countries : [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
      ],

    };
  },

  computed:{
    dropdownCountries(){
        return countriesDataset.map(function(x){
          return {
            name:x.name.common,
            cca3_code:x.cca3
          }
        });

    }
  },
  emits: ["someEvent"], // <--- add this line
  methods:{
    x(){
      this.$emit('someEvent',{data:'real sh*t??',cool:'right'},'whatsup');
    }
  },
}
</script>

<style scoped>

</style>