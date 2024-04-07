import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Poet } from '../../models/poet.model';
import { PoetsService } from '../../services/poets.service';

@Component({
  selector: 'app-poets',
  standalone: true,
  imports: [
    MatIconModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    MatTableModule,
    HttpClientModule,
  ],
  templateUrl: './poets.component.html',
  styleUrl: './poets.component.scss',
})
export class PoetsComponent {
  displayedColumns: string[] = ['id', 'name'];
  poets: Poet[] = [];

  constructor(private poetService: PoetsService) {}

  ngOnInit() {
    this.initializeTable();
  }

  initializeTable() {
    this.poetService.getTenPoets().subscribe((data) => {
      this.poets = data;
    });
  }
}
