<template>
    <SliderProj value="90"></SliderProj>
    <img src="../assets/images/study.jpg" alt="Đâny akf ảnh" >
  <div class="grid grid-cols-3 gap-4 place-items-center">
    <div v-for="subject in subjects"
          :key="subject.subjectId">
      <div class="transition duration-100 hover:duration-150">
        <router-view>
          <router-link 
          :to="{name: 'Subject', query: {subjectId: subject.subjectId}}">
            <RenderImage class="m-6"
              :image="subject.image"
              :name="subject.name"></RenderImage>
          </router-link>
        </router-view>
      </div>
    </div>

  </div>
  </template>
  
  <script>
  import SliderProj from '../components/SlideProj.vue'
  import RenderImage from "@/components/RenderImage.vue";
  import {getAllSubject} from "@/services/SubjectService";

  export default {
    name: 'HomeP',
    components: {
      RenderImage,
      SliderProj,
    },
    data(){
      return{
        subjects: []
      }
    },
    methods:{
      async getAllSubject(){
        let response = await getAllSubject()
        this.subjects = response.data
        console.log("Home ", this.subjects)
      }
    },
    mounted() {
      this.getAllSubject()
    }
  }

  </script>
  
  