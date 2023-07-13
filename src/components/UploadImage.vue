<template>
  <div class="upload-image">
    <div class="card mt-3">
      <div class="card-header">List of Images</div>
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item"
          v-for="(image, index) in imageInfos"
          :key="index"
        >
          <a :href="image.url">{{ image.name }}</a>
        </li>
      </ul>
    </div>

    <div class="space"></div>

    <div class="row">
      <div class="col-lg-6">
        <label class="btn btn-default p-0">
          <input
            type="file"
            accept="image/*"
            ref="file"
            @change="selectImage"
          />
        </label>
      </div>
      <div class="col-lg-6">
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
    <div v-if="previewImage" class="image-preview">
      <img class="preview" :src="previewImage" alt="" />
    </div>

    <div v-if="message" class="alert alert-secondary" role="alert">
      {{ message }}
    </div>
  </div>
</template>

<script>
import UploadService from "../services/UploadFilesService";

export default {
  name: 'UploadImage',
  data() {
    return {
      currentImage: undefined,
      previewImage: undefined,

      progress: 0,
      message: "",

      imageInfos: [],
    };
  },
  methods: {
    selectImage () {
      this.currentImage = this.$refs.file.files.item(0);
      this.previewImage = URL.createObjectURL(this.currentImage);
      this.progress = 0;
      this.message = "";
    },
    upload () {
      this.progress = 0;
      UploadService.upload(this.currentImage, (event) => {
        this.progress = Math.round((100 * event.loaded) / event.total);
      })
        .then((response) => {
          this.message = response.data.message;
          return UploadService.getFiles();
        })
        .then((images) => {
          this.imageInfos = images.data;
        })
        .catch((err) => {
          this.progress = 0;
          this.message = "Could not upload the image! " + err;
          this.currentImage = undefined;
        });
    },
    mounted () {
      UploadService.getFiles().then((response) => {
        this.imageInfos = response.data;
      });
    },
  }
};
</script>

<style scoped>
.upload-image {
  max-width: 500px;
  margin: 0 auto;
  background-color: #343a40;
  padding: 20px;
  border-radius: 5px;
}

.image-preview {
  text-align: center;
  margin-top: 10px;
}

.preview {
  max-width: 100%;
  height: auto;
  max-height: 300px;
}

.upload-image input[type="file"] {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

.upload-image .progress-bar-info {
  background-color: #007bff;
}

.upload-image .alert-secondary {
  background-color: #343a40;
  color: #fff;
}

.upload-image .card {
  background-color: white;
  border-color: white;
}

.upload-image .card-header {
  background-color: silver;
  color: #fff;
}

.upload-image .list-group-item {
  background-color: #343a40;
  border-color: #343a40;
  color: #fff;
}

.space {
  height: 20px;
}
</style>
