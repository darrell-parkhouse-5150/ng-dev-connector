import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StatusUpdateService } from '../../services/status-update.service';

@Component({
  selector: 'ng-status-update',
  standalone: true,
  imports: [],
  templateUrl: './status-update.component.html',
  styleUrl: './status-update.component.scss'
})
export class StatusUpdateComponent implements OnInit {
  constructor(private http: HttpClient, private StatusUpdateService: StatusUpdateService) {}
  ngOnInit(): void {
      this.StatusUpdateService.getAllStatusUpdate()
        .subscribe((data) => {
          //? TODO: write the code for this by hand. no AI :(
        })
  }
}
