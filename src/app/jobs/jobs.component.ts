import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Job } from 'app/models/job.model';
import { JobsService } from 'app/services/jobs.service';

@Component({
  selector: 'dd-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  providers: [JobsService]
})
export class JobsComponent implements OnInit {

  jobs: Array<Job>;
  displayedColumns: string[] = ['title', 'city'];
  dataSource: MatTableDataSource<Job>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
  }

  constructor(private jobsService: JobsService, private router: Router) {
    this.jobsService.getAllJobs().subscribe(
			result => {
				const resultFormatted = result.body as Array<Job>;
        this.jobs = resultFormatted.filter(obj => obj.state === "active");
        this.dataSource = new MatTableDataSource<Job>(this.jobs);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    	});
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  goToDetails(row) {
    this.router.navigate(['/job/detail', row.id]);
  }
}
