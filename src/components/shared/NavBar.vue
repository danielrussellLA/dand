<template>
<div class="navbar">
    <div class="content">
        <div class="logo">
            <img :src="logo" />
        </div>
        <div class="links">
            <router-link v-for="link in links" :key="link.path" :to="link.path" active-class="active" exact>{{ link.name }}</router-link>
        </div>
    </div>
</div>
</template>

<script>
import data from '../../../schema/BudgetCalculator.json'
export default {
    name: 'NavBar',
    data() {
        return {
            logo: data.navbar.logo,
            links: data.navbar.links
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    padding: 10px;
    position: relative;
}
.content {
    max-width: 800px;
    margin: auto;
    position: relative;
}
.logo img {
    height: 30px;
    width: 30px;
}
.links {
    position: absolute;
    right: 15px;
    top: 50%;
    margin-top: -12px;
}
.links a {
    margin: 5px;
    text-decoration: none;
    color: #000;
    font-weight: bold;
}
</style>
