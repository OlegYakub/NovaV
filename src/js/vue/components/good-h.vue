<template>
  <div class="good-h  good-h--list">
    <div class="good-h__left">
    <div class="label label--sale"   v-show="!thisGood.new" >
      sale
    </div>
    <div class="label label--new"  v-show="thisGood.new" >
      new
    </div>
      <div class="pict-box ">
        <img  v-bind:src="thisGood.photo" alt="">
      </div>
      <div class="review">
        <div class="rate_row">
          <span class="rate_star" data-value="1"></span> <!-- Single Star -->
          <span class="rate_star" data-value="2"></span>
          <span class="rate_star" data-value="3"></span>
          <span class="rate_star" data-value="4"></span>
          <span class="rate_star" data-value="5"></span>
          <input type="hidden" class="get_star" value="">
        </div> 
        <div class="review__link">
          <a href="#">Отзывы</a>
          <span class="review__number">
            {{thisGood.reviews}}
          </span>
        </div>
      </div>
    </div>
    <div class="good-h__right">
      <div class="good-h__box">
        <div class="good-h__head">
        <div class="good-status  good-status--ok"  v-show="thisGood.availability">
          В наличии 
          <img src="img/status-good.png" alt="">
        </div>
        <div class="good-status  good-status--no"  v-show="!thisGood.availability">
          Под заказ 
          <img src="img/status-good.png" alt="">
        </div>

        <div class="guarantee﻿-link">
          гарантия {{thisGood.garantee}}
        </div>
          <div class="good-title">
            <p class="good-title__code">
              <a href="">Код {{thisGood.code}}</a>
            </p>
            <div class="good-title__name">
              {{thisGood.name}}
            </div>
            <div class="good-title__desc">
              {{thisGood.description}}
            </div>
          </div>
        </div>
        <div class="good-h__content">
          <div class="good-h__progress">	
            <div class="progress">
              <div class="progress__row">
                <div class="progress__name">
                  Качество
                </div>
                <div class="progress__line">
                  <div class="progress__qual  progress__num"  v-bind:style="{ width: thisGood.opt1 +'%' }">
                    
                  </div>
                </div>
              </div>
              <div class="progress__row">
                <div class="progress__name">
                  Экономичность
                </div>
                <div class="progress__line">
                  <div class="progress__economic progress__num"  v-bind:style="{ width: thisGood.opt2 +'%' }">
                    
                  </div>
                </div>
              </div>
              <div class="progress__row">
                <div class="progress__name">
                  Удобство
                </div>
                <div class="progress__line">
                  <div class="progress__conv progress__num" v-bind:style="{ width: thisGood.opt3 +'%' }">
                    
                  </div>
                </div>
              </div>
              <div class="progress__row">
                <div class="progress__name">
                  Надежность
                </div>
                <div class="progress__line">
                  <div class="progress__reliab progress__num" v-bind:style="{ width: thisGood.opt4 +'%' }">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="good-h__benef ">
            <ul class="benefict">
              <li>
                <div class="benefict__left">
                  Тип фильтрации:
                </div>
                <div class="benefict__right">
                  {{thisGood.filtration}}
                </div>
              </li>
              <li>
                <div class="benefict__left">
                  Размещение:
                </div>
                <div class="benefict__right">
                  {{thisGood.placement}}
                </div>
              </li>
              <li>
                <div class="benefict__left">
                  Кол-во очистки:
                </div>
                <div class="benefict__right">
                  {{thisGood.numOfClean}}
                </div>
              </li>
              <li>
                <div class="benefict__left">
                  Производительность, л/сут.:
                </div>
                <div class="benefict__right">
                  {{thisGood.performance}}
                </div>
              </li>
              <li>
                <div class="benefict__left">
                  Тип колб:
                </div>
                <div class="benefict__right">
                  {{thisGood.flasks}}
                </div>
              </li>
              <li>
                <div class="benefict__left">
                  Габариты (ш/в/г) мм:
                </div>
                <div class="benefict__right">
                  {{thisGood.dimension}}
                </div>
              </li>
            </ul>
          </div>	
        </div>
      </div>
      <div class="good-h__box2">
        <div class="good-status  good-status--ok">
          В наличии 
          <img src="img/status-good.png" alt="">
        </div>
        <div class="good-status  good-status--no">
          Под заказ 
          <img src="img/status-good.png" alt="">
        </div>
        <div class="good-h__price">
          <p class="good-v__price">
            {{thisGood.actualyPrice}} 
            <span class="good-v__price--font">
              грн
            </span>
            <span class="good-v__price--old">
              {{thisGood.oldPrice}}
            </span>
          </p>
        </div>
        <a href="#" class="btn--red">
          купить
          <img src="img/shopping-cart-white.svg" alt="">
        </a>
        <a href="basket.html" class="good-h__fast">
          купить в один клик
        </a>
        <div class="compare">
          <a href="" class="compare__add">
            в сравнение
            <img src="img/balance.svg" alt="" width="20px" height="16px">
          </a>
          <a href="" class="compare__open">
            сравнить
            <img src="img/balance-blue.svg" alt="" width="20px" height="16px">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
		props: ["thisGood"]
	}
</script>