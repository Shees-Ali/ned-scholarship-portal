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

  getStudentsList(limit: number, last_item = undefined) {
    return this.firebase.listStudents();
  }

  getStudentParticulars(student_id: string) {
    return this.firebase.getStudentParticulars(student_id);
  }

  countStudents() {
    return this.firebase.countData('students');
  }
}
