<template>
<h1>Đây là Id nè:{{subject.name}}</h1>

</template>

<script>
import {getSubject} from "@/services/SubjectService";

export default {
  name: 'SubjectView',
  data(){
    return {
      subject :{
        subjectId: null,
        name: 'hka',
        image: '',
        topics: []
      }
    }
  },
  created() {
    this.subject.subjectId=1
  },
  methods: {
    async getSubject (subjectId){
      let response = await getSubject(subjectId)
      this.subject = response.data
      console.log(this.subject)
    }
  },
  beforeMount() {
    this.getSubject(this.subject.subjectId)
  }
}
</script>