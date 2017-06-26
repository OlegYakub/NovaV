<template>
  <li class="m-search__item"  >
    <a href="" class="m-search__link" @click.prevent="showOptions" :class="{'m-search__link--z': showOpt}">
      {{thisParametr.name}}
      <img src="img/list-arr.png" alt="" v-show="!showOpt">
      <img src="img/red-arr-up.png" alt="" v-show="showOpt">
    </a>
    <div class="m-search-sub"  v-show="showOpt">
      <div class="m-search-sub__top">
        <!--a  href="" class="m-search-sub__name" @click.prevent="showOptions">
          <span >{{thisParametr.name}}</span>
          <img src="img/red-arr-up.png" alt="">
        </a-->
      </div>
      <ul class="m-search-sub__list">
        <li class="m-search-sub__item" v-for="item in thisParametr.options">
          <div  class="m-search-sub__link" 
                v-on:click="toChose(item)" 
                v-bind:class="{
                  'm-search-sub__link--chosen': item.chosen,
                }">
            <div>{{item.name}}</div>
            <div>
            <img src="img/close-small.svg" alt="" >
            </div>
          </div>
        </li> 
      </ul>
      
    </div>    
  </li>
</template>

<script>
  module.exports = {
    props: ['thisParametr'],
    data: function() {
      return {
        showOpt: false,
      }
    },

    methods: {
      showOptions: function() {
        this.showOpt = !this.showOpt
      },

      toChose: function(prop) {
        prop.chosen = !prop.chosen;
        if(prop.chosen == true){
          this.$root.$emit('to-сhose-parametr', prop);
        }
        else{
          this.$root.$emit('to-remove-parametr', prop);
        }
      },
    },

    mounted: function() {
      var thisParametr = this.thisParametr;
      this.$root.$on('remove-parametr', function(item){
        item.chosen = false;
			});
      this.$root.$on('remove-all-parametr', function(){
        thisParametr.options.forEach(function(element){
          element.chosen = false;
        })
			});
    },
  }
</script>

<style>

</style>