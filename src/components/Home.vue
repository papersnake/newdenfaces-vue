<template>
  <div class="container">
    <h3 class="text-center">Click on the portrait. Select you favorite.</h3>
    <div class="row">
      <div v-on:click="handClick(character)" v-for="character in state.characters" class="col-xs-6 col-sm-6 col-md-5" v-bind:class="{ 'col-md-offset-1': !$index }">
        <div class="thumbnail fadeInpu animated">
          <img :src="getbigimgsrc(character.characterId)" alt="">
          <div class="caption text-center">
            <ul class="list-inline">
              <li><strong>Race:</strong> {{ character.race }}</li>
              <li><strong>Bloodline:</strong> {{ character.bloodline}}</li>
            </ul>
            <h4>
            <a v-link="{name: 'character', params: {characterId: character.characterId}}"><strong>{{ character.name }}</strong></a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getTwoCharacters, vote } from '../vuex/actions'
import { first, filter } from 'lodash'
export default {
  vuex: {
    getters: {
      state: ({HomeStore}) => HomeStore
    },
    actions: {
      getTwoCharacters,
      vote
    }
  },
  created: function () {
    this.getTwoCharacters()
  },
  methods: {
    getbigimgsrc: (characterId) => 'http://image.eveonline.com/Character/' + characterId + '_512.jpg',
    handClick: function (character) {
      let winner = character.characterId
      let loser = (first(filter(this.state.characters, item => item.characterId !== winner))).characterId
      this.vote(winner, loser)
    }

  }
}
</script>
