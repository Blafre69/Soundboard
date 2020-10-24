<template>
<q-page>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
            <div>
          <q-avatar class="q-mb-sm" size="80px" >
              <img src='../assets/flo.jpg'/>
          </q-avatar>          
          <q-avatar class="q-mb-sm" size="80px" >
              <img src='../assets/val.jpg'/>
          </q-avatar>
            </div>
          <div class="q-mt-md text-center">
            {{ presentation }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="agriculture" class="column no-wrap flex-center">
          <q-icon name="agriculture" size="56px" />
          <div class="q-mt-md text-center">
            {{ fcnt }}
          </div>
        </q-carousel-slide>
      </q-carousel>
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