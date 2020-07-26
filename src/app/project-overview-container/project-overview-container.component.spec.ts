import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOverviewContainerComponent } from './project-overview-container.component';

describe('ProjectOverviewContainerComponent', () => {
  let component: ProjectOverviewContainerComponent;
  let fixture: ComponentFixture<ProjectOverviewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectOverviewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOverviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
