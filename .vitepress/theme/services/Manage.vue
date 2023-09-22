<template>
	<Modal
		v-bind:shown="shown"
		@update:shown="(newValue) => $emit('update:shown', newValue)"
	>
		<div class="content">
			<div class="header">
				<div class="icon">
					<img
						src="../../../../assets/img/srvs/manage.png"
						style=""
						alt="icon"
					/>
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
		</div>
	</Modal>
</template>
<script setup>
import Modal from "../pages/component/Modal.vue";
const props = defineProps(["shown"]);
</script>
