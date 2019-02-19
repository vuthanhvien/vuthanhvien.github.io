<template>
  <div class="home">
    <Header/>
    <Intro/>
    <Blog :data="blogs"/>
    <Pagination :pageIndex="pageIndex" :total="3" :onChangePage="onChangePage"/>

    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Blog from "@/components/Blog.vue";
import Pagination from "@/components/Pagination.vue";

import { getPosts } from "@/service.js";

export default {
  name: "home",
  components: {
    Intro,
    Header,
    Footer,
    Blog,
    Pagination
  },
  data() {
    return {
      pageIndex: 1,
      blogs: []
    };
  },
  methods: {
    onChangePage: function(params) {
      this.pageIndex = params;
    },
    getData: function (params) {
      const that = this;
      getPosts().then(function(querySnapshot) {
      that.blogs = [];
      querySnapshot.forEach(function(doc) {
        const data = doc.data();
        that.blogs.push({
          id: doc.id,
          ...data
        })
      });
      console.log(that.blogs);
    });
    }
  },
  created: function() {
    this.getData();
  }
};
</script>
<style lang="scss">
body {
  font-family: "Cabin", sans-serif !important;
  background: white;
}
p,
a,
span {
  font-size: 14px;
}
*:focus {
  outline: 0 !important;
}
</style>

