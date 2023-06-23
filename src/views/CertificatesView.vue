<template>
    <div>
        <h1>{{ categoryName }}</h1>
        <div class="grid gap-4 grid-cols-3 mb-10">
            <div v-for="certificate in certificates" :key="certificate.id">
                <CertificateComponent :certificateDescription="certificate.description" :certificateImage="certificate.imageCertificatePath"></CertificateComponent>
            </div>
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
            categoryName : '',
        }
    },
    methods: {

    }
}
</script>