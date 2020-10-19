import axios from 'axios'

const dataUrl = "https://drx-test.firebaseio.com/"

const applications = {
  namespaced: true,
  state: {
    application:{}
  },
  mutations: {
    set_application(state, application) {
      state.application = application
    }
  },
  actions: {
    checkAmail(email) {
      return new Promise((resolve, reject) => {
        axios
          .post(dataUrl + 'wwwwapplications.json', email)
          .then(res => {
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
          .post(dataUrl + 'applications.json', data)
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
