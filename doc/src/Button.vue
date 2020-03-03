<template>
  <div>
    <button @click="emitToParent">{{ title }}</button>
    <br />
    <slot :someNumber="someNumber">
      {{ someNumber }}
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  data() {
    return {
      childMessage: "from child",
      someNumber: 1000000
    };
  },
  methods: {
    emitToParent(event) {
      this.$emit("childToParent", this.childMessage);
    }
  },
  mounted() {}
};
</script>
