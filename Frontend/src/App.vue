<template>
  <Navbar />
  <router-view />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style>
body {
  margin: 0;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  padding: 0;
  min-height: 100vh;
}

#app {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
</style>
