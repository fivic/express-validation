<template>
  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center">
    <transition
      appear
      name="fade"
      @before-leave="backdropLeaving = true"
      @after-leave="backdropLeaving = false"
    >
      <div
        v-if="showBackdrop"
        class="fixed inset-0 bg-gray-600 opacity-75"
        @click.prevent="close"
      ></div>
    </transition>
    <transition
      appear
      name="fade"
      @before-leave="cardLeaving = true"
      @after-leave="cardLeaving = false"
    >
      <div
        v-if="showContent"
        class="relative text-left w-5/6 xl:w-5/12 2xl:w-1/3"
      >
        <div
          class="w-full h-auto overflow-y-auto bg-white rounded-md shadow-xl"
        >
          <div class="h-auto p-10 overflow-y-auto max-h-50 text-center">
            <slot></slot>
          </div>
          <div
            class="bg-gray-100 h-auto flex justify-around py-3 border-t-2 border-gray-200 rounded-b-md"
          >
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              @click.prevent="close"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "VModal",
  components: {},
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showModal: false,
      showBackdrop: false,
      showContent: false,
      backdropLeaving: false,
      cardLeaving: false
    };
  },
  computed: {
    leaving() {
      return this.backdropLeaving || this.cardLeaving;
    }
  },
  watch: {
    open: {
      handler(newValue) {
        if (newValue) {
          this.show();
        } else {
          this.close();
        }
      }
    },
    leaving(newValue) {
      if (newValue === false) {
        this.$emit("close");
        this.showModal = false;
      }
    }
  },
  methods: {
    show() {
      this.showModal = true;
      this.showBackdrop = true;
      this.showContent = true;
    },
    close() {
      this.showBackdrop = false;
      this.showContent = false;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
