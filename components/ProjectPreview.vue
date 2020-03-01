<template>
    <div class="w-full flex flex-col items-center">
        <div class="w-full flex justify-center font-worksans text-dfOrange text-2xl md:text-3xl mb-4">{{blok.Name}}</div>
        <div class="w-2/3 mb-4 flex justify-center h-64">
          <img :src="blok.ImagePreview" alt="" class="h-full">
        </div>

        <div v-html="html" class="h-24 font-worksans text-paperWhite font-light text-center"/>
    </div>
</template>
<script>
import { markedToHTML } from '~/helpers/marked'
export default {
  props: [
     'blok'
   ],
  computed: {
    html () {
      return markedToHTML(this.blok.Description)
    }
  }
}
</script>
