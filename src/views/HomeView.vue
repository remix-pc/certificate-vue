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
    <div class="mt-24 flex items-center justify-center">
      <button v-if="isAdmin" @click="addNewCategory" class="relative inline-flex p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"><span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Add new Category
      </span>
      </button>
    </div>
    <CategoryModal v-if="showModal"></CategoryModal>
  </div>
</template>

<script>
import CertificateComponentVue from '@/components/CertificateComponent.vue'
import CategoryModal from '@/components/CategoryModal.vue'
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    //HelloWorld,
    CertificateComponentVue,
    // eslint-disable-next-line vue/no-unused-components
    CategoryModal
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
      // let nameCategory = prompt("Add new category")
      // this.axios.post("https://localhost:7083/api/category", {
      //   name: nameCategory
      // }, this.req).then(res => {
      //   console.log(res);
      //   window.location.reload()
      // }).catch(err => {
      //   console.log(err);
      // })
        this.showModal = true;
    },
  }
}
</script>

<style>
.container {
  display: flex;
}
</style>
