<template>
  <Dropdown v-model="selectedCountry" :options="countries" filter optionLabel="name" placeholder="Select a Country"
            class="">
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex align-items-center">
        <country-flag class="-mt-3" :country="`${slotProps.value.cca3_code.toLowerCase()}`" size='normal' :rounded=true />

        <span class="ml-2">{{ slotProps.value.name }}</span>
      </div>
      <span v-else>
            {{ slotProps.placeholder }}
        </span>
    </template>
    <template #option="slotProps">
      <div class="flex align-items-center">
        <country-flag class="-mt-3" :country="`${slotProps.option.cca3_code.toLowerCase()}`" size='normal' :rounded=true />
        <span class="ml-2">{{ slotProps.option.name }}</span>
      </div>
    </template>
  </Dropdown>

</template>

<script>
export default {
  name: "CountryDropdown",
  props: {
    test: String,
    countries: {
      type: Array
    }
  },

  data() {
    return {
      selectedCountry: null,


    };
  },

  setup(props){
    console.log(props.test);
    console.log(props.countries);
  }
}
</script>

<style scoped>

</style>