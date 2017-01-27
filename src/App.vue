<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello/>
    <ProHeader />
    <ProFooter />
  </div>
</template>

<script>
import Hello from './components/Hello'
import ProFooter from './components/ProFooter'
import ProHeader from './components/ProHeader'

export default {
  name: 'app',
  components: {
    Hello,
    ProFooter,
    ProHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
