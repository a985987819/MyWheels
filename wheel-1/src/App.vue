<template>
  <div>hi</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Laoduan from './components/Laoduan'
export default class App extends Vue{
  components: {
    HelloWorld,
    Laoduan:Laoduan
  }
}
</script>
