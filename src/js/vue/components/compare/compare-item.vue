<template>
  <div class="comparing__col">
    <div class="comp-card">
      <div class="good-short">
        <a href="" class="comp-card__close" @click.prevent="$emit('from-compare')">
          <img src="img/close-aside.png" alt="">
        </a>
        <div class="pict-box">
          <img  v-bind:src="thisCompare.photo" alt="">
        </div>
        <div class="good-short__right">
          <p class="good-short__name">
            <a href="">
              {{thisCompare.name}}
            </a>
          </p>
          <p class="good-short__desc">
            {{thisCompare.description}}
          </p>
          <p class="good-title__code  ">
            <a href="">Код {{thisCompare.code}}</a>
          </p>
        </div>
      </div>
      <div class="good-v__foot">
        <p class="good-v__price">
          {{thisCompare.actualyPrice}} 
          <span class="good-v__price--font">
            грн
          </span>
          <span class="good-v__price--old"  v-if="thisCompare.new == false">
           {{thisCompare.oldPrice}}
          </span>
        </p>
        <p class="good-v__basket">
          <a href="#" @click.prevent="inBasket"></a>
        </p>
      </div>
      <div class="good-v__foot2">
        <div class="review">
          <star-rating 
            :star-size="16" 
            :read-only="true"
            :rating="thisCompare.rating"
            active-color="#7fabc6">
        </star-rating>
          <div class="review__link">
            <a href="#">Отзывы</a>
            <span class="review__number">
              {{thisCompare.reviews}}
            </span>
          </div>
        </div>
      </div>
      <div class="good-v__foot3">
        <div class="progress">
          <div class="progress__row">
            <div class="progress__name">
              Качество
            </div>
            <div class="progress__line">
              <div class="progress__qual  progress__num" v-bind:style="{ width: thisCompare.opt1 +'%' }"></div>
            </div>
          </div>
          <div class="progress__row">
            <div class="progress__name">
              Экономичность
            </div>
            <div class="progress__line">
              <div class="progress__economic progress__num" v-bind:style="{ width: thisCompare.opt2 +'%' }"></div>
            </div>
          </div>
          <div class="progress__row">
            <div class="progress__name">
              Удобство
            </div>
            <div class="progress__line">
              <div class="progress__conv progress__num" v-bind:style="{ width: thisCompare.opt3 +'%' }" ></div>
            </div>
          </div>
          <div class="progress__row">
            <div class="progress__name">
              Надежность
            </div>
            <div class="progress__line">
              <div class="progress__reliab progress__num" v-bind:style="{ width: thisCompare.opt4 +'%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class="comparing__table  ">
      <li class="comparing__param" v-for="item in thisCompare.parametrs">
        {{item.paramName}}
      </li>
      <!--<li class="comparing__param">
        {{thisCompare.parametrs.numOfClean}}
      </li>
      <li class="comparing__param">
        {{thisCompare.parametrs.tapStyle}}
      </li>
      <li class="comparing__param">
        {{thisCompare.parametrs.material}}
      </li>
      <li class="comparing__param">
        {{thisCompare.parametrs.tankVolume}}
      </li>
      <li class="comparing__param">
        {{thisCompare.parametrs.specialDiferentes}}
      </li>
      <li class="comparing__param">
        {{thisCompare.parametrs.performance}}
      </li>
      <li class="comparing__param">
        {{thisCompare.parametrs.pressure}}
      </li>
      <li class="comparing__param">
        {{thisCompare.parametrs.placement}}
      </li>
      <li class="comparing__param">
        {{thisCompare.parametrs.weight}}
      </li>-->
    </ul>
  </div>
</template>

<script>
  module.exports = {
    props: ["thisCompare"],
    methods: {
      inBasket: function() {
				this.$root.$emit('in-basket', this.thisCompare);
			},
    },
  }
</script>