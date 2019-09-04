<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld
      msg="Welcome to Your Vue.js + TypeScript App"
      a="123"
      b="c"
      d="qwesdadasd"
      msg1="Welcome to Your Vue.js + TypeScript App"
      msg3="Welcome to Your Vue.js + TypeScript App"
      msg4="Welcome to Your Vue.js + TypeScript App"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
