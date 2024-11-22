<template>
  <Transition name="fade">
    <div v-if="isVisible && !isClosed" class="fixed bottom-0 left-0 right-0 bg-green-100 py-2 shadow-lg">
      <div class="container mx-auto px-4">
        <div class="flex justify-center items-center">
          <div class="w-full md:w-7/12 flex items-center">
            <a :href="store.text?.whatsapp?.link" target="_blank" class="flex items-center">
              <p class="m-0 text-white font-bold hidden md:block hover:underline">{{ store.text?.whatsapp?.desktopText }}</p>
              <p class="m-0 text-white font-bold block md:hidden underline">{{ store.text?.whatsapp?.mobileText }}</p>
            </a>
          </div>
          <div class="w-full md:w-5/12 flex justify-end items-center">
            <div class="h-full py-3 px-4 flex items-center">
              <a :href="store.text?.whatsapp?.link" target="_blank" class="text-white mr-4">
                <img src="/whatsapp.svg" alt="WhatsApp" class="h-10 w-auto">
              </a>
              <button @click="closeFooter" class="bg-yellow-500 text-white rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguageStore } from '~/store/language'

const store = useLanguageStore()

const isVisible = ref(false)
const isClosed = ref(false)
const heroHeight = ref(0)
const footerTop = ref(0)

const closeFooter = () => {
  isClosed.value = true
}

const handleScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight
  if (window.scrollY > heroHeight.value && scrollPosition < footerTop.value) {
    isVisible.value = true
  } else {
    isVisible.value = false
  }
}

onMounted(() => {
  const heroElement = document.getElementById('hero')
  const footerElement = document.getElementById('footer')

  if (heroElement) heroHeight.value = heroElement.offsetHeight
  if (footerElement) footerTop.value = footerElement.offsetTop

  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>