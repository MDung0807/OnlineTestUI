<template>
    <div class="container">
        <h1>Xin chao admin</h1>
    </div>
    <div class="">
        <figure class="image is-128x128">
      <img
          class="rounded"
          :src="subject.image" alt="ht">
    </figure>
    <input type="text" v-model="subject.name">
    </div>
    <button class="button is-primary" 
        type="submit"
        @click="getTopicByUser">Save change</button>
    <router-view>
        <router-link>
            <button class="button is-primary"
            type='button'>Next</button>
        </router-link>
    </router-view>
</template>

<script>
// import {getSubjectByUser} from '../../services/SubjectService.js'
export default {
    name: 'HomeAdmin',
    data(){
        return {
            subject:{
                name:'môn học',
                image: 'https://th.bing.com/th/id/R.5d6e4bd3afa9b050bfa15c2ce8a82ad9?rik=YEgc%2bDoXjQdrqQ&riu=http%3a%2f%2fmathematicssas.files.wordpress.com%2f2011%2f02%2fmath1.jpg&ehk=5WbqpuwVlLL0tdkqt2bihV1XHNBgyRPoNYofVYIEZ2c%3d&risl=&pid=ImgRaw&r=0'
            }
        }
    },
    methods:{
         getTopicByUser(){
            // const userId = localStorage.getItem('userId')
            // let response = await getSubjectByUser(userId)
            // console.log(response)

            console.log(this.subject.name)
        }
    },
    mounted() {
        // this.getTopicByUser()
    },
}
</script>