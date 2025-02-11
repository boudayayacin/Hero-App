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
  { date: '2024-11-01',name: "Ali", numero: '+216 97 564 782' },
  { date: '2024-10-02',name: "Basem", numero: '+216 97 902 841' },
  { date: '2024-09-03',name: "Yassin", numero: '+216 97 201 740' },
  { date: '2024-08-04',name: "omar", numero: '+216 95 380 431' },
  { date: '2024-07-05',name: "Zied", numero: '+216 44 450 310' },
  { date: '2024-06-06',name: "amir", numero: '+216 53 164 099' },
  { date: '2024-05-07',name: "mohmaed", numero: '+216 50 338 339' },
  { date: '2024-04-08',name: "achrad", numero: '+216 54 233 603' },
  { date: '2024-03-09',name: "achrad", numero: '+216 26 440 827 ' },
  { date: '2024-02-10',name: "achrad", numero: '+216 22 394 371' },

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
