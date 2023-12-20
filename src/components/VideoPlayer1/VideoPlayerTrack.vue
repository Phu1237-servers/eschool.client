<template>
  <!-- <div class="video-track">
    <input type="range" min="0" max="100" :step="step" :value="percentage" @input="onInput" />
  </div> -->
	<div>
		
	</div>
</template>

<script lang="ts">
export default {
  name: 'VideoPlayerTrack',
  props: {
    percentage: {
      type: Number,
      required: true
    },
    step: {
      type: Number,
      required: true
    }
  },
  methods: {
    onInput(e) {
      this.$emit('seek', e.target.value)
    }
  }
}
</script>

<style scoped>
/* input[type='range'] {
  position: relative;
  top: -1px;
  overflow: hidden;
  width: 245px;
  -webkit-appearance: none;
  background-color: #ccc;
  border-radius: 5px;
  width: 100%;
}

input[type='range']:focus {
  outline: none;
}

input[type='range']::-webkit-slider-runnable-track {
  height: 8px;
  -webkit-appearance: none;
  color: #333;
  margin-top: -1px;
}

input[type='range']::-webkit-slider-thumb {
  width: 1px;
  -webkit-appearance: none;
  height: 8px;
  cursor: ew-resize;
  background: #333;
  box-shadow: -245px 0 0 245px #333;
} */

input[type="range"] {
	position: relative;
  /* -webkit-appearance: none; */
  /* margin-right: 15px; */
  width: 100%;
  height: 7px;
  /* background: rgba(255, 255, 255, 0.6); */
  border-radius: 5px;
  /* background-color: #ccc; */
	accent-color: #f00;
	z-index: 1;
}

input[type="range"]::before {
	position: absolute;
	left: 0;
	top: 0;
	display: block;
	content: "";
	height: 7px;
	width: 80%;
	background-color: black;
	z-index: -1;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #f00;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
	z-index: 1;
}

input[type=range]::-webkit-slider-runnable-track  {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: rgba(255,255,255,.2);
	z-index: 0;
}
</style>
