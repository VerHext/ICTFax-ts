
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { LoginResponse, Login, ErrorResponse, Provider } from './types/API';

export class IctFaxClient {
    private Url: string;
    private AuthToken: string;

    constructor(url: string){
        //Constructur
        this.Url = url;
        this.AuthToken = "";
    }

    /**
     * @function Login
     */
    async login(login: Login) : Promise<boolean>{
        const options = {
            headers: {'Content-Type': 'application/json'},
            withCredentials: true,
            data: login
          };
        const response = await axios.post(this.Url + "/api/authenticate", { }, options)

        if (response.status = 200){
            var d = <LoginResponse>response.data;
            this.AuthToken = d.access_token;
            return true;
        }
        return false
        
    }

    async UpdateProvider(provider: Provider) : Promise<Provider>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
            data: provider
          };
        const response = await axios.put(this.Url + "/api/providers/" + provider.provider_id, { }, options)
        return <Provider>response.data;
    }

    async CreateProvider(provider: Provider) : Promise<number>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
            data: provider
          };
        const response = await axios.post(this.Url + "/api/providers", { }, options)
        return response.data;
    }

}