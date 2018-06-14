<template>
<div>
    <div>
         <button @click="plus">+</button>
    </div>
    <div>
          <div>
             当前:{{$store.state.count}}
          </div>
          <div>
             奇数偶数:{{$store.getters.val}}
          </div>
    </div>    
      <div>
          <button @click="reduce">-</button>
      </div>
    </div>
</template>
<script>
import * as types from "../vuex/mutations_types.js";

export default {
    data(){
        return {

        }
    },
    methods:{
        plus:function(){
          //this.$store.state.count++;
          this.$store.commit(types.ADD,2);
        },
        reduce:function(){
          // this.$store.state.count--;
          this.$store.commit(types.REDUCE,1);
        }
    }
}
</script>
<style>

</style>


