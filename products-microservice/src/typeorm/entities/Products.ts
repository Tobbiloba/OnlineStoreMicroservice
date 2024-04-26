import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from "typeorm";

@Entity({ name: "products" })
export class Products {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  productName: string;

  @Column({ nullable: false })
  productDescription: string;

  @Column({ nullable: false })
  productPrice: string;

  @Column({ type: "json", nullable: false })
  productImages: string[];

  @Column({ nullable: false })
  vendorId: string;

  @Column({ nullable: false })
  productCategory: string;

  @Column({ nullable: false })
  productCount: number;

  @Column({ nullable: false })
  productType: "new" | "used"; // Assuming type can only be 'new' or 'used'

  // Add other columns as needed

  // You can also define relationships with other entities if necessary
}
