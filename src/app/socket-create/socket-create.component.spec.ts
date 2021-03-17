import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketCreateComponent } from './socket-create.component';

describe('SocketCreateComponent', () => {
  let component: SocketCreateComponent;
  let fixture: ComponentFixture<SocketCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocketCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocketCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
