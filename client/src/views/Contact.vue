<template>
  <div
    class="py-10 px-5 flex flex-col items-center space-y-6 max-w-xl mx-auto my-auto"
  >
    <VFormInput
      label="E-mail"
      v-model="email.value"
      :error="email.error"
    ></VFormInput>
    <VFormTextArea
      label="Message"
      :rows="5"
      v-model="message.value"
      :error="message.error"
    ></VFormTextArea>
    <div
      class="bg-green-500 px-4 py-2 border-2 text-gray-100 rounded-md hover:bg-green-600 cursor-pointer font-bold"
      @click="sendMessage"
    >
      Send
    </div>
    <VModal @close="openModal = !openModal" :open="openModal"
      ><div>
        <VIcon icon="success" lg></VIcon>
        <div class="text-xl font-medium pt-6">
          Your message has been successfully sent!
        </div>
      </div></VModal
    >
  </div>
</template>

<script>
import VFormTextArea from "@/components/VFormTextarea";
import VFormInput from "@/components/VFormInput";
import VModal from "@/components/VModal";
import VIcon from "@/components/VIcon";
export default {
  components: {
    VFormTextArea,
    VFormInput,
    VModal,
    VIcon
  },
  data: function() {
    return {
      email: { value: null, error: "" },
      message: { value: null, error: "" },
      openModal: false
    };
  },
  computed: {},
  methods: {
    async sendMessage() {
      try {
        await this.axios.post("http://localhost:3000/api/contact", {
          email: this.email.value,
          message: this.message.value
        });

        this.clearInputs();
        this.openModal = true;
      } catch (error) {
        if (error.response) {
          this.email.error = error.response.data.email;
          this.message.error = error.response.data.message;
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      }
    },
    clearInputs() {
      this.email.value = null;
      this.email.error = "";
      this.message.value = null;
      this.message.error = "";
    }
  }
};
</script>

<style></style>
