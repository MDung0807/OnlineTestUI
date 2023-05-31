<template>
    <SliderProj value="90"></SliderProj>
    <img src="../assets/images/study.jpg" alt="Đâny akf ảnh" >
  <div class="grid grid-cols-3 gap-4 place-items-center">
    <div v-for="topic in topics"
          :key="topic.id">
      <div>
        <RenderImage
                      :image="topic.image"
                      :name="topic.name"></RenderImage>
      </div>
    </div>

  </div>
  </template>
  
  <script>
  import SliderProj from '../components/SlideProj.vue'
  import TopicService from '../services/TopicService'
  import RenderImage from "@/components/RenderImage";
  export default {
    name: 'HomeP',
    components: {
      RenderImage,
      SliderProj,
    },
    data(){
      return{
        topics: []
      }
    },
    methods:{
      async getAllTopicBySubjectId(data){
        this.topics = await TopicService.getAllTopicBySubjectId(data)
        console.log(this.topics)
      }
    },
    mounted() {
      this.getAllTopicBySubjectId(2)
    }
  }

  </script>
  
  