<template>
  <div class="w-full font-worksans font-thin my-4" :style="color">
    <div class="flex md:hidden w-full justify-center text-center" :style="MobileFont">
      <div v-html="html" class="h-auto"></div>
    </div>
    <div class="hidden md:flex w-full justify-center text-center" :style="DesktopFont">
      <div v-html="html" class="h-auto"></div>
    </div>
  </div>
</template>

<script>
import { markedToHTML } from '~/helpers/marked'

export default {
  props: ['blok'],
  mounted(){
    console.log(this.blok)
  },
  computed: {
    color: function () {
      return `color: ${this.blok.Color.color}`
    },
    MobileFont: function () {
      return `font-size: ${this.blok.MobileFont}`
    },
    DesktopFont: function () {
      return `font-size: ${this.blok.DesktopFont}`
    },
    html: function () {
      return markedToHTML(this.blok.Text)
    }
  }
}
</script>
