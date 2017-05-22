import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ShelfPage } from '../shelf/shelf';
import { FileChooser } from '@ionic-native/file-chooser';
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = HomePage;
    tab2Root = ShelfPage;

    constructor(private filechooser : FileChooser) {}

    importBooks() {
        console.log('import');
        this.filechooser.open()
        .then(uri => alert(uri))
        .catch(e => alert(e));
    }
}