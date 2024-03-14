import {createRouter, createWebHistory} from 'vue-router';
// Importo il componente homepage della cartella pages in router 
import HomePage from './pages/HomePage.vue';
import ShowProject from './pages/ShowProject.vue';

const router = createRouter({
    history: createWebHistory(),
    // ogni oggetto all'interno dell'array routes rappresenta una rotta
    routes:[
        {
            path:'/',
            name: 'home',
            component: HomePage,
        },
        {
            path:'/project/:slug',
            name: 'show-project',
            component: ShowProject,
        }
    ]
});
export{router};