<template>
  <div class="home ">
    <Header/>
    <Intro/>
    <Blog/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Blog from "@/components/Blog.vue";

export default {
  name: "home",
  components: {
    Intro,
    Header,
    Footer,
    Blog
  }
};
</script>
<style lang="scss">
body {
  font-family: "Cabin", sans-serif!important;
  background: white;
}
p,a,span{
  font-size: 14px;
}
*:focus{
  outline: 0!important;
}
</style>

