<template>
  <div class="home-view">
    <div class="container">
    <div class="flex-container">
      <contact-form></contact-form>
      <UploadImage></UploadImage>
    </div>
    </div>
  </div>
</template>

<script>

import ContactForm from '@/components/ContactForm.vue'
import UploadImage from '@/components/UploadImage.vue'

export default {
  name: 'HomeView',
  components: {
    UploadImage,
    ContactForm,

  }, mounted () {
  }
}
</script>

<style scoped>
.home-view {
  background-color: #4f74c4;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.flex-container {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .flex-container {
    flex-direction: column;
  }
}
</style>
