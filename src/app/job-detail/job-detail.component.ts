import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../models/job.model';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'dd-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss'],
  providers: [JobsService]
})
export class JobDetailComponent implements OnInit {

  job: Job;

  constructor(private route: ActivatedRoute, 
    private location: Location, private jobsService: JobsService) {      
      this.jobsService.getAllJobs().subscribe(
        result => {
          const jobs = result.body as Array<Job>;
          const jobId = this.route.snapshot.params['jobId'];
          this.job = jobs.find(x => x.id === jobId);
        });
    }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
}
