import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'category' })
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  productCount: number;

  @Column({ nullable: false })
  categoryName: string;

  @Column({ nullable: false })
  userId: string;
}
