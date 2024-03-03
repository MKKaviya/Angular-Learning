import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  files: File[] = [];
  maxSizeMB: number = 10;
  previews: string[] = [];
  uploadProgress: number[] = [];
  isUploading: boolean = false;

  constructor(
    private storage: AngularFireStorage,
    private toastr: ToastrService,
    private router: Router
  ) {}

  onFilesSelected(event: any) {
    this.files = [];
    this.previews = [];
    this.uploadProgress = [];
    const selectedFiles: FileList = event.target.files;
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      if (this.isFileSizeValid(file)) {
        this.files.push(file);
      } else {
        this.toastr.error(
          `File size exceeds 10MB limit: ${file.name}`,
          'Error'
        );
      }
    }
    this.generateImagePreviews();
  }

  isFileSizeValid(file: File): boolean {
    const fileSizeInMB = file.size / (1024 * 1024);
    return fileSizeInMB <= this.maxSizeMB;
  }

  getFileSize(file: File): string {
    const fileSizeInBytes = file.size;
    if (fileSizeInBytes === 0) {
      return '0 Bytes';
    }
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const index = Math.floor(Math.log(fileSizeInBytes) / Math.log(1024));
    const formattedSize = parseFloat(
      (fileSizeInBytes / Math.pow(1024, index)).toFixed(2)
    );
    return `${formattedSize} ${sizes[index]}`;
  }

  uploadImages() {
    const uploadTasks: AngularFireUploadTask[] = [];
    this.isUploading = true;

    this.files.forEach((file, index) => {
      const filePath = `images/${file.name}`;
      const uploadTask = this.storage.upload(filePath, file);
      this.uploadProgress[index] = 0;
      uploadTask.percentageChanges().subscribe((percentage) => {
        this.uploadProgress[index] = percentage!;
      });

      uploadTasks.push(uploadTask);
    });

    Promise.all(uploadTasks.map((task) => task.snapshotChanges().toPromise()))
      .then(() => {
        this.toastr.success('All images uploaded successfully!', 'Success');
        this.files = [];
        this.isUploading = false;
      })
      .catch((error) => {
        this.toastr.error(`Error uploading images: ${error}`, 'Error');
      });
  }

  onDelete(index: number) {
    this.files.splice(index, 1);
    this.previews.splice(index, 1);
    this.uploadProgress.splice(index, 1);
  }

  generateImagePreviews() {
    this.previews = [];
    this.files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previews.push(e.target.result);
      };
      reader.readAsDataURL(file);
    });
  }

  goBack() {
    this.router.navigate(['']);
  }
}
