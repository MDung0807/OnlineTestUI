<template class="">
    <footer>
        <div class="flex">
            <p class="mx-auto flex py-10 text-indigo-800">Custom by MDung</p>
        </div>
    </footer>
    <ImageBox :image="image"/>
</template>

<script>
import ImageBox from '../components/ImageBox.vue'
const image ={
    url: 'https://res.cloudinary.com/dx7nsygei/image/upload/v1684116344/image_user_teacher1.jpg',
    name: 'vid',
}
    export default {
        name: 'FooterProj',
        components : {ImageBox},
        data() {
            return {
                image,
            }
  },
    }
</script>