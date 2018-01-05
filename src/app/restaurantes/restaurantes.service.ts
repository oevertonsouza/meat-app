import {Restaurant} from '../restaurant/restaurant.model'
import {MEAT_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'
import {MenuItem} from '../restaurant-detail/menu-item/menu-item.model'

//Angular
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

//rxjs
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class RestaurantesService {

    constructor(private http : Http){}

    restaurants(): Observable<Restaurant[]> {
      return this.http.get(`${MEAT_API}/restaurants`)
        .map( resp => resp.json())
        .catch(ErrorHandler.handleError)
    }

    restaurantsById(id : string): Observable<Restaurant> {
      return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map( resp => resp.json())
        .catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurant(id : string): Observable<any> {
      return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map( resp => resp.json())
        .catch(ErrorHandler.handleError)
    }

    menuOfRestaurant(id : string): Observable<MenuItem[]> {
      return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map( resp => resp.json())
        .catch(ErrorHandler.handleError)
    }


}
