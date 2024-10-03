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
  ogImage: 'https://scontent.ftij3-2.fna.fbcdn.net/v/t39.30808-6/461836129_967220988776784_6520815888582812377_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=CZdRPSG-FhQQ7kNvgG-VPj5&_nc_ht=scontent.ftij3-2.fna&_nc_gid=ATs-wIXTPaDD8YGgqPEeXx_&oh=00_AYA9_xOqrjd_dRO57GsPPNVYG6CcaBsevgusPXV920ig3Q&oe=670418C6',
  ogUrl: 'https://testamarketing.com/',
  ogLocaleAlternate: ['en_US'],
  ogType: 'website'
})
  </script>