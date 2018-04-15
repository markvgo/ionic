import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {WorkCount} from "./work_count";


@Entity("worker")
export class Worker {

    @Column("bigint",{
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;



    @OneToMany(type=>WorkCount, work_counts=>work_counts.worker_id)
    work_counts:WorkCount[];

}
