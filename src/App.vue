<script setup>
//----------------------------------------------------------
import { ref } from 'vue'
import InputControls from './components/InputControls.vue'
import ResultsTable from './components/ResultsTable.vue'
//----------------------------------------------------------
const results = ref({ y:0, d:0, h:0, m:0 });
function setResults(r) {
  results.value = r;
}
</script>

<template>
<div class="app-container">
  <h1 class="title">Lightspeed Travel</h1>
  <div class="app-controls">
    <InputControls @set-results="setResults"></InputControls>
    <ResultsTable :results="results" ></ResultsTable>    
  </div>
</div>
</template>

<style lang="scss" scoped>
.app-container {
  background-color: rgba(255,255,255,.2);
  border-radius: 20px;
  padding: 10px;
  margin: auto;
  width: 95%;

  .app-controls {
    padding: 20px;
  }
}
</style>