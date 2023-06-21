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
      <button @click="modalCertificate(category.id)" v-if="isAdmin" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Add new certificate
        </span>
      </button>
      <hr class="w-full h-1 mx-auto bg-teal-200 rounded md:my-5 dark:bg-gray-700">
    </div>
    <div class="mt-24 flex items-center justify-center">
      <button v-if="isAdmin" @click="modalCategory" class="relative inline-flex p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"><span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Add new Category
      </span>
      </button>
    </div>
    <CategoryModal v-if="showModalCategory"></CategoryModal>
    <CertificateModal v-if="showModalCertificate" :id="this.id"></CertificateModal>
  </div>
</template>

<script>
import CertificateComponentVue from '@/components/CertificateComponent.vue'
import CategoryModal from '@/components/CategoryModal.vue'
import CertificateModal from '@/components/CertificateModal.vue'
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    //HelloWorld,
    CertificateComponentVue,
    // eslint-disable-next-line vue/no-unused-components
    CategoryModal,
    CertificateModal
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
      showModalCategory: false,
      showModalCertificate: false,
      isAdmin: false,
      req: this.$globalToken,
      id: -1
    }
  },
  methods: {
    modalCategory(){
        this.showModalCategory = true;
    },
    modalCertificate(idCertificate){
      this.id = idCertificate
      this.showModalCertificate = true;
    }
  }
}
</script>

<style>
.container {
  display: flex;
}
</style>
