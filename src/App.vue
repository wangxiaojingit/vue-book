<template>
  <div id="app">
   <router-view/>
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from "./base/tap.vue"
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
     Tab
  }
}
</script>

<style>
*{margin:0;padding:0;}
.clearfix:before,.clearfix:after {
  display: table;
  content: " "
}

.clearfix:after {
  clear: both
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 

}
a{text-decoration: none;}
*{margin:0;padding:0;}
ul,li,ol{
  list-style:none;
}
</style>
