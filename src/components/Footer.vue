<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-sm-5">
          <h3 class="lead"><strong>Information</strong> and <strong>Copyright</strong></h3>
          <p>Powered by <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong> with Flux architecture and server-side rendering.</p>
          <p>You may view the <a href='https://github.com/sahat/newedenfaces-react'>Source Code</a> behind this project on GitHub.</p>
          <p>© 2015 Sahat Yalkabov.</p>
        </div>
        <div class="col-sm-7 hidden-xs">
          <h3 class="lead"><strong>Leaderboard</strong> Top 5 Characters</h3>
          <ul class="list-inline">
            <li v-for="character in characters" >
              <a href="/characters/{{character.characterId}}">
                <img class="thumb-md" :src="createImgUrl(character.characterId)">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { getTopCharacters } from '../vuex/actions'
export default {
  vuex: {
    getters: {
      characters: ({FooterStore}) => {
        return FooterStore.characters
      }
    },
    actions: {
      getTopCharacters
    }
  },
  created: function () {
    this.getTopCharacters()
  },
  methods: {
    createImgUrl: function (characterId) {
      return 'http://image.eveonline.com/Character/' + characterId + '_128.jpg'
    }
  }
}
</script>
