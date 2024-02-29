import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExamsComponent } from './create-exams.component';

describe('CreateExamsComponent', () => {
  let component: CreateExamsComponent;
  let fixture: ComponentFixture<CreateExamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateExamsComponent]
    });
    fixture = TestBed.createComponent(CreateExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
