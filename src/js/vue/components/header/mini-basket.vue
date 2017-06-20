<template>
  <li href="#"  class="header__shop">
    <a href="">
      <img src="img/shopping-cart.svg" alt="">
      <div class="header__numb" v-show="toBuy.length">
        <span >{{toBuy.length}}</span>
      </div>
    </a>
    <div class="trash-modal" v-show="toBuy.length" v-bind:class="{ 'trash-modal--visible': showEl }">
        <div v-bar>
          <div class="trash-modal__list">
            <div class="trash-modal__item" v-for="item in toBuy">
              <div class="trash-modal__close">
                <a href="" @click.prevent="removeEmit(item)">
                  <img src="img/close-trash.svg" alt="">
                </a>
              </div>
              <div class="trash-modal__body">
                <div class="trash-modal__top">
                  <div class="trash-modal__pict">
                    <img v-bind:src="item.data.photo" alt="">
                  </div>
                  <div class="trash-modal__cont">
                    <p class="trash-modal__name">
                      {{item.data.name}} {{item.data.description}}
                    </p>
                    <p class="trash-modal__code">		
                      {{item.data.code}}
                    </p>
                  </div>
                </div>
                <div class="trash-modal__bot">
                  <div class="trash-modal__price">
                    {{item.data.actualyPrice}}
                    <span>грн</span>
                  </div>
                  <div class="trash-modal__quan">
                    {{item.quan}} шт
                  </div>
                  <div class="trash-modal__price2">
                    {{item.data.actualyPrice * item.quan}}
                    <span>грн</span>
                  </div>
                </div>
              </div>	

            </div>
          </div>
        </div>
        
        <div class="trash-modal__footer">
          <div class="trash-modal__goto">
            <a href="">
              <img src="img/shopping-cart.svg" alt="" class="trash-modal__shoping">
              <span>
                Перейти в корзину
              </span>
              <img src="img/trash-arr.png" alt="">
            </a>	
          </div>
          <div class="trash-modal__total">
            <div class="trash-modal__total-w">
              итого:
            </div>
            <div class="trash-modal__total-p">
              {{calcTotal}} <span>грн</span>
            </div>
          </div>
          <a href="" class="trash-modal__btn">
            Оформить заказ
          </a>

        </div>
    </div>	
  </li>
</template>

<script>

  module.exports = {
    data: function() {
      return {
        toBuy: [],
        showEl: false,
      }
    },

    methods: {
      addToBuy: function() {
        var toBuy = this.toBuy;
        var self = this;
        
        this.$root.$on('in-basket', function(prop){
          

          var obj = {
            id: prop.id,
            data: prop,
            quan: 1,
          };
 
          for (var i = 0; i < toBuy.length; i++) {
            if (toBuy[i].id == prop.id) {
              var j = i;
            }
          }

          if(typeof j != 'undefined'){
            toBuy[j].quan +=1;
          }else{
            toBuy.push(obj);
          }

          self.showBasket();
          
          
        });
      },

      showBasket: function(){
        var ww = document.documentElement.clientWidth;
        var self = this;
        if(ww > 1170){
          self.showEl = true;
          setTimeout(function(){self.showEl = false}, 2000)
        }
      },

      removeEmit: function(item) {
        this.$root.$emit('from-basket', item)
      },

      removeFromBuy: function() {
        var toBuy = this.toBuy;
        this.$root.$on('from-basket', function(item){
          var index = toBuy.indexOf(item)
          toBuy.splice(index, 1)
        });
      }, 
    },

    computed: {
      calcTotal: function() {
        var result = 0;

        this.toBuy.forEach(function(currentValue){
          result = +result + +currentValue.data.actualyPrice* currentValue.quan
        })
        return result
      }
    },

    mounted: function() {
      this.addToBuy();
      this.removeFromBuy();
    },
  }
</script>