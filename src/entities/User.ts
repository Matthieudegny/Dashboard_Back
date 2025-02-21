import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  idUser: number;

  @Column({ length: 45 })
  firstName: string;

  @Column({ length: 45 })
  lastName: string;

  @Column({ length: 255 })
  login: string;

  @Column({ length: 255 })
  password: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  initial_capital_amount: number;
}
