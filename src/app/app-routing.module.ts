import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HomeComponent } from './home/home.component';
import { RecursiveComponent } from './recursive/recursive.component';
import { BalancedSubstringComponent } from './balanced-substring/balanced-substring.component';

const routes: Routes = [
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'recursive', component: RecursiveComponent },
  { path: 'balanced-string', component: BalancedSubstringComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
