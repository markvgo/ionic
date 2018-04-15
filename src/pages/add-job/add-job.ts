import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { getRepository, Repository } from 'typeorm';
import { Job } from '../../entities/job';
@IonicPage()
@Component({
  selector: 'page-add-job',
  templateUrl: 'add-job.html',
})
export class AddJobPage {

  job = {startDate:"", type:"", description:"" };



  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toast: Toast

             ) {

  }

   saveJob() {
    const postRepository = getRepository('job') as Repository<Job>;
     postRepository.save(this.job);
     this.toast.show('Job saved', '5000', 'center').subscribe(
       toast => {
         this.navCtrl.popToRoot();
       }
     );

  }
  saveData1() {
    // this.sqlite.create({
    //   name: 'ionicdb.db',
    //   location: 'default'
    // }).then((db: SQLiteObject) => {
    //   db.executeSql('INSERT INTO expense VALUES(NULL,?,?,?,?)',[this.data.date,this.data.type,this.data.description,this.data.amount])
    //     .then(res => {
    //       console.log(res);
    //       this.toast.show('Data saved', '5000', 'center').subscribe(
    //         toast => {
    //           this.navCtrl.popToRoot();
    //         }
    //       );
    //     })
    //     .catch(e => {
    //       console.log(e);
    //       this.toast.show(e, '5000', 'center').subscribe(
    //         toast => {
    //           console.log(toast);
    //         }
    //       );
    //     });
    // }).catch(e => {
    //   console.log(e);
    //   this.toast.show(e, '5000', 'center').subscribe(
    //     toast => {
    //       console.log(toast);
    //     }
    //   );
    // });
  }

}
