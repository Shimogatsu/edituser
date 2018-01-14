import Vue from "../node_modules/vue/dist/vue.js";
import VueRouter from "vue-router";
import Vuex from "vuex";

Vue.use(VueRouter);
Vue.use(Vuex);

import routes from "./routes/index.js";
import store from './stores/index.js';

const router = new VueRouter({mode: 'hash', routes});

window.app = new Vue({
    el: '#root',
    router,
    store: new Vuex.Store(store)
})