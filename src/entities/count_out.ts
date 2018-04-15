import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {WorkDay} from "./work_day";
import {WorkCount} from "./work_count";


@Entity("count_out")
@Index("FKriv37xgk54t6n0gid3l7e8gag",["work_day_id",])
export class CountOut {

    @Column("bigint",{
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;


    @Column("datetime",{
        nullable:false,
        name:"count_time"
        })
    count_time:Date;



    @ManyToOne(type=>WorkDay, work_day_id=>work_day_id.count_outs)
    @JoinColumn({ name:'work_day_id'})
    work_day_id:WorkDay;



    @OneToMany(type=>WorkCount, work_counts=>work_counts.count_out_id)
    work_counts:WorkCount[];

}
