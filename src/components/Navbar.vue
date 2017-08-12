
<template>
  <div>
    <div class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand">
            <i class="glyphicon glyphicon-time"></i>
            行程计划表
          </a>
        </div>
        <ul class="navbar-nav nav">
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/time">计划列表</router-link></li>
        </ul>
        <!--如果没有创建任务列表就不显示主人头像-->
        <ul class="navbar-nav nav pull-right text-center w" v-if="lists.length>0?true:false">
          <li><router-link to="/detail">
            <img :src="lists[0].avatar" class="img-circle img-responsive">
            {{lists[0].name}}
          </router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return {}
    },
    computed: {
      ...mapState(['lists'])
    },
    components: {},
    methods: {}
  }
</script>
<style scoped>
  .w img{
    height: 30px;
  }
</style>
