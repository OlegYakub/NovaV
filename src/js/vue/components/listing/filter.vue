<template>
  <aside class="filter__aside">
    <div class="filter__wrap">
      <div class="filter">
        <filter-chosen></filter-chosen>
        <div class="filter__box">
          <p class="filter__title">
            Цена
          </p>
          <div class="filter__price">
            <div class="filter__range">
              
            </div>
            <div class="filter__inputs">
              <p>От</p>
              <input type="text" id="minCost" value="0"/>
              <p>До</p>
              <input type="text" id="maxCost" value="1000"/>
              <a href="" class="btn--blue  filter__btn">ОК</a>
            </div>
          </div>				
        </div>
        <filter-item 
          v-for="(filterItem, index) in filters"  
          v-bind:key="filterItem" 
          v-bind:this-filter="filterItem"
          ></filter-item>
      </div>
      <div class="filter__click">
        
      </div>
    </div>
  </aside>
</template>

<script>
import filterChosen from './filter-chosen.vue';
import filterItem from './filter-item.vue';

  module.exports = {
    data: function() {
      return {
        filters: filters,
      }
    },
    components: {
      "filter-chosen" : filterChosen,
      "filter-item" : filterItem,
    },

    methods: {
      getFilters: function() {
        // GET /users
        this.$http.post('https://jsonplaceholder.typicode.com/posts').then( //запрос на url
          function (response) { // Success.
            //this.filters = response.data; //данные из базы вставляем в data Vue
            //console.log(response)
          },
          function (response) { // Error.
            console.log('An error occurred.');
          }
        );
      },
    },

    created: function(){
      this.getFilters()
    },
  }

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
</script>