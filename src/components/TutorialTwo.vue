<template>
  <div>
    <h3>{{getTitle}}</h3>
    <ul>
      <li v-for="item in tutorials" :key="item.id">
        <p>
          <em>{{item.id}}</em>
          {{item.name}}
          <strong>{{item.totalChap}}</strong>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tutorial-component-two",
  computed: {
    tutorials() {
      return this.$store.state.posts;
    },
    getTitle() {
      return this.$store.state.title;
    }
  }
};
</script>

<style scoped>
ul li {
  list-style: none;
}
</style>