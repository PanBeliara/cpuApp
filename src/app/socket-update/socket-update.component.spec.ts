import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketUpdateComponent } from './socket-update.component';

describe('SocketUpdateComponent', () => {
  let component: SocketUpdateComponent;
  let fixture: ComponentFixture<SocketUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocketUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocketUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
