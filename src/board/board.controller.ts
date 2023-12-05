import {Crud, CrudController} from "@nestjs-library/crud";
import {Board} from "./board.entity";
import {Controller} from "@nestjs/common";
import {BoardService} from "./board.service";

@Crud({entity: Board})
@Controller('boards')
export class BoardController implements CrudController<Board> {
    constructor(public readonly crudService: BoardService) {
    }
}
