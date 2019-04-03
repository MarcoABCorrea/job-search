import { Component } from '@angular/core';
import * as _ from 'lodash';
import { PaginationInstance } from 'ngx-pagination';
import { JobsService } from 'app/services/jobs.service';
import { Job } from 'app/models/job.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [JobsService]
})
export class HomeComponent {

  protected jobs: Array<Job>;
	protected config: PaginationInstance;
	protected fieldname: string;
  protected order: string;
  
  constructor(private jobsService: JobsService) { 
    this.config = {
			id: 'jobs',
			itemsPerPage: 10,
			currentPage: 1
		};

		this.jobsService.getAllJobs().subscribe(
			result => {
				this.jobs = result.body as Array<Job>;
        this.config.totalItems = this.jobs.length;
    	});
	}
	
	open(jobId: number) {
		let tt = this.jobs.find(x => x.id === jobId);
		console.log('teste', tt)
	}

	sortJob(fieldname, order) {
		this.fieldname = fieldname;
		this.order = order;

		this.jobs = _.orderBy(this.jobs, fieldname, order);
	}

	onPageChange(number: number) {
		this.config.currentPage = number;
	}

}
