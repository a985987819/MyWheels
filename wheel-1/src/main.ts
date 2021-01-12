import {createApp} from 'vue';
import App from "./App.vue";
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import Laoduan from './components/Laoduan.vue';
import Laoduan2 from "./components/Laoduan2.vue";

const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [
        {
            path: '/', component: Laoduan
        },
        {
            path: '/laoduan2', component: Laoduan2
        }
    ]
});

const app = createApp(App);
app.use(router)
app.mount('#app');
