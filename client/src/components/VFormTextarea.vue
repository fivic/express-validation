<template>
  <div class="w-full">
    <div class="flex">
      <div class="border-gray-600 w-1/3 pt-3">{{ label }}:</div>
      <textarea
        :class="{
          'w-2/3 outline-none border-gray-300 border p-2 rounded focus:border-blue-300 resize-none': 1,
          'border-red-300 focus:border-red-500': error
        }"
        :rows="rows"
        :value="value"
        @input="$emit('input', $event.target.value)"
      ></textarea>
    </div>
    <div class="text-red-500 pt-2 text-right">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: "VFormTextarea",
  props: {
    label: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    rows: {
      type: Number,
      default: 3
    },
    error: {
      type: String,
      default: null
    }
  }
};
</script>

<style></style>
