<template>
	<ytd-rich-grid-row class="style-scope ytd-rich-grid-renderer">
		<div id="contents" class="style-scope ytd-rich-grid-row">
			<RowItem />
			<RowItem />
			<RowItem />
			<RowItem />
		</div>
	</ytd-rich-grid-row>
</template>

<script setup lang="ts">
import RowItem from './RowLoadedItem.vue'
</script>