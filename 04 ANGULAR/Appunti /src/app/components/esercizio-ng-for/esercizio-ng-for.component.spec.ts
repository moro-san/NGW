import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsercizioNgForComponent } from './esercizio-ng-for.component';

describe('EsercizioNgForComponent', () => {
  let component: EsercizioNgForComponent;
  let fixture: ComponentFixture<EsercizioNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsercizioNgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsercizioNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
