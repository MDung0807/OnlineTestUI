<template>
    <div>
        <form action="">
            <input v-model="subject.name" type="text" placeholder="Name Subject">
            <input id="inputFile"
                       @change="reviewImage"
                    type="file">
                <img src="../../assets/images/noneAvatar.jpg"
                      id="avatar"
                     class="h-12 w-12 text-gray-300" aria-hidden="false" />
        </form>
        <button type="submit"></button>
    </div>
</template>

<script>
import { createSubject } from '@/services/SubjectService';

    export default {
        name: 'SubjectAdmin',
        data(){
            return{
                subject: {
                    subjectId: null,
                    name: '',
                    image: File,
                    topics: [],
                    status: '',
                }
            }
        },
        methods: {
            async createSubject (data){
                let response = await createSubject(data)
                console.log(response)
            }
        }
    }
</script>