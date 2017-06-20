/*==========  All requires  =========*/
//files and plagins
var Vue = require('vue/dist/vue.js');
var VueResource = require('../vue-resource');
var VueValidator = require('vue-validator');
//var starRating = require('vue-star-rating');
var VueBar = require('../vuebar');
/*========= Components requires=======*/

//global
var donePopup = require('./components/global/done-popup.vue');
var goodV = require('./components/global/good-v.vue');
var goodH = require('./components/global/good-h.vue');

//header
var miniCompare = require('./components/header/mini-compare.vue');
var miniBasket = require('./components/header/mini-basket.vue');

//listing
var filter = require('./components/listing/filter.vue');
var goodList = require('./components/listing/good-list.vue');

//card
var comments = require('./components/card/comments.vue');


Vue.use(VueResource);
Vue.use(VueValidator);
Vue.use(VueBar);
/*==========  Components  =========*/
//Vue.component('star-rating', starRating);
Vue.component('done-popup', donePopup);
Vue.component('mini-compare', miniCompare);
Vue.component('mini-basket', miniBasket);
Vue.component('comments', comments);
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