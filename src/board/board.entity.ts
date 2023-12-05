import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('Board')
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public title: string;

    @Column()
    public content: string;
}
