import axios from 'axios'

const dataUrl = "https://alek-drx-test-5555.firebaseio.com/"

const applications = {
  namespaced: true,
  state: {
    applicationValid: {},
    exist_email:"",

  },
  mutations: {
    exist_email(state, email){
      state.exist_email = email
    },
    set_application(state, application) {
      state.application = application
    }
  },
  actions: {
    checkEmail({ commit }, email) {
      return new Promise((resolve, reject) => {
        axios
          .get(dataUrl + 'applications.json?shallow=true&email=' + email)
          .then(res => {
            debugger;
            commit('exist_email', res.application)
            resolve(res)
          })
          .catch(err => {
            if (err.res.status === 422) {
              // TODO: Show message
            }
            reject(err)
          })
      })


    },
    createApplication({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios
          .post(dataUrl + 'applications.json', data.application)
          .then(res => {
            commit('set_application', res.application)
            resolve(res)
          })
          .catch(err => {
            debugger;
            if (err.res.status === 422) {
              // TODO: Show message
            }
            reject(err)
          })
      })
    },
  },
  getters: {}
}

export default applications
