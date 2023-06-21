<template>
    <contact-form></contact-form>
  <UploadImage></UploadImage>
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
