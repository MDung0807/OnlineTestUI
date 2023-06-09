<template>
<h1 class="text-center font-bold lowercase ">Môn {{subject.name}}</h1>
<div class="flex">
  <RenderImage 
  class="m-auto"
  :name=subject.name
   :image=subject.image
   ></RenderImage>
</div>

<div class="grid grid-cols-3 gap-4 place-items-center">
  <div v-for="topic in subject.topics"
        :key="topic.topicId">
        <RenderImage 
          class="m-auto p-2 hover:bg-slate-400"
          :name=topic.name
          :image=topic.image></RenderImage>
  </div>   
</div>

</template>

<script>
import {getSubject} from "@/services/SubjectService";
import RenderImage from "./RenderImage.vue";
export default {
  name: 'SubjectView',
  components: {
    RenderImage
  },
  data(){
    return {
      subject :{
        subjectId: null,
        name: '',
        image: '',
        topics: []
      }
    }
  },
  created() {
    this.subject.subjectId=this.$route.query.subjectId
  },
  methods: {
    async getSubject (subjectId){
      let response = await getSubject(subjectId)
      this.subject = response.data
      console.log(this.subject)
    }
  },
  beforeMount() {
    console.log("SubjectId: ", this.subject.subjectId)
    this.getSubject(this.subject.subjectId)
  }
}
</script>