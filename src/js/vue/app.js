/*==========  All requires  =========*/
//files and plagins
var Vue = require('vue/dist/vue.js');
var VueResource = require('../vue-resource');
var VueBar = require('../vuebar');

//components
var miniCompare = require('./components/mini-compare.vue');
var miniBasket = require('./components/mini-basket.vue');
var goodV = require('./components/good-v.vue');
var goodH = require('./components/good-h.vue');
var filter = require('./components/filter.vue');
var goodList = require('./components/good-list.vue');


Vue.use(VueResource);
Vue.use(VueBar);
/*==========  Components  =========*/
Vue.component('mini-compare', miniCompare);
Vue.component('mini-basket', miniBasket);
Vue.component('filter-component', filter);
Vue.component('good-list', goodList);
Vue.component('good-item-v', goodV);
Vue.component('good-item-h', goodH);

/*==========  end components  =========*/
/*==========  Main Vue Exemplar  =========*/

// создание корневого экземпляра
var ListComponent = new Vue({
  el: '#app',
});

/*==========  end Main Vue Exemplar  =========*/