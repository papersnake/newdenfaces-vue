<template>
  <div class="container">
    <div class="panel panel-default">
      <table class="table table-striped">
        <thead>
          <tr>
            <th colspan="2">Stats</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Leading race in Top 100</td>
            <td>{{state.leadingRace.race}} with {{state.leadingRace.count}} characters</td>
          </tr>
          <tr>
            <td>Leading bloodline in Top 100</td>
            <td>{{state.leadingBloodline.bloodline}} with {{state.leadingBloodline.count}} characters</td>
          </tr>
          <tr>
            <td>Amarr Characters</td>
            <td>{{state.amarrCount}}</td>
          </tr>
          <tr>
            <td>Caldari Characters</td>
            <td>{{state.caldariCount}}</td>
          </tr>
          <tr>
            <td>Gallente Characters</td>
            <td>{{state.gallenteCount}}</td>
          </tr>
          <tr>
            <td>Minmatar Characters</td>
            <td>{{state.minmatarCount}}</td>
          </tr>
          <tr>
            <td>Total votes cast</td>
            <td>{{state.totalVotes}}</td>
          </tr>
          <tr>
            <td>Female characters</td>
            <td>{{state.femaleCount}}</td>
          </tr>
          <tr>
            <td>Male characters</td>
            <td>{{state.maleCount}}</td>
          </tr>
          <tr>
            <td>Total number of characters</td>
            <td>{{state.totalCount}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import {getStats} from '../vuex/actions'
export default {
  vuex: {
    getters: {
      state: ({StatsStore}) => StatsStore
    },
    actions: {
      getStats
    }
  },
  created: function () {
    this.getStats()
  }
}
</script>
