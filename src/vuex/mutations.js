import * as types from "./mutations_types.js";
console.log(1)
console.log(types.ADD);
console.log(1)
export const mutations={
    [types.ADD](state,n){
      state.count+=n;
    },
    [types.REDUCE](state,n){
      state.count-=n;
    }
 }
 console.log(mutations)