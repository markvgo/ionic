import {
  Index,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  JoinTable
} from "typeorm";
import {WorkDay} from "./work_day";


@Entity("job")
export class Job {

  // @Column("bigint",{
  //     generated:true,
  //     nullable:false,
  //     primary:true,
  //     name:"id"
  //     })
  @PrimaryGeneratedColumn()
  id: number;


  @Column("datetime", {
    nullable: true,
    name: "start_date"
  })
  startDate: Date;

  @Column("text", {
    nullable: false,
    name: "description"
  })
  description: String;

  @OneToMany(type => WorkDay, work_days => work_days.job_id)
  work_days: WorkDay[];

}
