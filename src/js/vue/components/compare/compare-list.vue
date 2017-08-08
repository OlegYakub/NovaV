<template>
<div class="comparing">
  <div class="comparing__area">
    <div class="comparing__col-f">
      <div class="comp-add">
        <a href="" class="comp-add__btn">
          <div class="comp-add__plus">
            +
          </div>
          <div class="comp-add__add">Добавить товар</div>
        </a>
        <a href="#" class="comp-add__link">
          Остались вопросы?
        </a>
        <a href="#" class="comp-add__link">
          Необходима консультация?
        </a>
        <a href="#" class="comp-add__link  comp-add__text">
          Остались вопросы?
        </a>
        <button class="comp-add__call  btn--blue ">перезвоните мне</button>
      </div>
      <div class="comparing__tabs" v-if="compareList.length">
        <a href="" class="comparing__tab" >
          Все параметры
        </a>
        <a href="" class="comparing__tab comparing__diff  comparing__tab--active" @click.prevent="onlyDiff">
          Только различия
        </a>
      </div>
      <ul class="comparing__table  comparing__options" v-if="compareList.length">
        <li class="comparing__param" v-for="(parametr, index) in compareParametrs">
          {{parametr.parametrName}}
        </li>
      </ul>
    </div>
    <compare-item
      v-for="(compareItem, index) in compareList"  
      v-bind:key="compareItem" 
      v-bind:this-compare="compareItem"
      v-on:from-compare="compareList.splice(index, 1);"
    ></compare-item>
  </div>
</div>
</template>

<script>
import compareItem from './compare-item.vue';

module.exports = {
  data: function() {
    return {
      compareList: goods,
      compareParametrs: goodsParametrs,
    }
  },

  methods: {
    getCompareItems: function() {
      // GET /users
      this.$http.post('https://jsonplaceholder.typicode.com/posts').then( //запрос на url
        function (response) { // Success.
          //this.compareList = response.data; //данные из базы вставляем в data Vue
          //console.log(response)
        },
        function (response) { // Error.
          console.log('An error occurred.');
        }
      );
    },

    onlyDiff() {

      for (var i = 0; i < this.compareParametrs.length; i++){
        for (var j = 0; j < this.compareList.length; j++ ){
          var example = 
          console.log(this.compareList[j].parametrs[i].paramName);
        };
         
      };
      
    },
  },

  components: {
    "compare-item" : compareItem,
  },

  mounted: function() {
    this.getCompareItems();
  }
}

var goods = [
	{ 
    id: 1,
    category: "фильтры",
    categoryId: 10,
		photo: "img/good2.jpg",
		name: "Bluefilters New Line RO-9PAF",
		description: "Популярный Фильтр обратного осмоса",
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
		flasks: 'Универсальный',
    popular: true,
    rating: 1,
    /*parametrs: {
      placement: "Под мойкой",
      performance: 285,
      numOfClean: 5,
      dimension: '340x145x440',
      tapStyle: "Модерн",
      material: "Полиуретановый",
      tankVolume: 9,
      specialDiferentes: "Минерализатор",
      weight: 9,
      pressure: "2,8-5",
    }*/
    parametrs: [
      {paramName: "Под мойкой"},
      {paramName: 285},
      {paramName: 5},
      {paramName: '340x145x440'},
      {paramName: "Модерн"},
      {paramName: "Полиуретановый"},
      {paramName: 9},
      {paramName: "Минерализатор"},
      {paramName: 9},
      {paramName: "2,8-5"},
    ]
    
	},
	{ 
    id: 2,
    category: "фильтры",
    categoryId: 10,
		photo: "img/good1.jpg",
		name: "Bluefilters ",
		description: " Фильтр еще какого нибуть осмоса",
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
		flasks: 'Уменьшенные',
    popular: false,
    rating: 2,

    parametrs: [
      {paramName: "Под мойкой"},
      {paramName: 285},
      {paramName: 4},
      {paramName: '1340x145x440'},
      {paramName: "Модерн"},
      {paramName: "Полиуретановый"},
      {paramName: 9},
      {paramName: "Минерализатор"},
      {paramName: 9},
      {paramName: "2,8-5"},
    ]
    
   /* parametrs: {
      placement: "Под мойкой",
      performance: 285,
      numOfClean: 3,
      dimension: '1340x145x440',
      tapStyle: "Модерн",
      material: "Полиуретановый",
      tankVolume: 5,
      specialDiferentes: "Минерализатор",
      weight: 6,
      pressure: "2,3-5",
    },*/
	},
  { 
    id: 3,
    category: "Насосы",
    categoryId: 20,
		photo: "img/good2.jpg",
		name: "Bluefilters New Line RO-9PAF",
		description: "Популярный Фильтр обратного осмоса",
		code: '03-39-11s',
		garantee: "5 лет",
		actualyPrice: "12770",
		oldPrice: "13770",
		new: true,
		availability: false,
		opt1: 20,
		opt2: 40,
		opt3: 10,
		opt4: 100,
		reviews: 10,
		country: "ukraine",
		filtration: "Обратный осмос",
		flasks: 'Универсальный',
    popular: true,
    rating: 3,

    parametrs: [
      {paramName: "Под мойкой"},
      {paramName: 285},
      {paramName: 2},
      {paramName: '2340x145x440'},
      {paramName: "Модерн"},
      {paramName: "Полиуретановый"},
      {paramName: 6},
      {paramName: "Минерализатор"},
      {paramName: 29},
      {paramName: "2,8-5"},
    ]

    /*parametrs: {
      placement: "Под мойкой",
      performance: 285,
      numOfClean: 5,
      dimension: '340x145x440',
      tapStyle: "Модерн",
      material: "Полиуретановый",
      tankVolume: 9,
      specialDiferentes: "Минерализатор",
      weight: 9,
      pressure: "2,8-5",
    }*/
	},
]

var goodsParametrs = [
  {parametrName:'Габариты, мм'}, 
  {parametrName:'Количество этапов очистки'}, 
  {parametrName:'Стиль крана'}, 
  {parametrName:'Материал бака'},
  {parametrName:'Объем бака, л'}, 
  {parametrName:'Особые отличия'}, 
  {parametrName:'Производительность, л/сутки'},
  {parametrName:'Рабочее давление, атм'}, 
  {parametrName:'Размещение'}, 
  {parametrName:'Вес фильтр/бак кг'},
]
</script>