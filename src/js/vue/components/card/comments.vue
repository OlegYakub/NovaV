<template>
  <div class="c-reviews">
    <div class="c-reviews__top">
      <p class="c-reviews__title">
        Отзывы
      </p>
      <a href="" class="c-reviews__creat" @click.prevent="showForm"  v-bind:class="{'c-reviews__creat--active': visabilityForm}">
        <img src="img/create-ic.png" alt="">
        <span>Оставить отзыв</span>
      </a>
    </div>
    <transition name="height">
      <div class="create" v-show="visabilityForm" >
      <!--<validator name="creatMessageForm"> -->
        <form novalidate  v-on:submit.prevent="creatMessage" >
          <div class="create__head">
            <div class="c-reviews__title">
              Написать отзыв
            </div>
            <star-rating 
            :star-size="20" 
            v-model="messageRating" 
            active-color="#7fabc6"></star-rating>
          </div>
          <div class="create__middle">
            
              <div class="reply__tarea">
                <label for=""> Ваше сообщение
                  <textarea  
                    id="commenttext" 
                    cols="30" 
                    rows="10" 
                    
                    v-model="messageText"></textarea>
                </label>
              </div>
          <!--    <div><span v-if="$creatMessageForm.commenttext.required">{{ $creatMessageForm.commenttext.required }}</span></div> -->
              <div class="create__input">
                <label for=""> Достоинства
                  <input 
                    type="text" 
                    id="comment-advantages"
                    
                    v-model="messageAdvantages">
                </label>
              </div>
              <div class="create__input">
                <label for=""> Недостатки
                  <input 
                    type="text" 
                    id="comment-disadvantages"
                    
                    v-model="messageDisadvantages">
                </label>
              </div>
              <div class="reply__inputs  create__input--two">
                <div class="reply__half  reply__half--pd">
                  <input
                    type="text" 
                    id="comment-name"
                    
                    placeholder="Имя"  
                    v-model="messageName">
                </div>
                <div class="reply__half">
                  <input 
                    type="text" 
                    placeholder="E-mail" 
                    id="comment-email"
                   
                    v-model="messageEmail">
                </div>
              </div>
              <div class="reply__btns  create__btns">
                <a href="" class="reply__cancel  create__cancel" @click.prevent="clearForm">
                  Отмена
                </a>
                <button type="submit" class="btn--blue  create__btn" >
                  отправить
                </button>
              </div>
              <div class="reply__p">
                Важно! Чтобы Ваш отзыв либо комментарий прошел модерацию и был опубликован, ознакомьтесь, пожалуйста, с нашими <a href="#">правилами.</a>
              </div>
            
          </div>
        </form> 
      <!--</validator>-->
      </div>
    </transition>

    <comment
      v-for="(messageItem, index) in messages"
      v-bind:key="messageItem" 
      v-bind:this-message="messageItem">	
    </comment>

  </div>

</template>

<script>
import comment from './comment.vue';
import StarRating from 'vue-star-rating';

  module.exports = {
    data: function() {
      return {
        messages: [
          {
            name: "oleg",
            text: 'hi I am Oleg hi I am Oleg hi I am Oleg hi I am Oleg hi I am Oleg hi I am Oleg',
            rating: 4,
            date: new Date().toLocaleString("ru", {year: 'numeric', month: 'long', day: 'numeric',})
          },
        ],
        visabilityForm: false,
        messageName: "",
        messageText: "",
        messageAdvantages: '',
        messageDisadvantages: '',
        messageEmail: '',
        messageRating: 0,
      }
    },

    methods: {
      creatMessage: function() {
        var message = {
          name: this.messageName,
          text: this.messageText,
          advantages: this.messageAdvantages,
          disadvantages: this.messageDisadvantages,
          email: this.messageEmail,
          rating: this.messageRating,
          date: new Date().toLocaleString("ru", {year: 'numeric', month: 'long', day: 'numeric',}),
        };

        this.messages.push(message);
        this.clearForm();
      },

      clearForm: function() {
        this.messageName = "";
        this.messageText = "";
        this.messageAdvantages = '';
        this.messageDisadvantages = '';
        this.messageEmail = '';
        this.visabilityForm = false;
      },

      showForm: function() {
        this.visabilityForm = !this.visabilityForm
      },
    },

    components: {
      "comment" : comment,
      "star-rating": StarRating,
    },
  }

</script>

<style>
  .height-enter-active, 
  .height-leave-active {
    transition: .5s
  }

  .height-enter-active{
    height: 465px;
    overflow: hidden;
  }

  .height-enter,
  .height-leave-active {
    height: 0;
    overflow: hidden;
  }


  .height-leave {
    height: 465px;
  }
  @media screen and (max-width: 1170px){

    .height-enter-active{
      height: 450px;
    }

    .height-enter,
    .height-leave-active {
      height: 0;
    }

    .height-leave {
      height: 450px;
    }
  }

  @media screen and (max-width: 959px){

    .height-enter-active{
      height: 466px;
    }

    .height-enter,
    .height-leave-active {
      height: 0;
    }

    .height-leave {
      height: 466px;
    }
  }

  @media screen and (max-width: 743px){

    .height-enter-active{
      height: 475px;
    }

    .height-enter,
    .height-leave-active {
      height: 0;
    }

    .height-leave {
      height: 475px;
    }
  }
</style>
