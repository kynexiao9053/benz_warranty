import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocListSectionComponent } from './doc-list-section.component';

describe('DocListSectionComponent', () => {
  let component: DocListSectionComponent;
  let fixture: ComponentFixture<DocListSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocListSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
