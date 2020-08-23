import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalEditorComponent } from './external-editor.component';

describe('ExternalEditorComponent', () => {
  let component: ExternalEditorComponent;
  let fixture: ComponentFixture<ExternalEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
