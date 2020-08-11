import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetProppertiesModalComponent } from './snippet-propperties-modal.component';

describe('SnippetProppertiesModalComponent', () => {
  let component: SnippetProppertiesModalComponent;
  let fixture: ComponentFixture<SnippetProppertiesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetProppertiesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetProppertiesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
