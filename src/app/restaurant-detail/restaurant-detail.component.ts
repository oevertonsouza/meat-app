import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from '../restaurantes/restaurantes.service'
import { Restaurant } from '../restaurant/restaurant.model'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant : Restaurant;

  constructor(
      private restaurantesService : RestaurantesService,
      private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.restaurantesService.restaurantsById(this.route.snapshot.params['id'])
      .subscribe(rest => this.restaurant = rest );
    console.log(this.restaurant);
  }

}
