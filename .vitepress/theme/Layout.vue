<script setup lang="ts" >
import { useData } from 'vitepress'
// https://vitepress.dev/reference/runtime-api#usedata
const { page, site, frontmatter } = useData()

import Logo from './pages/block/Logo.vue'
// import Header from './pages/block/Header.vue'
import Services from './pages/block/Services.vue'
import Crew from './pages/block/Crew.vue'
import Footer from './pages/block/Footer.vue'
import Modal from './pages/component/Modal.vue'

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
</script>

<template>
    <div class="crt"></div>
    <div id="page">
      <Header/>
      <Logo/>
      <Services/>
      <!-- <Crew/> -->
      <Footer/>
      
    </div>
  <Content class="content"/>
  <Modal/>
</template>