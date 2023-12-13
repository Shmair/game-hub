import axios, {AxiosRequestConfig, CanceledError} from 'axios'

export interface FetchResponse<T> {
   count: number;
   next:string | null
   results: T[];
}

const axiosInstance =  axios.create({
   baseURL:'https://api.rawg.io/api',
   params: {
      key: 'e4e6194807d94a3090eb2798960e3d49'
   }
})

class ApiClient<T> {
   endpoint : string;

   constructor(endpoint:string) {
      this.endpoint = endpoint;
   }

   getAll = (config:AxiosRequestConfig = {}) => 
      axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then((res)=> res.data);
   
   get = (id: number | string) => 
      axiosInstance.get<T>(this.endpoint + '/' + id).then((res) => res.data);
       
}

export default ApiClient;