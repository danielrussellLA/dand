<template>
<div class="home">
    <component :is="contentType" />
</div>
</template>

<script>
import BudgetCalculator from './BudgetCalculator/BudgetCalculator'
import Article from './Article/Article'

import data from '../../schema/BudgetCalculator.json'
console.log(data);
export default {
    name: 'Home',
    components: {
        BudgetCalculator,
        Article
    },
    data() {
        return {
            contentType: data.contentType.trim()
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
