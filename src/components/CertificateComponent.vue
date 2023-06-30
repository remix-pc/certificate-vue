<template>
    <div class="max-w-sm m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="rounded-t-lg h-64 w-full" :src="certificateImagePath" alt="Certificado" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ certificateName }}</h5>
            </a>
            <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">{{ certificateDescription }}</p>
            <div class="my-5">
                <button @click="updateCertificate" v-if="isAdmin"
                    class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                    <span
                        class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Update
                    </span>
                </button>
                <button @click="deletar" v-if="isAdmin"
                    class="float-right relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span
                        class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Delete
                    </span>
                </button>
            </div>
        </div>
        <UpdateCertificateModalVue v-if="showModal" :id="categoryId" :categoryName="categoryName" :propName="certificateName" :descriptionProp="certificateDescription" :certificateIdProp="certificateId"></UpdateCertificateModalVue>
    </div>
</template>

<script>
import UpdateCertificateModalVue from '@/components/UpdateCertificateModal.vue'
export default {
    name: 'CertificateComponent',
    props: {
        certificateName: String,
        certificateImage: String,
        certificateDescription: String,
        certificateId: Number,
        categoryName: String,
        categoryId: Number,
    },
    components: {
        UpdateCertificateModalVue
    },
    created() {
        this.certificateImagePath = "https://localhost:7083/" + this.certificateImage

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
            certificateImagePath: '',
            isAdmin: false,
            req: this.$globalToken,
            showModal: false
        }
    },
    methods: {
        deletar() {
            this.$swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.axios.delete(`https://localhost:7083/api/certificate/${this.certificateId}`, this.req).then(() => {
                        this.$swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success',
                        )
                        window.location.reload()
                    }).catch(err => {
                        console.log(err);
                    })
                }
            })

        },
        updateCertificate(){
            this.showModal = true
        }
    }
}
</script>

<style>
.certificate {
    margin: 12px;
}
</style>