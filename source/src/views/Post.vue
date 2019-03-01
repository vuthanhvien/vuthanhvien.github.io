<template>
  <div class="post">
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
              <b-button class="pull-right" v-b-modal.modal1 >
          <i class="fa fa-pencil"/>
        </b-button>
          </h2>
          <p
            class="time"
            v-if="data.createdAt"
          >Posted {{data.createdAt | formatDate}} by {{data.author && data.author.name}}</p>
           <a class="pointer text-white" :href="`https://www.facebook.com/sharer/sharer.php?u=`+ currentUrl" target="_blank">
                <i class="fa fa-facebook" style="font-size: 28px" />
            </a>
            

<a :href="`https://twitter.com/share?u=`+currentUrl">
                <i class="fa fa-twitter" style="font-size: 28px" />

</a>
        </div>
      </div>
    </div>
    <div class="container">
      <br>
      <br>
        <div class="row">
          <div class="main-content col-md-10 offset-md-1">
        <VueMarkdown :source='data.content'></VueMarkdown>
    </div>
    </div>
      <br>
      <br>
    </div>
    <b-modal size="slg" id="modal1" title="Edit post">
      <div class="row">
        <div class="col-md-6">
          <textarea style="width: 100%; height: 900px" v-model="data.content" ></textarea>
        </div>
        <div class="col-md-6" >
          <div class="main-content" style=" height: 900px; overflow: auto">
          <VueMarkdown :source='data.content'></VueMarkdown>
            
          </div>
        </div>
      </div>
  </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import { getPost } from "@/service.js";
import VueMarkdown from "vue-markdown";

export default {
  name: "home",
  components: {
    VueMarkdown
  },
  data() {
    return {
      data: {},
      currentUrl: ""
    };
  },
  methods: {
    edit() {},
    getData: function() {
      const that = this;
      const id = this.$route.params.id;
      getPost(id).then(function(data) {
        if (data.tags) {
          data.tags = data.tags.split(",");
        } else {
          data.tags = [];
        }
        that.data = data;
      });
    }
  },
  created: function() {
    console.log(this);
    this.currentUrl = window.location.href;
    this.getData();
  }
};
</script>
<style lang="scss">
.modal-slg {
  width: 90%;
  max-width: 90%;
}
.main-content {
  blockquote {
    border-left: 3px solid #c93659;
    padding: 25px;
    padding-left: 30px;
    padding-bottom: 5px;
    background: #f4f4f4;
  }
  p,
  li {
    font-size: 15px;
  }
  p {
    text-align: justify;
  }
  h1,
  h2,
  h4,
  h3 {
    font-weight: bold;
    color: #c93659;
  }
  h5 {
    font-weight: bold;
    color: #555;
  }
  pre {
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.42857143;
    color: #333;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  img {
    display: block;
    margin: 0 auto;
    max-width: 80%;
  }
}
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
    .hashtag {
      a {
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

