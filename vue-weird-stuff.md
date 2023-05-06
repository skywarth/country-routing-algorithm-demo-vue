# Vue moronic stuff
>Will be moved to a different repo later, just writing here cause this it really does grind my gears and I gotta let off some steam.

>These are my initial considerations, and this is my first time using Vue. Please correct me if something below is incorrect or misinformation.

- Vue2 and Vue3 is nothing alike, and it is painful to find an answer for your version. Sometimes you just find and answer and don't know which version is it
- You cannot inject a component into the `<template>` after render
- Documentation sucks.
  - No indication of file, which component, what type. It's always some sort of assumption game
- whole v-bind and v-model thing is just so impractical. 
  - Unbelievable that this is suggested in official docs: `this.$emit('update:selectedCountryCode',value)`. It `update:selectedCountryCode` part looks like some work-around.
- Reactives (data, computed etc.) doesn't work with private field accessors.
  - I have a library which provides a class, this class has `#foundPath` private attribute, and a public function `getFoundPath()` which simply returns: `return this.#foundPath;`. When I create an instance from this class, and assign it to a data named `routingResult`, and later call `this.routingResult.getFoundPath()` from a method, I get error 'Cannot read from private field.'

