import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService {
  constructor(private firebase: FirebaseService) {}

  setApplicationsData(application: any) {
    return this.firebase.pushData('applications', application);
  }

  getApplicationsData(application_id: string | undefined) {
    return this.firebase.getDataOnValue('applications/' + application_id);
  }

  getApplicationsByScholarShipID(scholarship_id: string) {
    return this.firebase.listApplicationsByScholarship(scholarship_id);
  }

  getApplicationsList(limit: number, last_item = undefined) {
    return this.firebase.listData('applications', limit, last_item);
  }

  getApplicationsCount() {
    return this.firebase.countData('applications');
  }
}
