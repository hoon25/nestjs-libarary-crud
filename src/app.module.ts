import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Board} from "./board/board.entity";
import {BoardModule} from "./board/board.module";

@Module({
    imports: [
        TypeOrmModule.forRoot(
            {
                type: 'postgres',
                host: 'localhost',
                port: 5555,
                username: 'root',
                password: '1234',
                database: 'test',
                entities: [Board],
                synchronize: true,
                logging: true,
            }
        ),
        BoardModule
    ],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {
}
