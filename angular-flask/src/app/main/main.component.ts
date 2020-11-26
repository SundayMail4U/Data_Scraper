import { Component, OnInit } from '@angular/core';
import {BackendApisService} from "../backend-apis.service";
import {Subject} from "rxjs";
import { Router } from '@angular/router';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  rows = []
  name:string = ''
  twitter = false;
  reddit = false;
  loading = false;

  loadingSub:any;

  constructor(private backendApisService:BackendApisService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadingSub = this.nameSubscription()
  }

  nameSubscription(){
    return this.backendApisService.responseUpdated.subscribe((res: boolean) => {
      this.loading = res
      console.log(res)
    })
  }

  callTwitterAPI(): void {


    let username = (<HTMLInputElement>document.getElementById('twitter-username')).value;
    let followersNumbers = (<HTMLInputElement>document.getElementById('twitter-followers-number')).value;
    let keyword = (<HTMLInputElement>document.getElementById('twitter-keyword')).value;


    if(username.length < 1 || followersNumbers.length < 1 || keyword.length < 1){
      window.alert("All fields must be provided! Try again.")
    }else{
      this.loading = true;
      this.backendApisService.getTwitterData(username, followersNumbers, keyword)
    }
  }

  callRedditAPI(): void {


    let subredditTitle = (<HTMLInputElement>document.getElementById('reddit-subreddit')).value;
    let sortRadios = (<NodeListOf<HTMLInputElement>>document.getElementsByName('sort'));
    let sort = '';
    for(let i = 0;i < sortRadios.length; i++){
      if(sortRadios[i].checked){
        sort = sortRadios[i].value
        break;
      }
    }
    let subredditPostNum = (<HTMLInputElement>document.getElementById('reddit-subreddit-post-number')).value;
    let authorsPostNumber = (<HTMLInputElement>document.getElementById('reddit-authors-post-number')).value;


    if(subredditTitle.length < 1 || subredditPostNum.length < 1 || authorsPostNumber.length < 1){
      window.alert("All fields must be provided! Try again.")
    }else{
      this.loading = true;
      this.backendApisService.getRedditData(subredditTitle, sort, subredditPostNum,authorsPostNumber)
    }
  }

  navigateToTwitter(): void{
    this.twitter = true;
    this.reddit = false;
  }

  navigateToReddit(): void{
    this.twitter = false;
    this.reddit = true;
  }

  goBack():void {
    this.twitter = false;
    this.reddit = false;
  }
}
