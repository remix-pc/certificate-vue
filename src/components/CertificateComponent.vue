<template>
        <div class="container-main">
            <div class="container">
                <div class="certificate">
                    <h3>{{ certificateName }}</h3>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'CertificateComponent',
    props:{
        categoryName: String,
        certificateName: String,
    }
}
</script>

<style>

    .certificate{
        margin: 12px;
    }
</style>