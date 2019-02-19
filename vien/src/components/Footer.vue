<template>
  <div class="footer ">
    <div class="container">
      <div class="row">
        <div class="col-md-9 logo">
          <router-link to="/">
            <img src="/logo-white.png" />
          </router-link>
        </div>
        <div class="col-md-3 text-center">
          <ul class="menu">
            <li>
              <router-link to="/home">
                Home
              </router-link>
            </li>
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
  padding: 20px 0 20px 0;
  background: #444;
  .menu{
     padding: 30px 0;
    list-style: none;
    li{
      display: block;
    }
    a{
      color: white;
      font-weight: bold;
    }
  }
  .logo{
    padding: 40px 0;
  img{
    height: 80px;
  }
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
