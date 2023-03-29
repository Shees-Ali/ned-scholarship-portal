import { Injector } from '@angular/core';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';
import { NavService } from '../services/nav.service';

export abstract class BasePage {
  public formBuilder: FormBuilder;
  public nav: NavService;
  public location: Location;
  public domSanitizer: DomSanitizer;

  constructor(injector: Injector) {
    this.formBuilder = injector.get(FormBuilder);
    this.location = injector.get(Location);
    this.nav = injector.get(NavService);
    this.domSanitizer = injector.get(DomSanitizer);
  }
}
