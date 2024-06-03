import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-campania',
  templateUrl: './campania.component.html',
  styleUrl: './campania.component.scss'
})
export class CampaniaComponent {
  constructor(public route: ActivatedRoute){}
  ngOnInit(): void {

  }
}
