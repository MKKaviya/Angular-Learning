import { Component } from '@angular/core';
import { Router } from '@angular/router';

type NavItems = { url: string; name: string };

const routes: NavItems[] = [
  { url: '', name: 'Home' },
  { url: 'file-upload', name: 'Image Upload' },
  { url: 'recursive', name: 'Recursive' },
  { url: 'balanced-string', name: 'Balanced Strings' },
];
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent {
  navItems: NavItems[] = routes;
  constructor(private router: Router) {}

  onNavigate(url: string) {
    this.router.navigate([url]);
  }
}
