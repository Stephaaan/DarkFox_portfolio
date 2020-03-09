<template>
  <div class="w-full font-worksans font-thin w-full" :style="color">
    <div class="hidden md:flex w-full justify-center" :style="desktopSize">
      {{blok.DesktopText}}
    </div>
    <div class="flex md:hidden w-full justify-center" :style="mobileSize">
      {{blok.MobileText}}
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'blok'
  ],
  mounted() {
    console.log(this.blok)
  },
  computed: {
    color: function () { return `
      color: ${this.blok.color.color};
    `},
    desktopSize: function () { return `
      font-size: ${this.blok.DesktopSize}
    `},
    mobileSize: function () { return  `
      font-size: ${this.blok.MobileSize}
    `}
  }
}
</script>
