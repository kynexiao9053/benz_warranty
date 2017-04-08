import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedDocListItemComponent } from './searched-doc-list-item.component';

describe('SearchedDocListItemComponent', () => {
  let component: SearchedDocListItemComponent;
  let fixture: ComponentFixture<SearchedDocListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedDocListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedDocListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
