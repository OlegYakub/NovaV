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
    
      <div class="create" v-show="visabilityForm" >
        <form   v-on:submit.prevent="creatMessage" >
          <div class="create__head">
            <div class="c-reviews__title">
              Написать отзыв
            </div>
            <star-rating 
            :star-size="20" 
            v-model="messageRating" 
            active-color="#7fabc6"></star-rating>
            <div v-show="showRatingMessage" class="star-rating__text">
              <span  class=" is-danger">Дайте оценку товару</span>
            </div>
          </div>
          <div class="create__middle">
            
              <div class="reply__tarea">
                <label> Ваше сообщение
                  <textarea  
                    id="commenttext" 
                    name="text"
                    cols="30" 
                    rows="10"
                    :class="{'is-danger': errors.has('text') }" 
                    v-validate="'required'"
                    v-model="messageText"></textarea>
                </label>
                <div >
                  <span v-show="errors.has('text')" class="help is-danger">{{ errors.first('text') }}</span>
                </div>
              </div>
          <!--    <div><span v-if="$creatMessageForm.commenttext.required">{{ $creatMessageForm.commenttext.required }}</span></div> -->
              <div class="create__input">
                <label > Достоинства
                  <input 
                    type="text" 
                    name="advantages"
                    id="comment-advantages"
                    :class="{'is-danger': errors.has('advantages') }" 
                    v-validate="'required'"
                    v-model="messageAdvantages">
                </label>
                <div >
                  <span v-show="errors.has('advantages')" class="help is-danger">{{ errors.first('advantages') }}</span>
                </div>
              </div>
              <div class="create__input">
                <label > Недостатки
                  <input 
                    type="text" 
                    name="disadvantages"
                    :class="{'is-danger': errors.has('disadvantages') }" 
                    id="comment-disadvantages"
                    v-validate="'required'"
                    v-model="messageDisadvantages">
                </label>
                <div >
                  <span v-show="errors.has('disadvantages')" class="help is-danger">{{ errors.first('disadvantages') }}</span>
                </div>  
              </div>
              <div class="reply__inputs  create__input--two">
                <div class="reply__half  reply__half--pd">
                  <input
                    type="text" 
                    name="name"
                    :class="{'is-danger': errors.has('name') }" 
                    id="comment-name"
                    v-validate="'required|alpha'"
                    placeholder="Имя"  
                    v-model="messageName">
                    <div >
                     <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
                    </div>
                </div>
                <div class="reply__half">
                  <input 
                    type="text" 
                    placeholder="E-mail" 
                    :class="{'is-danger': errors.has('email') }" 
                    name="email"
                    v-validate="'required|email'"
                    v-model="messageEmail">
                    <div >
                      <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                    </div>  
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
      </div>
    

    <comment
      v-for="(messageItem, index) in messages"
      v-bind:key="messageItem" 
      v-bind:this-message="messageItem">	
    </comment>

  </div>

</template>

<script>
import comment from './comment.vue';

  module.exports = {
    data: function() {
      return {
        messages: [
          {
            name: "Дмитрий",
            text: 'Фильтры сейчас это уж точно объективная необходимость…то ,что сейчас бежит из крана уже простым кипячением как раньше не очистить.  Всякие эти штуки под раковину не влазят, кувши|',
            rating: 4,
            date: "20 июня 2017г.",
            advantages: "Цена",
            disadvantages: "Слишком быстро засоряется",
          },
        ],
        visabilityForm: false,
        messageName: "",
        messageText: "",
        messageAdvantages: '',
        messageDisadvantages: '',
        messageEmail: '',
        messageRating: 0,
        showRatingMessage: false,
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
        this.$validator.updateDictionary({
          'ru': {
            attributes: {
              name: '"Имя"',
              text: '"Ваше сообщение"',
              advantages: '"Достоинства"',
              disadvantages: '"Недостатки"',
              email: '"E-mail"',
            },
          }
        });
        

        this.$validator.validateAll().then(() => {
          if(this.messageRating == 0){
            this.showRatingMessage = true;
          }else{
            this.messages.push(message);
            this.clearForm();
            this.showRatingMessage = false;
          }
            //alert('From Submitted!');
        });
        
      },

      clearForm: function() {
        this.showRatingMessage = false;
        this.messageName = "";
        this.messageText = "";
        this.messageAdvantages = '';
        this.messageDisadvantages = '';
        this.messageEmail = '';
        this.messageRating= 0;
        this.errors.clear();
        this.visabilityForm = false;
      },

      showForm: function() {
        this.visabilityForm = !this.visabilityForm;
        this.errors.clear();
      },
    },

    components: {
      "comment" : comment,
    },
  }

</script>

<style>
  .height-enter-active, 
  .height-leave-active {
    transition: .5s
  }

  .height-enter-active{
    height: 469px;
    overflow: hidden;
  }

  .height-enter,
  .height-leave-active {
    height: 0;
    overflow: hidden;
  }


  .height-leave {
    height: 469px;
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
