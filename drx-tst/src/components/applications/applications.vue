<template lang="html">
  <div>
    <div class="pg-cont-regular p-4 ">
      <div class="form-group row">
        <label for="user-name" class="col-sm-2 col-md-1 col-form-label">Name</label>
        <div class="col-sm-8 col-md-6">
          <input type="text" class="form-control" id="user-name" v-model="application.name">
        </div>
      </div>

      <div class="form-group row">
        <label for="user-email" class="col-sm-2 col-md-1 col-form-label">Email</label>
        <div class="col-sm-10 col-sm-8">
          <input type="email" class="form-control" id="user-email" aria-describedby="user-email" v-model="application.email" v-on:change="checkEmailInput">
          <small v-if="helpers.emailValidation.valid" class="form-text text-muted">We'll never share your email with anyone else.</small>
          <small v-if="!helpers.emailValidation.valid" class="form-text text-danger">{{ helpers.emailValidation.msg }} </small>
        </div>
      </div>

      <div class="form-group row pb-4 pt-4">
        <label for="start-date" class="col-sm-2 col-md-1 col-form-label">Dates</label>
        <div class="col-sm-4 col-md-4 col-lg-3 pb-3">
          <input type="date" class="form-control" id="start-date" v-model="application.datesStart">
        </div>
        <span class="d-none d-sm-inline-block col-sm-1 text-center">_</span>
        <div class="col-sm-4 col-md-4 col-lg-3 pb-3">
          <input type="date" class="form-control" id="end-date" v-model="application.datesEnd">
        </div>
      </div>

      <div class="form-group form-check pt-4">
        <input type="checkbox" class="form-check-input" id="user-additional-pref" v-model="application.alsoPrefer">
        <label class="form-check-label" for="user-additional-pref">Also prefer</label>
      </div>

      <div class="border p-4 mb-4" v-show="application.alsoPrefer">
        <div class="pb-4">Transportation</div>
        <div class="form-check form-check-inline pr-4">
          <input class="form-check-input" type="radio" name="pref-transport" id="pref-transport-1" value="own" v-model="application.transport" checked>
          <label class="form-check-label" for="pref-transport-1">
            Own car
          </label>
        </div>
        <div class="form-check form-check-inline pr-4">
          <input class="form-check-input" type="radio" name="pref-transport" id="pref-transport-2" value="other" v-model="application.transport">
          <label class="form-check-label" for="pref-transport-2">
            Other Car
          </label>
        </div>
        <div class="form-check form-check-inline pr-4">
          <input class="form-check-input" type="radio" name="pref-transport" id="pref-transport-3" value="bus" v-model="application.transport">
          <label class="form-check-label" for="pref-transport-3">
            Bus
          </label>
        </div>
      </div>

      <div class="border p-4" v-show="application.alsoPrefer">
        <div class="form-group">
          <label for="user-activity">Activity</label>
          <textarea class="form-control" id="user-activity" rows="3" v-model="application.activity" placeholder="Explain what you like to do like: play video games, hiking, bicycle ride, play football etc..."></textarea>
        </div>
      </div>

      <div class="text-center p-4">
        <button type="button" v-on:click="submitUser" class="btn btn-primary">Submit</button>
      </div>


    </div>
  </div>
</template>

<script>

import emailValidator from '../../helpers/validators/email.validator'


export default {
  data() {
    return {
      helpers: {
        emailValidation: {
          valid: true,
          msg: ""
        }
      },
      application: {
        name: "",
        email: "",
        datesStart: null,
        datesEnd: null,
        alsoPrefer: false,
        transport: null,
        activity: ""
      },
      applicationToCommit: {
        name: "",
        email: "",
        datesStart: null,
        datesEnd: null,
        alsoPrefer: false,
        transport: null,
        activity: ""
      }

    }
  },
  methods: {
    checkEmailInput: function(){
      const validator = emailValidator(this.application.email);

      this.helpers.emailValidation.valid = validator.valid;
      this.helpers.emailValidation.msg = validator.msg;

      this.checkIfEmailExist();
    },
    checkIfEmailExist: function(){

      this.$store.dispatch('applications/checkEmail', { email: this.application.email }).then((email) => {
        if(email){
          this.helpers.emailValidation.valid = false;
          this.helpers.emailValidation.msg = "Email already exist.";
        }
      });

    },
    submitUser: function(){
      this.applicationToCommit.name = this.application.name;
      this.applicationToCommit.email = this.application.email;
      this.applicationToCommit.datesStart = this.application.datesStart;
      this.applicationToCommit.datesEnd = this.application.datesEnd;
      this.applicationToCommit.alsoPrefer = this.application.alsoPrefer;
      this.applicationToCommit.transport = this.application.transport;
      this.applicationToCommit.activity = this.application.activity;

      debugger;

      // this.$store.dispatch('applications/createApplication', { application: this.applicationToCommit }).then(() => {
      //   alert("Success");
      // });

    }
  }

}
</script>

<style lang="css" scoped>

</style>
