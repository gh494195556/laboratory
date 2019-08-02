import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SassTestComponent } from './sass-test.component';

describe('SassTestComponent', () => {
  let component: SassTestComponent;
  let fixture: ComponentFixture<SassTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SassTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SassTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
