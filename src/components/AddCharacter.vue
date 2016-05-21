<template>
  <div class="container">
    <div class="row flipInX animated">
      <div class="col-sm-8">
        <div class="panel panel-default">
          <div class="panel-heading">Add Character</div>
          <div class="panel-body">
            <form v-on:submit="handleSubmit($event)">
              <div class="form-group" v-bind:class="state.nameValidationState">
                <label class="control-label">Character Name</label>
                <input type="text" ref="nameTextField" class="form-control" value="{{state.name}}" v-on:change="updateName($event)" autofocus />
                <span class="help-block">{{ state.helpBlock }}</span>
              </div>
              <div class="form-group" v-bind:class="state.genderValidationState">
                <div class="radio radio-inline">
                  <input type="radio" name="gender" id="female" value="Female" checked="{{isFemale}}" v-on:change="updateGender($event)">
                  <label for="female">Female</label>
                </div>
                <div class="radio radio-inline">
                  <input type="radio" name="gender" id="male" value="Male" checked="{{isMale}}" v-on:change="updateGender($event)">
                  <label for="male">Male</label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  addCharacter,
  invalidName,
  invalidGender,
  updateName,
  updateGender
} from '../vuex/actions'

export default {
  vuex: {
    getters: {
      state: ({ AddCharacterStore }) => AddCharacterStore
    },
    actions: {
      addCharacter,
      invalidName,
      invalidGender,
      updateName,
      updateGender
    }
  },
  computed: {
    isFemale: function () {
      this.state.gender === 'Female'
    },
    isMale: function () {
      this.state.gender === 'Male'
    }
  },
  methods: {
    handleSubmit: function (event) {
      event.preventDefault()

      let name = this.state.name.trim()
      let gender = this.state.gender

      if (!name) {
        this.invalidName()
      }

      if (!gender) {
        this.invalidGender()
        this.$refs.nameTextField.focus()
      }

      if (name && gender) {
        this.addCharacter(name, gender)
      }
    }
  }
}
</script>
