import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProfileService } from './profile.service';
import { Profile } from '../models/profile';

describe('ProfileService', () => {
  let service: ProfileService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfileService]
    });

    service = TestBed.inject(ProfileService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get profile by id', () => {
    const id = '12345';
    const profile: Profile = {
      _id: '12345',
      user: {
        _id: '67890',
        name: 'John Doe',
        email: 'john.doe@example.com'
      },
      experience: [],
      education: [],
      githubusername: 'johndoe'
    };

    service.getProfileById(id).subscribe((response: Profile) => {
      expect(response).toEqual(profile);
    });

    const req = httpMock.expectOne(`${service.url}/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(profile);
  });

  it('should get profiles', () => {
    const profiles: Profile[] = [
      // Define your profiles here (similar to the previous test)
    ];

    service.getProfiles().subscribe((response: Profile[]) => {
      expect(response).toEqual(profiles);
    });

    const req = httpMock.expectOne(service.url);
    expect(req.request.method).toBe('GET');
    req.flush(profiles);
  });

  // Add similar tests for updateProfile, createProfile, and deleteProfile

  it('should handle request errors', () => {
    const id = '12345';
    const error = new ErrorEvent('Test Error');

    service.getProfileById(id).subscribe(
      () => fail('should not be called'),
      (err: any) => {
        expect(err.error).toBe(error);
      }
    );

    const req = httpMock.expectOne(`${service.url}/${id}`);
    expect(req.request.method).toBe('GET');
    req.error(error);
  });
});
