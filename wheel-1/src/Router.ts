import VueRouter from "vue-router";
import Doc from './views/Doc.vue';
import Home from "./views/Home.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DocDemo from "./components/DocDemo.vue";
import SliderDemo from './components/SliderDemo.vue';
import Intro from './views/Intro.vue';
import GetStarted from './views/GetStarted.vue';
import Install from './views/Install.vue';


export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', component: Home
        },
        {
            path: '/Doc', component: Doc,
            children:[
                {path: '', component: DocDemo},
                {path: 'intro', component: Intro},
                {path: 'get-started', component: GetStarted},
                {path: 'install', component: Install},
                {path: 'switch', component: SwitchDemo},
                {path: 'button', component: ButtonDemo},
                {path: 'dialog', component: DialogDemo},
                {path: 'tabs', component: TabsDemo},
                {path: 'slider', component: SliderDemo},
            ]
        }
    ]
});
