<template>
    <form action="">
        <input v-model="username" type="text" class="">
        <input v-model="password" type="text">
    </form>
    <button @click="login" type="submit">Nhấn vòa đây để đăng nhập</button>
</template>

<script>
    import AuthService from "../services/AuthService.js"
    export default {
        name: 'formInput',
        data(){
            return {
                username: '',
                password:''
            }
        },
        methods:{
            login(){
                var data = {
                    username: this.username,
                    password: this.password
                };
                AuthService.login(data);
            }
        }

    }
</script>