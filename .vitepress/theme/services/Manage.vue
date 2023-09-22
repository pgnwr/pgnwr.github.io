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
					<p>
						Need a team, but have non at the moment, or you are looking for
						assistance in expanding team - good, we have service right for you.
						From interview preparation and setup, to on-boarding design and
						culture-fostering events - we can do it all. Also we can shadow
						teams and provide you with insights and develop improvement plan.
					</p>
				</div>
			</div>
			<div class="service">
				<div class="header">
					<div class="title">Process setup</div>
					<div class="spacer"></div>
					<div class="price">$50<img src="/icons/time.png" alt="/h" /></div>
				</div>
				<div class="content">
					<p>
						Modern development process hardly resembles general processes inside
						company, due to many technological and cultural shifts lately. But
						we can help you to develop processes, setup guidelines and standards
						for teams to follow - this also implies working with team directly
						to ensure alignment.
					</p>
				</div>
			</div>
			<div class="service">
				<div class="header">
					<div class="title">Business consulting</div>
					<div class="spacer"></div>
					<div class="price">$50<img src="/icons/time.png" alt="/h" /></div>
				</div>
				<div class="content">
					<p>
						IT business and software development questions fall in this package.
						We can help you and your developers to understand each other better
						- it's like a translator service, but for business. Also we can help
						you with binding business goals to technical terms and measuring
						results in sound fashion.
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
