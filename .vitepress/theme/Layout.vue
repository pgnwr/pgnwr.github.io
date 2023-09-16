<script setup lang="ts" >
import { useData } from 'vitepress'
// https://vitepress.dev/reference/runtime-api#usedata
const { page, site, frontmatter } = useData()

import Logo from './pages/block/Logo.vue'
import Header from './pages/block/Header.vue'
import Services from './pages/block/Services.vue'
import Crew from './pages/block/Crew.vue'

</script>

<template>
    <div class="crt"></div>
    <div id="page">
    <Header/>
    <Logo/>
    <Services/>
    <Crew/>
    </div>
  <!-- <Content class="content"/> -->
</template>


  <!-- <div v-if="frontmatter.home">
    <h1>{{ site.title }}</h1>
    <p>{{ site.description }}</p>
    <ul>
      <li><a href="/markdown-examples.html">Markdown Examples</a></li>
      <li><a href="/api-examples.html">API Examples</a></li>
    </ul>
  </div>
  <div v-else> -->
<!-- <div id="page">
    asdadlkjadlksadjalkdsajdkl
</div> -->
    
    <!-- <a href="/">Home</a> -->
    <!-- <div v-if="page.isNotFound">
    Custom 404 page!
  </div> -->
  <!-- </div> -->