<template>
  <div class="w-full flex justify-center">
    <div class="w-2/3 md:w-1/2 overflow-hidden" v-if="blok">
      <carousel paginationActiveColor="#CC5C0A" :perPage="1" :autoplay="true" :autoplayTimeout="5000" :loop="true">
        <slide v-for="project in blok.Projects" :key="project._uid">
          <ProjectPreview :blok="project"/>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
  import ProjectPreview from '~/components/ProjectPreview.vue'

  export default {
   components: {
     ProjectPreview
   },
   mounted () {
     console.log(this.blok)
   },
   props: [
     'blok'
   ]
  }
</script>
