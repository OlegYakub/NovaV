<template>
  <div class="answers__item">
    <div class="answers__head">
      <div class="answers__who">
        {{thisAnswer.name}}
      </div>
      <div class="date">
        {{thisAnswer.date}}
      </div>
    </div>
    <div class="answers__body">
      {{thisAnswer.text}} 
    </div>
  </div>
</template>

<script>
   module.exports = {
     props: ["thisAnswer"],
   }
</script>