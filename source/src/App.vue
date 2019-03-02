<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  watch: {
    '$router.query.p'(){
      console.log(this.$router.query.p)
    }
  }
}
</script>

<style lang="scss">
body {
  font-family: "Cabin", sans-serif !important;
  background: white;
}
p,
a,
li,
ul,
span,
span {
  font-size: 14px;
}
*:focus {
  outline: 0 !important;
}

#app {
  font-family: "Montserrat", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #444;
}
.pointer {
  cursor: pointer;
  color: #555;
  font-weight: bold;
  opacity: 0.9;
  &:hover {
    opacity: 1;
    color: #ca3a5c !important;
    text-decoration: underline;
  }
}
.text-white {
  color: white !important;
}
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
