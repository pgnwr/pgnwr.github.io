<template>
	<Modal
		v-bind:shown="shown"
		@update:shown="(newValue) => $emit('update:shown', newValue)"
	>
		<div class="content">
			<div class="header">
				<div class="icon">
					<img
						src="../../../../assets/img/srvs/language.png"
						style=""
						alt="icon"
					/>
				</div>
				<div class="description">
					<div class="title">Language support</div>
					<div class="summary">
						Oy mate! You need to practice to get ready for new exciting job, or
						it's just a general quarter report for C-suite - feel that your
						English is a little bit rusty. Worry not you found service you've
						been looking for
					</div>
				</div>
			</div>

			<div class="service">
				<div class="header">
					<div class="title">Speaking</div>
					<div class="spacer"></div>
					<div class="price">
						$25<img src="../../../../assets/img/icns/time.png" alt="/h" />
					</div>
				</div>
				<div class="content">
					<p>
						If you want to boost your language, expand your vocabulary and
						simply have fun in English!
					</p>
				</div>
			</div>

			<div class="service">
				<div class="header">
					<div class="title">Grammar</div>
					<div class="spacer"></div>
					<div class="price">
						$25<img src="../../../../assets/img/icns/time.png" alt="/h" />
					</div>
				</div>
				<div class="content">
					<p>
						If you struggle to understand grammar or just want to improve your
						level
					</p>
				</div>
			</div>
		</div>
	</Modal>
</template>
<script setup>
import Modal from "../pages/component/Modal.vue";
const props = defineProps(["shown"]);
</script>
