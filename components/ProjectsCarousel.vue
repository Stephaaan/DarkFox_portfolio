<template>
  <div class="w-full flex justify-center">
    <div class="w-2/3 md:w-1/2 overflow-hidden" v-if="blok">
      <carousel paginationActiveColor="#CC5C0A" paginationColor="#c2c2c2" :perPage="1" :autoplay="true" :autoplayTimeout="5000" :loop="true" :centerMode="true">
        <slide v-for="project in blok.Projects" :key="project._uid" class="w-full">
          <div class="w-full flex justify-center">
            <ProjectPreview :blok="project"/>
          </div>
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
