import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtentiForAdminComponent } from './utenti-for-admin.component';

describe('UtentiForAdminComponent', () => {
  let component: UtentiForAdminComponent;
  let fixture: ComponentFixture<UtentiForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtentiForAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtentiForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
