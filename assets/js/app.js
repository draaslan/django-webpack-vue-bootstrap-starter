window.$ = window.jQuery = require('jquery');
window.Tether = require('tether');
require('bootstrap');

import VueResource from 'vue-resource';
import Vue from 'vue/dist/vue';


window.Vue = Vue;
Vue.use(VueResource);

import Demo from './components/Demo.vue';
Vue.component('demo', Demo);

const app = new Vue({
    el: '#app'
});
