<template>
  <div id="app">
    <pf-side-bar
      :questionnaireid="questionnaireId"
      :token="token"
      :comparing="true"
    />
  </div>
</template>

<script>
import { PfSideBar } from '@brevortriverstudios/vue-core'
export default {
  name: 'app',

  data () {
    return {
      token: '',
      questionnaireId: ''
    }
  },

  components: {
    PfSideBar
  },

  created () {
    let paramsUrl = location.search
    let params = new URLSearchParams(paramsUrl)

    this.token = params.get('token')
    this.questionnaireId = params.get('qId')
  }
}
</script>
