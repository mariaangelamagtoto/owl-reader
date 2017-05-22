import { TestBed, ComponentFixture, async}  from  '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { AppComponent } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';

let comp    : AppComponent;
let fixture : ComponentFixture<AppComponent>;

describe('Component: Root component', () => {

    beforeEach(async(() => {

      TestBed.configureTestingModule({

          declarations: [AppComponent],

          providers: [StatusBar, SplashScreen],

          imports: [IonicModule.forRoot(AppComponent)]
      }).compileComponents();  

    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(AppComponent);
        comp    = fixture.componentInstance;
    });

   afterEach(() => {
        fixture.destroy();
        comp = null;
    });

    it('is created', () => {

        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();
    });

    it('initialises with the root page of TabsPage', () => {
        expect(comp['rootPage']).toBe(TabsPage);
    });

});