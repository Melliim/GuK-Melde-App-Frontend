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
                <tr v-for="km in krankmeldungen" :key="km.id" >
                  <td v-if="km.mitarbeiter.sexIsFemale">Frau {{km.mitarbeiter.nachname}}</td>
                  <td v-else> Herr {{km.mitarbeiter.nachname}}</td>
                  <td v-if="km.enddatum == null">Unbestimmte Zeit</td>
                  <td v-else>{{km.enddatum}}</td>
                  <td v-if="km.mitarbeiter.abteilung == null">Über Vorgesetzter</td>
                  <td v-else-if="km.mitarbeiter.abteilung.boss.sexIsFemale">Frau {{km.mitarbeiter.abteilung.boss.nachname}}</td>
                  <td v-else>Herr {{km.mitarbeiter.vorgesetzer.nachname}}</td>
                  <td v-if="km.bestatigt"><p style="background-color: darkseagreen; padding: 1px; border-radius: 30px; font-size: 0.7rem; color: white">Bestätigt</p></td>
                  <td v-else><p style="background-color: orangered; padding: 1px; border-radius: 30px; font-size: 0.7rem; color: white">Offen</p></td>
                  <td v-if="!km.bestatigt">
                    <a style="color: cornflowerblue; text-decoration: underline" @click="bestatigen(km)">bestätigen</a><br>
                    <a style="color: cornflowerblue; text-decoration: underline">ablehnen</a> <br>
                  <a style="color: cornflowerblue; text-decoration: underline" @click="einblenden(km)">einsehen</a>
                  </td>
                  <td>

                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <img :src="img_url" v-if="!ausblenden">

  </section>

</template>


<script>


export default {
  name: 'DashBoard',
  components: {},
  data () {
    return {
      img_url: '',
      ausblenden: true
    }
  },
  methods: {
    einblenden(krankmeldung){
      this.img_url = krankmeldung.image
      console.log(this.img_url)
      this.ausblenden = false
    },
    bestatigen(km){

      km.bestatigt = true;

      fetch("http://localhost:8082/krankmeldung", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(km)
      })  .then(response => {
        // Erfolgreiche Antwort
        console.log(response);
      })
        .catch(error => {
          // Fehlerbehandlung
          console.error(error);
        });

      // window.location.reload()
    }
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

a{
cursor: pointer;
}

</style>
