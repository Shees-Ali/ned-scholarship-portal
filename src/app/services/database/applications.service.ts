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

  acceptApplication(application_id: string | undefined, update: any) {
    return this.firebase.updateData('applications/' + application_id, update);
  }

  getApplicationsData(application_id: string | undefined) {
    return this.firebase.getDataOnValue('applications/' + application_id);
  }

  checkIfUserApplied(student_id: string, scholarship_id: string) {
    return this.firebase.checkApplication(student_id, scholarship_id);
  }

  getApplicationsByScholarShipID(scholarship_id: string) {
    return this.firebase.listApplicationsByScholarship(scholarship_id);
  }

  getApplicationsByUserID(user_id: string, limit: number) {
    return this.firebase.listApplicationsByUserID(user_id, limit);
  }

  getApplicationsList(limit: number, last_item = undefined) {
    return this.firebase.listData('applications', limit, last_item);
  }
}
