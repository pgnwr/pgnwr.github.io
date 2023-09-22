<script setup lang="ts" >
import { useData } from 'vitepress'
// https://vitepress.dev/reference/runtime-api#usedata
const { page, site, frontmatter } = useData()

import Logo from './pages/block/Logo.vue'
// import Header from './pages/block/Header.vue'
import Services from './pages/block/Services.vue'
import Crew from './pages/block/Crew.vue'
import Footer from './pages/block/Footer.vue'
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
</template>