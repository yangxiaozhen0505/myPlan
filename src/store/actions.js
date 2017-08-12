import * as types from './types'
export const actions = {
  //创建计划
  [types.ADD_PLAN]({commit}, list){
    let plan = {
      avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3014814867,2553808059&fm=26&gp=0.jpg',
      name: 'yxz',
      age:22,
      gender:'F',
      education:'junior degree',
      ...list
    };
    commit(types.ADD_PLAN, plan)
  },
  //增加总时间
  [types.ADD_TOTALTIME]({commit},n){
    commit(types.ADD_TOTALTIME,n);
  },
  //减少总时间
  [types.MINU_TOTALTIME]({commit},n){
    commit(types.MINU_TOTALTIME,n)
  },
  //删除计划
  [types.DEL_PLAN]({commit},list){
    commit(types.DEL_PLAN,list)
  }
};
