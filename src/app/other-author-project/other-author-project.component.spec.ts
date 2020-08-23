import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherAuthorProjectComponent } from './other-author-project.component';

describe('OtherAuthorProjectComponent', () => {
  let component: OtherAuthorProjectComponent;
  let fixture: ComponentFixture<OtherAuthorProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherAuthorProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherAuthorProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
