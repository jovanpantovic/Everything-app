import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Thing } from '../thing.model';
import { ThingService } from '../thing.service';

@Component({
  selector: 'app-things-list',
  templateUrl: './things-list.component.html',
  styleUrls: ['./things-list.component.css']
})
export class ThingsListComponent implements OnInit {
  things: Thing[];
  id: any;

  constructor(private thingService: ThingService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllThings();
  }

  /*onNewThing() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }*/

  public getAllThings() {
    this.thingService.getAllThings().subscribe(data => {
      this.things = data;
    })
  }

}
