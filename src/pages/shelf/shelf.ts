import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
@Component({
    selector: 'page-shelf',
    templateUrl: 'shelf.html'
})
export class ShelfPage {
    constructor(
        public navCtrl: NavController,
        public popoverCtrl : PopoverController
        ) {
    }
    
}