<template>
  <div class="home">
    <img alt="Vue logo" src="/images/rslogo3.png">
    <HelloWorld msg="Welcome to the Grand Exchange!"/>
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

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
