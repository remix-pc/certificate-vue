<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <hr>
    <button @click="teste">Aperte</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    teste(){
      this.axios.get("http://viacep.com.br/ws/01001000/json/").then(res => {console.log(res.data);}).catch(err => {console.log(err);})
    }
  }
}
</script>
