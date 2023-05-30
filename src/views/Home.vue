<template>
    <SliderProj value="90"></SliderProj>
    <img src="../assets/images/study.jpg" alt="Đâny akf ảnh" >
  <div class="grid grid-cols-3 gap-4 place-items-stretch h-56 ...">
    <div v-for="topic in topics"
          :key="topic.id">
      <img src="{{topic.image}}">
      <p>{{topic.name}}</p>
    </div>

    <button @click="getAllTopicBySubjectId">Nhấn vào để lấy topic</button>
  </div>
  </template>
  
  <script>
  import SliderProj from '../components/SlideProj.vue'
  import TopicService from '../services/TopicService'
  export default {
    name: 'HomeP',
    components: {
      SliderProj,
    },
    data(){
      return{
        topics: []
      }
    },
    methods:{
      getAllTopicBySubjectId(){
        console.log(TopicService.getAllTopicBySubjectId(2))
      }
    },

  }
  </script>
  
  