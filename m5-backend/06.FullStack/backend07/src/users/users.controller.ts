import { Body, Controller, Delete, Request, Get,  Param, ParseIntPipe, Post, Put, UseGuards, UnauthorizedException, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';
import { AuthGuard } from '@nestjs/passport';
import { UserRole } from './user-role.enum';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}


    @UseGuards(AuthGuard('jwt'))
    @Get()
    findCurrentUser(@Request() request): Promise<User>{ // la reques se metia la usuario
        return request.user;
    }

    @UseGuards(AuthGuard('jwt'))
    @Put()
    async update(@Request() request, @Body() user: User): Promise<User> {

        // si el id de request.user.id no coincide con user.id
        if (request.user.id !== user.id && 
            request.user.role !== UserRole.ADMIN)
            throw new UnauthorizedException('No se puede editar');
        
        return await this.userService.update(user);
        //todo en caso de actualizar datos q estan en el token Jwt sera necasario
        // craer un nuevo token jwt y devolverlo para q se actualice en frontend
    }

    //avatar (se puede separar a un nuevo controlador filesController o AvatarController)
    @Post('avatar')
    @UseInterceptors(FileInterceptor('file'))
    uploadAvatar(@UploadedFile() file: Express.Multer.File){
        console.log(file); 
        
        //Guardar monbre archivo usando userService
        // http://localhost:3000/uploads/nombrearchivo.jpg
    }
}
