<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/contact">Contact</router-link>|
        <router-link to="/profile/sub">sub</router-link>|
        <router-link to="/profile/pah">pah</router-link>
        <br><br>
        <router-link to="/posts/sub/post-id/1">post 1</router-link>|
       <router-link to="/posts/pah/post-id/2">post 2</router-link>|
    </div>
    <router-view />
</template>

<script>
export default {
    name: 'App', 
}
</script>

<style>

</style>