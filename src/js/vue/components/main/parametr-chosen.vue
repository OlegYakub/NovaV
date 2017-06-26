<template>
  <div class="m-search-chos" v-show="chosenParametrs.length">
    <div class="m-search__title">
        Вы выбрали:
        <button @click.prevent="clearParametrs">
          Очистить все
          <img src="img/close-grey.svg" alt="">
        </button>
    </div>

    <div class="m-search-chos__content">
      <ul class="m-search-chos__list">
        <li class="m-search-chos__item" v-for="item in chosenParametrs">
          <div class="m-search-chos__link">
            {{item.name}}
            <a href="" @click.prevent="removeParametrs(item)">
              <img src="img/close.svg" alt="">
            </a>
          </div>
        </li>
        
        <a href="" class="m-search-chos__btn btn--red ">
          подобрать фильтр
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data: function() {
      return {
        chosenParametrs: [],
      }
    },

    methods: {
      removeParametrs: function(item) {
				var index = this.chosenParametrs.indexOf(item)
				this.chosenParametrs.splice(index, 1)
				this.$root.$emit('remove-parametr', item)
			},
			
			clearParametrs: function(){
				this.chosenParametrs.splice(0, this.chosenParametrs.length)
				this.$root.$emit('remove-all-parametr')
			}
    },

    mounted: function() {
			var chosenParametrs = this.chosenParametrs;
			
			this.$root.$on('to-сhose-parametr', function(prop){
				chosenParametrs.push(prop);
			});

			this.$root.$on('to-remove-parametr', function(prop){
				for (var i = 0; i < chosenParametrs.length; i++) {
					if(prop == chosenParametrs[i]){
						chosenParametrs.splice(i, 1);
					}
				}
			});
		}
  }
</script>