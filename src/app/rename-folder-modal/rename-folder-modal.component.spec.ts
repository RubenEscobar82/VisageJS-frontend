import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenameFolderModalComponent } from './rename-folder-modal.component';

describe('RenameFolderModalComponent', () => {
  let component: RenameFolderModalComponent;
  let fixture: ComponentFixture<RenameFolderModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenameFolderModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenameFolderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
