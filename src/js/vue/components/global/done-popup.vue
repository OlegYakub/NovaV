<template>
  <div class="done-popup__overlay" v-if="showEl">
		<div class="done-popup">
			<div class="done-popup__text">
				{{text}}
			</div>
			<div class="done-popup__img">
				<img src="img/check-popup.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
  module.exports = {
    data: function() {
      return {
        showEl: false,
        text: ''
      }
    },

    methods: {
      show: function() {
        var ww = document.documentElement.clientWidth;
        var self = this;

        if(ww < 743){
          this.$root.$on('in-basket', function(){
            self.showEl = true;
            self.text = "Товар успешно добавлен в корзину"
            setTimeout(function(){self.showEl = false}, 1000)
          });

          this.$root.$on('in-compare', function(){
            self.showEl = true;
            self.text = "Товар успешно добавлен в сравнение";
            setTimeout(function(){self.showEl = false}, 1000);
          });
        }
      }
    },

    mounted: function() {
      this.show();
		}
  }
</script>