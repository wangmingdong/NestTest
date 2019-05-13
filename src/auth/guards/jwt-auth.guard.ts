import { Injectable, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActive(context: ExecutionContext) {
        console.log(context)
        return super.canActivate(context);
    }

    handleRequest(err, user, info) {
        console.log(user)
        if (err || !user) {
            throw err || new UnauthorizedException();
        }
        return user;
    }
}