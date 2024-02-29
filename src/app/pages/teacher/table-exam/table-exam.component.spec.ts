import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExamComponent } from './table-exam.component';

describe('TableExamComponent', () => {
  let component: TableExamComponent;
  let fixture: ComponentFixture<TableExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableExamComponent]
    });
    fixture = TestBed.createComponent(TableExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
