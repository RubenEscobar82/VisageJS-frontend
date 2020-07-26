import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IddleComponent } from './iddle.component';

describe('IddleComponent', () => {
  let component: IddleComponent;
  let fixture: ComponentFixture<IddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
