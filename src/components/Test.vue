<template>
  <div>
    <PassingValueProps :title="title" :listIds="listIds" :likes="like"></PassingValueProps>
  </div>
</template>

<script>
import PassingValueProps from "./PassingValueProps";
export default {
  name: "test-component",
  components: {
    PassingValueProps
  },
  data: function() {
    return {
      listIds: [1, 2, 3, 4, 5],
      title: "Passing Value with Props",
      like: 27
    };
  }
};
</script>

<style>
</style>