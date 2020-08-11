import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldersNavComponent } from './folders-nav.component';

describe('FoldersNavComponent', () => {
  let component: FoldersNavComponent;
  let fixture: ComponentFixture<FoldersNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldersNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldersNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
