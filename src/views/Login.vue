<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <h1>Login user</h1>
        <input type="email" name="email" id="email" placeholder="youremail@domain.com" v-model="email">
        <input type="password" name="password" id="password" placeholder="******" v-model="password">
        <button @click="sigIn">SignIn</button>
    </div>
</template>

<script>

export default {
    data(){
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        sigIn(){
            this.axios.post("https://localhost:7083/login", {
                email: this.email,
                password: this.password
            }).then(res => {
                localStorage.setItem("token", res.data.token)
                console.log(this.$globalToken);
            }).catch(err => {
                console.log(err);
            })
        }
    }

}
</script>