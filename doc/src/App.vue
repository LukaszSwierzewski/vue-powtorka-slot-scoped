<template>
  <div id="app">
    <h1>Basic</h1>
    {{ message }}
    <input v-model="message" />
    <button @click="reverse">click</button>
    <hr />
    <h1>data binding</h1>
    {{ number + 2 }}
    <br />
    <hr />
    <h1>computed</h1>
    a: {{ a }} b: {{ b }}
    <hr />
    <h1 v-if="ok">True</h1>
    <h1 v-else>Not ok</h1>
    <h1 v-show="ok">Hello!</h1>
    <button @click="changeState">changestate</button>
    <hr />
    <h1>loop in object</h1>
    <ul id="repeat-object" class="demo">
      <li v-for="(value, key) in object" :key="key">{{ key }} : {{ value }}</li>
    </ul>
    <div>
      <span v-for="n in 10" :key="n">{{ n }} </span>
    </div>
    <hr />
    <h1>Form inputs</h1>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">show more options</label>
    <div v-if="checked">
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
      <br />
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <hr />
    <h1>Components</h1>
    <my-component :parent="this.message"></my-component>
  </div>
</template>

<script>
import MyComponent from "./Component.vue";
export default {
  components: {
    MyComponent
  },
  data() {
    return {
      message: "Hello World",
      htmlVar: "<p>test</p>",
      number: 1,
      a: 2,
      ok: true,
      checked: false,
      checkedNames: [],
      object: {
        FirstName: "John",
        LastName: "Doe",
        Age: 30
      }
    };
  },
  methods: {
    reverse() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    },
    changeState() {
      if (this.ok) {
        this.ok = false;
      } else {
        this.ok = true;
      }
    }
  },
  computed: {
    b() {
      return this.a + 2;
    }
  }
};
</script>

<style>
#app {
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  color: blue;
}
</style>
