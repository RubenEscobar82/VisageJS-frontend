import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsExcededModalComponent } from './projects-exceded-modal.component';

describe('ProjectsExcededModalComponent', () => {
  let component: ProjectsExcededModalComponent;
  let fixture: ComponentFixture<ProjectsExcededModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsExcededModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsExcededModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
