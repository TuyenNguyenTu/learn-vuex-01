<template>
  <div>
    {{ message }}
    <input :value="message" @input="updateMesage" />
    <br />
    <hr />Name:
    <input :value="getName" @input="changeName" />
    ----
    {{ getName }}
    <br />
    <br />Age:
    <input :value="getAge" @input="changeAge" />
    <hr />
    {{ myInfo.name }} - {{ myInfo.age }}
    <br />Address:
    <input type="text" v-model="address" />
    <br />
    <button @click="handleClickAddAddress(address)">Click</button>
    <br />
    {{Increase}}
    <button @click="increase">Increase</button>
    <br />
    <hr />
    <input type="file" id="input" multiple @change="handleFiles" accept=".jpg, .jpeg, .png" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      message: state => state.obj.message,
      myInfo: state => state.myInfo,
      Increase: state => state.increaseValue
    }),
    getId() {
      return this.$store.state.obj.id;
    },
    getName() {
      return this.$store.state.myInfo.name;
    },
    getAge() {
      return this.$store.state.myInfo.age;
    }
  },
  methods: {
    updateMesage(e) {
      this.$store.commit("updateMessage", e.target.value);
    },
    changeName(e) {
      this.$store.commit("CHANGE_NAME", e.target.value);
    },
    changeAge(e) {
      this.$store.commit("CHANGE_AGE", e.target.value);
    },
    handleFiles() {
      var reader = new FileReader();
      const selectedFile = document.getElementById("input").files[0];
      reader.readAsDataURL(selectedFile);
      reader.onload = function() {
        var fileContent = reader.result;
        console.log(fileContent);
      };
    },
    ...mapActions({
      handleClickAddAddress: "addAdress",
      increase: "increase"
    })
  },
  data() {
    return {
      address: "",
      file: ""
    };
  }
};
</script>

<style></style>
