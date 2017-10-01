<template>
  <div id="app">
    <div class="logo">
      <img src="./assets/sm_cc_vaultLogo2.png" style="margin-bottom: 10px">
      <md-button class="md-small md-raised md-warn">
        <md-icon class="login-icon">lock</md-icon>
          login
      </md-button>
    </div>
    <div class="container">
      <div>
        <router-link to="/">
          <md-button v-bind:class="{'md-primary': isRoute('Welcome')}">
            Welcome
          </md-button>
        </router-link>
        <router-link to="/summary">
          <md-button v-bind:class="{'md-primary': isRoute('Summary')}">
            Summary
          </md-button>
        </router-link>
        <router-link to="/categories">
          <md-button v-bind:class="{'md-primary': isRoute('Categories')}">
            Categories
          </md-button>
        </router-link>
        <router-link to="/upload">
          <md-button v-bind:class="{'md-primary': isRoute('Upload')}">
            Upload
          </md-button>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',

  methods: {
    isAuthorized () {
      // todo: add logic
      return false
    },

    isRoute (myRoute) {
      let route = this.$route.name
      return route === myRoute
    }
  }
}

</script>

<style>
#app {
  font-family: "Helvetica Neue",Arial,sans-serif;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  margin-left: 5px;
  margin-right: 5px;
}

  p {
    margin-left: 150px;
    margin-right: 150px;
  }

  div .container {
    background-color: #06477e;
  }

  .logo {
    text-align: left;
  }

  .login-icon {
    font-size: 13px;
    height: 20px;
    min-width: 0px;
    padding-bottom: 3px;
    width: 15px;
  }

  .md-small {
    float: right;
    min-width: 70px;
    height: 20px;
    line-height: 10px;
    min-height: 20px;
    vertical-align: top;
    font-size: 10px;
    padding: 0 0;
  }

</style>
