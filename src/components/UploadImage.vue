<template>
  <div class="UpIm-page-container">
  <div class="UpIm-container" >
    <form >
      <p>Mitarbeiter-ID: {{id}}</p>

    </form>
  </div>

  <div>
    <input type="file" @change="handleFileSelect">
    <button @click="doRequest" class="absende-button">Krankmelden</button>
  </div>


  <div>

  </div>

  <div>
    <button @click="gesundMelden()" class="gesundmelde-button">Gesundmelden</button>
  </div>
  </div>
</template>


<script>

export default {
  name: "UploadFile",
  data() {
    return {
      uploadedFile: null,
      id: 3

    };
  },
  methods: {

    gesundMelden(){
      //TODO: delete km implementieren

    }, handleFileSelect(event) {
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


.UpIm-page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 20px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

}

.UpIm-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 60px ;
  text-align: center;
  border-radius: 10px;
  background-color: #f2f2f2;
  padding: 10px 15px;
  max-width: 200px ;
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

.absende-button {
  margin-top: 20px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 7px 15px;
  cursor: pointer;
  margin-left: 30px;
}

.absende-button:hover {
  background-color: #880808;
}

.gesundmelde-button {
  margin-top: 80px;
  margin-bottom: 20px;
  background-color: #35c73a;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
}

.gesundmelde-button:hover {
  background-color: #2b8c2e;
}
</style>
