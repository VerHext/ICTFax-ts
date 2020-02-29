
import axios from 'axios';
import { LoginResponse, Login, Provider, User, Document, Contact, Transmission, Program } from './types/API';
import fs from "fs"
import request from "request"

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

    /**
     * Programs Managment
     * Provider (GET; POST; PUT; )
    */
    async UpdateProgram(trans: Program) : Promise<Program>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
            data: trans
          };
        const response = await axios.put(this.Url + "/api/programs/" + trans.program_id, { }, options)
        return <Program>response.data;
    }
    async CreateProgram(doc: Program) : Promise<number>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
            data: doc
          };
        const response = await axios.post(this.Url + "/api/programs", { }, options)
        return <number>response.data;
    }
    async CreateSendToFaxProgram(doc: Program) : Promise<number>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
            data: doc
          };
        const response = await axios.post(this.Url + "/api/programs/sendfax", { }, options)
        return <number>response.data;
    }
    async GetProgram(id: number) : Promise<Program>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
          };
        const response = await axios.get(this.Url + "/api/programs/" + id, options)
        return <Program>response.data;
    }
    async DeleteProgram(id: number) : Promise<boolean>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
          };
        const response = await axios.delete(this.Url + "/api/programs/" + id, options)
        return <boolean>response.data;
    }
    async GetAllPrograms() : Promise<Program[]>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
          };
        const response = await axios.get(this.Url + "/api/programs", options)
        return <Program[]>response.data;
    }

    /**
     * Transmission Managment
     * Provider (GET; POST; PUT; )
    */
    async UpdateTransmission(trans: Transmission) : Promise<Transmission>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
            data: trans
          };
        const response = await axios.put(this.Url + "/api/transmissions/" + trans.transmission_id, { }, options)
        return <Transmission>response.data;
    }
    async CreateTransmission(doc: Transmission) : Promise<number>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
            data: doc
          };
        const response = await axios.post(this.Url + "/api/transmissions", { }, options)
        return <number>response.data;
    }
    async GetTransmission(id: number) : Promise<Transmission>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
          };
        const response = await axios.get(this.Url + "/api/transmissions/" + id, options)
        return <Transmission>response.data;
    }
    async DeleteTransmission(id: number) : Promise<boolean>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
          };
        const response = await axios.delete(this.Url + "/api/transmissions/" + id, options)
        return <boolean>response.data;
    }
    async GetAllTransmissions() : Promise<Transmission[]>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
          };
        const response = await axios.get(this.Url + "/api/transmissions", options)
        return <Transmission[]>response.data;
    }
    async SendTransmission(id: number) : Promise<boolean>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
          };
        const response = await axios.post(this.Url + "/api/transmissions/" + id + "/send", options)
        return <boolean>response.data;
    }


    /**
     * Contact Managment
     * Provider (GET; POST; PUT; )
    */
    async UpdateContact(user: Document) : Promise<Document>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
            data: user
          };
        const response = await axios.put(this.Url + "/api/contacts/" + user.document_id, { }, options)
        return <Document>response.data;
    }
    async CreateContact(doc: Contact) : Promise<number>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
            data: doc
          };
        const response = await axios.post(this.Url + "/api/contacts", { }, options)
        return <number>response.data;
    }
    async GetContact(id: number) : Promise<Contact>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
          };
        const response = await axios.get(this.Url + "/api/contacts/" + id, options)
        return <Contact>response.data;
    }
    async DeleteContact(id: number) : Promise<boolean>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
          };
        const response = await axios.delete(this.Url + "/api/contacts/" + id, options)
        return <boolean>response.data;
    }
    async GetAllContacts() : Promise<Contact[]>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
          };
        const response = await axios.get(this.Url + "/api/contacts", options)
        return <Contact[]>response.data;
    }
    

    /**
     * Document Media Managment
     * Provider (GET; POST; PUT; )
    */
    async AddDocumentFile(filePath: string, id: number){

       request({
        url: this.Url + '/api/messages/documents/'+id+'/media',
        method: 'PUT',
        headers: {
          'cache-control': 'no-cache',
          'content-disposition': 'attachment; filename=' + filePath,
          'content-type' : 'application/pdf',
          'authorization' : 'Bearer ' +this.AuthToken
        },
        encoding: null,
        body: fs.createReadStream(filePath)
       });
    }

       
    /**
     * Document Managment
     * Provider (GET; POST; PUT; )
    */
    async UpdateDocument(user: Document) : Promise<Document>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
            data: user
          };
        const response = await axios.put(this.Url + "/api/messages/documents/" + user.document_id, { }, options)
        return <Document>response.data;
    }
    async CreateDocument(doc: Document) : Promise<number>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
            data: doc
          };
        const response = await axios.post(this.Url + "/api/messages/documents", { }, options)
        return <number>response.data;
    }
    async GetDocument(id: number) : Promise<Document>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
          };
        const response = await axios.get(this.Url + "/api/messages/documents/" + id, options)
        return <Document>response.data;
    }
    async DeleteDocument(id: number) : Promise<boolean>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
          };
        const response = await axios.delete(this.Url + "/api/messages/documents/" + id, options)
        return <boolean>response.data;
    }
    async GetAllDocuments() : Promise<Document[]>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
          };
        const response = await axios.get(this.Url + "/api/messages/documents", options)
        return <Document[]>response.data;
    }
    

    /**
     * Account Managment
     * Provider (GET; POST; PUT; )
    */
    async UpdateAccount(user: User) : Promise<User>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
            data: user
          };
        const response = await axios.put(this.Url + "/api/accounts/" + user.user_id, { }, options)
        return <User>response.data;
    }
    async CreateAccount(provider: User) : Promise<number>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
            data: provider
          };
        const response = await axios.post(this.Url + "/api/accounts", { }, options)
        return response.data;
    }
    async GetAccount(id: number) : Promise<User>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
          };
        const response = await axios.get(this.Url + "/api/accounts/" + id, options)
        return <User>response.data;
    }
    async DeleteAccount(id: number) : Promise<boolean>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
          };
        const response = await axios.delete(this.Url + "/api/accounts/" + id, options)
        return <boolean>response.data;
    }
    async GetAllAccounts() : Promise<User[]>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
          };
        const response = await axios.get(this.Url + "/api/accounts", options)
        return <User[]>response.data;
    }

    /**
     * User Managment
     * Provider (GET; POST; PUT; )
    */
    async UpdateUser(user: User) : Promise<User>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
            data: user
          };
        const response = await axios.put(this.Url + "/api/users/" + user.user_id, { }, options)
        return <User>response.data;
    }
    async CreateUser(provider: User) : Promise<number>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
            data: provider
          };
        const response = await axios.post(this.Url + "/api/users", { }, options)
        return response.data;
    }
    async GetUser(id: number) : Promise<User>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
          };
        const response = await axios.get(this.Url + "/api/users/" + id, options)
        return <User>response.data;
    }
    async DeleteUser(id: number) : Promise<boolean>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
          };
        const response = await axios.delete(this.Url + "/api/users/" + id, options)
        return <boolean>response.data;
    }
    async GetAllUsers() : Promise<User[]>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
          };
        const response = await axios.get(this.Url + "/api/users", options)
        return <User[]>response.data;
    }

    /**
     * Trunk / Termination Providers APIs
     * Provider (GET; POST; PUT; )
     */
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
    async GetProvider(id: number) : Promise<Provider>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
          };
        const response = await axios.get(this.Url + "/api/providers/" + id, options)
        return <Provider>response.data;
    }
    async DeleteProvider(id: number) : Promise<boolean>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
          };
        const response = await axios.delete(this.Url + "/api/providers/" + id, options)
        return <boolean>response.data;
    }
    async GetAllProviders() : Promise<Provider[]>{
        const options = {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + this.AuthToken},
            withCredentials: true,
          };
        const response = await axios.get(this.Url + "/api/providers", options)
        return <Provider[]>response.data;
    }



}