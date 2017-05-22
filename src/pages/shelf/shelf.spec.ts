import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { ShelfPage }  from './shelf';
import { NavController } from 'ionic-angular';

let comp : ShelfPage;
let fixture : ComponentFixture<ShelfPage>;

describe('Component: Shelf', () => {

    beforeEach(async(() => {

        TestBed.configureTestingModule({

            declarations: [ShelfPage],
            
            providers: [NavController],

            imports: [IonicModule.forRoot(ShelfPage)]
        }).compileComponents();

    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(ShelfPage);
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

})
