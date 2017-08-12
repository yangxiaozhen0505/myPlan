<!--<link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.css">-->
<template>
  <div>
    <div class="panel panel-default text-center shadow">
      <div class="panel-heading">
        <h2>计划总时间</h2>
      </div>
      <div class="panel-body">
        <div class="default h3">
          {{time | keep}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  export default {
      filters:{
         keep(t){//根据T的值，转化它的显示形式
             return t.toFixed(2)+'h';
         }
      },
    data(){
      return {}
    },
    computed: {
      ...mapState({time:'totalTime'})
    },
    components: {},
    methods: {}
  }
</script>
<style scoped>
  .shadow{
    box-shadow: 3px 3px 5px 3px #ccc;
  }
</style>
