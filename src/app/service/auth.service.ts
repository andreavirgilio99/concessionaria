import { Injectable } from "@angular/core";
import { User } from "../model/user";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    listaUsers: User[] = [];
    currentUser?: User;

    constructor() {
        this.listaUsers = this.getListaUsers();
    }

    getListaUsers(): User[] {
        return [
            {
                id: 1,
                nome: 'Matteo Ingrosso'
            },
            {
                id: 2,
                nome: 'Luca Rossi'
            }
        ]
    }

}