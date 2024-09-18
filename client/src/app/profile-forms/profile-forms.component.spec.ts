import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormsComponent } from './profile-forms.component';

describe('ProfileFormsComponent', () => {
  let component: ProfileFormsComponent;
  let fixture: ComponentFixture<ProfileFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
