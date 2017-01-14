import {Injectable} from '@angular/core';
import {Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username = "ramanauday1561";
  private client_id = "06ff5ed5dcd86fbdfd52";
  private client_secret = "a82476fdfd9ec06ea87694dd3ec54e0ccb69589a";

  constructor(private _http:Http) {
    console.log('Github Service');
  }
    getUser() {
      return this._http.get('https://api.github.com/users/'+this.username)
             .map(res => res.json());
    }
    getRepos() {
      return this._http.get('https://api.github.com/users/'+this.username+'/repos')
             .map(res => res.json());
    }
    updateUsername(username:string) {
      this.username = username;
    }
}
