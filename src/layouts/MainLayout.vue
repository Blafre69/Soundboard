<template>
  <div class="q-pa-md">
    <q-layout view= "hHh Lpr lff"  container style="height: 1000px" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-blue glossy text-black">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-btn  :ripple="false"  label='Go Back Home' to="/"/>
          <q-toolbar-title class="text-center"> Soundboard </q-toolbar-title>
        </q-toolbar>
      <q-drawer
        v-model="drawer"
        show-if-above

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay

        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list bordered padding>
              <q-item clickable  v-ripple style="height: 150px" to="/board" exact>
                <q-item-section avatar>
                  <q-icon color="primary" name="play_arrow"/>
                </q-item-section>
                <q-item-section> Board </q-item-section>
              </q-item>
              <q-separator/>
              <q-item clickable  v-ripple style="height: 150px" to="/records" exact>
                <q-item-section avatar>
                  <q-icon color="primary" name="mic"/>
                </q-item-section>
                <q-item-section> Records </q-item-section>
              </q-item>
              <q-separator/>              
              <q-item clickable  v-ripple style="height: 150px" to="/settings" exact>
                <q-item-section avatar>
                  <q-icon color="primary" name="settings"/>
                </q-item-section>
                <q-item-section> Settings </q-item-section>
              </q-item>
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
      miniState: true,

    }
  }

}
</script>