import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MustKnowComponent } from './must-know.component';

describe('MustKnowComponent', () => {
  let component: MustKnowComponent;
  let fixture: ComponentFixture<MustKnowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MustKnowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MustKnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
