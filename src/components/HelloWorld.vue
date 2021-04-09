<template>
  <div class="hello">
    <input type="file" @change="onFileSelected" id="myFile" />
    <br />
    <button @click="onUpload">Upload</button>
    <br />
    <h3>{{selectedFile}}</h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0].name;
    },
    onUpload() {}
  },
  data() {
    return {
      selectedFile: null,
      filePath: null
    };
  }
};
</script>

<style scoped>
</style>
