<template>
  <div class="list__body">
    <p class="title">
      Фильтры обратного осмоca
    </p>
    <p class="list__desc">
      Очистка воды происходит через мембрану пористостью 0,00001 мкм, что равно размеру молекулы воды. После примеси попадают в сток, а очищеная вода в накопительный бак.
    </p>
    <a href="javascript:void(0);" class="list__btn-f">
      <span>Фильтры</span>
    </a>
    <div class="list__box">
      <div class="list__head">
        <div class="list__filt">
          <a href="#" class="list__switch list__switch--list" id="list-top-filter">
            {{fromWhat}}
            <img src="img/list-arr.png" alt="">
          </a>
          <div class="list__option">
            <a href="#" @click="fromPopular">
              популярные
            </a>
            <a href="#" @click="fromExpensive">
              от дорогих к дешевым 
            </a>
            <a href="#" @click="fromCheap">
              от дешевых к дорогим
            </a>
          </div>
        </div>
        <div class="list__view">
          <a href="" class="list__switch" v-bind:class="{ list__switchActive: !viewBox }" v-on:click="toggleView">
            <i class="fa fa-th-list" aria-hidden="true"></i>
            списком
          </a>
          <a href="" class="list__switch"  v-bind:class="{ list__switchActive: viewBox }" v-on:click="toggleView">
          <i class="fa fa-th-large" aria-hidden="true"></i>
            плиткой
          </a>
        </div>
      </div>
      <div class="list__area" >
        <good-item-v  
          v-for="(goodItem, index) in goods" 
          v-show="viewBox"  
          v-bind:key="goodItem" 
          v-bind:this-good="goodItem">	
        </good-item-v>
        <good-item-h  
          v-for="(goodItem, index) in goods"  
          v-show="!viewBox"  
          v-bind:key="goodItem" 
          v-bind:this-good="goodItem">			
        </good-item-h>
      </div>
    </div>
    <div class="list__more" v-bind:class="{'list__more--load': loaded}"  v-if="showMoreBtn()"><!--  класс list__more--load - вид загрузки карточек -->
      <a href="" @click.prevent="showMore">
        <span>показать ещё</span>
        <img src="img/load-ic.png" alt="">
      </a>
    </div>
    <div class="list__bottom">
      <div class="list__paginator" id="list-paginator">
        
      </div>
    </div>	
  </div>
</template>

<script>
  module.exports = {
    data: function() {
      return {
  	    viewBox: true,
        toShowQuan: 3,
        fromWhat: '',
        loaded: false,
        goods: goods,
        spliced: [],
      }
    },

    methods: {
      toggleView: function (e) {
        this.viewBox = !this.viewBox;
        e.preventDefault();
      },

      fromCheap: function() {
        this.fromWhat = "от дешевых к дорогим"
        this.goods.sort(function(a, b){
          if (+a.actualyPrice > +b.actualyPrice) {
            return 1;
          }
          if (+a.actualyPrice < +b.actualyPrice) {
            return -1;
          }
          return 0;
        });
      },

      fromExpensive: function() {
        this.fromWhat = "от дорогих к дешевым"
        this.goods.sort(function(a, b){
          if (+b.actualyPrice > +a.actualyPrice) {
            return 1;
          }
          if (+b.actualyPrice < +a.actualyPrice) {
            return -1;
          }
          return 0;
        });
      },

      fromPopular: function() {
        this.fromWhat = "популярные"
        this.goods.sort(function(a, b){
          if (b.popular > a.popular) {
            return 1;
          }
          if (b.popular < a.popular) {
            return -1;
          }
          return 0;
        });
      },

      getGoods: function() {
        // GET /users
        this.$http.post('https://jsonplaceholder.typicode.com/posts').then( //запрос на url
          function (response) { // Success.
            //this.goods = response.data; //данные из базы вставляем в data Vue
            console.log(response)
          },
          function (response) { // Error.
            console.log('An error occurred.');
          }
        );
      },

      spliceGoods: function() {
        var removed = this.goods.splice(this.toShowQuan, this.goods.length);
        this.spliced = removed.concat();
      },

      showMore: function() {
        this.loaded = true;
        var added = this.spliced.splice(0, this.toShowQuan);
        for (var i = 0; i < added.length; i++){
          this.goods.push(added[i]);
        }

        if(this.fromWhat == "популярные") this.fromPopular();
        if(this.fromWhat == "от дорогих к дешевым") this.fromExpensive();
        if(this.fromWhat == "от дешевых к дорогим") this.fromCheap();
        
        this.loaded = false;
      },

      showMoreBtn: function() {
        if(this.spliced.length){
          return true
        }else{
          return false
        }
      }

    },
    
    created: function(){
      this.getGoods();
      this.fromPopular();
      this.spliceGoods();
    },

    watch: {
      spliced: "showMoreBtn"
    },

  }
//массив товаров
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
		placement: "Под мойкой",
		numOfClean: 5,
		performance: 285,
		flasks: 'Универсальный',
		dimension: '340x145x440',
    popular: true,

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
		placement: "На стене",
		numOfClean: 2,
		performance: 1285,
		flasks: 'Уменьшенные',
		dimension: '1340x145x1440',
    popular: false,
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
		placement: "Под мойкой",
		numOfClean: 5,
		performance: 285,
		flasks: 'Универсальный',
		dimension: '340x145x440',
    popular: true,
	},
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
		placement: "Под мойкой",
		numOfClean: 5,
		performance: 285,
		flasks: 'Универсальный',
		dimension: '340x145x440',
    popular: true,

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
		placement: "На стене",
		numOfClean: 2,
		performance: 1285,
		flasks: 'Уменьшенные',
		dimension: '1340x145x1440',
    popular: false,
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
		placement: "Под мойкой",
		numOfClean: 5,
		performance: 285,
		flasks: 'Универсальный',
		dimension: '340x145x440',
    popular: true,
	},
  { 
    id: 4,
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
		placement: "Под мойкой",
		numOfClean: 5,
		performance: 285,
		flasks: 'Универсальный',
		dimension: '340x145x440',
    popular: true,

	},
]
</script>