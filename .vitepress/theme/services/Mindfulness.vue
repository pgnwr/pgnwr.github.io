<template>
	<Modal
		v-bind:shown="shown"
		@update:shown="(newValue) => $emit('update:shown', newValue)"
	>
		<div class="content">
			<div class="header">
				<div class="icon">
					<img src="/services/mindfulness.png" style="" alt="icon" />
				</div>
				<div class="description">
					<div class="title">Team training</div>
					<div class="summary">
						Oh yes, I see now - your problem lays inside the domain of humans -
						that's a common problem nowadays. Let's see what we can do for you.
					</div>
				</div>
			</div>

			<div class="service">
				<div class="header">
					<div class="title">Consultation</div>
					<div class="spacer"></div>
					<div class="price">$35<img src="/icons/time.png" alt="/h" /></div>
				</div>
				<div class="content">
					<p>
						You or your friend feeling lost, upset, don't know what to do, have
						problems in your relationship or struggling with some kind of
						situation - this will impact not only your life quality, but also
						may harm others. We can help you or your employees deal with
						internal problems and perform better.
					</p>
				</div>
			</div>
			<div class="service">
				<div class="header">
					<div class="title">Therapeutic tale</div>
					<div class="spacer"></div>
					<div class="price">$100<img src="/icons/pack.png" alt="/h" /></div>
				</div>
				<div class="content">
					<p>
						Individual therapeutic story, designed especially for you to unpack
						potential and highlight problems. Helps find the solution to the
						specific problem, find answers to questions like “What do I really
						want right now? What is my mistake? What is really going on with me
						right now?”. Consists of three parts: lead-in consultation (40 mins)
						to formulate the request; the Journey itself (2-3 hours, depends on
						the length of the story and client's speed); the end product:
						personal story digital booklet for you to keep.
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
