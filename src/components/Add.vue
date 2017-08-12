<template>
  <div>
    <form>
      <div class="form-group">
        <div class="row">
          <div class="col-md-6">
            <label for="date" class="control-label">日期</label>
            <input type="date" id="date" class="form-control" placeholder="'Date" v-model="date">
          </div>
          <div class="col-md-6">
            <label for="time" class="control-label">时间</label>
            <input type="number" id="time" class="form-control" placeholder="Time" v-model.number="time">
          </div>
        </div>
      </div>
      <div class="form-group">
        <textarea class="form-control" placeholder="请输入描述信息" v-model="comment"></textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-success" @click="add">添加</button>
        <button class="btn btn-default" @click="cancel">取消</button>
      </div>
    </form>
  </div>
</template>
<script>
  import * as types from '../store/types'
  import {mapActions} from 'vuex';
  export default {
    data(){
      return {date:'',time:'',comment:''}
    },
    computed: {},
    components: {},
    methods: {
      ...mapActions([types.ADD_PLAN,types.ADD_TOTALTIME]),
        add(){
          //发布添加的动作
            this[types.ADD_PLAN]({
              date:this.date,
              time:this.time,
              comment:this.comment
            });
            //发布添加的总时间的动作
            this[types.ADD_TOTALTIME](this.time);
        },
        cancel(){
            this.$router.back();
      }
    }
  }
</script>
<style scoped>
</style>
