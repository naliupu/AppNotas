import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNotasComponent } from './update-notas.component';

describe('UpdateNotasComponent', () => {
  let component: UpdateNotasComponent;
  let fixture: ComponentFixture<UpdateNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
