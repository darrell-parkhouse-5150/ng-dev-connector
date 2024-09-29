import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoMetaComponent } from './repo-meta.component';

describe('RepoMetaComponent', () => {
  let component: RepoMetaComponent;
  let fixture: ComponentFixture<RepoMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoMetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
