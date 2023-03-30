import { Injector } from '@angular/core';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';
import { NavService } from '../services/nav.service';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

export abstract class BasePage {
  public formBuilder: FormBuilder;
  public nav: NavService;
  public location: Location;
  public domSanitizer: DomSanitizer;
  public authService: AuthService;
  public storage: StorageService;

  constructor(injector: Injector) {
    this.formBuilder = injector.get(FormBuilder);
    this.location = injector.get(Location);
    this.nav = injector.get(NavService);
    this.domSanitizer = injector.get(DomSanitizer);
    this.authService = injector.get(AuthService);
    this.storage = injector.get(StorageService);
  }
}
