<template>
<q-page>
  <div class="row justify-center home-page-container">
    <div class="home-page-content">
      <div class="row justify-center text-h2 secondary-color">
        Soundboard
      </div>

        <q-list class="column items-center">
          <q-item style="width:280px" clickable to="/soundboard/boards" exact  v-ripple >

            <q-item-section  avatar>
              <q-icon size="lg" color="secondary" name="developer_board" />
            </q-item-section>
            <q-item-section class="text-h3 col-auto secondary-color" >Boards</q-item-section>
          </q-item>

          <q-item style="width:280px" clickable to="/soundboard/records" exacFFFt v-ripple >
            <q-item-section  avatar>
              <q-icon size="lg" color="secondary" name="mic" />
            </q-item-section>
            <q-item-section class="text-h3 col-auto secondary-color">Record</q-item-section>
          </q-item>

          <q-item style="width:280px" clickable  to="/soundboard/settings" exact v-ripple>
            <q-item-section  avatar>
              <q-icon size="lg" color="secondary" name="settings" />
            </q-item-section>
            <q-item-section class="text-h3 col-auto secondary-color" >Settings</q-item-section>
          </q-item>
        </q-list>
    </div>
  </div>
</q-page>
</template>

<script>
export default {
  data () {
    return {
      slide: 'style',
      presentation: 'Salut à toi soundboarder, on est 2 potes qui avont mis en place un site où tu peux créer les propres sons de tes potes',
      fcnt: 'Comment çà fonctionne ? Déplace toi dans le menu pour enregistrer tes propres records et rejouer les dans ton board'
    }
  }
}
</script>
