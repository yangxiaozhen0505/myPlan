<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <Slidebar/>
          <Slidebar2/>
        </div>
        <div class="col-md-9">
          <transition enter-active-class="animated zoomIn" leave-active-class="animated bounceUp" mode="out-in">
            <router-view class="position"></router-view>
          </transition>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import Navbar from '@/components/Navbar'
import Slidebar from '@/components/Slidebar'
import Slidebar2 from '@/components/Slidebar2'
export default {
  data(){
    return {}
  },
  computed: {},
  components: {Navbar,Slidebar,Slidebar2},
  methods: {}
}
</script>

<style scoped>
.position{
  position:absolute;
  width: 100%;
}
</style>
