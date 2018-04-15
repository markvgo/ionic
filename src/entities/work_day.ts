import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {Job} from "./job";
import {CountOut} from "./count_out";


@Entity("work_day")
@Index("FKtnmoc3okkw38yqfigfrbdkksh",["job_id",])
export class WorkDay {

    @Column("bigint",{
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;


    @Column("datetime",{
        nullable:true,
        name:"work_date"
        })
    work_date:Date;



    @ManyToOne(type=>Job, job_id=>job_id.work_days)
    @JoinColumn({ name:'job_id'})
    job_id:Job;



    @OneToMany(type=>CountOut, count_outs=>count_outs.work_day_id)
    count_outs:CountOut[];

}
