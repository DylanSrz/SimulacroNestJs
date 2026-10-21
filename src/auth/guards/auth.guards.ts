import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../auth.service.js";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly authService: AuthService) {}

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest()

        const username = request.headers['x-user']

        if (!username) {
            throw new UnauthorizedException('El encabezado x-user es obligatorio')
        }

        const user = this.authService.findUser(username as string)

        if (!user) {
            throw new UnauthorizedException('Usuario no autorizado o no existe')
        }

        request.user = user

        return true
    }
}