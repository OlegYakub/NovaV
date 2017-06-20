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
						{{item.name}}
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
        cut: true,
        showMore: 'Показать все',
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
        prop.chosen = !prop.chosen;

        if(prop.chosen == true){
          this.$root.$emit('to-сhose', prop);
        }
        else{
          this.$root.$emit('to-remove', prop);
        }
      },
    },

    mounted: function() {
      var thisFilter = this.thisFilter;
      this.$root.$on('remove-filter', function(item){
        item.chosen = false;
			});
      this.$root.$on('remove-all-filter', function(){
        thisFilter.options.forEach(function(element){
          element.chosen = false;
        })
			});
    },
	}
</script>