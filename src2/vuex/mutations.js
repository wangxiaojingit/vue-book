import * as Types from"./mutations_types";

export const mutations={
      //添加购物车功能
      [Types.ADDCART](state,item){
         state.cartData.push(item)
      },
     
      //删除购物车功能
      [Types.DELETE](){

      },
      //清空购物车功能
      [Types.CLEARCART](){

      },
      //改变购物车的数量
      [Types.CHANGECARTNUM](){

      }
}