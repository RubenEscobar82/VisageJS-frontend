import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetEditorModalComponent } from './snippet-editor-modal.component';

describe('SnippetEditorModalComponent', () => {
  let component: SnippetEditorModalComponent;
  let fixture: ComponentFixture<SnippetEditorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetEditorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetEditorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
