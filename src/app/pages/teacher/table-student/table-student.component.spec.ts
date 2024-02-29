import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStudentComponent } from './table-student.component';

describe('TableStudentComponent', () => {
  let component: TableStudentComponent;
  let fixture: ComponentFixture<TableStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableStudentComponent]
    });
    fixture = TestBed.createComponent(TableStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
