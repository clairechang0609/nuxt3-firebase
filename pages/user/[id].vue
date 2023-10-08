<template>
    <div class="container">
        <div>
            User ID: {{ route.params.id }}
        </div>
        <nuxt-link to="/user">User</nuxt-link>
    </div>
</template>

<script setup>
const route = useRoute();
</script>

<style scoped>
.container {
    padding: 50px;
    text-align: center;
}
a {
    display: inline-block;
    margin-top: 20px;
}
</style>