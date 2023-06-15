<template>
  <div class="home">
    <div v-for="category in categories" :key="category.id">
      <h1>{{ category.name }}</h1>
      <div class="container">
        <div v-for="certificate in category.certificates" :key="certificate.id" class="certificate">
          <CertificateComponentVue :categoryName="category.name" :certificateName="certificate.name" :certificateImage="certificate.imageCertificatePath
            "></CertificateComponentVue>
        </div>
      </div>
      <button>Add new certificate</button>
      <hr>
    </div>
    <button @click="teste">Aperte</button>
  </div>
</template>

<script>
import CertificateComponentVue from '@/components/CertificateComponent.vue'
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    //HelloWorld,
    CertificateComponentVue
  },
  created() {
    this.axios.get("https://localhost:7083/api/category/certificate").then(res => {
      console.log(res.data);
      this.categories = res.data
    }).catch(err => { console.log(err); })
  },
  data() {
    return {
      categories: [],
    }
  },
  methods: {

  }
}
</script>

<style>
.container {
  display: flex;
}
</style>
