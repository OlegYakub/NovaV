<template>
  <div class="c-reviews__item">
    <div class="star-rating--mob">
      <star-rating 
        :star-size="20" 
        :read-only="true"
        :rating="thisMessage.rating"
        active-color="#7fabc6">
      </star-rating>
    </div> 
    <div class="c-reviews__head">
      <div class="c-reviews__inf">
        <div class="c-reviews__who">
          <span class="c-reviews__name">
            {{thisMessage.name}}
          </span>
        </div>
        <div class="star-rating--desk">
          <star-rating 
            :star-size="20" 
            :read-only="true"
            :rating="thisMessage.rating"
            active-color="#7fabc6">
          </star-rating>
        </div> 
      </div>
      <div class="c-reviews__date">
        {{thisMessage.date}}
      </div>
    </div>
    <div class="c-reviews__middle">
      <div class="c-reviews__text">
        {{thisMessage.text}}
      </div>
      <div class="c-reviews__dign">
        <span>
          Достоинства:
        </span>
        {{thisMessage.advantages}}
      </div>
      <div class="c-reviews__dign">
        <span>
          Недостатки:
        </span>
        {{thisMessage.disadvantages}}
      </div>
    </div>
    <div class="c-reviews__foot">
      <div class="c-reviews__links">
        <a href="" 
          class="c-reviews__link" 
          id="review-reply" 
          @click.prevent="showForm" 
          :class="{'c-reviews__link--active' : visabilityForm}">
          <i class="fa fa-reply" aria-hidden="true"></i>
          <span>Ответить</span>
        </a>
        <a href="" 
          class="c-reviews__link" 
          id="review-answers" 
          @click.prevent="showAnswers" 
          v-show="answers.length"  
          :class="{'c-reviews__link--active' : visabilityAnswers}">
          <i class="fa fa-comment" aria-hidden="true"></i>
          <span>{{answers.length}}</span>
          ответа
        </a>
      </div>
      <div class="c-reviews__likes" :class="{'c-reviews__likes--disabled' : likeDisabled}">
        <span>
          <a href="#" class="c-reviews__like"  @click.prevent="toLike"></a>
          <span>{{like}}</span>
          <a href="" class="c-reviews__dlike"  @click.prevent="toDislike"></a>
        </span>
      </div>
    </div>
    <div class="answers" v-if="visabilityAnswers">
      <div class="answers__list">
        <answer
        v-for="(answerItem, index) in answers"
        v-bind:key="answerItem" 
        v-bind:this-answer="answerItem">	
        </answer> 
      </div>
      <div class="answers__close">
        <a href="" @click.prevent="showAnswers">
          <img src="img/list-arr.png" alt="">
        </a>
      </div>
    </div>
    <div class="reply" v-if="visabilityForm">
      <form action="" v-on:submit.prevent="creatAnswer">
        <div class="reply__tarea">
          <label for=""> Ваше сообщение
            <textarea 
              name=""
              id="" 
              v-model="answerText"
              cols="30" 
              rows="10" ></textarea>
          </label>
        </div>
        <div class="reply__inputs">
          <div class="reply__half  reply__half--pd">
            <input 
              type="text" 
              v-model="answerName"
              placeholder="Имя">
          </div>
          <div class="reply__half">
            <input 
              type="text" 
              placeholder="E-mail"
              v-model="answerEmail">
          </div>
        </div>
        <div class="reply__btns">
          <a href="" class="reply__cancel"  @click.prevent="clearForm">
            Отмена
          </a>
          <button type="submit" href="" class="btn--blue">
            отправить
          </button>
        </div>
        <div class="reply__p">
          Важно! Чтобы Ваш отзыв либо комментарий прошел модерацию и был опубликован, ознакомьтесь, пожалуйста, с нашими <a href="#">правилами.</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import answer from './answer.vue';
import StarRating from 'vue-star-rating';

  module.exports = {
    props: ["thisMessage"],
    data: function() {
      return {
        answerName: "",
        answerEmail: "",
        answerText: "",
        visabilityForm: false,
        visabilityAnswers: false,
        answers: [],
        like: 0,
        likeDisabled: false,
      }
    },

    methods: {
      creatAnswer: function() {
        var answer = {
          name: this.answerName,
          email: this.answerEmail,
          text: this.answerText,
          date: new Date().toLocaleString("ru", {year: 'numeric', month: 'long', day: 'numeric',}),
        }

        this.answers.push(answer);
        this.clearForm();
      },

      clearForm: function() {
        this.answerName = "";
        this.answerEmail = "";
        this.answerText = '';
        this.visabilityForm = false;
      },

      showForm: function() {
        this.visabilityForm = !this.visabilityForm
      },

      showAnswers: function() {
        this.visabilityAnswers = !this.visabilityAnswers
      },

      toLike: function() {
        this.like +=1;
        this.likeDisabled = true;
      },

      toDislike: function() {
        this.like -=1;
        this.likeDisabled = true;
      }
    },

    components: {
      "answer" : answer,
      "star-rating": StarRating,
    },
  }

</script>