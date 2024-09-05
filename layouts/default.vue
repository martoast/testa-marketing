<template>
    <div>
        <Navbar/>
      <slot />
      <Footer/>
    </div>
  </template>

<script setup>
  
  useServerSeoMeta({
  title: 'Fullstack Labs - Software Development Experts',
  ogTitle: 'Fullstack Labs - Software Development Experts',
  author: 'Fullstack Labs',
  charset: 'utf-8',
  description: "Expert software development and consulting services for web, mobile, and emerging technologies.",
  ogDescription: "Expert software development and consulting services for web, mobile, and emerging technologies.",
  robots: 'index, follow',
  googleSiteVerification: '',
  appleMobileWebAppCapable: 'yes',
  mobileWebAppCapable: 'yes',
  ogImage: {
    url: '/public/TESTA_LOGO CENTRAL COMPLETO_COLOR.svg'
  },
  ogLocaleAlternate: ['en_US'],
  ogType: 'website'
})
  </script>