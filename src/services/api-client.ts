import axios, {CanceledError} from 'axios'

export default axios.create({
 baseURL:'https://api.rawg.io/api',
 params: {
    key: 'e4e6194807d94a3090eb2798960e3d49'
 }
})

export {CanceledError};