import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-poems',
  standalone: true,
  imports: [MatIconModule, MatToolbarModule, RouterLink, RouterLinkActive],
  templateUrl: './poems.component.html',
  styleUrl: './poems.component.scss',
})
export class PoemsComponent {}
