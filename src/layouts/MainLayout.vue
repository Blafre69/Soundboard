<template>
  <div class="q-pa-md">
    <q-layout view= "hHh Lpr lff"  container style="height: 1000px" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-blue glossy text-black">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title class="text-center"> Soundboard </q-toolbar-title>
        </q-toolbar>
        <q-drawer 
        v-model="drawer"
        :width="200"
        :breakpoint="700"
        bordered
        content-class="bg-blue-7"
        >
        <q-scroll-area class="fit">
          <q-list>
            <template v-for="(menuItem, index) in menuList">
              <q-item :key="index" clickable :active="menuItem.label === 'Outbox'" v-ripple style="height: 150px">
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon"/>
                </q-item-section>
                <q-item-section>
                  {{menuItem.label}}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>


          </q-list>
        </q-scroll-area>
        </q-drawer>


      </q-header>

      <q-page-container>
        <router-view/>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator';
import {DatePicker , Button , Icon, Menu, Layout, Switch} from 'ant-design-vue'; // for js
import 'ant-design-vue/lib/date-picker/style/css'; // for css
import 'ant-design-vue/lib/button/style/css'; // for css
import 'ant-design-vue/lib/icon/style/css'; // for css
import 'ant-design-vue/lib/menu/style/css'; // for css
import 'ant-design-vue/lib/layout/style/css'; // for css
import 'ant-design-vue/lib/switch/style/css'; // for css

const menuList=[
  {
    icon:"play_arrow",
    label: "Board",
    separator:true,
  },
  {
    icon:"mic",
    label: "Records",
    separator:true,
  },   
  
  {
    icon:"settings",
    label: "Settings",
    separator:true,
  }, 
]



export default {
  components: {
  datepicker: DatePicker,
  buton: Button,
  'a-icon' : Icon, 
  'a-menu': Menu,
  month: DatePicker.MonthPicker,
  'a-menu-item': Menu.Item,
  'a-layout' : Layout,
  'a-layout-header': Layout.Header,
  'a-layout-sider': Layout.Sider,
  'a-layout-content': Layout.Content,
  'a-switch': Switch,

  },
  data() {
    return {
      drawer: false,
      menuList,
    }
  }

}
</script>