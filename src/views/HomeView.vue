<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="4"><img src="../assets/logo.png" class = "logo" /></el-col>
          <el-col :span="16"><h2> weather </h2></el-col>
          <el-col :span="4"></el-col>
        </el-row> 
      </el-header>
      <div class="lattitude">Latitude: {{ currPos.lat }}  Longtitude:  {{ currPos.lng }}</div>
      <!-- <div> {{ dataW }}</div> -->
    </el-container>
      <el-tag
        v-for="tag in tags"
        :key="tag"
        class="mx-1"
      >
        {{ tag }}
      </el-tag>
    <el-container>
      <el-main>
        <div class="select-box">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="city">
              <el-input v-model="formInline.city" placeholder="city name" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">Query</el-button>
            </el-form-item>
          </el-form>
        </div>

        <div>
          <div v-for="item in weather" :key="item.id">
            <el-image :src="`https://openweathermap.org/img/wn/${item.icon}.png`" fit="contain"></el-image>
            <el-descriptions title="Info">
              <el-descriptions-item label="Weather">{{ item.main }}</el-descriptions-item>
              <el-descriptions-item label="Detail">{{ item.description }}</el-descriptions-item>
            </el-descriptions>
          </div>
        </div>

        <div>
          <el-table :data="list" stripe style="width: 100%">
            <el-table-column prop="dt_txt" label="Time" width="180" />
            <el-table-column prop="weather[0].description" label="Description" width="180" />
            <el-table-column prop="main.feels_like" label="Temperature" />
          </el-table>
        </div>
      </el-main>
    </el-container>

  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed, watchEffect, } from "vue";
import { getWeather,getForecast,getCurrentForecast,getCurrentWeather } from "../request/api";
import { weatherData } from "../type/listWeather";
import { forecastData } from "../type/listForecast";
import { useGeoLocation } from '../useGeolocation';

export default defineComponent({
  name: "HomeView",
  setup(){

    const dataF = reactive(new forecastData())
    const dataW = reactive(new weatherData())
    let arr:string[]=[]
    let arr2:string[]=[]
    let count = 0
    let tags = reactive<string[]>([])

    const formInline = reactive({
      city:"",
    })

    const {coords} = useGeoLocation()
    const currPos = computed(
      () => ({
        lat: coords.value.latitude,
        lng: coords.value.longitude
      })
    )

    watchEffect(()=>{

      getCurrentWeather(currPos.value.lat,currPos.value.lng).then(res=>{
        dataW.weather = res.data.weather
        dataW.main = res.data.main
        // console.log(dataW)
      })

      getCurrentForecast(currPos.value.lat,currPos.value.lng).then(res=>{
        dataF.list = res.data.list
        // console.log(dataF)

      })
    })

    const onSubmit = () => {
      // console.log(formInline)
      
      arr[count]=formInline.city
      if (count<3) {
        for (let index = 0; index < count+1; index++) {
          arr2[index] = arr[index];
        }
      } else {
        for (let index = count; index >count-3 ; index--) {
          arr2[count-index]=arr[index];
        }
      }
      count++ 
      // console.log(arr2)
      // console.log(arr)
      tags.splice(0, tags.length, arr2[0], arr2[1], arr2[2])
      localStorage.setItem('geo',JSON.stringify(arr2))

      getWeather(formInline.city).then(
        res=>{
          dataW.weather = res.data.weather
          dataW.main = res.data.main
          // console.log(dataW)
        }
      )
      getForecast(formInline.city).then(
        res=>{
          dataF.list = res.data.list
        }
      )
    }
    return{ onSubmit, 
      formInline, 
      ...toRefs(dataF),
      tags,
      ...toRefs(dataW),
      currPos,
      dataW,
      dataF
    }
  },
})
</script>

<style lang="scss" scoped>

.el-header{
  height: 80px;
  background-color: aqua;
  .logo{
  height: 80px;
  }
}
.lattitude{
  left: 500px;
  height: 80px;
}

</style>