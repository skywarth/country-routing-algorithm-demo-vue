<template>

<!-- Make this into a component  -->
  <Dropdown v-model="selectedCountry" :options="countries" filter optionLabel="name" placeholder="Select a Country" class="md:w-14rem">
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex align-items-center">
        <country-flag class="align-self-baseline" :country="`${slotProps.value.code.toLowerCase()}`" size='normal' :rounded=true />

        <div class="ml-2">{{ slotProps.value.name }}</div>
      </div>
      <span v-else>
            {{ slotProps.placeholder }}
        </span>
    </template>
    <template #option="slotProps">
      <div class="flex align-items-center">
        <country-flag class="align-self-baseline" :country="`${slotProps.option.code.toLowerCase()}`" size='normal' :rounded=true />
        <div class="ml-2">{{ slotProps.option.name }}</div>
      </div>
    </template>
  </Dropdown>

  <Button @click="x" >Do ya thingx</Button>
</template>

<script>

export default {
  name: "RoutingForm",

  data() {
    return {
      selectedCountry: null,
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
  emits: ["someEvent"], // <--- add this line
  methods:{
    x(){
      this.$emit('someEvent');
    }
  },
}
</script>

<style scoped>

</style>