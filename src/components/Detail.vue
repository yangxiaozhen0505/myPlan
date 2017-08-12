<!--<link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.css">-->
<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading text-center">
        <img :src="lists[0].avatar" class="img-circle shadow">
      </div>
      <div class="panel-body">
        <div class="table table-bordered text-center text-info jumbstron shadow">
          <div>姓名：{{lists[0].name}}</div>
          <div>年龄：{{lists[0].age}}</div>
          <div>性别：{{lists[0].gender}}</div>
          <div>学历：{{lists[0].education}}</div>
        </div>
      </div>
      <div class="panel-footer">

        <ul v-for="desc in descs">
          <li>
            <div>
              {{desc.item}}
            </div>
            <div>
              {{desc.technology}}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        descs: [
          {item: '热爱互联网行业，对技术精益求精', technology: 'Love to learn'},
          {item: '不小看基础布局，做事一丝不苟', technology: 'DIV + CSS + JS'},
          {item: '运用插件，知其然更知其所以然', technology: 'Bootstrap + jQ'},
          {item: '擅长组件式开发，重效率更重质量', technology: 'Vue'},
          {item: '生命不息，学习不止', technology: 'And so on ~~'},
          {item: '如果您愿意给我一次机会，定不让您后悔^_^', technology: 'Tel: 18811141615 ~~'}
        ]
      }
    },
    computed: {
      ...mapState(['lists'])
    },
    components: {},
    methods: {}
  }
</script>
<style scoped>
  .shadow {
    box-shadow: 6px 6px 9px 3px #b19f8f;
  }

  .shadow div {
    line-height: 35px;
  }
</style>
