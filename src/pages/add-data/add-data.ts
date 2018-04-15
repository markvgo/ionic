import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import {WorkCount } from './work-count.model';

@IonicPage()
@Component({
  selector: 'page-add-data',
  templateUrl: 'add-data.html',
})
export class AddDataPage {

  counts = [];
//{name:"test1", count:10  },{name:"test2", count:11  }
  // ];


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toast: Toast

             ) {
    for (let i = 0; i < 5; i++) {
      let count = new WorkCount(111,"ddd","ccc",0);
      this.counts.push(count);
    }
  }

  saveData() {

    this.toast.show(this.counts[0].count.toString()+' '+this.counts[1].count.toString(), '5000', 'center').subscribe(
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
