<template>
  <div>
    <h3>Tutorial component</h3>
    <ul id="ad1">
      <li v-for="tutorial in tutorials" :key="tutorial.id">
        <p>
          <span>{{ tutorial.id }}</span>
          {{ tutorial.name }}
          <br />
          <strong>Total unit: {{ tutorial.totalChap }}</strong> &nbsp; &nbsp;
          &nbsp;
          <strong>Price: $ {{ tutorial.price }}</strong>
        </p>
      </li>
    </ul>
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="item in getTutorialSale" :key="item.id">
        <strong>{{ item.name }}</strong>
        <em>{{ item.price }}</em>
      </li>
    </ul>
    <input type="number" v-model="valueIncrease" />
    <button @click="handleClick(parseInt(valueIncrease))">Click</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import { mapState } from "vuex";
// import { mapMutations } from "vuex";
export default {
  name: "tutorial-component",
  computed: {
    ...mapState({
      tutorials: "posts",
      title: "title",
    }),
    ...mapGetters({
      getTutorialSale: "tutorialSale",
    }),
  },
  methods: {
    ...mapActions({
      handleClick: "reducePrice",
    }),
  },
  data: function() {
    return {
      valueIncrease: 0,
    };
  },
};
</script>
<style>
ul li {
  list-style: none;
}
</style>
