import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  date: string;
  numero: string;
  name: string;
}

const ELEMENT_DATA: UserData[] = [
  { date: '2024-11-01',name: "Ali", numero: '+216 97 35XX' },
  { date: '2024-11-02',name: "Basem", numero: '+216 97 36XX' },
  { date: '2024-11-03',name: "Yassin", numero: '+216 97 37XX' },
  { date: '2024-11-04',name: "Zied", numero: '+216 97 38XX' },
  { date: '2024-11-04',name: "Zied", numero: '+216 97 38XX' },
  { date: '2024-11-04',name: "Zied", numero: '+216 97 38XX' },
  { date: '2024-11-04',name: "Zied", numero: '+216 97 38XX' },
  { date: '2024-11-04',name: "Zied", numero: '+216 97 38XX' },
];

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['date', 'numero','name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
