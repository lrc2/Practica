import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  login(data) {
    return new Promise((resolve, reject) => {
      var url='http://dev.contanimacion.com/birds/public/login/?user='+ data.username + '&password=' + data.password;
      this.http.post(url, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  getBirds(data) {
    return new Promise((resolve, reject) => {
      var url="http://dev.contanimacion.com/birds/public/getBirds/"+ data

      this.http.get(url)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  getBirdDetail(data) {
    return new Promise((resolve, reject) => {
      var url="http://dev.contanimacion.com/birds/public/getBirdDetails/"+ data

      this.http.get(url)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
