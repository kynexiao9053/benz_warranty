import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultPageItemComponent } from './search-result-page-item.component';

describe('SearchResultPageItemComponent', () => {
  let component: SearchResultPageItemComponent;
  let fixture: ComponentFixture<SearchResultPageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultPageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultPageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
