import { Injectable } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { forkJoin, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  constructor(private storage: AngularFireStorage) {}

  uploadImages(files: File[]): Promise<string[]> {
    const uploadTasks: Observable<string>[] = files.map((file) => {
      const filePath = `images/${file.name}`;
      const storageRef = this.storage.ref(filePath);
      const uploadTask: AngularFireUploadTask = this.storage.upload(
        filePath,
        file
      );

      return uploadTask
        .snapshotChanges()
        .pipe(switchMap(() => storageRef.getDownloadURL()));
    });

    return new Promise<string[]>((resolve, reject) => {
      forkJoin(uploadTasks).subscribe(
        (urls) => {
          resolve(urls);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
