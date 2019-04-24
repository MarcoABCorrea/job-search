import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Job } from 'app/models/job.model';
import { JobsService } from 'app/services/jobs.service';

@Component({
  selector: 'dd-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  providers: [JobsService]
})
export class JobComponent implements OnInit {

  jobs: Array<Job>;
  displayedColumns: string[] = ['title', 'city'];
  dataSource: MatTableDataSource<Job>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
  }

  constructor(private jobsService: JobsService) {
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

  getRecord(row) {
    console.log('tomaonocu');
    // this.router.navigate(['/participants', product]);
  }
}
