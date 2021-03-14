import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvNavBarComponent } from './cv-nav-bar.component';

describe('CvNavBarComponent', () => {
  let component: CvNavBarComponent;
  let fixture: ComponentFixture<CvNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
