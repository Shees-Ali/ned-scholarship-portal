import { Injectable } from '@angular/core';
import { Database, onValue, ref, set } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private database: Database) {}

  getDataOnValue(route: string) {
    return new Promise<any>(async (resolve) => {
      const dBref = ref(this.database, route);
      onValue(dBref, (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      });
    });
  }

  setData(route: string, data: any) {
    return set(ref(this.database, route), data);
  }
}
