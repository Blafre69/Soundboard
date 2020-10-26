<template>
    <q-layout view="hHh Lpr lff"
              class="shadow-2
              rounded-borders"
    >
      <q-header elevated class="bg-blue glossy">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title> Soundboard</q-toolbar-title>
          <q-btn align="right" to='/'>Back Home </q-btn>
        </q-toolbar>

      </q-header>

      <q-drawer
        v-model="drawer"
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        show-if-above
        mini-to-overlay
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3"
      >

        <q-scroll-area class="fit">
          <q-list class="">
            <q-item clickable to="/soundboard/boards" exact v-ripple>

              <q-item-section avatar>
                <q-icon  color="primary" name="developer_board" />
              </q-item-section>
              <q-item-section> Boards</q-item-section>
            </q-item>

            <q-item clickable to="/soundboard/records" exact v-ripple>
              <q-item-section avatar>
                <q-icon  color="primary" name="mic" />
              </q-item-section>
              <q-item-section> Record</q-item-section>
            </q-item>

            <q-item clickable to="/soundboard/settings" exact v-ripple>
              <q-item-section avatar>
                <q-icon  color="primary" name="settings" />
              </q-item-section>
              <q-item-section> Settings</q-item-section>
            </q-item>
          </q-list>

        </q-scroll-area>
      </q-drawer>


      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator';
import { DatePicker, Button, Icon, Menu, Layout, Switch } from 'ant-design-vue'; // for js
import 'ant-design-vue/lib/date-picker/style/css'; // for css
import 'ant-design-vue/lib/button/style/css'; // for css
import 'ant-design-vue/lib/icon/style/css'; // for css
import 'ant-design-vue/lib/menu/style/css'; // for css
import 'ant-design-vue/lib/layout/style/css'; // for css
import 'ant-design-vue/lib/switch/style/css'; // for css

const menuList = [
  {
    icon: 'play_arrow',
    label: 'Board',
    separator: true
  },
  {
    icon: 'mic',
    label: 'Records',
    separator: true
  },

  {
    icon: 'settings',
    label: 'Settings',
    separator: true
  }
];


export default {
  components: {
    datepicker: DatePicker,
    buton: Button,
    'a-icon': Icon,
    'a-menu': Menu,
    month: DatePicker.MonthPicker,
    'a-menu-item': Menu.Item,
    'a-layout': Layout,
    'a-layout-header': Layout.Header,
    'a-layout-sider': Layout.Sider,
    'a-layout-content': Layout.Content,
    'a-switch': Switch

  },
  data() {
    return {
      drawer: false,
      menuList,
      miniState: true

    };
  }

};
</script>
