import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsExamsComponent } from './results-exams.component';

describe('ResultsExamsComponent', () => {
  let component: ResultsExamsComponent;
  let fixture: ComponentFixture<ResultsExamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsExamsComponent]
    });
    fixture = TestBed.createComponent(ResultsExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
