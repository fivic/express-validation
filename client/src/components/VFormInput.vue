<template>
  <div class="w-full">
    <div class="flex items-center w-full">
      <div class="pr-4 w-1/3">{{ label }}:</div>
      <input
        :type="type"
        :value="value"
        :class="{
          'outline-none border-gray-300 border focus:border-blue-400 rounded p-2 w-2/3': 1,
          'border-red-300 focus:border-red-500': error
        }"
        @input="$emit('input', $event.target.value)"
      />
    </div>
    <div class="text-red-500 pt-2 text-right">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: "VFormInput",
  props: {
    label: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "text"
    },
    error: {
      type: String,
      default: null
    }
  }
};
</script>

<style></style>
