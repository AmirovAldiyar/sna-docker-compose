<template>
  <div id="app">
    <RandomQuotes/>
  </div>
</template>

<script>
import RandomQuotes from "@/components/RandomQuotes";

export default {
  name: 'App',
  components: {
    RandomQuotes
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: tomato;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
