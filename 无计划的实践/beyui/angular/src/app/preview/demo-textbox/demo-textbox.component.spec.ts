import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTextboxComponent } from './demo-textbox.component';

describe('DemoTextboxComponent', () => {
  let component: DemoTextboxComponent;
  let fixture: ComponentFixture<DemoTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
