<template>
  <div class="q-pa-md">
    <q-table 
    :data="data"
    :columns="columns" 
    row-key="name"
    >
    <template v-slot:top>
      <q-btn dense color="green" label="Add Sound" @click=" show_dialog=true"/>
    </template>
    <template v-slot:body="props">
    <q-tr :props="props">
      <q-td key="Le Raït" :props="props">
        {{ props.row.label }}
      </q-td>
      <q-td key="La vieille branche" :props="props">
        {{ props.row.label }}
      </q-td>      
      <q-td key="Le spooky" :props="props">
        {{ props.row.label }}
      </q-td>
      <q-td>
        <q-btn color="blue" label="Play" @click="playSound('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3')" size=sm no-caps></q-btn>
        <q-btn color="green" label="Rename" @click="editItem(props.row)" size=sm no-caps></q-btn>
        <q-btn color="red" label="Delete"  @click="deleteItem(props.row.label)" size=sm no-caps></q-btn>
      </q-td>
    </q-tr>
    </template>

    </q-table>
  </div>

</template>
<script lang="ts">
// import { Component, Prop, Vue } from 'vue-property-decorator';
import { boardsDetails } from '../local-db'; // DETAIL OF EACH BOARD

// @Component
// export default class Board extends Vue {
//   $data
//   private deleteItem(index) {

//   }

//   get boardSounds(){
//     return boardsDetails[this.$route.params.id]['sounds']
//   }

export default {
// }
data () {
  return {
     show_dialog: false,
      editedIndex: -1,
      editedItem: {
        label: "",},

      data: boardsDetails[this.$route.params.id]['sounds'], //prise de tout l'objet 

    columns : [
      {
        name:boardsDetails[this.$route.params.id].label,
        label:'Name of the sounds',
        field:'name',
        required:true,
        align:'left',

      },      
      
    ],
    // data:[
    //   {
    //     name:"Le bruit du cerf",
    //     mp3:'mp3'
    //   },      
      
    //   {
    //     name:"Le bruit du singe",
    //     mp3:'mp3'
    //   },

    // ]

  }
},
methods: {
  deleteItem(item) {
    const index = this.data.indexOf(item);
    confirm("Are you sure you want to delete this item?") &&
    this.data.splice(index, 1);
  }, 

    editItem(item) {
    this.editedIndex = this.data.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.show_dialog = true;
    },

    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
}
}
</script>

