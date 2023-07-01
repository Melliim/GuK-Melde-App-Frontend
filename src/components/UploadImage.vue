<template>
  <div class="container">
    <form >
      <label>Mitarbeiter ID</label>
      <input
        type="text"
        v-model="id"
        name="id"
        placeholder="Mitarbeiter ID"
      >

    </form>
  </div>

  <div>
    <input type="file" @change="handleFileSelect">
  </div>


  <div>
    <button @click="doRequest">Absenden</button>
  </div>
</template>


<script>

export default {
  name: "UploadFile",
  data() {
    return {
      uploadedFile: null,
      id: 0

    };
  },
  methods: {

      handleFileSelect(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
          // eslint-disable-next-line no-unused-vars
          const base64String = reader.result;
          this.uploadedFile = base64String
        };

        reader.readAsDataURL(file);
      }, doRequest(){
        if (this.uploadedFile == undefined || this.id == 0) {
          console.log(this.uploadedFile)
          console.log(this.id)
        } else {

          let data = {
          mitarbeiter: {
            id: this.id
          },
          lohnfortzahlug: false,
          bestatigt: false,
            image: this.uploadedFile
          }

          const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify(data)

          }
          fetch("http://localhost:8082/krankmeldung", requestOptions)
            .catch(error => {
              console.error(error);
            });
        }

}
  }
};
</script>
<style>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
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
