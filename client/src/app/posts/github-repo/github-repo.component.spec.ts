import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepoComponent } from './github-repo.component';

describe('GithubRepoComponent', () => {
  let component: GithubRepoComponent;
  let fixture: ComponentFixture<GithubRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubRepoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
