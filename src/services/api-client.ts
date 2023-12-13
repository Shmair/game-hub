import axios, {AxiosRequestConfig, CanceledError} from 'axios'

export interface FetchResponse<T> {
   count: number;
   results: T[];
}

const axiosInstance =  axios.create({
   baseURL:'https://api.rawg.io/api',
   params: {
      key: 'e4e6194807d94a3090eb2798960e3d49'
   }
})

class ApiClient<T> {
   endpoint : string

   constructor(endpoint:string) {
      this.endpoint = endpoint;
   }

   getAll = (config:AxiosRequestConfig = {}) => 
      axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then((res)=> res.data.results)
   
}

export default ApiClient;