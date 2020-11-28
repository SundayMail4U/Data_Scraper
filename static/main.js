(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Grace_K\PycharmProjects\Data_Scraper_new\angular-flask\src\main.ts */"zUnb");


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
    getTwitterData(username, followersNumber, keyword) {
        return this.http.get('/getTwitterData?user_name=' + username + '&num_of_fol=' + followersNumber + '&keyword=' + keyword, { responseType: 'text' }).
            toPromise()
            .then(response => {
            window.open('http://127.0.0.1:5000/downloadTwitter');
            this.responseUpdated.emit(false);
            this.toaster.success('Twitter API successfully returned! Starting download');
        });
    }
    getRedditData(subredditTitle, sort, subredditPostNum, authorsPostNumber, filename) {
        return this.http.get('/getRedditData?subreddit_title=' + subredditTitle + '&sort=' + sort + '&subreddit_posts_num=' + subredditPostNum + '&authors_posts_num=' + authorsPostNumber + '&filename=' + filename, { responseType: 'text' }).
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
    } }, styles: [".popup-container[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.678);\r\n  z-index: 100;\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n\r\n.display-area[_ngcontent-%COMP%]{\r\n  margin-top: 5%;\r\n  text-align: left;\r\n  display: inline-block;\r\n  width: 100%;\r\n  max-width: 700px;\r\n  max-height: 600px;\r\n  height: auto;\r\n  z-index: 105;\r\n}\r\n\r\n  header{\r\n  padding: 12px;\r\n  font-size: 16px;\r\n}\r\n\r\n  right{\r\n  float: right;\r\n  margin-top: -7px;\r\n}\r\n\r\n  body{\r\n  padding: 20px 12px;\r\n}\r\n\r\n  span.label{\r\n  width: 60px;\r\n  display: inline-block;\r\n}\r\n\r\n  span.red-font{\r\n  font-size: 12px;\r\n  margin-left: 10px;\r\n}\r\n\r\n  footer{\r\n  padding: 8px;\r\n  text-align: right ;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoicG9wdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3B1cC1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjc4KTtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRpc3BsYXktYXJlYXtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICB6LWluZGV4OiAxMDU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBoZWFkZXJ7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCByaWdodHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogLTdweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIGJvZHl7XHJcbiAgcGFkZGluZzogMjBweCAxMnB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgc3Bhbi5sYWJlbHtcclxuICB3aWR0aDogNjBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBzcGFuLnJlZC1mb250e1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIGZvb3RlcntcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQgO1xyXG59XHJcbiJdfQ== */"] });
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







function MainComponent_app_popup_13_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_app_popup_13_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.callTwitterAPI(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SCRAPE!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_app_popup_13_img_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 20);
} }
function MainComponent_app_popup_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-popup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_app_popup_13_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Twitter Scraping API");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enter your target username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Enter the desired number of followers to scrape");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Enter the keyword to search for");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MainComponent_app_popup_13_button_17_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MainComponent_app_popup_13_img_18_Template, 1, 0, "img", 18);
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
function MainComponent_app_popup_14_button_43_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_app_popup_14_button_43_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.callRedditAPI(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SCRAPE!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_app_popup_14_img_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 43);
} }
function MainComponent_app_popup_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-popup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_app_popup_14_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reddit Scraping API");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enter the desired subreddit title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Select the desired sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Hot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Controversial");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Gilded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Enter the desired subreddit post number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Enter the desired authors' post number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Enter the desired filename");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, MainComponent_app_popup_14_button_43_Template, 2, 0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, MainComponent_app_popup_14_img_44_Template, 1, 0, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loading);
} }
const _c0 = "html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\r\n  height: 100%\r\n}\r\n\r\n#title[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 90px;\r\n  font-family: 'Bungee', cursive;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]{\r\n  padding: 0.3em 1.2em;\r\n  border: 0.2em solid rgba(255,255,255,0);\r\n  border-radius: 2em;\r\n  box-sizing: border-box;\r\n  transition: all 0.2s;\r\n}\r\n\r\n#twitter[_ngcontent-%COMP%]{\r\n  border-color: #0B9ABD;\r\n  margin-right: 3%;\r\n  cursor: pointer;\r\n}\r\n\r\n#reddit[_ngcontent-%COMP%]{\r\n  border-color: #f14e4e;\r\n  margin-left:3%;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover{\r\n  border-color: rgba(255,255,255,1);\r\n}\r\n\r\n.centerDiv[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n#twitterLogo[_ngcontent-%COMP%]{\r\n  margin: 50px 0;\r\n}\r\n\r\n\r\n\r\n.popup-division[_ngcontent-%COMP%]{\r\n  background-color: #FFFFFF;\r\n  display: block;\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.reddit-title[_ngcontent-%COMP%]{\r\n  cursor: auto;\r\n  color: #f14e4e;\r\n}\r\n\r\n.twitter-title[_ngcontent-%COMP%]{\r\n  cursor: auto;\r\n  color: #4e9af1;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  height: 50px;\r\n  padding: 0.3em 1.2em;\r\n  border: 0.16em solid rgba(255,255,255);\r\n  border-radius: 1.5em;\r\n  color:#FFFFFF;\r\n  text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);\r\n  text-align:center;\r\n  transition: all 0.2s;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover{\r\n  border-color: rgba(255,255,1);\r\n}\r\n\r\n#submit-twitter[_ngcontent-%COMP%]{\r\n  background-color: #4e9af1;\r\n  color: white;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n#submit-reddit[_ngcontent-%COMP%]{\r\n  background-color: #f14e4e;\r\n  color: white;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\nspan[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-top: 10px;\r\n  font-size: large;\r\n  margin-bottom: 5px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\ninput.not-centered[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n}\r\n\r\n.block-again[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n\r\n.outer-block-again[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n\r\n#popup-button[_ngcontent-%COMP%]{\r\n  text-align: left\r\n}\r\n\r\n#popup-backButton[_ngcontent-%COMP%]{\r\n  left: 0;\r\n  background-color: #f14e4e;\r\n  color: #d7d4d7;\r\n  margin-left: 2px;\r\n  margin-top: 2px;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n  #title[_ngcontent-%COMP%] {\r\n    font-size: 60px;\r\n  }\r\n\r\n  #mailImg[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n    height: 60px;\r\n  }\r\n\r\n  .centerDiv[_ngcontent-%COMP%]{\r\n    display: block;\r\n  }\r\n\r\n  #twitter[_ngcontent-%COMP%]{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n  }\r\n\r\n  #reddit[_ngcontent-%COMP%]{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n  }\r\n\r\n  .popup-division[_ngcontent-%COMP%]{\r\n    width: 500px;\r\n  }\r\n\r\n  #twitter[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    margin-bottom: 10%;\r\n  }\r\n\r\n  #twitterLogo[_ngcontent-%COMP%]{\r\n    margin: 30px 0;\r\n    width: 200px;\r\n  }\r\n\r\n  #reddit[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n  }\r\n\r\n  #redditLogo[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 530px) {\r\n  #title[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n  }\r\n\r\n  #mailImg[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n\r\n  .centerDiv[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n\r\n  #twitter[_ngcontent-%COMP%]{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n  }\r\n\r\n  #reddit[_ngcontent-%COMP%]{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n  }\r\n\r\n  .popup-division[_ngcontent-%COMP%]{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n  }\r\n\r\n  #twitter[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    margin-bottom: 10%;\r\n  }\r\n\r\n  #twitterLogo[_ngcontent-%COMP%] {\r\n    margin: 23px 0;\r\n    width: 140px;\r\n  }\r\n\r\n  #reddit[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n  }\r\n\r\n  #redditLogo[_ngcontent-%COMP%] {\r\n    width: 140px;\r\n  }\r\n}\r\n\r\n@media screen and (max-height: 600px){\r\n  .popup-division[_ngcontent-%COMP%]{\r\n  background-color: #FFFFFF;\r\n  display: block;\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  overflow-y: scroll;\r\n  height: 500px;\r\n}\r\n\r\n  \r\n  .popup-division[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 20px;\r\n  }\r\n\r\n  \r\n  .popup-division[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 5px grey;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  \r\n  .popup-division[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: red;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  \r\n  .popup-division[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #b30000;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxRQUFROztBQUNSO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixzQ0FBc0M7RUFDdEMsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUdBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLE9BQU87RUFDUCx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQztFQUNDO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0VBQ0EseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztFQUVFLFVBQVU7RUFDVjtJQUNFLFdBQVc7RUFDYjs7RUFFQSxVQUFVO0VBQ1Y7SUFDRSw4QkFBOEI7SUFDOUIsbUJBQW1CO0VBQ3JCOztFQUVBLFdBQVc7RUFDWDtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUEsb0JBQW9CO0VBQ3BCO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoibWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keXtcclxuICBoZWlnaHQ6IDEwMCVcclxufVxyXG5cclxuI3RpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA5MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnQnVuZ2VlJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuZGl2e1xyXG4gIHBhZGRpbmc6IDAuM2VtIDEuMmVtO1xyXG4gIGJvcmRlcjogMC4yZW0gc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwKTtcclxuICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuI3R3aXR0ZXJ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMEI5QUJEO1xyXG4gIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jcmVkZGl0e1xyXG4gIGJvcmRlci1jb2xvcjogI2YxNGU0ZTtcclxuICBtYXJnaW4tbGVmdDozJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlcntcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XHJcbn1cclxuXHJcbi5jZW50ZXJEaXZ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI3R3aXR0ZXJMb2dve1xyXG4gIG1hcmdpbjogNTBweCAwO1xyXG59XHJcblxyXG4vKnBvcHVwKi9cclxuLnBvcHVwLWRpdmlzaW9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnJlZGRpdC10aXRsZXtcclxuICBjdXJzb3I6IGF1dG87XHJcbiAgY29sb3I6ICNmMTRlNGU7XHJcbn1cclxuXHJcbi50d2l0dGVyLXRpdGxle1xyXG4gIGN1cnNvcjogYXV0bztcclxuICBjb2xvcjogIzRlOWFmMTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzogMC4zZW0gMS4yZW07XHJcbiAgYm9yZGVyOiAwLjE2ZW0gc29saWQgcmdiYSgyNTUsMjU1LDI1NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMS41ZW07XHJcbiAgY29sb3I6I0ZGRkZGRjtcclxuICB0ZXh0LXNoYWRvdzogMCAwLjA0ZW0gMC4wNGVtIHJnYmEoMCwwLDAsMC4zNSk7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlcntcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwxKTtcclxufVxyXG5cclxuI3N1Ym1pdC10d2l0dGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZTlhZjE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNzdWJtaXQtcmVkZGl0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMTRlNGU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5pbnB1dC5ub3QtY2VudGVyZWR7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYmxvY2stYWdhaW57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5vdXRlci1ibG9jay1hZ2FpbntcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcbiNwb3B1cC1idXR0b257XHJcbiAgdGV4dC1hbGlnbjogbGVmdFxyXG59XHJcblxyXG4jcG9wdXAtYmFja0J1dHRvbntcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMTRlNGU7XHJcbiAgY29sb3I6ICNkN2Q0ZDc7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgI3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICB9XHJcblxyXG4gICNtYWlsSW1nIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlckRpdntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgI3R3aXR0ZXJ7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAjcmVkZGl0e1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgLnBvcHVwLWRpdmlzaW9ue1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gIH1cclxuXHJcbiAgI3R3aXR0ZXJ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgfVxyXG5cclxuICAjdHdpdHRlckxvZ297XHJcbiAgICBtYXJnaW46IDMwcHggMDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcblxyXG4gICNyZWRkaXR7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuICAjcmVkZGl0TG9nb3tcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MzBweCkge1xyXG4gICN0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAjbWFpbEltZyB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcblxyXG4gIC5jZW50ZXJEaXYge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAjdHdpdHRlcntcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICB9XHJcblxyXG4gICNyZWRkaXR7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAucG9wdXAtZGl2aXNpb257XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAjdHdpdHRlciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgfVxyXG5cclxuICAjdHdpdHRlckxvZ28ge1xyXG4gICAgbWFyZ2luOiAyM3B4IDA7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgfVxyXG5cclxuICAjcmVkZGl0IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG4gICNyZWRkaXRMb2dvIHtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA2MDBweCl7XHJcbiAgLnBvcHVwLWRpdmlzaW9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuICAvKiB3aWR0aCAqL1xyXG4gIC5wb3B1cC1kaXZpc2lvbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAvKiBUcmFjayAqL1xyXG4gIC5wb3B1cC1kaXZpc2lvbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIC8qIEhhbmRsZSAqL1xyXG4gIC5wb3B1cC1kaXZpc2lvbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4gIC5wb3B1cC1kaXZpc2lvbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2IzMDAwMDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */";
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
        });
    }
    callTwitterAPI() {
        let username = document.getElementById('twitter-username').value;
        let followersNumbers = document.getElementById('twitter-followers-number').value;
        let keyword = document.getElementById('twitter-keyword').value;
        if (username.length < 1 || followersNumbers.length < 1 || keyword.length < 1) {
            window.alert("All fields must be provided! Try again.");
        }
        else {
            this.loading = true;
            this.backendApisService.getTwitterData(username, followersNumbers, keyword);
        }
    }
    callRedditAPI() {
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
        let filename = document.getElementById('reddit-filename').value;
        if (subredditTitle.length < 1 || subredditPostNum.length < 1 || authorsPostNumber.length < 1) {
            window.alert("All fields must be provided! Try again.");
        }
        else {
            this.loading = true;
            this.backendApisService.getRedditData(subredditTitle, sort, subredditPostNum, authorsPostNumber, filename);
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
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 15, vars: 2, consts: [["href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://fonts.googleapis.com/css2?family=Bungee&family=Carter+One&family=Fugaz+One&display=swap"), "rel", "stylesheet"], ["id", "title"], ["src", "/static/images/mail.png", "alt", "Mail Image", "id", "mailImg"], [1, "centerDiv"], ["id", "twitter", 3, "click"], ["src", "/static/images/twitter-logo.png", "alt", "Twitter Logo", "id", "twitterLogo"], ["id", "reddit", 3, "click"], ["src", "/static/images/reddit-logo.png", "alt", "Reddit Logo", "id", "redditLogo"], [4, "ngIf"], [1, "popup-division"], ["id", "popup-button"], ["id", "popup-backButton", 3, "click"], [1, "twitter-title"], ["name", "twitter-form", "action", "", "method", "get"], ["id", "twitter-username", "type", "text"], ["id", "twitter-followers-number", "type", "text"], ["id", "twitter-keyword", "type", "text"], ["id", "submit-twitter", 3, "click", 4, "ngIf"], ["src", "/static/spinner-twitter.gif", 4, "ngIf"], ["id", "submit-twitter", 3, "click"], ["src", "/static/spinner-twitter.gif"], [2, "text-align", "left"], [2, "left", "0", "background-color", "#4e9af1", "color", "#d7d4d7", "margin-left", "2px", "margin-top", "2px", 3, "click"], [1, "reddit-title"], ["id", "reddit-subreddit", "type", "text"], [1, "outer-block-again"], [1, "block-again"], ["id", "sortTop", "type", "radio", "name", "sort", "value", "top", "checked", "checked", 1, "not-centered"], ["for", "sortTop", 1, "reddit-title"], ["id", "sortNew", "type", "radio", "name", "sort", "value", "new", 1, "not-centered"], ["for", "sortNew", 1, "reddit-title"], ["id", "sortHot", "type", "radio", "name", "sort", "value", "hot", 1, "not-centered"], ["for", "sortHot", 1, "reddit-title"], ["id", "sortControversial", "type", "radio", "name", "sort", "value", "controversial", 1, "not-centered"], ["for", "sortControversial", 1, "reddit-title"], ["id", "sortGilded", "type", "radio", "name", "sort", "value", "gilded", 1, "not-centered"], ["for", "sortGilded", 1, "reddit-title"], ["id", "reddit-subreddit-post-number", "type", "text"], ["id", "reddit-authors-post-number", "type", "text"], ["id", "reddit-filename", "type", "text"], ["id", "submit-reddit", 3, "click", 4, "ngIf"], ["src", "/static/spinner-reddit.gif", 4, "ngIf"], ["id", "submit-reddit", 3, "click"], ["src", "/static/spinner-reddit.gif"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sunday ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 4U ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_div_click_9_listener() { return ctx.navigateToTwitter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_div_click_11_listener() { return ctx.navigateToReddit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MainComponent_app_popup_13_Template, 19, 2, "app-popup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MainComponent_app_popup_14_Template, 45, 2, "app-popup", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
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