<template>
  <div>
    <Hero/>
    <Features/>
    <LogoCloud/>
    <Team/>
    <Locations/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script setup>

useHead({
  title: 'Testa Marketing',
  description: 'Investigación de Mercados.',
  ogDescription: 'Investigación de Mercados.',
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'description', content: 'Investigación de Mercados.' }
  ]
})
</script>