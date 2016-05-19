<template>
  <div class="container">
    <div class="list-group">
      <div v-for="character in state.characters" key="{character.characterId}" class="list-group-item animated fadeIn">
        <div class="media">
          <span class="position pull-left">{{$index + 1}}</span>
          <div class="pull-left thumb-lg">
            <a v-link="getCharacterLink(character.characterId)">
              <img :src="getAvatarImg(character.characterId)">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">
              <a v-link="getCharacterLink(character.characterId)">{{character.name}}</a>
            </h4>
            <small>Race: <strong>{{character.race}}</strong></small><br />
            <small>Bloodline: <strong>{{character.bloodline}}</strong></small><br />
            <small>Wins: <strong>{{character.wins}}</strong> Losses: <strong>{{character.losses}}</strong></small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getCharacters
} from '../vuex/actions'
export default {
  vuex: {
    getters: {
      state: ({ CharacterListStore }) => CharacterListStore
    },
    actions: {
      getCharacters
    }
  },
  route: {
    data ({to: {params}}) {
      this.getCharacters(params)
    }
  },
  methods: {
    getAvatarImg (characterId) {
      return 'http://image.eveonline.com/Character/' + characterId + '_128.jpg'
    },
    getCharacterLink (characterId) {
      return '/character/' + characterId
    }
  }
}
</script>
