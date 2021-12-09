import axios from 'axios'

export default axios.create({
    baseURL: "http://college-api-mo.herokuapp.com/api"
})