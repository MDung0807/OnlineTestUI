<template>
    <div>
        <form action="">
            <input v-model="subject.name" type="text" placeholder="Name Subject">
            <input id="inputFile"
                       @change="reviewImage"
                    type="file">
                <img src="../../assets/images/noneAvatar.jpg"
                      id="image"
                     class="h-12 w-12 text-gray-300" aria-hidden="false" />
        </form>
        <button type="submit"
         @click="createSubject">Thêm môn học</button>
    </div>
</template>

<script>
import { createSubject } from '@/services/SubjectService';
import getImageUtil from "@/utils/GetImageUtil";

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
            async createSubject (){
                this.getImage();
                var data = {
                    name: this.subject.name,
                    image: this.subject.image
                }
                let response = await createSubject(data)
                console.log(response)
            },
            getImage(){
                this.subject.image =getImageUtil(document.getElementById('image').__vnode.props)
            },
            reviewImage (){
                var image = document.getElementById("inputFile").valueOf()
                var file = image.files[0]

                document.getElementById("image").src = URL.createObjectURL(file)
            }
        }
    }
</script>