<template>
  <div>
    <StringArray :blok="blok"/>
  </div>
</template>
<script>
import StringArray from '~/components/StringArray.vue'
export default {
  components: {StringArray},
  data () {
    return {
      blok: {
        elements: 'Web Apps;Desktop Apps;Android Apps'
      }
    }
  }
}
</script>
