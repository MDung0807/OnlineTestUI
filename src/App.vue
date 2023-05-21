<template>
  <HeaderProj></HeaderProj>
  <RouterView/>
  <FooterProj/>
</template>


<script>

import HeaderProj from './components/Header.vue';
import FooterProj from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    HeaderProj,
    FooterProj,
}
}
</script>

