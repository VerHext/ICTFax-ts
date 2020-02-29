
import{ActiveStatus, GatewayType, Quality} from "./enums"

export interface Login {
    username: string;
    password: string;
}
export interface LoginResponse {
    user_id: string;
    first_name?: any;
    last_name?: any;
    phone?: any;
    email?: any;
    address?: any;
    company?: any;
    country_id?: any;
    language_id?: any;
    timezone_id?: any;
    active: string;
    owner_id?: any;
    token: string;
    access_token: string;
    expires_in: number;
    token_type: string;
    scope: string;
}

export interface Error {
    code: number;
    message: string;
}

export interface ErrorResponse {
    error: Error;
}



export interface Provider {
    type?: GatewayType;
    port?: number;
    service_flag?: string;
    provider_id?: string;
    name?: string;
    node_id?: ActiveStatus;
    host?: string;
    username?: string;
    password?: string;
    dialstring?: string;
    prefix?: ActiveStatus;
    settings?: any;
    register?: ActiveStatus;
    weight?: number;
    active?: ActiveStatus;
}

export interface User {
    username?: string;
    passwd?: string;
    first_name?: string;
    last_name?: string;
    phone?: string;
    email?: string;
    address?: string;
    company?: string;
    country_id?: number;
    timezone_id?: number;
    active?: ActiveStatus;
    user_id?: number;
}

export interface Document {
    document_id?: string;
    name?: string;
    file_name?: string;
    type?: string;
    pages?: string;
    description?: string;
    quality?: Quality;
}
export interface Contact {
    first_name?: string;
    last_name?: string;
    phone?: string;
    email?: string;
    address?: string;
    custom1?: string;
    custom2?: string;
    custom3?: string;
    description?: string;
    contact_id?: number;
}


export interface Transmission {
    transmission_id: number;
    title?: string;
    origin?: string;
    contact_id?: number;
    account_id?: number;
    service_flag?:  string;
    program_id?: number;
    direction?: string;
    status?: string;
    response?: string;
}

