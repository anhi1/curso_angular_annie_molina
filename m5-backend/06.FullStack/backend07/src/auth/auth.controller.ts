import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TokenDTO } from './dto/token.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/users/users.model';
import { LoginDTO } from './dto/loging.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('login') // te devuelve un token
    async login(@Body() login: LoginDTO): Promise<TokenDTO> {
        console.log(login);
        return this.authService.login(login);
    }

    @Post('register')
    async register(@Body() user: User): Promise<TokenDTO> {
        return this.authService.register(user);
    }


    @Get('hola1')
    hola1() {
        console.log('hola1');
        return 'hola1';
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('hola2')
    hola2() {
        console.log('hola2');
        return 'hola2';
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() request) {
        console.log('getProfile');
        console.log(request.user);

        return request.user;
    }


}
