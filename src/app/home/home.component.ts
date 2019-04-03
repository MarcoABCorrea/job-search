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
				const resultFormatted = result.body as Array<Job>;
				this.jobs = resultFormatted.filter(obj => obj.state === "active");
        this.config.totalItems = this.jobs.length;
    	});
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
