<template>
	<div class="modal-handle" :class="{ shown: shown }">
		<div class="modal">
			<div class="header">
				<div class="modal-frame-top">
					<div class="modal-frame-lt">
						<div class="line">
							<div class="inlay"></div>
						</div>
					</div>
					<a
						id="x-modal"
						@click="$emit('update:shown', false)"
						class="modal-close-handle"
					>
						[X]
					</a>
					<div class="modal-frame-rt">
						<div class="line">
							<div class="inlay"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="main">
				<div class="frame">
					<div class="handle">
						<div class="scrollable">
							<slot></slot>
						</div>
					</div>
				</div>
			</div>
			<div class="actions">
				<div class="frame">
					<div class="split"></div>
					<div class="buttons">
						<a @click="$emit('update:shown', false)">Close</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps(["shown"]);
</script>

<style>
.modal-cover {
	visibility: hidden;
	transition: visibility 0s, opacity 0.5s ease-out;
	opacity: 0%;
	pointer-events: none;
}
.modal-cover.shown {
	visibility: visible;
	opacity: 40% !important;
	pointer-events: all;
}
.modal-handle {
	visibility: hidden;
	opacity: 0;
	transition: visibility 0s, opacity 0.5s ease-out;
	pointer-events: none;
}
.modal-handle.shown {
	visibility: visible;
	opacity: 1 !important;
}

.service > .header {
	display: flex;
	flex-direction: row;
	padding-top: 1em;
}

.service > .header > .title {
	color: var(--pgnwr-bright);
	font-weight: 700;
}

.service > .header > .spacer {
	flex-grow: 1;
}

.service > .header > .price {
	color: var(--pgnwr-bright);
}

.service > .header {
	display: flex;
	flex-direction: row;
}

.content > .header {
	display: flex;
	flex-direction: row;
}
.content > .header > .icon,
.content > .header > .description {
	display: flex;
	flex-direction: column;
}

.content > .header > .description > .title {
	color: var(--pgnwr-bright);
	font-weight: 700;
	margin-bottom: 1em;
}

.content > .header > .description {
	color: var(--pgnwr-background);
	font-weight: 400;
}

.content > .header > .icon {
	align-items: center;
}

.content > .header > .icon img {
	height: 6em;
	width: 6em;
	filter: brightness(0.2);
	margin-right: 1ch;
}

.price img {
	height: 2em;
	margin-top: -0.5em;
	margin-bottom: -0.5em;
	margin-left: 1ch;
}

.modal-cover,
.modal-handle {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
}

.modal-cover {
	background-color: #000;
	opacity: 0;
}

.modal {
	/* width: 64ch; */
	margin-left: auto;
	margin-right: auto;
	pointer-events: all;
	background-color: var(--pgnwr-dark);
}

.modal-frame-top {
	height: 1em;
	display: flex;
	flex-direction: row;
}

.modal-frame-lt {
	padding-top: calc(0.5em - 1px);
	padding-left: calc(0.5ch - 1px);
	height: 1em;
	min-width: 2ch;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	padding-right: 1ch;
}

.modal-frame-lt > .line {
	background-color: var(--pgnwr-background);
	height: calc(0.5em + 1px);
}

.modal-frame-lt > .line > .inlay {
	right: 0;
	bottom: 0;
	background-color: var(--pgnwr-dark);
	height: calc(0.5em);
	margin-top: 2px;
	margin-left: 2px;
}

.modal-frame-rt {
	padding-top: calc(0.5em - 1px);
	padding-right: calc(0.5ch - 1px);
	height: 1em;
	min-width: 3ch;
	display: flex;
	flex-direction: column;
	padding-left: 1ch;
}

.modal-frame-rt > .line {
	background-color: var(--pgnwr-background);
	height: calc(0.5em + 2px);
}

.modal-frame-rt > .line > .inlay {
	right: 0;
	bottom: 0;
	background-color: var(--pgnwr-dark);
	height: calc(0.5em);
	margin-top: 2px;
	margin-right: 2px;
}

.modal-close-handle {
	color: var(--pgnwr-background);
}

.modal > .main {
	/* height: calc(100% - 4em); */
	display: flex;
	flex-direction: column;
}
.modal > .main > .frame {
	margin-left: calc(0.5ch - 1px);
	margin-right: calc(0.5ch - 1px);
	background-color: var(--pgnwr-background);
	min-height: 1em;
	padding-left: 2px;
	padding-right: 2px;
}
.modal > .main > .frame > .handle {
	background-color: var(--pgnwr-dark);
	min-height: 1em;
	padding-left: calc(0.5ch - 1px);
	padding-right: calc(0.5ch - 1px);
	height: 100%;
}

.modal > .main > .frame > .handle > .scrollable {
	overflow-y: auto;
	height: 100%;
}

.modal > .main > .frame > .handle > .scrollable > .content {
	padding: 1ch;
}

.actions {
	height: 3em;
}

.actions > .frame {
	background-color: var(--pgnwr-background);
	padding-left: 2px;
	padding-right: 2px;
	padding-bottom: 2px;
	margin-bottom: calc(0.5em - 1px);
	margin-right: calc(0.5ch - 1px);
	margin-left: calc(0.5ch - 1px);
}

.actions > .frame > .split {
	background-color: var(--pgnwr-dark);

	height: calc(0.5em - 1px);
	margin-bottom: 2px;
}

.actions > .frame > .buttons {
	background-color: var(--pgnwr-dark);
	height: 1em;
	padding: calc(0.5em - 1px) 1ch;
	text-align: right;
}
</style>
