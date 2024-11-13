<template>
    <div>
        <Navbar/>
      <slot />
      <Footer/>
    </div>
  </template>

<script setup>
  
  useSeoMeta({
  title: 'Testa Marketing: Agencia de Investigación de Mercados',
  ogTitle: 'Testa Marketing: Agencia de Investigación de Mercados',
  author: 'Alex Martos',
  charset: 'utf-8',
  description: "Testa Marketing es una agencia de Investigación de Mercados con más de 20 años de experiencia y nuestra principal ventaja es la cobertura nacional junto con la capacidad de traducir los números estadísticos en estrategias efectivas para nuestros clientes.",
  ogDescription: "Testa Marketing es una agencia de Investigación de Mercados con más de 20 años de experiencia y nuestra principal ventaja es la cobertura nacional junto con la capacidad de traducir los números estadísticos en estrategias efectivas para nuestros clientes.",
  robots: 'index, follow',
  googleSiteVerification: '',
  appleMobileWebAppCapable: 'yes',
  mobileWebAppCapable: 'yes',
  ogImage: '/testaog.jpg',
  ogUrl: 'https://testamarketing.com/',
  ogLocaleAlternate: ['en_US'],
  ogType: 'website'
})
  </script>