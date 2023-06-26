<template>
    <div>
        <h1 class="text-4xl font-extrabold dark:text-white ml-2 text-center my-5">{{ categoryName }}</h1>
        <div class="grid gap-4 grid-cols-3 mb-10">
            <div v-for="certificate in certificates" :key="certificate.id">
                <CertificateComponent :certificateDescription="certificate.description" :certificateId="certificate.id"
                    :certificateImage="certificate.imageCertificatePath"></CertificateComponent>
            </div>
        </div>
        <div class="mb-4">
            <button
                class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm ml-3 mt-2 font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span
                    class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Add new certificate
                </span>
            </button>
            

        </div>
    </div>
</template>


<script>
import CertificateComponent from "@/components/CertificateComponent.vue"
export default {
    name: 'CertificatesView',
    components: {
        CertificateComponent,
    },
    created() {
        this.axios.get(`https://localhost:7083/api/certificate/category/${this.categoryId}`).then(res => {
            this.certificates = res.data
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
        this.axios.get(`https://localhost:7083/api/category/${this.categoryId}`).then(res => {
            this.categoryName = res.data.name
        }).catch(err => {
            console.log(err);
        })
    },
    data() {
        return {
            certificates: [],
            categoryId: this.$route.params.id,
            categoryName: '',
        }
    },
    methods: {

    }
}
</script>