
import{ActiveStatus, GatewayType} from "./enums"

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