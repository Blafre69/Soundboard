<template>
  <div class="q-pa-md">
    <q-btn color="purple" label="Le FLO">
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column">
              <q-btn color="black" flat label="Oh bosetti" push/>
              <q-btn color="black" flat label="Oh bosetti" push/>
              <q-btn color="black" flat label="Oh bosetti" push/>
          </div>

          <q-separator vertical inset class="q-mx-lg" />

          <div class="column items-center">
            <q-avatar size="72px">
              <img src="../assets/flo2.jpg">
            </q-avatar>

            <q-btn
              color="primary"
              label="Delete"
              push
              size="md"
              v-close-popup
            />            
            
            <q-btn
              color="primary"
              label="Rename"
              push
              size="md"
              v-close-popup
            />
          </div>
        </div>
      </q-menu>
    </q-btn>
        <q-btn color="purple" label="Le rait">
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column">
              <q-btn color="black" flat label="Oh bosetti" push/>
              <q-btn color="black" flat label="Oh bosetti" push/>
              <q-btn color="black" flat label="Oh bosetti" push/>
          </div>

          <q-separator vertical inset class="q-mx-lg" />

          <div class="column items-center">
            <q-avatar size="72px">
              <img src="../assets/arthur.jpg">
            </q-avatar>

            <q-btn
              color="primary"
              label="Delete"
              push
              size="md"
              v-close-popup
            />            
            
            <q-btn
              color="primary"
              label="Rename"
              push
              size="md"
              v-close-popup
            />
          </div>
        </div>
      </q-menu>
    </q-btn>
  </div>
</template>
<script>
export default {
    
}
</script>