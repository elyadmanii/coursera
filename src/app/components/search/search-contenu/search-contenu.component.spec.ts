import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchContenuComponent } from './search-contenu.component';

describe('SearchContenuComponent', () => {
  let component: SearchContenuComponent;
  let fixture: ComponentFixture<SearchContenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchContenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
