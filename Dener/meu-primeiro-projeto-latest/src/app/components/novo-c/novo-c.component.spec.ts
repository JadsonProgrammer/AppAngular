import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoCComponent } from './novo-c.component';

describe('NovoCComponent', () => {
  let component: NovoCComponent;
  let fixture: ComponentFixture<NovoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
