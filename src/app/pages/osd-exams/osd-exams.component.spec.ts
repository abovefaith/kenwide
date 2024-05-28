import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsdExamsComponent } from './osd-exams.component';

describe('OsdExamsComponent', () => {
  let component: OsdExamsComponent;
  let fixture: ComponentFixture<OsdExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OsdExamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OsdExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
