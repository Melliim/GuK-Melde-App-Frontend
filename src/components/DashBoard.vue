<template>

  <section class="vh-100" style="background-color: #eee;" >
    <div  >
      <div class="row justify-content-center align-items-center " >
        <div class="col col-lg-9  ">
          <div class="card rounded-3" >
            <div class="card-body p-4">

              <h4 class="text-center my-3 pb-3">Übersicht</h4>

              <table class="table mb-4">
                <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Abwesend bis</th>
                  <th scope="col">Vorgesetzer</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="km in krankmeldungen" :key="km.id">
                  <td v-if="km.mitarbeiter.sexIsFemale">Frau {{km.mitarbeiter.nachname}}</td>
                  <td v-else> Herr {{km.mitarbeiter.nachname}}</td>
                  <td v-if="km.enddatum == null">Unbestimmte Zeit</td>
                  <td v-else>{{km.enddatum}}</td>
                  <td v-if="km.mitarbeiter.abteilung == null">Über Vorgesetzter</td>
                  <td v-else-if="km.mitarbeiter.abteilung.boss.sexIsFemale">Frau {{km.mitarbeiter.abteilung.boss.nachname}}</td>
                  <td v-else>Herr {{km.mitarbeiter.vorgesetzer.nachname}}</td>
                  <td v-if="km.bestatigt"></td>
                </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div v-for="km in krankmeldungen" :key="km.id">
  <p v-if="km.mitarbeiter.sexIsFemale">{{km.mitarbeiter.nachname}}</p>
  </div>
</template>


<script>


export default {
  name: 'DashBoard',
  components: {},
  data () {
    return {}
  },
  methods: {

  },
  props: {
    krankmeldungen: {
      type: Array,
      required: true
    }, employees: {
      type: Array,
      required: true
    }

  }, mounted () {
  }
}
</script>


<style>


</style>
