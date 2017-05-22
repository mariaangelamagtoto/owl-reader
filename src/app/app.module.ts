import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';

import { AppComponent } from './app.component';
import { HomePage } from '../pages/home/home';
import { ShelfPage } from '../pages/shelf/shelf';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    ShelfPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    HomePage,
    ShelfPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileChooser,
    FileOpener,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
