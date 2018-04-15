import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { createConnection } from 'typeorm'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CountOut } from '../entities/count_out';
import { Job } from '../entities/job';
import { WorkCount } from '../entities/work_count';
import { WorkDay } from '../entities/work_day';
import { Worker } from '../entities/worker'

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(async () => {
       // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      if(platform.is('cordova')) {
        // Running on device or emulator
        await createConnection({
          type: 'cordova',
          database: 'test',
          location: 'default',
          logging: ['error', 'query', 'schema'],
          synchronize: true,
          entities: [
            CountOut,
            Job,
            WorkDay,
            WorkCount,
            Worker
          ]
        });
      } else {
        // Running app in browser
        await createConnection({
          type: 'sqlite',
          database: '/home/mark/test',
          autoSave: true,
          location: 'browser',
          logging: ['error', 'query', 'schema'],
          synchronize: true,
          entities: [
            CountOut,
            Job,
            WorkDay,
            WorkCount,
            Worker
          ]
        });
      }

      this.rootPage = HomePage;
    });
  }
}
