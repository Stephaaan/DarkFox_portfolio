<template>
  <div class="flex justify-between items-center bg-primaryBlack-200 font-worksans z-10 text-paperWhite font-light">
    <!-- LOGO -->
    <nuxt-link to="/">
      <img src="~/assets/images/logo.svg" class="w-16 mx-6 my-2"/>
    </nuxt-link>
    <!--DESKTOP MENU SECTION -->
    <div class="hidden md:flex  text-3xl  mx-6">
      <div v-for="item of menuItems" :key="item.link">
        <nuxt-link class="mx-4 cursor-pointer" :to="item.link">{{$t(item.text)}}</nuxt-link>
      </div>
      <div class="">
        <div class="px-2 flex items-center">
          <p class="cursor-pointer text-dfOrange">{{$t(this.selectedLanguageObject.label)}}</p>
          <div class="bg-primaryBlack-200 text-xl w-full">
            <p v-for="item of this.notSelectedLanguagesObjects" :key="item.code" class="px-2 cursor-pointer" v-on:click="$store.dispatch('setLanguage', item.code)">{{$t(item.label)}}</p>
          </div>
        </div>

      </div>
    </div>
    <div class="md:hidden hover-trigger">
      <img src="~/assets/images/hamburger.svg" alt="" class="w-20 px-4">
      <div class="hidden absolute top-0 left-0 w-full pt-32 bg-primaryBlack-200 -z-1 text-3xl flex-col pb-4 pl-6"  id="hover-target">
        <!--LINKS-->
        <div v-for="item of menuItems" :key="item.link">
          <nuxt-link class="cursor-pointer" :to="item.link">{{$t(item.text)}}</nuxt-link>
        </div>
        <!--Languages-->
        <div class="flex items-center">
          <p class="cursor-pointer text-dfOrange">{{$t(this.selectedLanguageObject.label)}}</p>
          <div class="bg-primaryBlack-200 text-xl w-full">
            <p v-for="item of this.notSelectedLanguagesObjects" :key="item.code" class="px-2 cursor-pointer" v-on:click="$store.dispatch('setLanguage', item.code)">{{$t(item.label)}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Language from '~/helpers/Language'
  import { i18n } from '../plugins/i18n.js'
  export default {
    data () {

      return {
        menuItems: [
          {
            text: 'menu.about',
            link: '/about'
          },
   /*       {
            text: 'menu.projects',
            link: '/projects'
          }, */
          {
            text: 'menu.contact',
            link: '/contact'
          },
        ],
        selectedLanguage: this.$store.state.settings.language,
        forceRenderer: false
      }
    },
    mounted () {
      this.$store.watch(
        (store, getters) => getters.selectLanguage,
        language => {
          this.selectedLanguage = language
          this.$i18n.locale = language
        }
      )
    },
    computed: {
      allLanguages () {
        //mindfuck
        return Object.keys(Language).map(language => Language[language]);
      },
      selectedLanguageObject () {
        return this.allLanguages.find(item => item.code === this.selectedLanguage)
      },
      notSelectedLanguagesObjects () {
        return this.allLanguages.filter(item => item.code !== this.selectedLanguage)
      }
    }
  }
</script>
<style>
  .hover-trigger:hover > div{
    display: flex;
  }
</style>
