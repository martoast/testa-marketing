<template>
    <div id="contact" class="relative bg-white">
      <div class="absolute inset-0">
        <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div class="bg-gray-50 px-6 py-16 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div class="mx-auto max-w-lg">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Contáctanos</h2>
            <p class="mt-3 text-lg leading-6 text-gray-500">Envíanos tus datos y nosotros nos pondremos en contacto contigo.</p>
            <dl class="mt-8 text-base text-gray-500">
              <div>
                <dt class="sr-only">Calendly</dt>
                <dd>
                  <NuxtLink class="underline" to="https://calendly.com/ariosto" target="_blank" external>www.calendly.com/ariosto</NuxtLink>
                </dd>
              </div>
              <div class="mt-6">
                <dt class="sr-only">Número de teléfono</dt>
                <dd class="flex">
                  <PhoneIcon class="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span class="ml-3">+52 (55) 1234-5678</span>
                </dd>
              </div>
              <div class="mt-3">
                <dt class="sr-only">Correo electrónico</dt>
                <dd class="flex">
                  <EnvelopeIcon class="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span class="ml-3">info@testamarketing.com</span>
                </dd>
              </div>
            </dl>
            <p class="mt-6 text-base text-gray-500">
              ¿Buscas oportunidades laborales?
              {{ ' ' }}
              <a href="#" class="font-medium text-gray-700 underline">Ver todas las vacantes</a>.
            </p>
          </div>
        </div>
        <div class="bg-white px-6 py-16 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12">
          <div class="mx-auto max-w-lg lg:max-w-none">
            <AlertComponent
                  class="mb-4"
                  v-model:show="showAlert"
                  message="¡Enviado con éxito! Nos pondremos en contacto contigo."
                />
                <form id="tm-contact__form" @submit.prevent="submitForm" class="grid grid-cols-1 gap-y-6">
          <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700">Nombre</label>
              <input 
                type="text" 
                name="firstName" 
                id="firstName" 
                v-model="form.firstName"
                autocomplete="given-name" 
                class="mt-1 block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-primary focus:ring-primary"
                required
              />
            </div>
            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-700">Apellido</label>
              <input 
                type="text" 
                name="lastName" 
                id="lastName" 
                v-model="form.lastName"
                autocomplete="family-name" 
                class="mt-1 block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-primary focus:ring-primary"
                required
              />
            </div>
          </div>
          
          <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                v-model="form.email"
                autocomplete="email" 
                class="mt-1 block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-primary focus:ring-primary"
                required
              />
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700">Teléfono</label>
              <input 
                type="tel" 
                name="phone" 
                id="phone" 
                v-model="form.phone"
                autocomplete="tel" 
                class="mt-1 block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-primary focus:ring-primary"
                placeholder="Con lada"
                required
              />
            </div>
          </div>
          
          <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label for="empresa" class="block text-sm font-medium text-gray-700">Empresa</label>
              <input 
                type="text" 
                name="empresa" 
                id="empresa" 
                v-model="form.empresa"
                class="mt-1 block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-primary focus:ring-primary"
                required
              />
            </div>
            <div>
              <label for="department" class="block text-sm font-medium text-gray-700">Industria</label>
              <select 
                name="department" 
                id="department" 
                v-model="form.department"
                class="mt-1 block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-primary focus:ring-primary"
                required
              >
                <option value="" disabled>Seleccione una industria</option>
                <option value="Alimentos y Bebidas">Alimentos y Bebidas</option>
                <option value="Inmobiliario-Mueble-Construcción">Inmobiliario-Mueble-Construcción</option>
                <option value="Servicios Profesionales">Servicios Profesionales</option>
                <option value="Otros">Otros</option>
              </select>
            </div>
          </div>
          
          <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label for="city" class="block text-sm font-medium text-gray-700">Ciudad</label>
              <input 
                type="text" 
                name="city" 
                id="city" 
                v-model="form.city"
                class="mt-1 block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-primary focus:ring-primary"
                required
              />
            </div>
            <CustomSelect v-model="form.areaDeCampo"/>
          </div>
          
          <div>
            <label for="comments" class="block text-sm font-medium text-gray-700">Comentarios</label>
            <textarea 
              id="comments" 
              name="comments" 
              rows="4" 
              v-model="form.comments"
              class="mt-1 block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-primary focus:ring-primary"
            ></textarea>
          </div>
          
          <div class="text-right">
            <button 
              type="submit" 
              class="inline-flex justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Completar
            </button>
          </div>
        </form>
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  empresa: '',
  department: '',
  city: '',
  areaDeCampo: [],
  comments: '',
})


const showAlert = ref(false)

const validateForm = () => {
  return Object.entries(form.value).every(([key, value]) => {
    if (key === 'areaDeCampo') {
      return value.length > 0; // Check if at least one option is selected
    } else if (typeof value === 'string') {
      return value.trim() !== '';
    }
    return true; // For any other types of fields
  });
};

const submitForm = async () => {
  if (validateForm()) {
    try {
      const payload = {
        formData: {
          accountName: form.value.empresa,
          firstName: form.value.firstName,
          lastName: form.value.lastName,
          email: form.value.email,
          mobile: form.value.phone,
          phone: form.value.phone,
          empresa: form.value.empresa,
          mailingCity: form.value.city,
          estado: "-None-",
          rea_de_campo: form.value.areaDeCampo,
          description: form.value.comments,
          title: 'title',
          department: form.value.department,
          fuenteDePosibleClientes: 'Nuevo cliente',
        }
      };
      
      console.log(payload);

      const headers = {
        'Content-Type': 'application/json'
      };

      const response = await fetch('/.netlify/functions/zohowebhook', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Network response was not ok');
      }

      showAlert.value = true;
      // Reset form
      Object.keys(form.value).forEach(key => form.value[key] = '');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Ocurrió un error al enviar tus datos. Por favor, inténtalo de nuevo.');
    }
  } else {
    alert('Por favor, completa todos los campos requeridos antes de enviar.');
  }
};
</script>