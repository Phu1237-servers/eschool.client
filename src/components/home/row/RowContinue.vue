<template>
	<ytd-continuation-item-renderer class="style-scope ytd-rich-grid-renderer">
		<div id="ghost-cards" class="style-scope ytd-continuation-item-renderer">
			<ytd-ghost-grid-renderer class="style-scope ytd-continuation-item-renderer" items-per-row="4">
				<div class="ghost-grid style-scope ytd-ghost-grid-renderer">
					<RowContinueItem />
					<RowContinueItem />
					<RowContinueItem />
					<RowContinueItem />
					<dom-repeat class="style-scope ytd-ghost-grid-renderer"><template is="dom-repeat"></template></dom-repeat>
				</div>
			</ytd-ghost-grid-renderer>
		</div>
		<tp-yt-paper-spinner id="spinner" class="style-scope ytd-continuation-item-renderer" aria-hidden="true">
			<div id="spinnerContainer" class="style-scope tp-yt-paper-spinner">
				<div class="spinner-layer layer-1 style-scope tp-yt-paper-spinner">
					<div class="circle-clipper left style-scope tp-yt-paper-spinner">
						<div class="circle style-scope tp-yt-paper-spinner"></div>
					</div>
					<div class="circle-clipper right style-scope tp-yt-paper-spinner">
						<div class="circle style-scope tp-yt-paper-spinner"></div>
					</div>
				</div>
				<div class="spinner-layer layer-2 style-scope tp-yt-paper-spinner">
					<div class="circle-clipper left style-scope tp-yt-paper-spinner">
						<div class="circle style-scope tp-yt-paper-spinner"></div>
					</div>
					<div class="circle-clipper right style-scope tp-yt-paper-spinner">
						<div class="circle style-scope tp-yt-paper-spinner"></div>
					</div>
				</div>
				<div class="spinner-layer layer-3 style-scope tp-yt-paper-spinner">
					<div class="circle-clipper left style-scope tp-yt-paper-spinner">
						<div class="circle style-scope tp-yt-paper-spinner"></div>
					</div>
					<div class="circle-clipper right style-scope tp-yt-paper-spinner">
						<div class="circle style-scope tp-yt-paper-spinner"></div>
					</div>
				</div>
				<div class="spinner-layer layer-4 style-scope tp-yt-paper-spinner">
					<div class="circle-clipper left style-scope tp-yt-paper-spinner">
						<div class="circle style-scope tp-yt-paper-spinner"></div>
					</div>
					<div class="circle-clipper right style-scope tp-yt-paper-spinner">
						<div class="circle style-scope tp-yt-paper-spinner"></div>
					</div>
				</div>
			</div>
		</tp-yt-paper-spinner>
		<div id="button" class="style-scope ytd-continuation-item-renderer" hidden=""></div>
	</ytd-continuation-item-renderer>
</template>

<script setup lang="ts">
import RowContinueItem from './RowContinueItem.vue'
</script>
