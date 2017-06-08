
Vue.use(VueResource);

/*==========  Components  =========*/

// filter-chosen
var filterChosen = {
	template: `
	<div class="filter__box">
		<p class="filter__title">
			Вы выбрали
		</p>
		<ul class="filter__list2">
			<li class="filter__chose">
				<span class="filter__chosen">
					<a href="" class="filter__delete">
						<img src="img/close.svg" alt="">
					</a>
					Обратный осмос
				</span>
			</li>
			<li class="filter__chose">
				<span class="filter__chosen">
					<a href="" class="filter__delete">
						<img src="img/close.svg" alt="">
					</a>
					Мембранный
				</span>
			</li>
			<li class="filter__chose">
				<span class="filter__chosen">
					<a href="" class="filter__delete">
						<img src="img/close.svg" alt="">
					</a>
					Проточный
				</span>
			</li>
		</ul>
		<a href="#" class="filter__deleteall">
			Очистить весь фильтр
			<img src="img/clear-ic.png" alt="" class="filter__deleteall--img">
			<img src="img/clear-ic-h.png" alt="" class="filter__deleteall--img-h">
		</a>
	</div>
	`,
	data: function() {
		return {
			
		}
	}
}

// filter-item
var filterItem = {
	props: ["thisFilter"],
	template: `
	<div class="filter__box">
		<a href="#" class="filter__title">
			{{thisFilter.name}}
			<img src="img/list-arr.png" alt="">
		</a>
		<div class="filter__drop">
			<ul class="filter__list"  v-bind:class="{'filter__list--cut' : listClasses.cut}">
				<li class="filter__item"  v-for="item in thisFilter.options" >
					<a href="javascript:void(0);" class="filter__link"  v-on:click="toChose(item.option)">
						Наша вода ({{item.option}})
						(<span class="filter__amount">7</span>)
					</a>
				</li>
			</ul>
			<a href="javascript:void(0);" class="filter__more" v-show="hideMoreBtn(thisFilter.options)"  v-on:click="showOptions">
				Показать все
				<img src="img/list-arr.png" alt="">
			</a>	
		</div>
	</div>
	`,
	data: function() {
		return {
			ChosenFilters: [],
			listClasses: {
				cut: true
			}
		}
	},

	methods: {
		showOptions: function(e) {
			this.listClasses.cut = !this.listClasses.cut
		},

		hideMoreBtn: function(prop) {
			if(prop.length > 5){
				return true
			}else{
				return false
			}
		},

		toChose: function(prop) {
			console.log(prop);
			this.$emit('toChose')
		}
	}

}

// filter-item-v
Vue.component('good-item-v', {
	props: ["thisGood"],
  template: `
		<div class="good-v">
			<div class="label label--sale"  v-show="!thisGood.new">
				sale
			</div>
			<div class="label label--new"  v-show="thisGood.new">
				new
			</div>
			<div class="good-status  good-status--ok" v-show="thisGood.availability">
				В наличии 
				<img src="img/status-good.png" alt="">
			</div>
			<div class="good-status  good-status--no" v-show="!thisGood.availability">
				Под заказ 
				<img src="img/status-good.png" alt="">
			</div>
			<div class="good-v__pict">
				<img  v-bind:src="thisGood.photo" alt="">
			</div>
			<div class="good-v__cont">
				<p class="good-v__name">
					<a href="">
						{{thisGood.name}}
					</a>
					
							
				</p>
				<p class="good-v__desc">
					{{thisGood.description}}
				</p>
				<p class="good-v__code">
					<a href="">
						Код {{thisGood.code}}
					</a>
					<span href="" class="guarantee﻿-link">
						гарантия {{thisGood.garantee}}
					</span>		
				</p>
			</div>
			<div class="good-v__foot">
				<p class="good-v__price">
					{{thisGood.actualyPrice}}
					<span class="good-v__price--font">
						грн
					</span>
					<span class="good-v__price--old">
						{{thisGood.oldPrice}}
					</span>
				</p>
				<p class="good-v__basket">
					<a href="#">
								
					</a>
				</p>
			</div>
			<div class="good-v__foot2">
				<div class="review">
					<div class="rate_row">
						<span class="rate_star" data-value="1"></span> <!-- Single Star -->
						<span class="rate_star" data-value="2"></span>
						<span class="rate_star" data-value="3"></span>
						<span class="rate_star" data-value="4"></span>
						<span class="rate_star" data-value="5"></span>
						<input type="hidden" class="get_star" value="">
					</div> 
					<div class="review__link">
						<a href="#">Отзывы</a>
						<span class="review__number">
							{{thisGood.reviews}}
						</span>
					</div>
				</div>
				<div class="compare">
					<a href="" class="compare__add">
						в сравнение
						<img src="img/balance.svg" alt="" width="20px" height="16px">
					</a>
					<a href="" class="compare__open">
						сравнить
						<img src="img/balance-blue.svg" alt="" width="20px" height="16px">
					</a>
				</div>

			</div>

			<div class="good-v__foot3">
				<div class="progress">
					<div class="progress__row">
						<div class="progress__name">
							Качество
						</div>
						<div class="progress__line">
							<div class="progress__qual  progress__num"  v-bind:style="{ width: thisGood.opt1 +'%' }">
								
							</div>
						</div>
					</div>
					<div class="progress__row">
						<div class="progress__name">
							Экономичность
						</div>
						<div class="progress__line">
							<div class="progress__economic progress__num"   v-bind:style="{ width: thisGood.opt2 +'%'}">
								
							</div>
						</div>
					</div>
					<div class="progress__row">
						<div class="progress__name">
							Удобство
						</div>
						<div class="progress__line">
							<div class="progress__conv progress__num"  v-bind:style="{ width: thisGood.opt3 +'%'}" >
								
							</div>
						</div>
					</div>
					<div class="progress__row">
						<div class="progress__name">
							Надежность
						</div>
						<div class="progress__line">
							<div class="progress__reliab progress__num"  v-bind:style="{ width: thisGood.opt4 +'%'}">
								
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
  `
})

// filter-item-h
Vue.component('good-item-h', {
	props: ["thisGood"],
  template: `
		<div class="good-h  good-h--list">
			<div class="good-h__left">
			<div class="label label--sale"   v-show="!thisGood.new" >
				sale
			</div>
			<div class="label label--new"  v-show="thisGood.new" >
				new
			</div>
				<div class="pict-box ">
					<img  v-bind:src="thisGood.photo" alt="">
				</div>
				<div class="review">
					<div class="rate_row">
						<span class="rate_star" data-value="1"></span> <!-- Single Star -->
						<span class="rate_star" data-value="2"></span>
						<span class="rate_star" data-value="3"></span>
						<span class="rate_star" data-value="4"></span>
						<span class="rate_star" data-value="5"></span>
						<input type="hidden" class="get_star" value="">
					</div> 
					<div class="review__link">
						<a href="#">Отзывы</a>
						<span class="review__number">
							{{thisGood.reviews}}
						</span>
					</div>
				</div>
			</div>
			<div class="good-h__right">
				<div class="good-h__box">
					<div class="good-h__head">
					<div class="good-status  good-status--ok"  v-show="thisGood.availability">
						В наличии 
						<img src="img/status-good.png" alt="">
					</div>
					<div class="good-status  good-status--no"  v-show="!thisGood.availability">
						Под заказ 
						<img src="img/status-good.png" alt="">
					</div>

					<div class="guarantee﻿-link">
						гарантия {{thisGood.garantee}}
					</div>
						<div class="good-title">
							<p class="good-title__code">
								<a href="">Код {{thisGood.code}}</a>
							</p>
							<div class="good-title__name">
								{{thisGood.name}}
							</div>
							<div class="good-title__desc">
								{{thisGood.description}}
							</div>
						</div>
					</div>
					<div class="good-h__content">
						<div class="good-h__progress">	
							<div class="progress">
								<div class="progress__row">
									<div class="progress__name">
										Качество
									</div>
									<div class="progress__line">
										<div class="progress__qual  progress__num"  v-bind:style="{ width: thisGood.opt1 +'%' }">
											
										</div>
									</div>
								</div>
								<div class="progress__row">
									<div class="progress__name">
										Экономичность
									</div>
									<div class="progress__line">
										<div class="progress__economic progress__num"  v-bind:style="{ width: thisGood.opt2 +'%' }">
											
										</div>
									</div>
								</div>
								<div class="progress__row">
									<div class="progress__name">
										Удобство
									</div>
									<div class="progress__line">
										<div class="progress__conv progress__num" v-bind:style="{ width: thisGood.opt3 +'%' }">
											
										</div>
									</div>
								</div>
								<div class="progress__row">
									<div class="progress__name">
										Надежность
									</div>
									<div class="progress__line">
										<div class="progress__reliab progress__num" v-bind:style="{ width: thisGood.opt4 +'%' }">
											
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="good-h__benef ">
							<ul class="benefict">
								<li>
									<div class="benefict__left">
										Тип фильтрации:
									</div>
									<div class="benefict__right">
										{{thisGood.filtration}}
									</div>
								</li>
								<li>
									<div class="benefict__left">
										Размещение:
									</div>
									<div class="benefict__right">
										{{thisGood.placement}}
									</div>
								</li>
								<li>
									<div class="benefict__left">
										Кол-во очистки:
									</div>
									<div class="benefict__right">
										{{thisGood.numOfClean}}
									</div>
								</li>
								<li>
									<div class="benefict__left">
										Производительность, л/сут.:
									</div>
									<div class="benefict__right">
										{{thisGood.performance}}
									</div>
								</li>
								<li>
									<div class="benefict__left">
										Тип колб:
									</div>
									<div class="benefict__right">
										{{thisGood.flasks}}
									</div>
								</li>
								<li>
									<div class="benefict__left">
										Габариты (ш/в/г) мм:
									</div>
									<div class="benefict__right">
										{{thisGood.dimension}}
									</div>
								</li>
							</ul>
						</div>	
					</div>
				</div>
				<div class="good-h__box2">
					<div class="good-status  good-status--ok">
						В наличии 
						<img src="img/status-good.png" alt="">
					</div>
					<div class="good-status  good-status--no">
						Под заказ 
						<img src="img/status-good.png" alt="">
					</div>
					<div class="good-h__price">
						<p class="good-v__price">
							{{thisGood.actualyPrice}} 
							<span class="good-v__price--font">
								грн
							</span>
							<span class="good-v__price--old">
								{{thisGood.oldPrice}}
							</span>
						</p>
					</div>
					<a href="#" class="btn--red">
						купить
						<img src="img/shopping-cart-white.svg" alt="">
					</a>
					<a href="basket.html" class="good-h__fast">
						купить в один клик
					</a>
					<div class="compare">
						<a href="" class="compare__add">
							в сравнение
							<img src="img/balance.svg" alt="" width="20px" height="16px">
						</a>
						<a href="" class="compare__open">
							сравнить
							<img src="img/balance-blue.svg" alt="" width="20px" height="16px">
						</a>
					</div>
				</div>
			</div>
		</div>
  `
})

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
		name: "Страна",
		options: [
			{option: 'Украина'}, 
			{option: "Польша"}, 
			{option: "Германия"},
			{option: "США"},
			{option: "Новая Гвинея"},
			{option: "Зимбабве"}
		]
	},
	{
		name: "Обьем",
		options: [
			{option: 'Стандартые'}, 
			{option: "Увеличеные"}, 
			{option: "Уменьшеные"}
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
	        /*this.goods = response.data;*/ //данные из базы вставляем в data Vue
	        console.log(response)
	      },
	      function (response) { // Error.
	        console.log('An error occurred.');
	      }
	    );
	  },

	  addFilter: function() {

	  }
  },

  created: function(){
  	this.getGoods()
  },

  components: {
  	"filter-chosen" : filterChosen,
  	"filter-item" : filterItem
  }

});

/*========== end Main Vue Exemplar  =========*/