<template>
  <div class="search ">
    <Header/>
    <br>
    <br>
    <div class="container">
        <h2>Search for: <strong>{{keySearch}}</strong></h2>
    </div>
    <br>
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
  name: "search",
  components: {
    Header,
    Footer,
    Blog
  },
  data() {
    return {
      keySearch: ""
    };
  },
  methods: {
    doSearch() {
      this.keySearch = this.$route.query.s;
    }
  },
  watch: {
    "$route.query.s"() {
      this.doSearch();
    }
  },created() {
    this.doSearch();
  },
};
</script>
<style lang="scss">
.search {
  h2 {
    color: #999;
    strong{
      color: #444;
    }
  }
}
</style>

