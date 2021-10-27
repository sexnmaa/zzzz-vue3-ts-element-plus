import axios from 'axios'

axios.defaults.baseURL = 'http://httpbin.org'
axios
  .get('/get', {
    params: {
      name: 'why',
      age: 18
    }
  })
  .then((res) => {
    console.log(res)
  })
