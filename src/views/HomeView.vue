<template>
  <div class="home">
    <div v-for="category in categories" :key="category.id">
      <h1 class="text-4xl font-extrabold dark:text-white ml-2">{{ category.name }}</h1>
      <div class="grid gap-4 grid-cols-4">
        <div v-for="(certificate, index) in category.certificates" :key="certificate.id" class="certificate">
          <CertificateComponentVue v-if="index < 4" :certificateName="certificate.name" :certificateDescription="certificate.description" :certificateId="certificate.id" :certificateImage="certificate.imageCertificatePath
            "></CertificateComponentVue>
        </div>
      </div>
      <button @click="modalCertificate(category.id)" v-if="isAdmin" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm ml-3 mt-2 font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Add new certificate
        </span>
      </button>
      <router-link :to="{name: 'certificates', params: {id: category.id}}">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 mt-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 float-right">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Show more
          </span>
        </button>
      </router-link>
      <hr class="w-full h-1 mx-auto bg-teal-200 rounded md:my-5 dark:bg-gray-700">
    </div>
    <div class="mt-24 flex items-center justify-center">
      <button v-if="isAdmin" @click="modalCategory" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
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

.home{
  margin: 10px;
}

</style>
