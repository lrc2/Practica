import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
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
      var url = 'http://dev.contanimacion.com/birds/public/login/?user=' + data.username + '&password=' + data.password;
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
      var url = "http://dev.contanimacion.com/birds/public/getBirds/" + data

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
      var url = "http://dev.contanimacion.com/birds/public/getBirdDetails/" + data
      console.log(url);
      this.http.get(url)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addBird(data) {
    return new Promise((resolve, reject) => {
      var url = 'http://dev.contanimacion.com/birds/public/addBird/?idUser=' + data.idUser + '&bird_name=' +
        data.bird_name + '&bird_description=' + data.bird_description;
      let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json'
      });
      let options = {
        headers: httpHeaders
      };
      console.log(url);
      console.log(data);
      this.http.post(url, JSON.stringify(data), options)
        .subscribe(res => {
          console.log(res);
          resolve(res);
        }, (err) => {
          console.log(err);
          reject(err);
        });
    });
  }
}
