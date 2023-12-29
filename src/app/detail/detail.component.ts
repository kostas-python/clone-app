import { Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})

//Create properties

export class DetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = 0;

  //create method
  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
  }
}
