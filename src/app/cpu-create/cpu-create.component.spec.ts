import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuCreateComponent } from './cpu-create.component';

describe('CpuCreateComponent', () => {
  let component: CpuCreateComponent;
  let fixture: ComponentFixture<CpuCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
