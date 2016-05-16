<template>
  <div class="container">
    <div class="profile-img">
      <a href="{{backgroundImg}}" class="magnific-popup">
        <img :src="characterImg">
      </a>
    </div>
    <div class="profile-info clearfix">
      <h2><strong>{{state.name}}</strong></h2>
      <h4 class="lead">Race: <strong>{{state.race}}</strong></h4>
      <h4 class='lead'>Bloodline: <strong>{{state.bloodline}}</strong></h4>
      <h4 class='lead'>Gender: <strong>{{state.gender}}</strong></h4>
      <button class="btn btn-transparent" v-on:click="report(state.characterId)" disabled="{{state.isReported}}">{{state.isReported ? "Reported" : "Report Character"}}</button>
    </div>
    <div class='profile-stats clearfix'>
      <ul>
        <li><span class='stats-number'>{{state.winLossRatio}}</span>Winning Percentage</li>
        <li><span class='stats-number'>{{state.wins}}</span> Wins</li>
        <li><span class='stats-number'>{{state.losses}}</span> Losses</li>
      </ul>
    </div>
  </div>
</template>
<script>
import {
  getCharacter,
  report
} from '../vuex/actions'
export default {
  vuex: {
    getters: {
      state: ({ CharacterStore }) => CharacterStore
    },
    actions: {
      getCharacter,
      report
    }
  },
  computed: {
    backgroundImg: function () {
      return 'https://image.eveonline.com/Character/' + this.state.characterId + '_1024.jpg'
    },
    characterImg: function () {
      return 'https://image.eveonline.com/Character/' + this.state.characterId + '_256.jpg'
    }
  },
  route: {
    data ({to: {params: { characterId }}}) {
      this.getCharacter(characterId)
    }
  },
  beforeDestroy: function () {
    console.log('character component beforeDestroy')
    document.body.className = ''
  }
}
</script>
