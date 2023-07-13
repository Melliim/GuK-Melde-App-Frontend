<template>
  <div class="board-view">
    <div class="container">
    <DashBoard :krankmeldungen="krankmeldungen" :employees="employees"></DashBoard>
    </div>
  </div>
</template>


<script>

import DashBoard from '@/components/DashBoard.vue'

export default {
  name: 'BoardView',
  components: {
    DashBoard,

  }, data(){
    return{
      krankmeldungen: [],
      employees: []
    }
  },methods:{

  }, mounted () {
    //TODO: spilt in baseURL
    const endpointKrankmeldungen = 'http://localhost:8082/krankmeldungen';
    const endpointMitarbeiter = 'http://localhost:8082/mitarbeiter';
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpointKrankmeldungen, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(km => {
        this.krankmeldungen.push(km)
      }))
      .catch(error => console.log('error', error))


    fetch(endpointMitarbeiter, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(employee => {
        this.employees.push(employee)
      }))

      .catch(error => console.log('error', error))

  }

}
</script>


<style>
.board-view {
  background-color: #4f74c4;

}

</style>
