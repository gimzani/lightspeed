<script setup>
const props = defineProps({
  results: Object
})
</script>

<template>

<div class="results-view">
  <div class="result">
    <label>Years:</label> {{props.results.y.toFixed(2)}}
  </div>
  <div class="result">
    <label>Days:</label>{{props.results.d.toFixed(2)}}
  </div>
  <div class="result">
    <label>Hours:</label>{{props.results.h.toFixed(2)}}
  </div>
  <div class="result">
    <label>Minutes:</label> {{props.results.m.toFixed(2)}}
  </div>
</div>
</template>

<style lang="scss" scoped>
.results-view {  
  .result {
    padding: 5px 0;
    label {        
      font-size: 1.75rem;
    }
  }
}
</style>