import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/:article',
            name: 'article',
            component: Article
        },
        {
            path: '*',
            name: 'default',
            component: Home
        }
    ]
})