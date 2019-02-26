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
            <strong>{{data.name}}</strong>
          </h2>
          <p
            class="time"
            v-if="data.createdAt"
          >Post {{data.createdAt | formatDate}} by {{data.author && data.author.name}}</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="main-content col-md-10 offset-md-1">
       
        <VueMarkdown>{{data.content}}</VueMarkdown>
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
import VueMarkdown from 'vue-markdown'


export default {
  name: "home",
  components: {
    Header,
    Footer, 
    VueMarkdown
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
      getPost(id).then(function(data) {
          if(data.tags){
            data.tags = data.tags.split(',');
          }else{
            data.tags  = []
          }
          that.data = data;
      });
    }
  },
  created: function() {
    console.log(this)
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

