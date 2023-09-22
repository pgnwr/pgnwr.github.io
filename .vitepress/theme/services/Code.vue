<template>
	<Modal
		v-bind:shown="shown"
		@update:shown="(newValue) => $emit('update:shown', newValue)"
	>
		<div class="content">
			<div class="header">
				<div class="icon">
					<img src="../../../../assets/img/srvs/code.png" style="" alt="icon" />
				</div>
				<div class="description">
					<div class="title">Software development</div>
					<div class="summary">
						Need some software be ready quick? Or you need someone to code
						solution for you? Worry not we are hear to help.
					</div>
				</div>
			</div>
		</div>
	</Modal>
</template>
<script setup>
import Modal from "../pages/component/Modal.vue";
const props = defineProps(["shown"]);
</script>
