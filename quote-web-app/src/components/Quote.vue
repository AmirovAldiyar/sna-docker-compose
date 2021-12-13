<template>
  <div class="quote">
    <div class="stick"></div>
    <div class="text-content">
      <div class="text">{{ text }}</div>
      <div class="author">{{ author }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quote",
  props: ['text', 'author']
}
</script>

<style scoped>
.quote {
  position: absolute;
  display: flex;
  min-width: 800px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.stick {
  min-height: 100px;
  min-width: 8px;
  background-color: black;
  opacity: 0.1;
}
.text {
  height: 100%;
  text-align: left;
  text-justify: distribute-center-last;
  margin-left: 10px;
  font-size: 20px;
}
.author {
  height: 30px;
  font-style: italic;
  text-align: left;
  margin-left: 5px;
}
.text-content {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
</style>