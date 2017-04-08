import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarResultItemComponent } from './search-bar-result-item.component';

describe('SearchBarResultItemComponent', () => {
  let component: SearchBarResultItemComponent;
  let fixture: ComponentFixture<SearchBarResultItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarResultItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarResultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
