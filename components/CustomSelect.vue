<template>
  <div class="relative" ref="dropdownRef">
    <label for="areaDeCampo" class="block text-sm font-medium text-gray-700">{{ store.text?.contact?.form?.serviceInterest }}</label>
    <div 
      @click="toggleDropdown"
      class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-primary focus:outline-none focus:ring-primary cursor-pointer"
    >
      <span v-if="selectedOptions.length === 0" class="text-gray-500">{{ store.text?.contact?.form?.selectOptions }}</span>
      <span v-else class="text-gray-900">{{ getSelectedOptionsText }}</span>
    </div>
    <div v-if="isOpen" class="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
      <ul class="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
        <li 
          v-for="option in localizedOptions" 
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
import { useLanguageStore } from '~/store/language';

const store = useLanguageStore();

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['update:modelValue']);

const localizedOptions = computed(() => {
  return store.text?.contact?.form?.services.map(service => ({
    value: service.value,
    label: service.label
  }));
});

const isOpen = ref(false);
const dropdownRef = ref(null);

const selectedOptions = computed(() => props.modelValue);

const getSelectedOptionsText = computed(() => {
  return selectedOptions.value.length > 2
    ? store.text?.contact?.form?.selectedCount.replace('{count}', selectedOptions.value.length)
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