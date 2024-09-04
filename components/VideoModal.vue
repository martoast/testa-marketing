<template>
    <Transition name="modal">
      <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex min-h-screen items-center justify-center px-0 pt-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="$emit('close')"></div>
  
          <span class="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
  
          <div class="inline-block transform overflow-hidden bg-white text-left align-bottom shadow-xl transition-all w-full sm:my-8 sm:rounded-lg sm:max-w-3xl sm:align-middle">
            <div class="bg-white px-0 pt-0 pb-0 sm:p-6 sm:pb-4">
              <div class="aspect-w-16 aspect-h-9">
                <iframe 
                  :src="`https://www.youtube.com/embed/${videoId}?autoplay=1`"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="w-full h-full"
                ></iframe>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button @click="$emit('close')" type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </template>
  
  <script setup>
  defineProps({
    isOpen: {
      type: Boolean,
      required: true
    },
    videoId: {
      type: String,
      required: true
    }
  })
  
  defineEmits(['close'])
  </script>
  
  <style scoped>
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }
  
  /* Responsive aspect ratio */
  .aspect-w-16 {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  }
  
  .aspect-w-16 iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  @media (max-width: 640px) {
    .inline-block {
      width: 100%;
      height: 100%;
    }
  
    .aspect-w-16 {
      height: calc(100vh - 100px); /* Adjust this value as needed */
      padding-bottom: 0;
    }
  
    .aspect-w-16 iframe {
      position: relative;
      height: 100%;
    }
  }
  </style>