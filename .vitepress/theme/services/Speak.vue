<template>
	<Modal
		v-bind:shown="shown"
		@update:shown="(newValue) => $emit('update:shown', newValue)"
	>
		<div class="content">
			<div class="header">
				<div class="icon">
					<img src="/services/language.png" style="" alt="icon" />
				</div>
				<div class="description">
					<div class="title">Language support</div>
					<div class="summary">
						Oy mate! You need to practice to get ready for new exciting job, or
						it's just a general quarter report for C-suite and you feel that
						your English is a little bit rusty? Worry not: you found service
						you've been looking for!
					</div>
				</div>
			</div>

			<div class="service">
				<div class="header">
					<div class="title">Speech training</div>
					<div class="spacer"></div>
					<div class="price">$25<img src="/icons/time.png" alt="/h" /></div>
				</div>
				<div class="content">
					<p>
						Speak freely mate, we all are friends here. You need to expand your
						vocabulary and make speech fluent, right? We provide personal speech
						training and also work in small groups. We may guide you through
						complex topics and work on your domain specific needs to make you
						sound as old uncle Gunter who moved to US couple years back in a
						matter of couple month. To pass C1 it'll take more time, but we can
						work on this too.
					</p>
				</div>
			</div>

			<div class="service">
				<div class="header">
					<div class="title">Grammar classes</div>
					<div class="spacer"></div>
					<div class="price">$25<img src="/icons/time.png" alt="/h" /></div>
				</div>
				<div class="content">
					<p>
						Struggle to understand grammar or just need to improve your level to
						pass the exam? We can help you on this one. Spend couple months with
						our trainer and you'll hardly need to rely on Google Translate and
						will be able to construct sentences without rewriting every one with
						Grammarly.
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
