import { Injectable } from '@angular/core';
import { Database, onValue, ref, set } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {
  Storage,
  getDownloadURL,
  ref as storageRef,
  uploadBytesResumable,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private basePath = '/documents';
  constructor(private database: Database, private storage: Storage) {}

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

  pushFileToStorage(fileUpload: any) {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const ref = storageRef(this.storage, filePath);
    const uploadTask = uploadBytesResumable(ref, fileUpload.file.file);

    uploadTask.on(
      'state_changed',
      (snapshot: any) => {
        console.log(snapshot);
        console.log(snapshot.bytesTransferred);
        console.log(snapshot.totalBytes);
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: any) => {
          console.log('File available at', downloadURL);
        });
      }
    );
  }

  saveFileData(data: any) {}
}
