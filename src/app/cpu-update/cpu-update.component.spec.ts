import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuUpdateComponent } from './cpu-update.component';

describe('CpuUpdateComponent', () => {
  let component: CpuUpdateComponent;
  let fixture: ComponentFixture<CpuUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
