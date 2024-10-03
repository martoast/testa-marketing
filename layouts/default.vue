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
  ogImage: 'https://scontent.ftij3-1.fna.fbcdn.net/v/t39.30808-6/313407376_495827589249462_8953498923463885895_n.png?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=crb2e41u8poQ7kNvgEJdI3w&_nc_ht=scontent.ftij3-1.fna&_nc_gid=A3VIryFLkdG5amSTvc1WwgB&oh=00_AYARAg9wncCEfAy8O0knZaSRwp6qDVnTZ5Fr3MDAZKpMiA&oe=670374E6',
  ogUrl: 'https://testamarketing.com/',
  ogLocaleAlternate: ['en_US'],
  ogType: 'website'
})
  </script>