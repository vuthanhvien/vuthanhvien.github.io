<template>
  <div class="post">
    <Header/>
    <div class="cover" :style="{'background-image': `url(`+ data.background+`)`}">
      <div class="content">
        <div class="container">
          <p class="hashtag">
            <router-link
              v-for="tag of data.tags"
              :key="tag"
              :to="{path: '/search', query: {s: tag}}"
            >#{{tag}}</router-link>
          </p>
          <h2>
            <strong>{{data.title}}</strong>
          </h2>
          <p
            class="time"
            v-if="data.createdAt"
          >Post {{data.createdAt.seconds | formatDate}} by {{data.creator}}</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="main-content col-md-10 offset-md-1">
        {{data.content}}
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { getPost } from "@/service.js";

export default {
  name: "home",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      data: {}
    };
  },
  methods: {
    getData: function() {
      const that = this;
      const id = this.$route.params.id;
      getPost(id).then(function(doc) {
        if (doc.exists) {
          that.data = doc.data();

          const tags = [];
          console.log(that.data);
          Object.keys(that.data).forEach(key => {
            if (key.indexOf("tag_") > -1) {
              tags.push(key.substring(4));
            }
          });
          that.data.tags = tags;
        }
      });
    }
  },
  created: function() {
    this.getData();
  }
};
</script>
<style lang="scss">
.cover {
  background-repeat: no-repeat;
  min-height: 500px;
  padding-top: 100px;

  background-size: cover;
  .content {
    padding-top: 230px;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    height: 400px;
    .hashtag{
      a{
        color: white;
        font-weight: bold;
        margin-right: 5px;
      }
    }
    .time,
    .hashtag,
    h2 {
      color: white;
    }
  }
}
</style>

