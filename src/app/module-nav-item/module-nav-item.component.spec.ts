import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleNavItemComponent } from './module-nav-item.component';

describe('ModuleNavItemComponent', () => {
  let component: ModuleNavItemComponent;
  let fixture: ComponentFixture<ModuleNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
