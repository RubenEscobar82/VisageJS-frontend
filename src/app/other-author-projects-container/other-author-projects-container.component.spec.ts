import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherAuthorProjectsContainerComponent } from './other-author-projects-container.component';

describe('OtherAuthorProjectsContainerComponent', () => {
  let component: OtherAuthorProjectsContainerComponent;
  let fixture: ComponentFixture<OtherAuthorProjectsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherAuthorProjectsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherAuthorProjectsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
