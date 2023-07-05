<template>
    <h1>Xin chào</h1>
    <div v-for="topic in topics"
        :key="topic.name">
        <input type="text" v-model="topic.name"><img :src="topic.image" alt="ảnh">
    </div>
</template>

<script>
    export default{
        name: 'TopicAdmin',
        data(){
            return{
                
                topics: []
            }
        },
        created(){
            this.topics.push({name: 'topic1', image: ''}, {name: 'topic2', image:''}, {name: 'topic3', image:''})
        }
    }
</script>
