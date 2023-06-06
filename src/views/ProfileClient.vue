<template>
    <div class="container">
        <h1>Xin chao</h1>
    </div>
</template>

<script>
    import {getProfile} from '../services/UserService'

    export default{
        name: 'ProfileClient',
        data() {
            return {
                user:{
                    userId: '',
                    avatar: '',
                    dateCreate: '',
                    email: '',
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    gender: '',
                    status: '',
                }
            }
        },
        methods: {
            async getProfile (){
                let response = await getProfile()
                this.user = response.data
                console.log("user: ", this.user)
            }
        },  
        mounted(){
            this.getProfile()
        }
    }
</script>