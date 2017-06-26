<template>
  <div class="m-search__parametrs">
    <div class="m-search__title">
      Выберите параметры:
    </div>
    <ul class="m-search__list">
      <parametr-item
        v-for="(parametr, index) in parametrs"  
        v-bind:key="parametr" 
         v-bind:this-parametr="parametr"
      ></parametr-item>
      
    </ul>
    
  </div>
</template>

<script>
import parametrItem from './parametr-item.vue';

module.exports = {
  data: function() {
    return {
      parametrs: parametrs,
    }
  },

  components: {
    "parametr-item": parametrItem,
  },

  methods: {
    getParametrs: function() {
      // GET /users
      this.$http.post('https://jsonplaceholder.typicode.com/posts').then( //запрос на url
        function (response) { // Success.
          //this.parametrs = response.data; //данные из базы вставляем в data Vue
          //console.log(response)
        },
        function (response) { // Error.
          console.log('An error occurred.');
        }
      );
    },
  },

  created: function(){
    this.getParametrs()
  },

}

var parametrs = [
	{
		name: "Производитель",
		options: [
			{name: "Наша вода (Украина)" , chosen: false}, 
			{name: "Nasza woda (Польша)", chosen: false }, 
			{name: "unser Wasser (Германия)", chosen: false},
			{name: "Our water (США)", chosen: false},
			{name: "हमारे पानी (Индия)" , chosen: false},
			{name: "amanzi ethu (Зимбабве)", chosen: false},
      {name: "Наша вода (Украина)" , chosen: false}, 
			{name: "Nasza woda (Польша)", chosen: false }, 
			{name: "unser Wasser (Германия)", chosen: false},
			{name: "Our water (США)", chosen: false},
			{name: "हमारे पानी (Индия)" , chosen: false},
			{name: "amanzi ethu (Зимбабве)", chosen: false},
		]
	},
	{
		name: "Обьем",
		options: [
			{name: 'Стандартые', chosen: false}, 
			{name: "Увеличеные", chosen: false}, 
			{name: "Уменьшеные", chosen: false},
		]
	},
  {
		name: "Стиль крана",
		options: [
			{name: "Наша вода (Украина)" , chosen: false}, 
			{name: "Nasza woda (Польша)", chosen: false }, 
			{name: "unser Wasser (Германия)", chosen: false},
			{name: "Our water (США)", chosen: false},
			{name: "हमारे पानी (Индия)" , chosen: false},
			{name: "amanzi ethu (Зимбабве)", chosen: false},
		]
	},
	{
		name: "Этапы очистки",
		options: [
			{name: 'УФ - лампа', chosen: false}, 
			{name: "Базовый", chosen: false}, 
			{name: "Минерализатор", chosen: false},
			{name: "Биокерамика", chosen: false},
		]
	},
  {
		name: "Класс фильтра",
		options: [
			{name: "Бюджетный" , chosen: false}, 
			{name: "Средний", chosen: false }, 
			{name: "Премиум ", chosen: false},
		]
	},
	{
		name: "Тип колб",
		options: [
			{name: 'Легкосъемный', chosen: false}, 
			{name: "Универсальный", chosen: false}, 
		]
	},
  {
		name: "Размещение",
		options: [
			{name: "Под мойкой" , chosen: false}, 
			{name: "На столе", chosen: false }, 
			{name: "unser Wasser (Германия)", chosen: false},
		]
	},
	{
		name: "Обьем бака",
		options: [
			{name: 'До 10', chosen: false}, 
			{name: "До 12", chosen: false}, 
			{name: "Уменьшеные", chosen: false},
		]
	},
  {
		name: "Производитель",
		options: [
			{name: "От 381" , chosen: false}, 
			{name: "До 190", chosen: false }, 
			{name: "191 - 280", chosen: false},
			{name: "281 - 380", chosen: false},
		]
	},
	{
		name: "Обьем",
		options: [
			{name: 'Стандартые', chosen: false}, 
			{name: "Увеличеные", chosen: false}, 
			{name: "Уменьшеные", chosen: false},
		]
	},
	
] 
</script>