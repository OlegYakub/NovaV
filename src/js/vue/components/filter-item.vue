<template>
  <div class="filter__box">
		<a href="#" class="filter__title">
			{{thisFilter.name}}
			<img src="img/list-arr.png" alt="">
		</a>
		<div class="filter__drop">
			<ul class="filter__list"  v-bind:class="{'filter__list--cut' : cut}">
				<li class="filter__item  "  v-for="item in thisFilter.options" >
					<a href="javascript:void(0);" class="filter__link" v-on:click="toChose(item)" v-bind:class="{'filter__link--active': item.chosen}">
						Наша вода ({{item.option}})
						(<span class="filter__amount">7</span>)
					</a>
				</li>
			</ul>
			<a href="javascript:void(0);" class="filter__more" 
        v-show="hideMoreBtn(thisFilter.options)"  
        v-on:click="showOptions"
        v-bind:class="{'filter__more--active' : !cut}" >
				{{showMore}}
				<img src="img/list-arr.png" alt="">
			</a>	
		</div>
	</div>
</template>

<script>
  module.exports = {
		props: ["thisFilter"],
    data: function() {
      return {
        chosenFilters: [],
        cut: true,
        showMore: 'Показать все',
        //choseCounter: 0,
      }
    },

    methods: {
      showOptions: function() {
        this.cut = !this.cut;
        if(this.cut == true){
          this.showMore = "Показать все"
        }else{
          this.showMore = "Скрыть"
        }
      },  

      hideMoreBtn: function(prop) {
        if(prop.length > 5){
          return true
        }else{
          return false
        }
      },

      toChose: function(prop) {
        this.$emit('toChose');
        prop.chosen = !prop.chosen;
        
        console.log(prop.option);
        if(prop.chosen == true){
          this.chosenFilters.push(prop.option);
        }else{
          for (var i = 0; i < this.chosenFilters.length; i++) {
            if(prop.option == this.chosenFilters[i]){
              this.chosenFilters.splice(i, 1);
            }
          }
        }

        console.log(prop.chosen);
        console.log("Выбранные фильтры :" + this.chosenFilters);
      }
    }
	}
</script>