<template>
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="rounded-t-lg h-64 w-full" :src="certificateImagePath" alt="Certificado" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ certificateName }}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ certificateDescription }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CertificateComponent',
    props: {
        certificateName: String,
        certificateImage: String,
        certificateDescription: String
    },
    created(){
        this.certificateImagePath = "https://localhost:7083/" + this.certificateImage
    },
    data(){
        return {
            certificateImagePath: ''
        }
    }
}
</script>

<style>.certificate {
    margin: 12px;
}</style>