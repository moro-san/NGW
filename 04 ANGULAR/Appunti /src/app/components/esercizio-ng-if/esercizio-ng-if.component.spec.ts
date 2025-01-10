import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsercizioNgIfComponent } from './esercizio-ng-if.component';

describe('EsercizioNgIfComponent', () => {
  let component: EsercizioNgIfComponent;
  let fixture: ComponentFixture<EsercizioNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsercizioNgIfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsercizioNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
