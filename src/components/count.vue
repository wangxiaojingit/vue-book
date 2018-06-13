<template>
<div>
    <div>
         <button @click="plus">+</button>
    </div>
    <div>
          当前:{{$store.state.count}}
    </div>    
      <div>
          <button @click="reduce">-</button>
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        plus:function(){
          //this.$store.state.count++;
          this.$store.commit("add",2);
        },
        reduce:function(){
          // this.$store.state.count--;
          this.$store.commit("reduce",1);
        }
    }
}
</script>
<style>

</style>


