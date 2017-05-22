import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ShelfPage } from '../shelf/shelf';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = HomePage;
    tab2Root = ShelfPage;
    source = null;
    constructor(
        private filechooser : FileChooser,
        private fileOpener  : FileOpener,
        private filePath    : FilePath
        ) {}

    importBooks() {
        var  source = null;

        this.filechooser.open()
        .then(uri => this.filePath.resolveNativePath(uri))
        .then(filePath => alert(filePath))
        .catch(e => alert(e));

    }
}