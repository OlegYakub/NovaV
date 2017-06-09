<template>
  <aside class="filter__aside">
    <div class="filter__wrap">
      <div class="filter">
        <filter-chosen></filter-chosen>
        <div class="filter__box">
          <p class="filter__title">
            Цена
          </p>
          <div class="filter__price">
            <div class="filter__range">
              
            </div>
            <div class="filter__inputs">
              <p>От</p>
              <input type="text" id="minCost" value="0"/>
              <p>До</p>
              <input type="text" id="maxCost" value="1000"/>
              <a href="" class="btn--blue  filter__btn">ОК</a>
            </div>
          </div>				
        </div>
        <filter-item 
          v-for="(filterItem, index) in filters"  
          v-bind:key="filterItem" 
          v-bind:this-filter="filterItem"
          
          ></filter-item>
      </div>
      <div class="filter__click">
        
      </div>
    </div>
  </aside>
</template>

<script>
  module.exports = {
    data: function() {
      return: {
        filters: filters,
      }
    },
    components: {
      "filter-chosen" : filterChosen,
      "filter-item" : filterItem,
    }
  }
</script>