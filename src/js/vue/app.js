/*==========  All requires  =========*/
var Vue = require('vue/dist/vue.js');
var VueResource = require('../vue-resource');
var goodV = require('./components/good-v.vue');
var goodH = require('./components/good-h.vue');
var filterChosen = require('./components/filter-chosen.vue');
var filterItem = require('./components/filter-item.vue');


Vue.use(VueResource);
/*==========  Components  =========*/

Vue.component('good-item-v', goodV);
Vue.component('good-item-h', goodH);

/*==========  end components  =========*/
/*==========  data  =========*/

//массив товаров
var goods = [
	{
		photo: "img/good2.jpg",
		name: "Bluefilters New Line RO-9PAF",
		description: "Фильтр обратного осмоса",
		code: '03-39-11s',
		garantee: "112 лет",
		actualyPrice: "5770",
		oldPrice: "6770",
		new: true,
		availability: true,
		opt1: 20,
		opt2: 40,
		opt3: 40,
		opt4: 100,
		reviews: 10,
		country: "ukraine",
		filtration: "Обратный осмос",
		placement: "Под мойкой",
		numOfClean: 5,
		performance: 285,
		flasks: 'Универсальный',
		dimension: '340x145x440',

	},
	{
		photo: "img/good1.jpg",
		name: "Bluefilters ",
		description: "Фильтр еще какого нибуть осмоса",
		code: '73-39-11s',
		garantee: "2 лет",
		actualyPrice: "15770",
		oldPrice: "16770",
		new: false,
		availability: false,
		opt1: 100,
		opt2: 60,
		opt3: 40,
		opt4: 80,
		reviews: 1,
		country: "poland",
		filtration: "Обратный братный осмос",
		placement: "На стене",
		numOfClean: 2,
		performance: 1285,
		flasks: 'Уменьшенные',
		dimension: '1340x145x1440',
	}
]

//массив фильтров
var filters = [
	{
		name: "Производитель",
		options: [
			{name: "Наша вода (Украина)" , chosen: false}, 
			{name: "Nasza woda (Польша)", chosen: false }, 
			{name: "unser Wasser (Германия)", chosen: false},
			{name: "Our water (США)", chosen: false},
			{name: "हमारे पानी (Индия)" , chosen: false},
			{name: "amanzi ethu (Зимбабве)", chosen: false}
		]
	},
	{
		name: "Обьем",
		options: [
			{name: 'Стандартые', chosen: false}, 
			{name: "Увеличеные", chosen: false}, 
			{name: "Уменьшеные", chosen: false}
		]
	}
]

/*==========  end data  =========*/
/*==========  Main Vue Exemplar  =========*/

// создание корневого экземпляра
var ListComponent = new Vue({
  el: '#good-list',
  data: {
  	goods: goods,
  	viewBox: true,
  	filters: filters,
  },

  methods: {
  	toggleView: function (e) {
  		this.viewBox = !this.viewBox;
  		e.preventDefault();
  	},

  	getGoods: function() {
	    // GET /users
	    this.$http.post('https://jsonplaceholder.typicode.com/posts').then( //запрос на url
	      function (response) { // Success.
	        //this.goods = response.data; //данные из базы вставляем в data Vue
	        //console.log(response)
	      },
	      function (response) { // Error.
	        console.log('An error occurred.');
	      }
	    );
	  },

	  /*addFilter: function(prop) {
			console.log(prop)
		},*/
  },

  created: function(){
  	this.getGoods()
  },

  components: {
  	"filter-chosen" : filterChosen,
  	"filter-item" : filterItem
  }

});

/*==========  end Main Vue Exemplar  =========*/