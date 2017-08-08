<template>
  <li class="m-search__item"  >
    <a href="" class="m-search__link" @click.prevent="showOptions" :class="{'m-search__link--z': thisParametr.showOpt}">
      {{thisParametr.name}}
      <img src="img/list-arr.png" alt="" v-show="!thisParametr.showOpt">
      <img src="img/red-arr-up.png" alt="" v-show="thisParametr.showOpt">
    </a>
    <div class="m-search-sub"  v-show="thisParametr.showOpt">
      <div class="m-search-sub__top">
      </div>
      <ul class="m-search-sub__list">
        <li class="m-search-sub__item" v-for="item in thisParametr.options">
          <div  class="m-search-sub__link" 
                v-on:click="toChose(item)" 
                v-bind:class="{
                  'm-search-sub__link--chosen': item.chosen,
                }">
            <div class="m-search-sub__text">{{item.name}}</div>
            <div class="m-search-sub__img">
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
      return {}
    },

    methods: {
      showOptions: function() {
        if(this.thisParametr.showOpt == false) this.$emit('hide-opt', this.thisParametr);
        else if(this.thisParametr.showOpt == true) this.thisParametr.showOpt = false;
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
      var self = this;

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