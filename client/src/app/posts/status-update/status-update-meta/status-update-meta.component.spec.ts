import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusUpdateMetaComponent } from './status-update-meta.component';

describe('StatusUpdateMetaComponent', () => {
  let component: StatusUpdateMetaComponent;
  let fixture: ComponentFixture<StatusUpdateMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusUpdateMetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusUpdateMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
