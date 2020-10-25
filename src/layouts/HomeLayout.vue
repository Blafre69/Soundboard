<template>
  <div>
    <q-layout view="hHh Lpr lff"
              class="shadow-2 rounded-borders"
    >
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator';
import { DatePicker, Button, Icon, Menu, Layout, Switch } from 'ant-design-vue'; // for js
// import 'ant-design-vue/lib/date-picker/style/css'; // for css
// import 'ant-design-vue/lib/button/style/css'; // for css
// import 'ant-design-vue/lib/icon/style/css'; // for css
// import 'ant-design-vue/lib/menu/style/css'; // for css
// import 'ant-design-vue/lib/layout/style/css'; // for css
// import 'ant-design-vue/lib/switch/style/css'; // for css

@Component
export default class HomeLayout extends Vue {

}
//
//
// const menuList = [
//   {
//     icon: 'play_arrow',
//     label: 'Board',
//     separator: true
//   },
//   {
//     icon: 'mic',
//     label: 'Records',
//     separator: true
//   },
//
//   {
//     icon: 'settings',
//     label: 'Settings',
//     separator: true
//   }
// ];

//
// export default {
//   components: {
//     // datepicker: DatePicker,
//     // buton: Button,
//     // 'a-icon' : Icon,
//     // 'a-menu': Menu,
//     // month: DatePicker.MonthPicker,
//     // 'a-menu-item': Menu.Item,
//     // 'a-layout' : Layout,
//     // 'a-layout-header': Layout.Header,
//     // 'a-layout-sider': Layout.Sider,
//     // 'a-layout-content': Layout.Content,
//     // 'a-switch': Switch,
//
//   },
//   data() {
//     return {
//       //   drawer: false,
//       //   menuList,
//       //   miniState: true,
//       //
//       }
//     }
//
//   }
</script>
