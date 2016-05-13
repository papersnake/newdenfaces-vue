<template>
  <nav class="navbar navbar-default navbar-static-top">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a href="/" class="navbar-brand">
        <span ref="triangles" class="triangles animated ">
          <div class="tri invert"></div>
          <div class="tri invert"></div>
          <div class="tri"></div>
          <div class="tri invert"></div>
          <div class="tri invert"></div>
          <div class="tri"></div>
          <div class="tri invert"></div>
          <div class="tri"></div>
          <div class="tri invert"></div>
        </span>
        NEF
        <span class="badge badge-up badge-danger">{{ state.onlineUsers }}</span>
      </a>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
      <form ref="searchForm" class="navbar-form navbar-left animated">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="{{ state.totalCharacters + ' characters' }}" value="" onChange="" />
          <span class="input-group-btn">
            <button class="btn btn-default" onClick=""><span class="glyphicon glyphicon-search"></span></button>
          </span>
        </div>
      </form>
      <ul class="nav navbar-nav">
        <li><a href="/">Home</a></li>
        <li><a href="/stats">Stats</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Top 100 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="/top">Top Overall</a></li>
            <li class="dropdown-submenu">
              <a href="/top/caldari">Caldari</a>
              <ul class="dropdown-menu">
                <li><a href="/top/caldari/achura">Achura</a></li>
                <li><a href="/top/caldari/civire">Civire</a></li>
                <li><a href="/top/caldari/deteis">Deteis</a></li>
              </ul>
            </li>
            <li class="dropdown-submenu">
              <a href="/top/gallente">Gallente</a>
              <ul class="dropdown-menu">
                <li><a href="/top/gallente/gallente">Gallente</a></li>
                <li><a href="/top/gallente/intaki">Intaki</a></li>
                <li><a href="/top/gallente/jin-mei">Jin-Mei</a></li>
              </ul>
            </li>
            <li class="dropdown-submenu">
              <a href="/top/minmatar">Minmatar</a>
              <ul class="dropdown-menu">
                <li><a href="/top/minmatar/brutor">Brutor</a></li>
                <li><a href="/top/minmatar/sebiestor">Sebiestor</a></li>
                <li><a href="/top/minmatar/vherokior">Vherokior</a></li>
              </ul>
            </li>
            <li class="dropdown-submenu">
              <a href="/top/amarr">Amarr</a>
              <ul class="dropdown-menu">
                <li><a href="/top/amarr/amarr">Amarr</a></li>
                <li><a href="/top/amarr/ni-kunni">Ni-Kunni</a></li>
                <li><a href="/top/amarr/khanid">Khanid</a></li>
              </ul>
            </li>
            <li class="divider"></li>
            <li><a href="/shame">Hall of Shame</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Female <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="/female">All</a></li>
            <li class="dropdown-submenu">
              <a href="/female/caldari">Caldari</a>
              <ul class="dropdown-menu">
                <li><a href="/female/caldari/achura">Achura</a></li>
                <li><a href="/female/caldari/civire/">Civire</a></li>
                <li><a href="/female/caldari/deteis">Deteis</a></li>
              </ul>
            </li>
            <li class="dropdown-submenu">
              <a href="/female/gallente">Gallente</a>
              <ul class="dropdown-menu">
                <li><a href="/female/gallente/gallente">Gallente</a></li>
                <li><a href="/female/gallente/intaki">Intaki</a></li>
                <li><a href="/female/gallente/jin-mei">Jin-Mei</a></li>
              </ul>
            </li>
            <li class="dropdown-submenu">
              <a href="/female/minmatar">Minmatar</a>
              <ul class="dropdown-menu">
                <li><a href="/female/minmatar/brutor">Brutor</a></li>
                <li><a href="/female/minmatar/sebiestor">Sebiestor</a></li>
                <li><a href="/female/minmatar/vherokior">Vherokior</a></li>
              </ul>
            </li>
            <li class="dropdown-submenu">
              <a href="/female/amarr">Amarr</a>
              <ul class="dropdown-menu">
                <li><a href="/female/amarr/amarr">Amarr</a></li>
                <li><a href="/female/amarr/ni-kunni">Ni-Kunni</a></li>
                <li><a href="/female/amarr/khanid">Khanid</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Male <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="/male">All</a></li>
            <li class="dropdown-submenu">
              <a href="/male/caldari">Caldari</a>
              <ul class="dropdown-menu">
                <li><a href="/male/caldari/achura">Achura</a></li>
                <li><a href="/male/caldari/civire">Civire</a></li>
                <li><a href="/male/caldari/deteis">Deteis</a></li>
              </ul>
            </li>
            <li class="dropdown-submenu">
              <a href="/male/gallente">Gallente</a>
              <ul class="dropdown-menu">
                <li><a href="/male/gallente/gallente">Gallente</a></li>
                <li><a href="/male/gallente/intaki">Intaki</a></li>
                <li><a href="/male/gallente/jin-mei">Jin-Mei</a></li>
              </ul>
            </li>
            <li class="dropdown-submenu">
              <a href="/male/minmatar">Minmatar</a>
              <ul class="dropdown-menu">
                <li><a href="/male/minmatar/brutor">Brutor</a></li>
                <li><a href="/male/minmatar/sebiestor">Sebiestor</a></li>
                <li><a href="/male/minmatar/vherokior">Vherokior</a></li>
              </ul>
            </li>
            <li class="dropdown-submenu">
              <a href="/male/amarr">Amarr</a>
              <ul class="dropdown-menu">
                <li><a href="/male/amarr/amarr">Amarr</a></li>
                <li><a href="/male/amarr/ni-kunni">Ni-Kunni</a></li>
                <li><a href="/male/amarr/khanid">Khanid</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="/add">Add</a></li>
      </ul>
    </div>
  </nav>
</template>
<script>
/* global io */
import { getCharacterCount, updateOnlineUsers } from '../vuex/actions'
export default {

  vuex: {
    getters: {
      state: ({NavbarStore}) => NavbarStore
      // totalCharacters: ({NavbarStore}) => NavbarStore.totalCharacters,
      /*
      onlineUsers: ({NavbarStore}) => {
        return NavbarStore.onlineUsers
      }*/
    },
    actions: {
      getCharacterCount,
      updateOnlineUsers
    }
  },
  created: function () {
    this.getCharacterCount()
    const socket = io.connect('http://127.0.0.1:3000/')
    socket.on('onlineUsers', (data) => {
      console.log(data)
      this.updateOnlineUsers(data)
    })
  }
}
</script>
