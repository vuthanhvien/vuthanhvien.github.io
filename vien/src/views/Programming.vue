<template>
  <div class="home ">
    <Header/>
    <br>
    <Blog/>
    <Blog/>
    <Blog/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Blog from "@/components/Blog.vue";

export default {
  name: "home",
  components: {
    Header,
    Footer,
    Blog
  }
};
</script>
<style lang="scss">
body {
  font-family: "Cabin", sans-serif!important;
}
p,a,span{
  font-size: 14px;
}
</style>

