<template>
  <div>
    <h2>{{title}}</h2>
    {{likes}}
    <hr />
    <ul>
      <li v-for="item in listIds" :key="item.id">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "passing-component",
  props: {
    listIds: Array,
    title: String,
    likes: Number
  },
  data() {
    return {
      listData: this.listIds
    };
  }
};
</script>

<style>
</style>