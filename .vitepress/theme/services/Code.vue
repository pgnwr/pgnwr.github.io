<template>
	<Modal
		v-bind:shown="shown"
		@update:shown="(newValue) => $emit('update:shown', newValue)"
	>
		<div class="content">
			<div class="header">
				<div class="icon">
					<img src="/services/code.png" style="" alt="icon" />
				</div>
				<div class="description">
					<div class="title">Software development</div>
					<div class="summary">
						Need some software be ready quick? Or do you need someone to code
						the solution for you? Worry not, we are here to help.
					</div>
				</div>
			</div>
			<div class="service">
				<div class="header">
					<div class="title">Code production</div>
					<div class="spacer"></div>
					<div class="price">$40<img src="/icons/time.png" alt="/h" /></div>
				</div>
				<div class="content">
					<p>
						As simple as it is, you decide which tech to use. We are comfortable
						with any Java version, ECMAScript and TypeScript, also we have
						experience with Groovy, Ruby, Python, C, C++ and many more. We'll be
						your steady hands on this one.
					</p>
				</div>
			</div>
			<div class="service">
				<div class="header">
					<div class="title">Software design</div>
					<div class="spacer"></div>
					<div class="price">$60<img src="/icons/time.png" alt="/h" /></div>
				</div>
				<div class="content">
					<p>
						Have trouble with architecture or need to split good-old monolith?
						Just tell us what's need to be done and we'll deliver the solution.
						We may provide full spectrum of services from initial requirement
						gathering to setting up production deployment pipe-line.
					</p>
				</div>
			</div>
			<div class="service">
				<div class="header">
					<div class="title">Performance tuning</div>
					<div class="spacer"></div>
					<div class="price">$50<img src="/icons/time.png" alt="/h" /></div>
				</div>
				<div class="content">
					<p>
						Feel a little bit nervous before rolling out big update or
						experience performance issues somewhere in the system? No problem,
						we can design and develop additional instrumentation for you.
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
