<template>
	<Modal
		v-bind:shown="shown"
		@update:shown="(newValue) => $emit('update:shown', newValue)"
	>
		<div class="content">
			<div class="header">
				<div class="icon">
					<img src="/services/manage.png" style="" alt="icon" />
				</div>
				<div class="description">
					<div class="title">Process management</div>
					<div class="summary">
						So you think you'll need help with management side of things. Very
						well, setting up development process inside organization or pivoting
						is a big step, but we'll be glad to help you in this journey.
					</div>
				</div>
			</div>
			<div class="service">
				<div class="header">
					<div class="title">Team gathering</div>
					<div class="spacer"></div>
					<div class="price">$50<img src="/icons/time.png" alt="/h" /></div>
				</div>
				<div class="content">
					<p>___</p>
				</div>
			</div>
			<div class="service">
				<div class="header">
					<div class="title">Process setup</div>
					<div class="spacer"></div>
					<div class="price">$50<img src="/icons/time.png" alt="/h" /></div>
				</div>
				<div class="content">
					<p>___</p>
				</div>
			</div>
			<div class="service">
				<div class="header">
					<div class="title">Business consulting</div>
					<div class="spacer"></div>
					<div class="price">$50<img src="/icons/time.png" alt="/h" /></div>
				</div>
				<div class="content">
					<p>___</p>
				</div>
			</div>
		</div>
	</Modal>
</template>
<script setup>
import Modal from "../pages/component/Modal.vue";
const props = defineProps(["shown"]);
</script>
