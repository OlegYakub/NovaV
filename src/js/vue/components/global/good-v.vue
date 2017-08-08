<template>
  <div class="good-v">
		<div class="label label--sale"  v-if="!thisGood.new">
			sale
		</div>
		<div class="label label--new"  v-if="thisGood.new">
			new
		</div>
		<div class="good-status  good-status--ok" v-if="thisGood.availability">
			В наличии 
			<img src="img/status-good.png" alt="">
		</div>
		<div class="good-status  good-status--no" v-if="!thisGood.availability">
			Под заказ 
			<img src="img/status-good.png" alt="">
		</div>
		<div class="good-v__pict">
			<img  v-bind:src="thisGood.photo" alt="">
		</div>
		<div class="good-v__cont">
			<p class="good-v__name">
				<a href="">
					{{thisGood.name}}
				</a>			
			</p>
			<p class="good-v__desc">
				{{thisGood.description}}
			</p>
			<p class="good-v__code">
				<a href="">
					Код {{thisGood.code}}
				</a>
				<span href="" class="guarantee﻿-link">
					гарантия {{thisGood.garantee}}
				</span>		
			</p>
		</div>
		<div class="good-v__foot">
			<p class="good-v__price">
				{{thisGood.actualyPrice}}
				<span class="good-v__price--font">
					грн
				</span>
				<span class="good-v__price--old"  v-if="thisGood.new == false">
					{{thisGood.oldPrice}}
				</span>
			</p>
			<p class="good-v__basket">
				<a href="#" @click.prevent="inBasket" ></a>
			</p>
		</div>
		<div class="good-v__foot2">
			<div class="review">
				<star-rating 
            :star-size="16" 
            :read-only="true"
            :rating="thisGood.rating"
            active-color="#7fabc6">
        </star-rating>
				<div class="review__link">
					<a href="#">Отзывы</a>
					<span class="review__number">
						{{thisGood.reviews}}
					</span>
				</div>
			</div>
			<div class="compare">
				<a href="" class="compare__add" v-on:click.prevent="inCompare"  v-if="!thisGood.toCompare">
					в сравнение
					<img src="img/balance.svg" alt="" width="20px" height="16px">
				</a>
				<a href="" class="compare__open" v-if="thisGood.toCompare">
					сравнить
					<img src="img/balance-blue.svg" alt="" width="20px" height="16px">
				</a>
			</div>

		</div>

		<div class="good-v__foot3">
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
						<div class="progress__economic progress__num"   v-bind:style="{ width: thisGood.opt2 +'%'}">
							
						</div>
					</div>
				</div>
				<div class="progress__row">
					<div class="progress__name">
						Удобство
					</div>
					<div class="progress__line">
						<div class="progress__conv progress__num"  v-bind:style="{ width: thisGood.opt3 +'%'}" >
							
						</div>
					</div>
				</div>
				<div class="progress__row">
					<div class="progress__name">
						Надежность
					</div>
					<div class="progress__line">
						<div class="progress__reliab progress__num"  v-bind:style="{ width: thisGood.opt4 +'%'}">
							
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	module.exports = {
		props: ["thisGood"],
		data: function(){
			return {

			}
		},
		methods: {
			inBasket: function() {
				this.$root.$emit('in-basket', this.thisGood);
			},

			inCompare: function() {
				this.$root.$emit('in-compare', this.thisGood);

				this.thisGood.toCompare = true;
			},

			unCompare: function() {
				var self = this
				this.$root.$on('from-mini-compare', function(item){
					if(item.categoryId == self.thisGood.categoryId) self.thisGood.toCompare = false;	
				})
			}
		},

		mounted: function() {
			this.unCompare();
		}
	}
</script>