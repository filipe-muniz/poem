import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Poem } from '../../models/poem.model';
import { PoemsService } from '../../services/poems.service';

@Component({
  selector: 'app-poems',
  standalone: true,
  imports: [
    MatIconModule,
    MatIconButton,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    MatTableModule,
    HttpClientModule,
  ],
  templateUrl: './poems.component.html',
  styleUrl: './poems.component.scss',
})
export class PoemsComponent {
  displayedColumns: string[] = ['id', 'title', 'poem', 'poet_id'];
  poems: Poem[] = [];

  constructor(private poemsService: PoemsService) {}

  ngOnInit() {
    this.initializeTable();
  }

  initializeTable() {
    this.poemsService.getTenPoems().subscribe((data) => {
      this.poems = data;
    });
  }
}
