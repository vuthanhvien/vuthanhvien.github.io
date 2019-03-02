<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
   created() {
      console.log(this.$route.query.p);
      console.log(this.$route.query.q);
      const query  = {};
      if(this.$route.query.q){
        const querys = this.$route.query.q.split('~and~');
        querys.map(item=>{
          const q = item.split('=');
          query[q[0]] = q[1];
        })
      }
      console.log({ name: this.$route.query.p , query: query });
      // this.$route.
      this.$router.push({ path: this.$route.query.p , query: query })
  },
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
