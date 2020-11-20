import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenProtectorsComponent } from './screen-protectors.component';

describe('ScreenProtectorsComponent', () => {
  let component: ScreenProtectorsComponent;
  let fixture: ComponentFixture<ScreenProtectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenProtectorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenProtectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
