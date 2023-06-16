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
      <button v-if="isAdmin">Add new certificate</button>
      <hr>
    </div>
    <button v-if="isAdmin" @click="addNewCategory">Add new Category</button>
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

    this.axios.get("https://localhost:7083/validate", this.req).then(res => {
      console.log(res);
      this.isAdmin = true
    }).catch(err => {
      console.log(err);
      this.isAdmin = false
    })

  },
  data() {
    return {
      categories: [],
      showModal: false,
      isAdmin: false,
      req: this.$globalToken
    }
  },
  methods: {
    addNewCategory(){
      let nameCategory = prompt("Add new category")
      this.axios.post("https://localhost:7083/api/category", {
        name: nameCategory
      }, this.req).then(res => {
        console.log(res);
        window.location.reload()
      }).catch(err => {
        console.log(err);
      })
    },
  }
}
</script>

<style>
.container {
  display: flex;
}
</style>
