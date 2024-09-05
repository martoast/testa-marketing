<template>
    <div>
        <Navbar/>
      <slot />
      <Footer/>
    </div>
  </template>

<script setup>
  
  definePageMeta({
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