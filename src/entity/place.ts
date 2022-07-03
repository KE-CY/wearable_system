import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { Material } from './material';

@Entity()
export class Place {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    describle: string;

    @Column()
    time: number;

    @OneToMany(() => Material, material => material.place, { onDelete: 'CASCADE' })
    materials: Material[];

    @CreateDateColumn({ name: 'createdAt' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updatedAt' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deletedAt' })
    deletedAt: Date;
}