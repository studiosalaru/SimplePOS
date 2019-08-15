import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdminPage } from '../pages/admin/admin';
import { ProductAddPage } from '../pages/product-add/product-add';
import { BillpopupPage } from '../pages/billpopup/billpopup';
import { Printer } from '@ionic-native/printer/ngx';
import { TransactionhandlerProvider } from '../providers/transactionhandler/transactionhandler';
import { ResourcesProvider } from '../providers/resources/resources';
import { DataaccessProvider } from '../providers/dataaccess/dataaccess';
import { StorageProvider } from '../providers/storage/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AdminPage,
    ProductAddPage,
    BillpopupPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AdminPage,
    ProductAddPage,
    BillpopupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Printer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TransactionhandlerProvider,
    ResourcesProvider,
    DataaccessProvider,
    StorageProvider
  ]
})
export class AppModule {}
