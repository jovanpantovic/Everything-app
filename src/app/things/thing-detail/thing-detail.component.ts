import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Thing } from '../thing.model';
import { ThingService } from '../thing.service';

@Component({
  selector: 'app-thing-detail',
  templateUrl: './thing-detail.component.html',
  styleUrls: ['./thing-detail.component.css']
})
export class ThingDetailComponent implements OnInit {
  thing: Thing;
  id: number;

  constructor(
    private thingService: ThingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getThingById();
  }

  getThingById() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      //console.log(this.id);
      this.thingService.getThingById(this.id).subscribe((data) => {
        //console.log(data);
        this.thing = data;
      });
    });
  }

}
