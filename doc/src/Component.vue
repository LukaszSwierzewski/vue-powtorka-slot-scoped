<template>
  <div>
    <p>from component</p>
    {{ parent }}
    {{ fromChild }}
    <my-button
      v-slot:default="slotProps"
      @childToParent="onChildClick"
      :title="'something'"
    >
      <h1>from slot</h1>
      <p>p tag slot</p>
      {{ slotData }}
      <br />

      <button @click="calc(slotProps.someNumber)">clicking</button>
      {{ childrenVal }}
    </my-button>
  </div>
</template>

<script>
import MyButton from "./Button.vue";
export default {
  components: {
    MyButton
  },
  props: {
    parent: {
      required: true,
      type: String,
      default: "someprop"
    }
  },
  data() {
    return {
      fromChild: "",
      slotData: "from parent to children",
      childrenVal: 0
    };
  },
  methods: {
    onChildClick(value) {
      this.fromChild = value;
    },
    calc(value) {
      const newVal = value / 100;
      this.childrenVal = newVal;
    }
  }
};
</script>
