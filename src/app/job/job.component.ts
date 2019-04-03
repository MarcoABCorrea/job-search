import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../services/jobs.service';
import { Job } from '../models/job.model';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  providers: [JobsService]
})
export class JobComponent implements OnInit {

  protected job: Job;

  constructor(private route: ActivatedRoute, 
    private jobsService: JobsService) {      
      this.jobsService.getAllJobs().subscribe(
        result => {
          const jobs = result.body as Array<Job>;
          const jobId = this.route.snapshot.params['jobId'];
          this.job = jobs.find(x => x.id === jobId);
        });
    }

  ngOnInit() {
  }

}
