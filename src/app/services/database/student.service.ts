import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(
    private firebase: FirebaseService,
    private storage: StorageService
  ) {}

  setStudentData(user_id: string, student: any) {
    return this.firebase.setData('students/' + user_id, student);
  }

  getStudentData(user_id: string | undefined) {
    return this.firebase.getDataOnValue('students/' + user_id);
  }

  countStudents() {
    return this.firebase.countData('students');
  }
}
