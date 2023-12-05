import {Injectable} from "@nestjs/common";
import {CrudService} from "@nestjs-library/crud";
import {Board} from "./board.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class BoardService extends CrudService<Board> {
    constructor(@InjectRepository(Board) repository: Repository<Board>) {
        super(repository);
    }
}
