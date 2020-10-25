<template>
  <div class="page-container">
    <q-list v-for="(item, index) in boardList"  >
        <q-item clickable :to="`/soundboard/board/${item.id}`" exact  v-ripple >
          <q-item-section class="" >{{ item.label }}</q-item-section>
        </q-item>
    </q-list>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { boards } from '../local-db'; // LISTE DES BOARDS
@Component
export default class BoardList extends Vue {


  get boardList () {
     return boards
  }


}
</script>
