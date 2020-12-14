<template>
  <div id="app" class="bg-gradient-to-t bg-gray-200 min-h-full">
    <div id="nav" class="p-6 text-center shadow bg-white">
      <router-link to="/">Home</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  min-height: 100%;
}

body {
  min-height: 100vh;
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #1caaba;
}
</style>
