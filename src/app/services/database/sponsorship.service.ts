import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root',
})
export class SponsorshipService {
  constructor(
    private firebase: FirebaseService,
    private storage: StorageService
  ) {}

  setSponsorshipData(sponsorships: any) {
    return this.firebase.pushData('sponsorships/', sponsorships);
  }

  updateSponsorship(donor_id: string | undefined, update: any) {
    return this.firebase.updateData('sponsorships/' + donor_id, update);
  }

  getSponsorshipData(donor_id: string | undefined) {
    return this.firebase.getDataOnValue('sponsorships/' + donor_id);
  }

  getSponsorshipsList(
    limit: number,
    last_item = undefined,
    filter: string = ''
  ) {
    return this.firebase.listData('sponsorships', limit, last_item, filter);
  }

  countSponsorships() {
    return this.firebase.countData('sponsorships');
  }
}
