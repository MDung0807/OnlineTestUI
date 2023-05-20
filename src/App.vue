<template>
  <HeaderProj></HeaderProj>
  <SliderProj value="90"></SliderProj>
  <img src="./assets/images/study.jpg" alt="Đâny akf ảnh" >
  <FooterProj></FooterProj>
</template>

<script>
import HeaderProj from './components/HeaderProj.vue'
import SliderProj from './components/SlideProj.vue'
import FooterProj from './components/FooterProj.vue';
export default {
  name: 'App',
  components: {
    HeaderProj,
    SliderProj,
    FooterProj
}
}
</script>

