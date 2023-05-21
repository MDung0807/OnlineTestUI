<template>
  <HeaderProj></HeaderProj>
  <RouterView/>
  <FooterProj/>
</template>


<script>

import HeaderProj from './components/HeaderProj.vue';
import FooterProj from './components/FooterProj.vue';
export default {
  name: 'App',
  components: {
    HeaderProj,
    FooterProj,
}
}
</script>

