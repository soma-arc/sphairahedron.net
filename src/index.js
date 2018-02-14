import Vue from 'vue';
import Buefy from 'buefy';
import Root from './vue/root.vue';
import 'buefy/lib/buefy.css'
import VueLazyload from 'vue-lazyload'

window.addEventListener('load', () => {
    Vue.use(Buefy);
    Vue.use(VueLazyload, {
        loading: 'img/loading.gif',
    });
    window.Vue = Vue;

    const d = {};

    /* eslint-disable no-unused-vars */
    const app = new Vue({
        el: '#vue-ui',
        data: d,
        render: (h) => {
            return h('root', { 'props': d });
        },
        components: { 'root': Root }
    });
});
