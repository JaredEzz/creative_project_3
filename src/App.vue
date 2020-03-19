<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <br>
      <br>
      <img alt="Vue logo" src="/images/rslogo3.png">
    </div>
    <router-view/>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="footer" style="
              position: fixed;
              padding-top: 10px;
              left: 0;
              bottom: 0;
              width: 100%;
              background-color: #c2b7a9;
              color: white;
              text-align: center;">
      <p><a style="color: black; font-weight: lighter"
            href="https://github.com/JaredEzz/creative_project_3">Github
        Repository</a></p>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: antiquewhite;
  background-color: #42382a;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: dimgrey;
}

#nav a.router-link-exact-active {
  color: grey;
}
</style>
