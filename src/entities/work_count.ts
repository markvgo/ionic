import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {CountOut} from "./count_out";
import {Worker} from "./worker";


@Entity("work_count")
@Index("FKdyf9v2igja4tugvj9mo42c9c1",["count_out_id",])
@Index("FKg6x0l951fvfit3sm7vn2ei7d7",["worker_id",])
export class WorkCount {

    @Column("bigint",{
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;


    @Column("double",{
        nullable:true,
        name:"quantity"
        })
    quantity:number;


    @Column("int",{
        nullable:false,
        name:"stand"
        })
    stand:number;



    @ManyToOne(type=>CountOut, count_out_id=>count_out_id.work_counts)
    @JoinColumn({ name:'count_out_id'})
    count_out_id:CountOut;



    @ManyToOne(type=>Worker, worker_id=>worker_id.work_counts)
    @JoinColumn({ name:'worker_id'})
    worker_id:Worker;

}
