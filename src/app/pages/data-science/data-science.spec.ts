import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataScience } from './data-science';

describe('DataScience', () => {
  let component: DataScience;
  let fixture: ComponentFixture<DataScience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataScience],
    }).compileComponents();

    fixture = TestBed.createComponent(DataScience);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
