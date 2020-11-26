import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class BackendApisService {

  constructor(private http:HttpClient, private toaster:ToastrService) { }

  response:boolean = false
  responseUpdated:EventEmitter<boolean> = new EventEmitter<boolean>()

  getTwitterData(username:string, followersNumber:string, keyword:string):Promise<any>{
    return this.http.get('/getTwitterData?user_name=' + username + '&num_of_fol=' + followersNumber + '&keyword=' + keyword, {responseType: 'text'}).
    toPromise()
      .then(response => {
        window.open('http://127.0.0.1:5000/downloadTwitter')
        this.responseUpdated.emit(false)
        this.toaster.success('Twitter API successfully returned! Starting download')
      })
  }

  getRedditData(subredditTitle:string, sort:string, subredditPostNum:string, authorsPostNumber:string):Promise<any>{
    return this.http.get('/getRedditData?subreddit_title=' + subredditTitle + '&sort=' + sort + '&subreddit_posts_num=' + subredditPostNum + '&authors_posts_num=' + authorsPostNumber, {responseType: 'text'}).
    toPromise()
      .then(response => {
        window.open('http://127.0.0.1:5000/downloadReddit')
        this.responseUpdated.emit(false)
        this.toaster.success('Reddit API successfully returned! Starting download')
      })
  }
}
