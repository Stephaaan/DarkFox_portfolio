<template>
  <div>
    <div class="w-full flex justify-center items-center h-full">
      <div v-for="blok of bloks" :key="blok._uid">
        <component :is="blok.component" :blok="blok"/>
      </div>
    </div>
  </div>
</template>

<script>
  import ProjectsCarousel from '~/components/ProjectsCarousel.vue'

  export default {
   data () {
     return {
       bloks: []
     }
   },
   components: {
     ProjectsCarousel
   },
   mounted () {
    const link = this.$store.getters.getLanguage === 'en' ? 'cdn/stories/home' : 'cdn/stories/sk/home'
    this.$storyapi.get(link, {
      version: 'draft'
    }).then((res) => {
      this.bloks = res.data.story.content.Body
    }).catch((res) => {
      if (!res.response) {
        console.error(res)
        context.error({ statusCode: 404, message: 'Failed to receive content form api' })
      } else {
        console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  }
  }
</script>
