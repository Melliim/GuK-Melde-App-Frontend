<template>
  <div class="container">
    <form @submit="sendEmail">
      <label>Name</label>
      <input
        type="text"
        v-model="name"
        name="name"
        placeholder="Absendername"
      >
      <label>Email</label>
      <input
        type="email"
        v-model="email"
        name="email"
        placeholder="Absenderemail"
      >
      <label>Empfänger</label>
      <input
        type="text"
        v-model="toName"
        name="toName"
        placeholder="Empfängername"
      >
      <label>Kunde</label>
      <input
        type="text"
        v-model="personName"
        name="personName"
        placeholder="Kundenname"
      >
      <label>Datum</label>
      <input
        type="date"
        v-model="date"
        name="date"
      >

      <input type="submit" value="Send">
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      toName: "",
      personName: "",
      date: ""
    };
  },
  methods: {
    sendEmail(event) {
      event.preventDefault(); // Prevent the form from submitting normally
      emailjs
        .sendForm(
          "service_4tkduhe",
          "template_152ynmd",
          event.target,
          "p529mCvfdNNng8NXW",
          event.target
        )
        .then(
          (result) => {
            console.log(
              "You have successfully submitted your message",
              result.text
            );
          },
          (error) => {
            console.log(
              "This form failed to submit, please kindly check your internet connection",
              error.text
            );
          }
        );

      // Reset the form fields after submission
      this.name = "";
      this.email = "";
      this.toName = "";
      this.personName = "";
      this.date = "";
    },
  },
};
</script>
<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #343a40;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
  color: #fff;

}

input[type=text], [type=email], [type=text], [type=text], [type=date] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}


</style>
