<template>
    <div class="category">
        <h1>{{ categoryName }}</h1>
        <div class="certificate">
            <h4>{{ certificateName }}</h4>
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