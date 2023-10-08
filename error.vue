<template>
    <div class="container">
        <h1>User Page</h1>
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/user/1">User 1</nuxt-link>
        <nuxt-link to="/user/2">User 2</nuxt-link>
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
    margin: 0 10px;
}
</style>