import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSnippetModalComponent } from './new-snippet-modal.component';

describe('NewSnippetModalComponent', () => {
  let component: NewSnippetModalComponent;
  let fixture: ComponentFixture<NewSnippetModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSnippetModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSnippetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
