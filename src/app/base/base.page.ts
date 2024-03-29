import { Injector } from '@angular/core';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';
import { NavService } from '../services/nav.service';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { UtilityService } from '../services/utility.service';
import { UserService } from '../services/database/user.service';
import { FirebaseService } from '../services/database/firebase.service';
import { StudentService } from '../services/database/student.service';
import { ScholarshipService } from '../services/database/scholarship.service';
import { ApplicationsService } from '../services/database/applications.service';
import { DonorService } from '../services/database/donor.service';
import { SponsorshipService } from '../services/database/sponsorship.service';

export abstract class BasePage {
  public formBuilder: FormBuilder;
  public nav: NavService;
  public location: Location;
  public domSanitizer: DomSanitizer;
  public authService: AuthService;
  public storage: StorageService;
  public utiltiy: UtilityService;
  public userService: UserService;
  public studentService: StudentService;
  public scholarshipService: ScholarshipService;
  public applicationService: ApplicationsService;
  public donorService: DonorService;
  public sponsorshipService: SponsorshipService;
  public firebase: FirebaseService;

  constructor(injector: Injector) {
    this.formBuilder = injector.get(FormBuilder);
    this.location = injector.get(Location);
    this.nav = injector.get(NavService);
    this.domSanitizer = injector.get(DomSanitizer);
    this.authService = injector.get(AuthService);
    this.storage = injector.get(StorageService);
    this.utiltiy = injector.get(UtilityService);
    this.userService = injector.get(UserService);
    this.studentService = injector.get(StudentService);
    this.scholarshipService = injector.get(ScholarshipService);
    this.applicationService = injector.get(ApplicationsService);
    this.donorService = injector.get(DonorService);
    this.sponsorshipService = injector.get(SponsorshipService);
    this.firebase = injector.get(FirebaseService);
  }
}
