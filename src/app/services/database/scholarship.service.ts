import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root',
})
export class ScholarshipService {
  constructor(private firebase: FirebaseService) {}

  setScholarshipData(scholarship: any) {
    return this.firebase.pushData('scholarships', scholarship);
  }

  getScholarshipData(scholarship_id: string | undefined) {
    return this.firebase.getDataOnValue('scholarships/' + scholarship_id);
  }

  getScholarShipList() {

  }
}
