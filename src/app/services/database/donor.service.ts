import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root',
})
export class DonorService {
  constructor(
    private firebase: FirebaseService,
    private storage: StorageService
  ) {}

  setDonorData(user_id: string, donor: any) {
    return this.firebase.setData('donors/' + user_id, donor);
  }

  updateDonor(donor_id: string | undefined, update: any) {
    return this.firebase.updateData('donors/' + donor_id, update);
  }

  getDonorData(donor_id: string | undefined) {
    return this.firebase.getDataOnValue('donors/' + donor_id);
  }

  getDonorsList(limit: number, last_item = undefined, filter: string = '') {
    return this.firebase.listData('donors', limit, last_item, filter);
  }

  countDonors() {
    return this.firebase.countData('donors');
  }
}
