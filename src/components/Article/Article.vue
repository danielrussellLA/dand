<template>
<div class="article">
    <NavBar />
    <div class="wrapper">
        <div class="content">
            <h1>{{ title }}</h1>
            <div v-for="item in content">
                <img class="image" :src="item.image" />
                <h2 class="section-title">{{ item.sectionTitle }}</h2>
                <p class="section-body">{{ item.body }}</p>
            </div>
        </div>
    </div>
    <NavBar />
</div>
</template>

<script>
import NavBar from '../shared/NavBar';
import data from '../../../schema/Article.json'

export default {
    name: 'Article',
    components: {
        NavBar
    },
    data() {
        return {
            title: data.article.title,
            content: data.article.content
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .article {
        height: 100%;
    }
    .wrapper {
        margin: 10px 10px 100px 10px;
    }
    .content {
        max-width: 800px;
        margin: auto;
    }
    .image {
        width: 100%;
    }
</style>
