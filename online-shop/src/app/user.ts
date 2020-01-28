import { Product } from './product'
import {Cart} from './cart';

export class User {
    username: string;
    password: string;
    fullName: string;
    roles: string[];
    cart: Cart[];
    token: string;
}
