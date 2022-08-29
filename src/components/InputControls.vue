<script setup>
let emit = defineEmits(['set-results'])
import { ref, watch, onMounted } from 'vue'
import { setSpeedValues, getTimeValues } from '../code/lightspeed.js'

const distance = ref(10); 
const speed = ref(10);
const speedUnit = ref('Kps');
const speedValues = ref(null);
const timeValues = ref(null);

const minScale = ref(1);
const maxScale = ref(100);

watch(distance, () => {
  render();
});
watch(speed, () => {
  render();
});
watch(speedUnit, () => {
  render();
});

function render() {
  let speedVals = setSpeedValues(speed.value, speedUnit.value);
  let timeVals = getTimeValues(distance.value, speedVals.c);
  speedValues.value = speedVals;
  timeValues.value = timeVals;
  emit('set-results', timeVals);
}

onMounted(() => { render(); });

</script>

<template>
<div class="input-controls">
  
  <div class="distance-input">
    <div>      
      <label>Distance - (Ly)</label>
      <input type="number" v-model="distance" />
    </div>
    <div>

    </div>
  </div>
  
  <div class="slider-container">
    <input id="speed" class="slider" type="range" :min="minScale" :max="maxScale" v-model.number="speed">
  </div>

  <div>
    <label>Speed Scale</label>
    <input type="number" class="form-control" v-model="minScale" />
    to
    <input type="number" class="form-control" v-model="maxScale" />
    <select v-model="speedUnit">
      <option>Kps</option>
      <option>Mps</option>
      <option>C</option>
    </select>
  </div>

  <div class="speed-readout">
    Speed: {{speed}} {{speedUnit}}
  </div>

</div>
</template>

<style lang="scss" scoped>

.input-controls {

  input[type=number] {
    width: 30%;
  }

  .slider-container {
    width: 100%;
    .slider {
      width: 100%;
    }
  }

  .speed-readout {
    padding: 20px 0;
    font-size: 1.75rem;
    text-align: center;
  }

}
</style>