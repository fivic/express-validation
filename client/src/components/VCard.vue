<template>
  <div class="bg-white p-4 rounded-md shadow-xl">
    <VIcon :icon="icon" xl></VIcon>
    <div class="font-bold text-2xl pb-6 text-center">{{ title }}</div>
    <div>{{ text }}</div>
  </div>
</template>

<script>
import VIcon from "@/components/VIcon";
export default {
  name: "VCard",
  components: {
    VIcon
  },
  props: {
    title: {
      type: [String, Number],
      default: null
    },
    text: {
      type: [String, Number],
      default: null
    },
    icon: {
      type: String,
      default: null
    }
  }
};
</script>

<style></style>
