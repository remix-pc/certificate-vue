<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <h1>Register User!</h1>
        <input type="text" name="name" id="name" placeholder="Username" v-model="username">
        <input type="email" name="email" id="email" placeholder="youremail@domain.com" v-model="email">
        <input type="password" name="password" id="password" placeholder="******" v-model="password">     
        <button @click="signUp">SignUp</button>   
    </div>
</template>

<script>
export default {
    
    data(){
        return{
            username: '',
            email: '',
            password: '',
        }
    },
    methods: {
        signUp(){
            this.axios.post("https://localhost:7083/register", {
                username: this.username,
                email: this.email,
                password: this.password
            }).then(res => {
                this.$router.push({name: 'home'})
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        }
    }

}
</script>