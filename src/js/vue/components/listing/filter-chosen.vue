<template>
  <div class="filter__box" v-if="chosenFilters.length">
		<p class="filter__title">
			Вы выбрали
		</p>
		<ul class="filter__list2">
			<li class="filter__chose" v-for="item in chosenFilters">
				<span class="filter__chosen">
					<a href="" class="filter__delete" v-on:click.prevent="removeFilter(item)">
						<img src="img/close.svg" alt="">
					</a>
					{{item.name}}
				</span>
			</li>
		</ul>
		<a href="#" class="filter__deleteall" v-on:click.prevent="clearFilters">
			Очистить весь фильтр
			<img src="img/clear-ic.png" alt="" class="filter__deleteall--img">
			<img src="img/clear-ic-h.png" alt="" class="filter__deleteall--img-h">
		</a>
	</div>
</template>

<script>
  module.exports = {
    data: function() {
      return {
        chosenFilters: [],
      }
    },

		methods: {
			removeFilter: function(item) {
				var index = this.chosenFilters.indexOf(item)
				this.chosenFilters.splice(index, 1)
				this.$root.$emit('remove-filter', item)
			},
			
			clearFilters: function(){
				this.chosenFilters.splice(0, this.chosenFilters.length)
				this.$root.$emit('remove-all-filter')
			}
		},

		mounted: function() {
			var chosenFilters = this.chosenFilters;
			
			this.$root.$on('to-сhose', function(prop){
				chosenFilters.push(prop);
			});

			this.$root.$on('to-remove', function(prop){
				for (var i = 0; i < chosenFilters.length; i++) {
					if(prop == chosenFilters[i]){
						chosenFilters.splice(i, 1);
					}
				}
			});
		}
  }
</script>