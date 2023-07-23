<template>
  <button id="mailBtn" @click="sendMail">Lohnfortzahlung simulieren</button>
</template>

<script>
export default {
  name: 'PresentationForm',
  methods: {
    sendMail(){
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain'
        },
        redirect: 'follow',
      }
      fetch("http://localhost:8082/send-mail", requestOptions)
        .catch(error => {
          console.error(error);
        });

    }
  }
}
</script>
<style>

#mailBtn {
  border: 1px solid white;
  color: white;
  background-color: #2c3e50;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20vh;
}


</style>
