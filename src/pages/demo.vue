<template>
  <div>
     当前 demo page : <br/> <button  @click="goDemo()">{{msg}}</button>
     <br/><br/>
     <button @click="clickme()">点击提交state.test值</button> vuex test值：{{ getTestValue }}
     <br><br>
     {{info}}
     <br><br>
     {{info.data}}
  </div>
</template>
<style  scoped>


</style>
<script>
import store from '../store/index'
import demoService from '../api/service/index'
// console.log(store)

export default {
  data(){
      return {
          msg:'跳转demo组件',
          info:''
      }
  },
  computed:{
      // 显示state.test
      getTestValue:function(){
          return this.$store.state.test;
      }
  },
  methods:{
        // 路由跳转
        goDemo:function(){
            this.$router.push({
                path: '/demo',
            });
        },
        // 提交test
        clickme: function() {  
            this.$store.commit("test",150);  
        },

  },
  created:function(){
    
  },
  mounted: async function(){
      try{
        // 两种方式：一、直接使用$post,在page页面请求相关接口
        this.msg = await this.$post(`?tab=get_random_clinic_list_in_city&city_id_change=210100`,{}).then(res=>res.data)
        // 二、在service文件夹下，集中请求接口，然后在暴露出来，在本页调用相关方法使用
        this.info = await demoService.demoFun().then(res=>res.data)
        
      
      }catch(e){

      }
  }


}
</script>


