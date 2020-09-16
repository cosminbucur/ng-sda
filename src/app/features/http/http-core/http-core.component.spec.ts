import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCoreComponent } from './http-core.component';

describe('HttpCoreComponent', () => {
  let component: HttpCoreComponent;
  let fixture: ComponentFixture<HttpCoreComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ HttpCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
