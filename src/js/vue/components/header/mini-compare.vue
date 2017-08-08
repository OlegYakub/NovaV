<template>
  <li href="#"  class="header__balance">
    <a href="">
      <img src="img/balance.svg" alt="">
      <div class="header__numb" v-if="toCompare.length">
        <span>{{toCompare.length}}</span>
      </div>
    </a>
    <div class="balance-modal"  v-if="toCompare.length"  v-bind:class="{ 'balance-modal--visible': showEl }">
      <ul>
        <li class="balance-modal__item"  v-for="item in toCompare">
          <a href="" class="balance-modal__text">
            <span class="balance-modal__name">
              {{item.category}}
            </span>
            (<span class="balance-modal__quan">
              {{item.quantity}}	
            </span>)
          </a>	
          <a href="" class="balance-modal__del" @click.prevent="removeEmit(item)">
            <img src="img/close-trash.svg" alt="">
          </a>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
  module.exports = {
    data: function() {
      return {
        toCompare: [],
        showEl: false,
      }
    },

    methods: {
      addToCompare: function() {
        var toCompare = this.toCompare;
        var self = this;

        this.$root.$on('in-compare', function(prop){

          var obj = {
            category: prop.category,
            categoryId: prop.categoryId,
            data: [prop],
            quantity: 1,
          }

          for (var i = 0; i < toCompare.length; i++) {
            if (toCompare[i].categoryId == prop.categoryId) {
              var j = i;
            }
          }

          if(typeof j != 'undefined'){
            toCompare[j].data.push(prop);
            toCompare[j].quantity +=1;
          }else{
            toCompare.push(obj);
          }

          self.showCompare();
        })
      },

      removeEmit: function(item) {
        this.$root.$emit('from-mini-compare', item)
      },

      removeFromCompare: function() {
        var toCompare = this.toCompare;
        this.$root.$on('from-mini-compare', function(item){
          var index = toCompare.indexOf(item)
          toCompare.splice(index, 1)
        });
      },

      showCompare: function(){
        var ww = document.documentElement.clientWidth;
        var self = this;
        if(ww > 1170){
          self.showEl = true;
          setTimeout(function(){self.showEl = false}, 2000)
        }
      },
    },

    mounted: function() {
      this.addToCompare();
      this.removeFromCompare();
    },
  }
</script>