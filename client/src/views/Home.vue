<template>
  <div>
    <div id="hero" class="h-44 sm:h-96 w-screen text-white bg-cover bg-center">
      <div
        class="flex flex-1 w-full h-full py-10 bg-gray-600 bg-opacity-75 text-3xl sm:text-5xl font-bold justify-center items-center text-center leading-normal"
      >
        Welcome <br class="sm:hidden" />
        to my Undabot frontend <br />
        position assignement
      </div>
    </div>
    <div class="flex flex-col items-center py-6 max-w-7xl mx-auto">
      <div class="pt-5 pb-10 font-bold text-2xl sm:text-4xl">
        Frameworks used
      </div>
      <div class="flex sm:space-x-20 flex-col sm:flex-row items-center">
        <div
          v-for="card in getCards"
          class="w-4/5 sm:w-1/3 pb-10"
          :key="card.id"
        >
          <VCard
            :title="card.title"
            :text="card.text"
            :icon="card.icon"
          ></VCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VCard from "@/components/VCard.vue";

export default {
  name: "Home",
  components: {
    VCard
  },
  data: function() {
    return {
      cards: [
        {
          id: 1,
          title: "Vue.js",
          icon: "vue",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quidem vero quo culpa eligendi eius aut sapiente, commodi temporibus voluptatum voluptates cupiditate similique! Cumque voluptates praesentium, porro suscipit et provident!"
        },
        {
          id: 2,
          title: "Express.js",
          icon: "express",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quidem vero quo culpa eligendi eius aut sapiente, commodi temporibus voluptatum voluptates cupiditate similique! Cumque voluptates praesentium, porro suscipit et provident!"
        },
        {
          id: 3,
          title: "Tailwind",
          icon: "tailwindcss",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quidem vero quo culpa eligendi eius aut sapiente, commodi temporibus voluptatum voluptates cupiditate similique! Cumque voluptates praesentium, porro suscipit et provident!"
        }
      ]
    };
  },
  computed: {
    getCards() {
      return this.cards;
    }
  }
};
</script>

<style scoped>
#hero {
  background-image: url("~@/assets/hero.jpg");
}
</style>
