<template>
  <div>
    <div class="panel panel-default text-center shadow">
      <div class="panel-heading">
        <h2>计划总事件</h2>
      </div>
      <div class="panel-body">
        <div class="default h3">
          {{l.length}}件事
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  export default {
    data(){
      return {}
    },
    computed: {
      ...mapState({l:'lists'})
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
