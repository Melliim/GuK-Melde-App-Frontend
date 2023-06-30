<template>
  <div class="snippet-container">
    <h3>Image Upload Snippet</h3>
    <input type="file" ref="fileInput" accept="image/*" />
    <button class="btn btn-primary" @click="uploadImage">Upload Image</button>
  </div>
</template>

<script>
import UploadService from "../services/UploadFilesService";

export default {
  methods: {
    uploadImage() {
      const fileInput = this.$refs.fileInput;
      const file = fileInput.files[0];

      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        UploadService.upload(formData)
          .then((response) => {
            // Handle successful upload response
            console.log(response.data);
          })
          .catch((error) => {
            // Handle upload error
            console.error(error);
          });
      }
    },
  },
};
</script>

<style scoped>
.snippet-container {
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>

