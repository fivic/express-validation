<template>
  <div class="flex justify-center items-center">
    <component
      :is="svgLoader"
      :class="{
        'h-16 w-16': lg,
        'h-32 w-32': xl
      }"
    >
    </component>
  </div>
</template>

<script>
export default {
  name: "VIcon",
  props: {
    icon: {
      type: String,
      default: "vue"
    },
    lg: {
      type: Boolean,
      default: false
    },
    xl: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    svgLoader() {
      return () => import(`@/assets/svg/${this.icon}.svg?inline`);
    }
  }
};
</script>
