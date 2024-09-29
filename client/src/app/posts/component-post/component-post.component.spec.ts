import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPostComponent } from './component-post.component';

describe('ComponentPostComponent', () => {
  let component: ComponentPostComponent;
  let fixture: ComponentFixture<ComponentPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
