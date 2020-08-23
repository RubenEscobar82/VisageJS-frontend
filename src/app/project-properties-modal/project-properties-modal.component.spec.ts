import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPropertiesModalComponent } from './project-properties-modal.component';

describe('ProjectPropertiesModalComponent', () => {
  let component: ProjectPropertiesModalComponent;
  let fixture: ComponentFixture<ProjectPropertiesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPropertiesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPropertiesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
