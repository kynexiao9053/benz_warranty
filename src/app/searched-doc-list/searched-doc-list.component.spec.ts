import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedDocListComponent } from './searched-doc-list.component';

describe('SearchedDocListComponent', () => {
  let component: SearchedDocListComponent;
  let fixture: ComponentFixture<SearchedDocListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedDocListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedDocListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
