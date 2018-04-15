import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Toast } from '@ionic-native/toast';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddJobPage } from '../pages/add-job/add-job';
import { EditJobPage } from '../pages/edit-job/edit-job';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddJobPage,
    EditJobPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddJobPage,
    EditJobPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Toast
  ]
})
export class AppModule {}
