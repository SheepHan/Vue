import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({// 导出的是Vuex中的仓库
  state,
  // actions: {
  //   changeCity (ctx, city) { // 上下文ctx,借助这个ctx，可以拿到commit方法
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations
})
