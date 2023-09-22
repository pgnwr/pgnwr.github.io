<template>
	<div class="section">
		<br />
		<span id="welcome"> Welcome <b>${username}</b>!</span>
		<br />
		<br />
		<span id="invite">
			Come closer, take a look! We provide services of highest quality. All you
			may ever need in your journeys - if you don't see something you really
			don't need it.
		</span>
		<br />
		<br />
	</div>

	<div id="services" class="services">
		<div class="heading">What service you need? <br /></div>
		<div class="service-list">
			<a class="service" @click="$emit('update:codeShown', true)">
				<img src="/services/code.png" alt="Code" />
				<div class="title">Code</div>
			</a>
			<a class="service" @click="$emit('update:designShown', true)">
				<img src="/services/manage.png" alt="Manage" />
				<div class="title">Manage</div>
			</a>
			<a class="service" @click="$emit('update:teamShown', true)">
				<img src="/services/mindfulness.png" alt="Mindfulness" />
				<div class="title">Mindfulness</div>
			</a>
			<a class="service" @click="$emit('update:languageShown', true)">
				<img src="/services/language.png" alt="Language" />
				<div class="title">Language</div>
			</a>
		</div>
	</div>
</template>

<script setup>
import { onMounted } from "vue";

const props = defineProps([
	"codeShown",
	"designShown",
	"teamShown",
	"languageShown",
]);

onMounted(() => {
	const asciiText = document.getElementById("welcome");
	const asciiArt = asciiText.innerText;
	asciiText.innerHTML = "";

	const inviteText = document.getElementById("invite");
	const inviteContent = inviteText.innerText;
	inviteText.innerHTML = "";

	setTimeout(
		() =>
			writeText(asciiText, asciiArt).then(() =>
				writeText(inviteText, inviteContent).then(() => {
					document.getElementById("services").classList.add("shown");
				})
			),
		1000
	);
});

// Write text to a target element with a specified delay in ms
function writeText(target, content, delay = 10) {
	// Loop through array of content characters
	return new Promise((resolve) => {
		// Make an array of the specified content
		const contentArray = content.split("");

		// Keep track of the character currently being written
		let current = 0;

		while (current < contentArray.length) {
			((curr) => {
				setTimeout(() => {
					target.innerHTML += contentArray[curr];
					// Scroll to the bottom of the screen unless scroll is false
					// window.scrollTo(0, document.body.scrollHeight);

					// Resolve the promise once the last character is written
					if (curr === contentArray.length - 1) resolve();
				}, delay * curr); // increase delay with each iteration
			})(current++);
		}
	});
}
</script>
<style>
.section {
	text-align: left;
	white-space: normal;
	color: var(--pgnwr-main);
	padding-left: 1ch;
	padding-right: 1ch;
}

.heading {
	margin-top: 1em;
	margin-bottom: 1em;
	padding-left: 1ch;
	padding-right: 1ch;
	color: var(--pgnwr-bright);
	font-weight: 700;
	text-align: center;
}

.service-list {
	padding-bottom: 1em;
	display: flex;
	flex-wrap: wrap;
}

.service-list > .service {
	margin-top: 1em;
	margin-bottom: 1em;
	display: block;
	/* width: 21ch; */
	text-align: center;
}

.service-list > .service > img {
	width: 16ch;
}

.service-list > .service > .title {
	padding-top: 0.5em;
	color: var(--pgnwr-main);
	font-weight: 700;
}

.services {
	opacity: 0%;
	-webkit-transition: opacity 0.7s ease-in;
	-moz-transition: opacity 0.7s ease-in;
	-ms-transition: opacity 0.7s ease-in;
	-o-transition: opacity 0.7s ease-in;
	transition: opacity 0.7s ease-in;
}
.services.shown {
	opacity: 100%;
}
</style>
