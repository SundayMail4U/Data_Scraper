(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\luisf\Documents\Unreal Projects\MyProject\Data_Scraper\angular-flask\src\main.ts */"zUnb");


/***/ }),

/***/ "04H2":
/*!*****************************************!*\
  !*** ./src/app/backend-apis.service.ts ***!
  \*****************************************/
/*! exports provided: BackendApisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendApisService", function() { return BackendApisService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");




class BackendApisService {
    constructor(http, toaster) {
        this.http = http;
        this.toaster = toaster;
        this.response = false;
        this.responseUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // getHello():Promise<any>{
    //   console.log("About to")
    //   return this.http.get('/auth',{responseType: 'text'}).
    //   toPromise()
    //     .then(response => {
    //       this.response = response as string
    //       this.responseUpdated.emit(this.response)
    //     })
    //   console.log("Called API")
    // }
    getTwitterData(username, followersNumber, keyword) {
        return this.http.get('/getTwitterData?user_name=' + username + '&num_of_fol=' + followersNumber + '&keyword=' + keyword, { responseType: 'text' }).
            toPromise()
            .then(response => {
            window.open('http://127.0.0.1:5000/downloadTwitter');
            this.responseUpdated.emit(false);
            this.toaster.success('Twitter API successfully returned! Starting download');
        });
    }
    getRedditData(subredditTitle, sort, subredditPostNum, authorsPostNumber) {
        return this.http.get('/getRedditData?subreddit_title=' + subredditTitle + '&sort=' + sort + '&subreddit_posts_num=' + subredditPostNum + '&authors_posts_num=' + authorsPostNumber, { responseType: 'text' }).
            toPromise()
            .then(response => {
            window.open('http://127.0.0.1:5000/downloadReddit');
            this.responseUpdated.emit(false);
            this.toaster.success('Reddit API successfully returned! Starting download');
        });
    }
}
BackendApisService.ɵfac = function BackendApisService_Factory(t) { return new (t || BackendApisService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
BackendApisService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BackendApisService, factory: BackendApisService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendApisService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "9Y6r":
/*!**********************************************!*\
  !*** ./src/app/twitter/twitter.component.ts ***!
  \**********************************************/
/*! exports provided: TwitterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterComponent", function() { return TwitterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0d2l0dGVyLmNvbXBvbmVudC5jc3MifQ== */";
class TwitterComponent {
    constructor() { }
    ngOnInit() {
    }
}
TwitterComponent.ɵfac = function TwitterComponent_Factory(t) { return new (t || TwitterComponent)(); };
TwitterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TwitterComponent, selectors: [["app-twitter"]], decls: 5, vars: 0, template: function TwitterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [_c0, _c0] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TwitterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-twitter',
                templateUrl: './twitter.component.html',
                styleUrls: ['./twitter.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "GvNj":
/*!******************************************!*\
  !*** ./src/app/popup/popup.component.ts ***!
  \******************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class PopupComponent {
    constructor() {
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    close() {
        this.closeEvent.emit(true);
    }
}
PopupComponent.ɵfac = function PopupComponent_Factory(t) { return new (t || PopupComponent)(); };
PopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupComponent, selectors: [["app-popup"]], outputs: { closeEvent: "closeEvent" }, ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "popup-container", 3, "click"], [1, "display-area", "fill", "bg", "shadow", 3, "click"]], template: function PopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_Template_div_click_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".popup-container[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.678);\r\n  z-index: 100;\r\n  display: inline-block;\r\n  text-align: center;\r\n\r\n}\r\n\r\n.display-area[_ngcontent-%COMP%]{\r\n  margin-top: 80px;\r\n  text-align: left;\r\n  display: inline-block;\r\n  width: 100%;\r\n  max-width: 700px;\r\n  max-height: 600px;\r\n  height: auto;\r\n  z-index: 105;\r\n  }\r\n\r\n  header{\r\n  padding: 12px;\r\n  font-size: 16px;\r\n}\r\n\r\n  right{\r\n  float: right;\r\n  margin-top: -7px;\r\n}\r\n\r\n  body{\r\n  padding: 20px 12px;\r\n}\r\n\r\n  span.label{\r\n  width: 60px;\r\n  display: inline-block;\r\n}\r\n\r\n  span.red-font{\r\n  font-size: 12px;\r\n  margin-left: 10px;\r\n}\r\n\r\n  footer{\r\n  padding: 8px;\r\n  text-align: right ;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaOztBQUVGO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InBvcHVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9wdXAtY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY3OCk7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uZGlzcGxheS1hcmVhe1xyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgei1pbmRleDogMTA1O1xyXG4gIH1cclxuXHJcbjo6bmctZGVlcCBoZWFkZXJ7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCByaWdodHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogLTdweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIGJvZHl7XHJcbiAgcGFkZGluZzogMjBweCAxMnB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgc3Bhbi5sYWJlbHtcclxuICB3aWR0aDogNjBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBzcGFuLnJlZC1mb250e1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIGZvb3RlcntcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQgO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-popup',
                templateUrl: './popup.component.html',
                styleUrls: ['./popup.component.css']
            }]
    }], function () { return []; }, { closeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Hs9a":
/*!********************************************!*\
  !*** ./src/app/reddit/reddit.component.ts ***!
  \********************************************/
/*! exports provided: RedditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedditComponent", function() { return RedditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RedditComponent {
    constructor() { }
    ngOnInit() {
    }
}
RedditComponent.ɵfac = function RedditComponent_Factory(t) { return new (t || RedditComponent)(); };
RedditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RedditComponent, selectors: [["app-reddit"]], decls: 2, vars: 0, template: function RedditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "reddit works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWRkaXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RedditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reddit',
                templateUrl: './reddit.component.html',
                styleUrls: ['./reddit.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ "wlho");



class AppComponent {
    constructor() {
        this.title = 'angular-flask';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");
    } }, directives: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]], styles: [".fill[_ngcontent-%COMP%]{\r\n  background-color: #514e4f;\r\n  color: #d7d4d7;\r\n}\r\n\r\n.bg[_ngcontent-%COMP%]{\r\n  background-color: #333033;\r\n}\r\n\r\n.shadow[_ngcontent-%COMP%]{ box-shadow: 0px 0px 5px -0px rgba(122, 122, 122, 0.397)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsU0FBUyx1REFBdUQiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE0ZTRmO1xyXG4gIGNvbG9yOiAjZDdkNGQ3O1xyXG59XHJcblxyXG4uYmd7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzAzMztcclxufVxyXG5cclxuLnNoYWRvd3sgYm94LXNoYWRvdzogMHB4IDBweCA1cHggLTBweCByZ2JhKDEyMiwgMTIyLCAxMjIsIDAuMzk3KX1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _twitter_twitter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./twitter/twitter.component */ "9Y6r");
/* harmony import */ var _reddit_reddit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reddit/reddit.component */ "Hs9a");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./popup/popup.component */ "GvNj");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "5eHb");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot() // ToastrModule added
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
        _twitter_twitter_component__WEBPACK_IMPORTED_MODULE_7__["TwitterComponent"],
        _reddit_reddit_component__WEBPACK_IMPORTED_MODULE_8__["RedditComponent"],
        _popup_popup_component__WEBPACK_IMPORTED_MODULE_9__["PopupComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                    _twitter_twitter_component__WEBPACK_IMPORTED_MODULE_7__["TwitterComponent"],
                    _reddit_reddit_component__WEBPACK_IMPORTED_MODULE_8__["RedditComponent"],
                    _popup_popup_component__WEBPACK_IMPORTED_MODULE_9__["PopupComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot() // ToastrModule added
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _backend_apis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backend-apis.service */ "04H2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popup/popup.component */ "GvNj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function MainComponent_app_popup_10_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_app_popup_10_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.callTwitterAPI(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SCRAPE!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_app_popup_10_img_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} }
function MainComponent_app_popup_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-popup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_app_popup_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Twitter Scraping API");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enter your target username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Enter the desired number of followers to scrape");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Enter the keyword to search for");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MainComponent_app_popup_10_button_17_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MainComponent_app_popup_10_img_18_Template, 1, 0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loading);
} }
function MainComponent_app_popup_11_button_40_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_app_popup_11_button_40_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.callRedditAPI(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SCRAPE!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_app_popup_11_img_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 36);
} }
function MainComponent_app_popup_11_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-popup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_app_popup_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reddit Scraping API");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enter the desired subreddit title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Select the desired sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Hot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Controversial");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Gilded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Enter the desired subreddit post number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Enter the desired authors' post number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, MainComponent_app_popup_11_button_40_Template, 2, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, MainComponent_app_popup_11_img_41_Template, 1, 0, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loading);
} }
const _c0 = "h1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  display:inline-block;\r\n  width: 10%;\r\n  height: 60px;\r\n  padding:0.3em 1.2em;\r\n  border:0.16em solid rgba(255,255,255,0);\r\n  border-radius:2em;\r\n  box-sizing: border-box;\r\n  text-decoration:none;\r\n  font-family:'Roboto',sans-serif;\r\n  font-weight:300;\r\n  color:#FFFFFF;\r\n  text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);\r\n  text-align:center;\r\n  transition: all 0.2s;\r\n}\r\n\r\n#twitter[_ngcontent-%COMP%]{\r\n  background-color:#4e9af1;\r\n  margin-right:3%;\r\n}\r\n\r\n#reddit[_ngcontent-%COMP%]{\r\n  background-color:#f14e4e;\r\n  margin-left:3%;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover{\r\n  border-color: rgba(255,255,255,1);\r\n}\r\n\r\n.centerButton[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.popup-division[_ngcontent-%COMP%]{\r\n  background-color: #FFFFFF;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\n.reddit-title[_ngcontent-%COMP%]{\r\n  color: #f14e4e;\r\n}\r\n\r\n.twitter-title[_ngcontent-%COMP%]{\r\n  color: #4e9af1;\r\n}\r\n\r\n#submit-twitter[_ngcontent-%COMP%]{\r\n  background-color: #4e9af1;\r\n  color: white;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  width: 13%;\r\n}\r\n\r\n#submit-reddit[_ngcontent-%COMP%]{\r\n  background-color: #f14e4e;\r\n  color: white;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  width: 13%;\r\n}\r\n\r\nspan[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-top: 10px;\r\n  font-size: large;\r\n  margin-bottom: 5px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-left: 38%;\r\n}\r\n\r\ninput.not-centered[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n}\r\n\r\n.block-again[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n\r\n.outer-block-again[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-right: 29%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1Q0FBdUM7RUFDdkMsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwJTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgcGFkZGluZzowLjNlbSAxLjJlbTtcclxuICBib3JkZXI6MC4xNmVtIHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMCk7XHJcbiAgYm9yZGVyLXJhZGl1czoyZW07XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICBmb250LWZhbWlseTonUm9ib3RvJyxzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OjMwMDtcclxuICBjb2xvcjojRkZGRkZGO1xyXG4gIHRleHQtc2hhZG93OiAwIDAuMDRlbSAwLjA0ZW0gcmdiYSgwLDAsMCwwLjM1KTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuI3R3aXR0ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojNGU5YWYxO1xyXG4gIG1hcmdpbi1yaWdodDozJTtcclxufVxyXG5cclxuI3JlZGRpdHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmMTRlNGU7XHJcbiAgbWFyZ2luLWxlZnQ6MyU7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlcntcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XHJcbn1cclxuXHJcbi5jZW50ZXJCdXR0b257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBvcHVwLWRpdmlzaW9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVkZGl0LXRpdGxle1xyXG4gIGNvbG9yOiAjZjE0ZTRlO1xyXG59XHJcblxyXG4udHdpdHRlci10aXRsZXtcclxuICBjb2xvcjogIzRlOWFmMTtcclxufVxyXG5cclxuI3N1Ym1pdC10d2l0dGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZTlhZjE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB3aWR0aDogMTMlO1xyXG59XHJcblxyXG4jc3VibWl0LXJlZGRpdHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE0ZTRlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgd2lkdGg6IDEzJTtcclxufVxyXG5cclxuc3BhbntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5pbnB1dHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogMzglO1xyXG59XHJcblxyXG5pbnB1dC5ub3QtY2VudGVyZWR7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYmxvY2stYWdhaW57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5vdXRlci1ibG9jay1hZ2FpbntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDI5JTtcclxufVxyXG5cclxuIl19 */";
class MainComponent {
    constructor(backendApisService, router) {
        this.backendApisService = backendApisService;
        this.router = router;
        this.rows = [];
        this.name = '';
        this.twitter = false;
        this.reddit = false;
        this.loading = false;
    }
    ngOnInit() {
        this.loadingSub = this.nameSubscription();
    }
    nameSubscription() {
        return this.backendApisService.responseUpdated.subscribe((res) => {
            this.loading = res;
            console.log(res);
        });
    }
    callTwitterAPI() {
        this.loading = true;
        let username = document.getElementById('twitter-username').value;
        let followersNumbers = document.getElementById('twitter-followers-number').value;
        let keyword = document.getElementById('twitter-keyword').value;
        if (username.length < 1 || followersNumbers.length < 1 || keyword.length < 1) {
            window.alert("All fields must be provided! Try again.");
        }
        else {
            this.backendApisService.getTwitterData(username, followersNumbers, keyword);
        }
    }
    callRedditAPI() {
        this.loading = true;
        let subredditTitle = document.getElementById('reddit-subreddit').value;
        let sortRadios = document.getElementsByName('sort');
        let sort = '';
        for (let i = 0; i < sortRadios.length; i++) {
            if (sortRadios[i].checked) {
                sort = sortRadios[i].value;
                break;
            }
        }
        let subredditPostNum = document.getElementById('reddit-subreddit-post-number').value;
        let authorsPostNumber = document.getElementById('reddit-authors-post-number').value;
        if (subredditTitle.length < 1 || subredditPostNum.length < 1 || authorsPostNumber.length < 1) {
            window.alert("All fields must be provided! Try again.");
        }
        else {
            this.backendApisService.getRedditData(subredditTitle, sort, subredditPostNum, authorsPostNumber);
        }
    }
    navigateToTwitter() {
        this.twitter = true;
        this.reddit = false;
    }
    navigateToReddit() {
        this.twitter = false;
        this.reddit = true;
    }
    goBack() {
        this.twitter = false;
        this.reddit = false;
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_backend_apis_service__WEBPACK_IMPORTED_MODULE_1__["BackendApisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 12, vars: 2, consts: [[1, "centerButton"], ["id", "twitter", 3, "click"], ["id", "reddit", 3, "click"], [4, "ngIf"], [1, "popup-division"], [2, "text-align", "left"], [2, "left", "0", "background-color", "#f14e4e", "color", "#d7d4d7", "margin-left", "2px", "margin-top", "2px", 3, "click"], [1, "twitter-title"], ["name", "twitter-form", "action", "", "method", "get"], ["id", "twitter-username", "type", "text"], ["id", "twitter-followers-number", "type", "text"], ["id", "twitter-keyword", "type", "text"], ["id", "submit-twitter", 3, "click", 4, "ngIf"], ["src", "spinner-twitter.gif", 4, "ngIf"], ["id", "submit-twitter", 3, "click"], ["src", "spinner-twitter.gif"], [2, "left", "0", "background-color", "#4e9af1", "color", "#d7d4d7", "margin-left", "2px", "margin-top", "2px", 3, "click"], [1, "reddit-title"], ["id", "reddit-subreddit", "type", "text"], [1, "outer-block-again"], [1, "block-again"], ["id", "sortTop", "type", "radio", "name", "sort", "value", "top", "checked", "checked", 1, "not-centered"], ["for", "sortTop", 1, "reddit-title"], ["id", "sortNew", "type", "radio", "name", "sort", "value", "new", 1, "not-centered"], ["for", "sortNew", 1, "reddit-title"], ["id", "sortHot", "type", "radio", "name", "sort", "value", "hot", 1, "not-centered"], ["for", "sortHot", 1, "reddit-title"], ["id", "sortControversial", "type", "radio", "name", "sort", "value", "controversial", 1, "not-centered"], ["for", "sortControversial", 1, "reddit-title"], ["id", "sortGilded", "type", "radio", "name", "sort", "value", "gilded", 1, "not-centered"], ["for", "sortGilded", 1, "reddit-title"], ["id", "reddit-subreddit-post-number", "type", "text"], ["id", "reddit-authors-post-number", "type", "text"], ["id", "submit-reddit", 3, "click", 4, "ngIf"], ["src", "spinner-reddit.gif", 4, "ngIf"], ["id", "submit-reddit", 3, "click"], ["src", "spinner-reddit.gif"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SundayMail4U");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_6_listener() { return ctx.navigateToTwitter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_8_listener() { return ctx.navigateToReddit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Reddit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MainComponent_app_popup_10_Template, 19, 2, "app-popup", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MainComponent_app_popup_11_Template, 42, 2, "app-popup", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.twitter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reddit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]], styles: [_c0, _c0] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return [{ type: _backend_apis_service__WEBPACK_IMPORTED_MODULE_1__["BackendApisService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map