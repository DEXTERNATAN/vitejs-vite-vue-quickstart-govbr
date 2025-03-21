<template>
  <br-menu
    ref="menuRef"
    id="main-navigation"
    is-push
    :show-menu="isOpen ? true : null"
    :list="JSON.stringify(menuItems)"
    data-breakpoints="col-sm-4 col-lg-3"
    @navigate="navigate"
  ></br-menu>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
import { isOpen } from '../utils/sharedData';

const menuRef: Ref<any> = ref(null);
const router = useRouter();

const menuItems = ref([
  {
    id: 1,
    icon: 'home',
    name: 'Página Inicial',
    url: '/bibliotecas/wc/govbr-ds-wc-quickstart-vue/',
    isSpaLinkBehavior: true,
  },
  {
    id: 2,
    icon: 'users-cog',
    name: 'Formulário',
    url: '/bibliotecas/wc/govbr-ds-wc-quickstart-vue/formulario',
    isSpaLinkBehavior: true,
  },
  {
    id: 3,
    icon: 'sign-in-alt',
    name: 'Sign-In',
    url: '/bibliotecas/wc/govbr-ds-wc-quickstart-vue/sign-in',
    isSpaLinkBehavior: true,
  },
  {
    id: 4,
    icon: 'cookie',
    name: 'Cookiebar',
    url: '/bibliotecas/wc/govbr-ds-wc-quickstart-vue/cookiebar',
    isSpaLinkBehavior: true,
  },
]);

// Função para navegar para uma rota usando Vue Router
function navigate(route: any) {
  // Importe e utilize o Vue Router para navegar para a rota especificada
  router.push(route.detail[0]); // Navegar usando o Vue Router
}
</script>
../mixins/sharedData ../utils/isOpenMixin
