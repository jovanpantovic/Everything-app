import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingDetailComponent } from './thing-detail.component';

describe('ThingDetailComponent', () => {
  let component: ThingDetailComponent;
  let fixture: ComponentFixture<ThingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThingDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
