import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddJobPage } from '../add-job/add-job';
import { EditJobPage } from '../edit-job/edit-job';
import { getRepository, Repository } from 'typeorm';
import { Job } from '../../entities/job';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  jobs: any = [];

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    this.getJobs();
  }

  ionViewWillEnter() {
    this.getJobs();
  }

  async getJobs() {
    const jobRepository = getRepository('job') as Repository<Job>;
    this.jobs = await  jobRepository.createQueryBuilder('job')
       .getMany();
  }

  addJob() {
    this.navCtrl.push(AddJobPage);
  }

  editJob(rowid) {
    this.navCtrl.push(EditJobPage, {
      rowid:rowid
    });
  }


}
