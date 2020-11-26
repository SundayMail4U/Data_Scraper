import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BackendApisService {

  constructor(private http:HttpClient) { }

  response:string = ''
  responseUpdated:EventEmitter<string> = new EventEmitter<string>()

  getTwitterAPI():Promise<any>{
    console.log("About to call Twitter API")

    return this.http.get('/twitter',{responseType: 'text'}).
    toPromise()
      .then(response => {
        this.response = response as string
        this.responseUpdated.emit(this.response)
      })

    console.log("Called Twitter API")
  }

  getRedditAPI():Promise<any>{
    console.log("About to call Reddit API")

    return this.http.get('/reddit',{responseType: 'text'}).
    toPromise()
    .then(response => {
        this.response = response as string
        this.responseUpdated.emit(this.response)
      })

    console.log("Called Reddit API")
  }
}
