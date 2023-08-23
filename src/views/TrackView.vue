<template>
	<div class="track bg-black p-2">
		<div class="track-progress flex bg-blue-200 h-[4px]">
			<div class="inline-block buffer w-[20px] h-full"></div>
			<div class="inline-block bg-transparent w-[2px]"></div>
			<div class="inline-block buffer w-[20px] h-full"></div>
			<div class="inline-block buffer flex-1 h-full"></div>
		</div>
		<div class="track-tool flex pt-2">
			<div class="flex items-center flex-1">
				<font-awesome-icon :icon="['fas', 'play']" size="lg" />
				<font-awesome-icon :icon="['fas', 'forward-step']" size="lg" />
				<button class="a">
					<font-awesome-icon :icon="['fas', 'volume-xmark']" size="lg" v-if="volumn === 0" />
					<font-awesome-icon :icon="['fas', 'volume-low']" size="lg" v-else-if="volumn < 50" />
					<font-awesome-icon :icon="['fas', 'volume-high']" size="lg" v-else />
				</button>
				<input type="range" />
			</div>
			<div class="flex text-right">
				<font-awesome-icon :icon="['far', 'closed-captioning']" size="lg" />
				<font-awesome-icon :icon="['fas', 'gear']" size="lg" />
				<font-awesome-icon :icon="['fas', 'expand']" size="lg" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const time = ref(0)
const volumn = ref(51)
</script>

<style>
.track-progress .buffer {
	background-color: rgba(255,255,255,.2);
}
.track-progress {
	background-color: rgba(0, 0, 0, 0.5);
}
a:hover .b {
	display: block;
}
.track-tool svg {
	color: #fff;
	@apply mr-2;
}
</style>