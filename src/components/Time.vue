
<template>
  <div>
    <router-link to="/time/add-time" class="btn btn-primary">创建</router-link>
    <hr>
    <router-view></router-view>
    <ul class="list-group" v-for="list in lists">
      <li class="list-group-item">
        <div class="row">
        <div class="col-md-2 text-center">
          <img :src="list.avatar" class="img-circle img-responsive">{{list.name}}
        </div>
        <div class="col-md-3">
          <div class="text-success v">
            <i class="glyphicon glyphicon-time"></i>&nbsp;{{list.time}}小时
          </div>
          <div class="text-info" >
            <i class="glyphicon glyphicon-calendar"></i>&nbsp;{{list.date}}
          </div>
        </div>
        <div class="col-md-5">
          <div class="vcl">
            {{list.comment}}
          </div>
        </div>
        <div class="col-md-2">
          <button class="btn btn-danger" @click="remove(list)">&times;</button>
        </div>
        </div>
      </li>
    </ul>
    <div class="text-warning h3" v-show="!isShow">恭喜主人！计划表里的任务已经都实现了哦~</div>
  </div>
</template>
<script>
  import * as types from '@/store/types'
  import {mapState,mapActions,mapGetters} from 'vuex'
  export default {
    data(){
      return {}
    },
    computed: {
      ...mapState(['lists']),
      ...mapGetters(['isShow'])
    },
    components: {},
    methods: {
      ...mapActions([types.DEL_PLAN, types.MINU_TOTALTIME]),
      //list表示当前要删除的那一项
      remove(list){
        this[types.DEL_PLAN](list);
        this[types.MINU_TOTALTIME](list.time)
      }
    }
  }
</script>
<style scoped>

  .v{
    height: 80px;
    line-height:80px;
  }
  .vcl{
    height: 148px;
    line-height:148px;
  }
</style>
