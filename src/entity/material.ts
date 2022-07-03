import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Place } from './place';
import { User } from './user';

@Entity()
export class Material {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pace: number;

    @ManyToOne(() => User, user => user.materials, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ name: 'user_id' })
    userId: number;

    @ManyToOne(() => Place, place => place.materials, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'place_id' })
    place: Place;

    @Column({ name: 'place_id' })
    placeId: number;

    @Column()
    distance: number;

    @Column()
    calories: number;

    @Column({ name: 'avg_heart_rate' })
    avgHeartRate: number;

    @Column({ name: 'avg_speed' })
    avgSpeed: number;

    @CreateDateColumn({ name: 'createdAt' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updatedAt' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deletedAt' })
    deletedAt: Date;
}