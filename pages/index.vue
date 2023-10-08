<template>
    <div class="container">
        <h1>Home Page</h1>
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/user">User</nuxt-link>
        <div class="image-wrap">
            <img src="@/assets/images/bg.png">
        </div>
    </div>
</template>

<style scoped>
.container {
    padding: 50px;
    text-align: center;
}
a {
    margin: 0 10px;
}
.image-wrap {
    margin: 30px auto;
    max-width: 500px;
}
img {
    max-width: 100%;
}
</style>