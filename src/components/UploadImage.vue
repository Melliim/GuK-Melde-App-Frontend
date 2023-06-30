<template>
  <div>
    <div class="row">
      <div class="col-8">
        <label class="btn btn-default p-0">
          <input
            type="file"
            accept="image/*"
            ref="fileInput"
            @change="selectImage"
          />
        </label>
      </div>
      <div class="col-4">
        <button
          class="btn btn-success btn-sm float-right"
          :disabled="!currentImage"
          @click="upload"
        >
          Upload
        </button>
      </div>
    </div>
    <div v-if="currentImage" class="progress">
      <div
        class="progress-bar progress-bar-info"
        role="progressbar"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{ width: progress + '%' }"
      >
        {{ progress }}
      </div>
    </div>
    <div v-if="previewImage">
      <div>
        <img class="preview my-3" :src="previewImage" alt="" />
      </div>
    </div>

    <div v-if="message" class="alert alert-secondary" role="alert">
      {{ message }}
    </div>
    <!--    <div class="card mt-3">-->
    <!--      <div class="card-header">List of Images</div>-->
    <!--      <ul class="list-group list-group-flush">-->
    <!--        <li-->
    <!--          class="list-group-item"-->
    <!--          v-for="(image, index) in imageInfos"-->
    <!--          :key="index"-->
    <!--          >-->
    <!--          <a :href="image.url">{{ image.name }}</a>-->
    <!--        </li>-->
    <!--      </ul>-->
    <!--    </div>-->
  </div>
</template>

<script>
import UploadService from "../services/UploadFilesService";
import ImageUploader from "../components/ImageUploader";

export default {
  name: 'upload-image',
  data(){
    return{
      currentImage: undefined,
      previewImage: undefined,

      progress: 0,
      message: "",

      imageInfos: [],
    };
  },
  methods: {
    selectImage(){
      this.currentImage = this.$refs.fileInput.files[0]; // Use this.$refs.fileInput.files instead of this.$refs.file.files
      this.previewImage = URL.createObjectURL(this.currentImage);
      this.progress = 0;
      this.message = "";
    },
    upload(){
      ImageUploader.methods.uploadImage.call(this);
    },
  },
  mounted(){
    UploadService.getFiles().then(response => {
      this.imageInfos = response.data;
    })
  }
};
</script>

<style scoped>

</style>

