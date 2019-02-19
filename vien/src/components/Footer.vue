<template>
  <div class="footer ">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <router-link to="/">
            <img src="/logo.png" />
          </router-link>
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-4 text-center">
          <ul class="menu">
           
             <li>
              <router-link to="/programming">
                Programming
              </router-link>
            </li>
             <li>
              <router-link to="/hobby">
                Hobby
              </router-link>
            </li>
             <li>
              <router-link to="/whoiam">
                Who I am?
              </router-link>
            </li>
             <li>
              <router-link to="/contact">
                Contact
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    <hr>
  <p class="text-center">Design and develop by <router-link  to="/whoiam">Vienvu</router-link></p>
  </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  padding: 50px 0 20px 0;
  background: #444;
  .menu{
    list-style: none;
    li{
      display: block;
    }
    a{
      color: white;
      font-weight: bold;
    }
  }
  img{
    width: 100%;
  }
  p {
    color: white;
    a{
      color: white;
      font-weight: bold;
    }
  }
  hr{
    border-color: #fff5;
  }
}
</style>
