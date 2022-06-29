import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InternetAndEmptyListErrorViewPage } from './internet-and-empty-list-error-view.page';

describe('InternetAndEmptyListErrorViewPage', () => {
  let component: InternetAndEmptyListErrorViewPage;
  let fixture: ComponentFixture<InternetAndEmptyListErrorViewPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetAndEmptyListErrorViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InternetAndEmptyListErrorViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
