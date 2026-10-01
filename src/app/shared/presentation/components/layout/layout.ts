import {Component, signal} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatIcon} from '@angular/material/icon';
import {MatListItem, MatListModule, MatNavList} from '@angular/material/list';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatLine} from '@angular/material/core';

@Component({
  imports: [
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    MatIcon,
    MatNavList,
    MatListModule,
    MatListItem,
    RouterLink,
    RouterLinkActive,
    MatLine,
    RouterOutlet
  ],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {
  readonly collapsed = signal(false);
  readonly options = [
    {link: '/home', icon: 'home', label: 'Home'},
    {link: '/about', icon: 'about', label: 'About'},
    {link: '/contact', icon: 'contact', label: 'Contact'},
    {link: '/learning/categories', icon: 'category', label: 'Categories'},
    {link: '/learning/courses', icon: 'school', label: 'Courses'}
  ];

  toggleMenu() {
    this.collapsed.update(() => !this.collapsed());
  }
}
