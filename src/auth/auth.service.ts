import { Injectable } from "@nestjs/common"

export interface InMemoryUser {
    username: string
    rol: 'admin' | 'gerente' | 'asesor'
}


@Injectable()
export class AuthService {
    private readonly users: InMemoryUser[] = [
        { username: 'sofia.admin', rol: 'admin' },
        { username: 'andres.gerente', rol: 'gerente' },
        { username: 'valeria.asesor', rol: 'asesor' },
        { username: 'mateo.asesor', rol: 'asesor' },
    ];

    findUser(username: string): InMemoryUser | undefined {
        return this.users.find((user) => user.username === username)
    }
}