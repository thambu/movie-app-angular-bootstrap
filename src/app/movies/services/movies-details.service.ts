import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDetails } from '../models/movie-details.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MoviesDetailsService {

  private movie_url = "assets/json/movies.json"

  constructor(private http:HttpClient) { }

  public getMovies(): Observable<MovieDetails[]> {
    return this.http.get<MovieDetails[]>(this.movie_url);
  }
}
