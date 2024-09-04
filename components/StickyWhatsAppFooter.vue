<template>
    <div class="fixed bottom-0 left-0 right-0 bg-gray-200 f py-2 shadow-lg" v-show="isVisible">
      <div class="container mx-auto px-4">
        <div class="flex justify-center items-center">
          <div class="w-full md:w-7/12 flex items-center">
            <a href="https://wa.me/526642909090?text=Hola, me interesa conocer sobre Testa Marketing." target="_blank" class="flex items-center">
              <p class="m-0 text-gray-700 font-bold hidden md:block hover:underline">Chatea en vivo con un ejecutivo en WhatsApp</p>
              <p class="m-0 text-gray-700 font-bold block md:hidden">Chatea con Nosotros</p>
            </a>
          </div>
          <div class="w-full md:w-5/12 flex justify-end items-center">
            <div class="h-full py-3 px-4 flex items-center">
              <a href="https://wa.me/526642909090?text=Hola, me interesa conocer sobre Testa Marketing." target="_blank" class="text-white mr-4">
                <img src="/whatsapp.svg" alt="WhatsApp" class="h-10 w-auto">
              </a>
              <button @click="closeFooter" class="bg-yellow-500 text-gray-700 rounded-full p-2 hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isVisible = ref(true)
  
  const closeFooter = () => {
    isVisible.value = false
  }
  </script>