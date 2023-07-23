<template>
  <div class="PView-class">
    <PresentationForm></PresentationForm>
  </div>

</template>

<script>
import PresentationForm from '@/components/PresentationForm.vue'

export default {
  name: 'PView',
  components:{
    PresentationForm

  }, methods: {

  }
}
</script>

<style>
.PView-class {
  height: 100vh;
  background-color: #4f74c4;
}
</style>
