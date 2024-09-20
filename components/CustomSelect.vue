<template>
    <div class="relative" ref="dropdownRef">
      <label for="areaDeCampo" class="block text-sm font-medium text-gray-700">Área de campo</label>
      <div 
        @click="toggleDropdown"
        class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-primary focus:outline-none focus:ring-primary cursor-pointer"
      >
        <span v-if="selectedOptions.length === 0" class="text-gray-500">Seleccione opciones</span>
        <span v-else class="text-gray-900">{{ selectedOptionsText }}</span>
      </div>
      <div v-if="isOpen" class="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
        <ul class="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <li 
            v-for="option in options" 
            :key="option.value"
            @click="toggleOption(option)"
            class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-primary hover:text-white"
          >
            <span class="block truncate" :class="{ 'font-semibold': isSelected(option) }">
              {{ option.label }}
            </span>
            <span v-if="isSelected(option)" class="absolute inset-y-0 right-0 flex items-center pr-4">
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  
  const props = defineProps({
    modelValue: {
      type: Array,
      default: () => []
    }
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const options = [
    { value: "Encuestador", label: "CAPI (Encuestas cara a cara)" },
    { value: "CATI", label: "CATI (Encuestas telefónicas)" },
    { value: "CAWI", label: "CAWI (Encuestas vía web)" },
    { value: "Mystery shopper", label: "Mystery shopper" },
    { value: "Entrevista a profundidad", label: "Entrevista a profundidad" },
    { value: "Análisis de gabinete", label: "Análisis de gabinete" },
    { value: "Grupo focal", label: "Grupos focales / Triadas presenciales" },
    { value: "Grupos focales / Triadas digitales", label: "Grupos focales / Triadas digitales" },
    { value: "Consultoría y Capacitación", label: "Consultoría y Capacitación" },
    { value: "Elaboración de mapas", label: "Elaboración de mapas" },
    { value: "Maquila de encuestas a terceros", label: "Maquila de encuestas a terceros" },
    { value: "Pruebas de productos", label: "Pruebas de productos" },
    { value: "Reclutamiento para terceros", label: "Reclutamiento para terceros" }
  ];
  
  const isOpen = ref(false);
  const dropdownRef = ref(null);
  
  const selectedOptions = computed(() => props.modelValue);
  
  const selectedOptionsText = computed(() => {
    return selectedOptions.value.length > 2
      ? `${selectedOptions.value.length} opciones seleccionadas`
      : selectedOptions.value.join(', ');
  });
  
  const isSelected = (option) => selectedOptions.value.includes(option.value);
  
  const toggleOption = (option) => {
    const newValue = [...selectedOptions.value];
    const index = newValue.indexOf(option.value);
    if (index === -1) {
      newValue.push(option.value);
    } else {
      newValue.splice(index, 1);
    }
    emit('update:modelValue', newValue);
  };
  
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };
  
  const closeDropdown = (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
      isOpen.value = false;
    }
  };
  
  onMounted(() => {
    document.addEventListener('click', closeDropdown);
  });
  
  onUnmounted(() => {
    document.removeEventListener('click', closeDropdown);
  });
  </script>