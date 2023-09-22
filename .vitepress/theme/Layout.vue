<script setup lang="ts">
import { ref, onMounted } from "vue";
import Logo from "./pages/block/Logo.vue";
import Services from "./pages/block/Services.vue";
import Footer from "./pages/block/Footer.vue";
import Code from "./services/Code.vue";
import Manage from "./services/Manage.vue";
import Mindfulness from "./services/Mindfulness.vue";
import Speak from "./services/Speak.vue";

const codeShown = ref(false);
const manageShown = ref(false);
const mindfulnessShown = ref(false);
const languageShown = ref(false);

onMounted(() => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty("--vh", `${vh}px`);
	window.addEventListener("resize", () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	});
});
</script>

<template>
	<div class="crt"></div>
	<div id="page">
		<Logo />
		<Services
			v-model:codeShown="codeShown"
			v-model:designShown="manageShown"
			v-model:teamShown="mindfulnessShown"
			v-model:languageShown="languageShown"
		/>
		<Footer />
	</div>
	<Content class="content" />
	<div
		class="modal-cover"
		:class="{
			shown: codeShown || manageShown || mindfulnessShown || languageShown,
		}"
		@click="
			codeShown = false;
			manageShown = false;
			mindfulnessShown = false;
			languageShown = false;
		"
	></div>
	<Code v-model:shown="codeShown" />
	<Manage v-model:shown="manageShown" />
	<Mindfulness v-model:shown="mindfulnessShown" />
	<Speak v-model:shown="languageShown" />
</template>
