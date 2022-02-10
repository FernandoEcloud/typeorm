import {Column, Entity, PrimaryColumn} from "../../../../src";

@Entity()
export class User {
  @PrimaryColumn()
  name: string;

  @PrimaryColumn()
  email: string;

  @Column()
  age: number;
}
