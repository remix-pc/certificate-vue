<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="flex h-screen w-screen bg-gradient-to-l from-blue-950/40 to-blue-800/70">
        <div class="w-full my-auto max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div class="px-4 py-4 block">
                <h1 class="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Login user</h1>
                    <div class="w-full mt-4">
                        <input type="email" name="email" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" id="email" placeholder="youremail@domain.com" v-model="email">
                    </div>
                    <div class="w-full mt-4">
                        <input type="password" name="password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" id="password" placeholder="******" v-model="password">
                    </div>
                    <div class="flex items-center justify-center mt-4">
                        <button @click="sigIn" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                SignIn
                            </span>
                        </button>
                    </div>
            </div>
        </div>
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
                this.$router.push({name: 'home'})
            }).catch(err => {
                console.log(err);
            })
        }
    }

}
</script>

