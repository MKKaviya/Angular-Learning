import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ToastrModule } from 'ngx-toastr';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RecursiveComponent } from './recursive/recursive.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { BalancedSubstringComponent } from './balanced-substring/balanced-substring.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const firebaseConfig = {
  apiKey: 'AIzaSyBLUE5TTFO37JwQQ4qj5HjOYZLaD8lYDw0',
  authDomain: 'learning-tasks-71c27.firebaseapp.com',
  projectId: 'learning-tasks-71c27',
  storageBucket: 'learning-tasks-71c27.appspot.com',
  messagingSenderId: '70358377815',
  appId: '1:70358377815:web:edbb99207d25098ac98a12',
  measurementId: 'G-0GN016D2SN',
};

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    NavigationBarComponent,
    RecursiveComponent,
    HomeComponent,
    BalancedSubstringComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    FormsModule,
    MatProgressBarModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
