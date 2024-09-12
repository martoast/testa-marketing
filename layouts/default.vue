<template>
    <div>
        <Navbar/>
      <slot />
      <Footer/>
    </div>
  </template>

<script setup>
  
  useServerSeoMeta({
  title: 'Testa Marketing - Investigación de Mercados',
  ogTitle: 'Testa Marketing - Investigación de Mercados',
  author: 'Alex Martos',
  charset: 'utf-8',
  description: "Transformamos datos en soluciones para tu negocio. Entendemos mercados y creamos estrategias efectivas para impulsar tu éxito.",
  ogDescription: "Transformamos datos en soluciones para tu negocio. Entendemos mercados y creamos estrategias efectivas para impulsar tu éxito.",
  robots: 'index, follow',
  googleSiteVerification: '',
  appleMobileWebAppCapable: 'yes',
  mobileWebAppCapable: 'yes',
  ogImage: {
    url: '/public/testa-main-logo.svg'
  },
  ogLocaleAlternate: ['en_US'],
  ogType: 'website'
})
  </script>