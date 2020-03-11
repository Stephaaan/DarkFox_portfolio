<template>
  <div class="w-full flex flex-row text-3xl">
    <carousel paginationActiveColor="#CC5C0A" :perPage="1" :autoplay="true" :autoplayTimeout="5000" :loop="true" paginationColor="#2d2d2d" :paginationEnabled="false" :centerMode="true">
        <slide v-for="(element, index) in elements" :key="index">
          <div class="hidden">{{trigger}}</div>
          <div class="text-center">{{element}}</div>
        </slide>
      </carousel>
  </div>
</template>
<script>
export default {
  props: ['blok'],
  data: function() {
    return {
      elements: [],
      delimiter: ';',
      trigger: false
    }
  },
  mounted () {
    this.elements = this.blok.elements.split(this.delimiter)
    this.trigger = !this.trigger
  }
}
</script>

