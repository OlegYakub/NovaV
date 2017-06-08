<template>
  <div class="filter__box">
		<p class="filter__title">
			Вы выбрали
		</p>
		<ul class="filter__list2">
			<li class="filter__chose">
				<span class="filter__chosen">
					<a href="" class="filter__delete">
						<img src="img/close.svg" alt="">
					</a>
					Обратный осмос
				</span>
			</li>
			<li class="filter__chose">
				<span class="filter__chosen">
					<a href="" class="filter__delete">
						<img src="img/close.svg" alt="">
					</a>
					Мембранный
				</span>
			</li>
			<li class="filter__chose">
				<span class="filter__chosen">
					<a href="" class="filter__delete">
						<img src="img/close.svg" alt="">
					</a>
					Проточный
				</span>
			</li>
		</ul>
		<a href="#" class="filter__deleteall">
			Очистить весь фильтр
			<img src="img/clear-ic.png" alt="" class="filter__deleteall--img">
			<img src="img/clear-ic-h.png" alt="" class="filter__deleteall--img-h">
		</a>
	</div>
</template>

<script>
  module.exports = {
    data: function() {
      return {
        
      }
    }
  }
</script>