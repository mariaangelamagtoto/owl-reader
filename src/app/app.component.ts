import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ShelfPage } from '../pages/shelf/shelf';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html',
  selector : 'page-app'
})
export class AppComponent {
  // @ViewChild(Nav) nav: Nav;

  rootPage:any = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    platform     : Platform,
    menu         : MenuController, 
    statusBar    : StatusBar, 
    splashScreen : SplashScreen
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // set our app's pages
    this.pages = [
      { title : 'Home', component: HomePage },
      { title : 'Your Shelf', component: ShelfPage }

    ]
  }
}

