(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Taniya Ghosh\mavericks-hackathon-client\src\main.ts */"zUnb");


/***/ }),

/***/ "8R/P":
/*!********************************************************!*\
  !*** ./src/app/product-card/product-card.component.ts ***!
  \********************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






class ProductCardComponent {
    constructor() { }
    ngOnInit() { }
}
ProductCardComponent.ɵfac = function ProductCardComponent_Factory(t) { return new (t || ProductCardComponent)(); };
ProductCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductCardComponent, selectors: [["app-product-card"]], inputs: { title: "title", image: "image", short_desc: "short_desc", category: "category", quantity: "quantity", price: "price", id: "id", onAdd: "onAdd" }, decls: 16, vars: 10, consts: [[1, "product-card"], [1, "product-card__image", 3, "routerLink"], ["alt", "", 3, "src"], [1, "product-card__info"], [1, "title"], [1, "product-name"], [1, "product-short-desc"], [1, "product-price"], [1, "product-card__cta"], ["nz-button", "", 3, "disabled", "click"]], template: function ProductCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_14_listener() { return ctx.onAdd({ id: ctx.id, price: ctx.price, image: ctx.image, title: ctx.title, maxQuantity: ctx.quantity }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/product/", ctx.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.short_desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 7, ctx.price, "USD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.quantity === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.quantity === 0 ? "Out of stock" : "Add to cart", " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: [".product-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  transition: all 0.2s;\n  overflow: hidden;\n}\n.product-card__image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  object-fit: cover;\n  border-bottom: 1px solid #ccc;\n}\n.product-card__info[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding: 16px 16px 32px;\n}\n.product-card__info[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.product-card__info[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.product-card__info[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  padding-right: 12px;\n  font-size: 1.125rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.product-card__info[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .product-short-desc[_ngcontent-%COMP%] {\n  color: #777;\n}\n.product-card__info[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  font-weight: 600;\n}\n.product-card__cta[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 100%;\n  border: none;\n  background-color: #fff;\n  border-top: 1px solid #ccc;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n@media screen and (min-width: 1024px) {\n  .product-card[_ngcontent-%COMP%]:hover {\n    transform: scale(1.0125);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBQ047QUFFRTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtBQUFKO0FBQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUFNO0VBQ0UsWUFBQTtBQUVSO0FBRFE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBR1Y7QUFEUTtFQUNFLFdBQUE7QUFHVjtBQUFNO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQUVSO0FBR0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBRE47QUFNQTtFQUVJO0lBQ0Usd0JBQUE7RUFKSjtBQUNGIiwiZmlsZSI6InByb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICZfX2ltYWdlIHtcclxuICAgID4gaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIH1cclxuICB9XHJcbiAgJl9faW5mbyB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMzJweDtcclxuICAgID4gaGVhZGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgLnByb2R1Y3QtbmFtZSB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdC1zaG9ydC1kZXNjIHtcclxuICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAucHJvZHVjdC1wcmljZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjM3NXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX2N0YSB7XHJcbiAgICA+IGJ1dHRvbiB7XHJcbiAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgLnByb2R1Y3QtY2FyZCB7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxMjUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _google_model_viewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google/model-viewer */ "PzGh");
/* harmony import */ var _list_category_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-category.json */ "tknV");
var _list_category_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./list-category.json */ "tknV", 1);
/* harmony import */ var _test_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test.json */ "bkdU");
var _test_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./test.json */ "bkdU", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/product.service */ "Gdn9");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _products_card_products_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../products-card/products-card.component */ "Vy/u");









function HomeComponent_10_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_10_ng_template_0_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.categorySelect(c_r1.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMapInterpolate1"]("background:url(", c_r1.img, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](c_r1.type);
} }
function HomeComponent_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, HomeComponent_10_ng_template_0_Template, 3, 4, "ng-template", 11);
} }
class HomeComponent {
    constructor(productService, cartService) {
        this.productService = productService;
        this.cartService = cartService;
        this.products = [];
        // categories: any[] = [
        //   {
        //     name: 'Laptops',
        //   },
        //   {
        //     name: 'Accessories',
        //   },
        //   {
        //     name: 'Cameras',
        //   },
        // ];
        this.loading = false;
        this.productPageCounter = 1;
        this.additionalLoading = false;
        this.categories = _list_category_json__WEBPACK_IMPORTED_MODULE_1__["value"];
        this.mainData = _test_json__WEBPACK_IMPORTED_MODULE_2__["value"][0];
        this.category = 'test';
    }
    onResize(event) {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
    }
    ngOnInit() {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.loading = true;
        setTimeout(() => {
            this.productService.getAllProducts(9, this.productPageCounter).subscribe((res) => {
                console.log(res);
                this.products = res;
                this.loading = false;
            }, (err) => {
                console.log(err);
                this.loading = false;
            });
        }, 500);
    }
    //myfunc define
    showMoreProducts() {
        this.additionalLoading = true;
        this.productPageCounter = this.productPageCounter + 1;
        setTimeout(() => {
            this.productService.getAllProducts(9, this.productPageCounter).subscribe((res) => {
                console.log(res);
                this.products = [...this.products, ...res];
                this.additionalLoading = false;
            }, (err) => {
                console.log(err);
                this.additionalLoading = false;
            });
        }, 500);
    }
    categorySelect(category) {
        this.category = category;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function HomeComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    } }, decls: 12, vars: 8, consts: [[1, "home-container"], [1, "row", "justify-content-center", "text-center"], [1, "col-md-8", "col-lg-6"], [1, "header"], [2, "color", "#444444 !important"], [1, "categories"], [1, "categories__header"], [1, "categories__list"], [3, "navigation", "zoom", "slidesPerView", "spaceBetween", "pagination", "loop"], [4, "ngFor", "ngForOf"], [3, "category"], ["swiperSlide", ""], [3, "click"], [1, "category-card"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "swiper", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, HomeComponent_10_Template, 1, 0, undefined, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-products-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("navigation", true)("zoom", false)("slidesPerView", ctx.screenWidth > 1200 ? 3 : 1)("spaceBetween", 50)("pagination", true)("loop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("category", ctx.category);
    } }, directives: [swiper_angular__WEBPACK_IMPORTED_MODULE_6__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _products_card_products_card_component__WEBPACK_IMPORTED_MODULE_8__["ProductsCardComponent"], swiper_angular__WEBPACK_IMPORTED_MODULE_6__["SwiperSlideDirective"]], styles: [".home-container {\n  padding-top: 24px;\n}\n.home-container .categories {\n  margin: 0 auto;\n  padding: 24px 16px;\n  max-width: calc(350px + 32px);\n}\n.home-container .categories__header {\n  margin-bottom: 16px;\n}\n.home-container .categories__header > h2 {\n  font-size: 1.75rem;\n}\n.home-container .categories__list .swiper-pagination-bullet-active {\n  background-color: #fff;\n}\n.home-container .categories__list .category-card {\n  height: 150px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 3px;\n  font-size: 1.375rem;\n  letter-spacing: 5px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #fff;\n  background-size: cover !important;\n  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);\n}\n.home-container .swiper-button-next {\n  color: white;\n}\n.home-container .swiper-button-prev {\n  color: white;\n}\n.home-container .products {\n  margin: 0 auto;\n  padding: 24px 16px;\n  max-width: calc(350px + 32px);\n}\n.home-container .products__loading {\n  text-align: center;\n}\n.home-container .products__header {\n  margin-bottom: 16px;\n}\n.home-container .products__header > h2 {\n  font-size: 1.75rem;\n}\n.home-container .products__list {\n  display: grid;\n  grid-template-columns: 1fr;\n  row-gap: 24px;\n}\n.home-container .products__list .product-card {\n  height: 100%;\n  max-width: 350px;\n  margin: 0 auto;\n}\n.home-container .products__list .product-card__image {\n  cursor: pointer;\n}\n.home-container .load-products {\n  text-align: center;\n  padding: 16px 16px 32px;\n}\n.home-container .load-products > button {\n  max-width: 341px;\n  height: 44px;\n  width: 100%;\n}\n.center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n@media screen and (min-width: 768px) {\n  .home-container .categories {\n    max-width: calc(700px + 72px);\n    padding: 36px 24px;\n  }\n  .home-container .categories__list .category-card {\n    height: 200px;\n  }\n  .home-container .products {\n    max-width: calc(700px + 72px);\n    padding: 36px 24px;\n  }\n  .home-container .products__header {\n    margin-bottom: 16px;\n  }\n  .home-container .products__list {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    column-gap: 24px;\n    row-gap: 24px;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .home-container .categories {\n    max-width: calc(1050px + 96px);\n    padding: 36px 24px;\n  }\n  .home-container .categories__list .category-card {\n    width: 348px;\n  }\n  .home-container .products {\n    max-width: calc(1050px + 96px);\n    padding: 36px 24px;\n  }\n  .home-container .products__header {\n    margin-bottom: 16px;\n  }\n  .home-container .products__list {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.home-container.header h2 {\n  font-size: 2.2rem;\n  font-weight: 400;\n  color: #444444 !important;\n}\n.home-container {\n  font-family: \"Poppins\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGO0FBQUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUVKO0FBREk7RUFDRSxtQkFBQTtBQUdOO0FBRk07RUFDRSxrQkFBQTtBQUlSO0FBQ007RUFDRSxzQkFBQTtBQUNSO0FBQ007RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUVBLGlDQUFBO0VBQ0EsaURBQUE7QUFBUjtBQU1FO0VBQXNCLFlBQUE7QUFIeEI7QUFJRTtFQUFzQixZQUFBO0FBRHhCO0FBRUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUFKO0FBQ0k7RUFDRSxrQkFBQTtBQUNOO0FBQ0k7RUFDRSxtQkFBQTtBQUNOO0FBQU07RUFDRSxrQkFBQTtBQUVSO0FBQ0k7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0FBQ047QUFBTTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFFUjtBQURRO0VBQ0UsZUFBQTtBQUdWO0FBRUU7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0FBQUo7QUFDSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDTjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBQUY7QUFHQTtFQUVJO0lBQ0UsNkJBQUE7SUFDQSxrQkFBQTtFQURKO0VBR007SUFDRSxhQUFBO0VBRFI7RUFLRTtJQUNFLDZCQUFBO0lBQ0Esa0JBQUE7RUFISjtFQUlJO0lBQ0UsbUJBQUE7RUFGTjtFQUlJO0lBQ0UsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0VBRk47QUFDRjtBQVNBO0VBRUk7SUFDRSw4QkFBQTtJQUNBLGtCQUFBO0VBUko7RUFVTTtJQUNFLFlBQUE7RUFSUjtFQVlFO0lBQ0UsOEJBQUE7SUFDQSxrQkFBQTtFQVZKO0VBV0k7SUFDRSxtQkFBQTtFQVROO0VBV0k7SUFDRSxhQUFBO0lBQ0Esa0NBQUE7RUFUTjtBQUNGO0FBZ0JBO0VBQ0U7SUFDRSwyQkFBQTtFQWRGO0VBZ0JBO0lBQ0UsNkJBQUE7RUFkRjtFQWdCQTtJQUNFLDJCQUFBO0VBZEY7QUFDRjtBQWdCQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQWRGO0FBZ0JBO0VBQ0Usa0NBQUE7QUFiRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMjRweDtcclxuICAuY2F0ZWdvcmllcyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcclxuICAgIG1heC13aWR0aDogY2FsYygzNTBweCArIDMycHgpOyAvLyB3aWR0aCBvZiBjYXJkcyArIGFsbCBwYWRkaW5nICsgZ2FwXHJcbiAgICAmX19oZWFkZXIge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICA+IGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2xpc3Qge1xyXG4gICAgICAvLyBqdXN0IGZvciBjYXRlZ29yaWVzXHJcbiAgICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICAgIC5jYXRlZ29yeS1jYXJkIHtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjM3NXJlbTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAvL2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNlZTc3NTIsICNlNzNjN2UsICMyM2E2ZDUsICMyM2Q1YWIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJveC1zaGFkb3c6aW5zZXQgMCAwIDAgMjAwMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAvL2FuaW1hdGlvbjogZ3JhZGllbnQgMTVzIGVhc2UgaW5maW5pdGU7XHJcbiAgICAgICAgLy9jdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnN3aXBlci1idXR0b24tbmV4dCB7IGNvbG9yOiB3aGl0ZTsgfVxyXG4gIC5zd2lwZXItYnV0dG9uLXByZXYgeyBjb2xvcjogd2hpdGU7IH1cclxuICAucHJvZHVjdHMge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoMzUwcHggKyAzMnB4KTsgLy8gd2lkdGggb2YgY2FyZHMgKyBhbGwgcGFkZGluZyArIGdhcFxyXG4gICAgJl9fbG9hZGluZyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgICZfX2hlYWRlciB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgID4gaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fbGlzdCB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICByb3ctZ2FwOiAyNHB4O1xyXG4gICAgICAucHJvZHVjdC1jYXJkIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAmX19pbWFnZSB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5sb2FkLXByb2R1Y3RzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE2cHggMTZweCAzMnB4O1xyXG4gICAgPiBidXR0b24ge1xyXG4gICAgICBtYXgtd2lkdGg6IDM0MXB4O1xyXG4gICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uY2VudGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5ob21lLWNvbnRhaW5lciB7XHJcbiAgICAuY2F0ZWdvcmllcyB7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYyg3MDBweCArIDcycHgpOyAvLyB3aWR0aCBvZiBjYXJkcyArIGFsbCBwYWRkaW5nICsgZ2FwXHJcbiAgICAgIHBhZGRpbmc6IDM2cHggMjRweDtcclxuICAgICAgJl9fbGlzdCB7XHJcbiAgICAgICAgLmNhdGVnb3J5LWNhcmQge1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9kdWN0cyB7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYyg3MDBweCArIDcycHgpOyAvLyB3aWR0aCBvZiBjYXJkcyArIGFsbCBwYWRkaW5nICsgZ2FwXHJcbiAgICAgIHBhZGRpbmc6IDM2cHggMjRweDtcclxuICAgICAgJl9faGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICAgICZfX2xpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDI0cHg7XHJcbiAgICAgICAgcm93LWdhcDogMjRweDtcclxuICAgICAgICAucHJvZHVjdC1jYXJkIHtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5ob21lLWNvbnRhaW5lciB7XHJcbiAgICAuY2F0ZWdvcmllcyB7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDUwcHggKyA5NnB4KTsgLy8gd2lkdGggb2YgY2FyZHMgKyBhbGwgcGFkZGluZyArIGdhcFxyXG4gICAgICBwYWRkaW5nOiAzNnB4IDI0cHg7XHJcbiAgICAgICZfX2xpc3Qge1xyXG4gICAgICAgIC5jYXRlZ29yeS1jYXJkIHtcclxuICAgICAgICAgIHdpZHRoOiAzNDhweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9kdWN0cyB7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDUwcHggKyA5NnB4KTsgLy8gd2lkdGggb2YgY2FyZHMgKyBhbGwgcGFkZGluZyArIGdhcFxyXG4gICAgICBwYWRkaW5nOiAzNnB4IDI0cHg7XHJcbiAgICAgICZfX2hlYWRlciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgfVxyXG4gICAgICAmX19saXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICAgICAgLnByb2R1Y3QtY2FyZCB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdyYWRpZW50IHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XHJcbiAgfVxyXG59XHJcbi5ob21lLWNvbnRhaW5lci5oZWFkZXIgaDIge1xyXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICM0NDQ0NDQgIWltcG9ydGFudDsgXHJcbn1cclxuLmhvbWUtY29udGFpbmVyIHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgXHJcbn0iXX0= */"], encapsulation: 2 });


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
    production: false,
    apiUrl: 'http://localhost:5000/api/v1/',
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

/***/ "Gdn9":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "H+bZ");




class ProductService {
    constructor(http, _api) {
        this.http = http;
        this._api = _api;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
    }
    getAllProducts(limitOfResults = 9, page) {
        return this.http.get(this.url + 'products', {
            params: {
                limit: limitOfResults.toString(),
                page: page,
            },
        });
    }
    getSingleProduct(id) {
        console.log(id);
        return this._api.getTypeRequest('products/' + id);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ApiService {
    constructor(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
    }
    getTypeRequest(url) {
        return this._http.get(`${this.baseUrl}${url}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res;
        }));
    }
    postTypeRequest(url, payload) {
        return this._http.post(`${this.baseUrl}${url}`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res;
        }));
    }
    putTypeRequest(url, payload) {
        return this._http.put(`${this.baseUrl}${url}`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return res;
        }));
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Hs9l":
/*!**********************************************!*\
  !*** ./src/app/guards/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/token-storage.service */ "Zr0/");



class AuthGuardService {
    constructor(_route, _token) {
        this._route = _route;
        this._token = _token;
    }
    canActivate(route, state) {
        const currentUser = this._token.getUser();
        if (currentUser) {
            return true;
        }
        this._route.navigate(['/login']);
        return false;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "IiZn":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/progress */ "W9fG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");











function CheckoutComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CheckoutComponent_div_3_div_5_Template_input_valueChange_3_listener($event) { const field_r5 = ctx.$implicit; return field_r5.value = $event; })("ngModelChange", function CheckoutComponent_div_3_div_5_Template_input_ngModelChange_3_listener($event) { const field_r5 = ctx.$implicit; return field_r5.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](field_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", field_r5.type)("name", field_r5.name)("placeholder", field_r5.placeholder)("value", field_r5.value)("ngModel", field_r5.value);
} }
function CheckoutComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Billing Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CheckoutComponent_div_3_div_5_Template, 4, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.submitBilling(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.billingAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.canBillingSubmit());
} }
function CheckoutComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Payment Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Card number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CheckoutComponent_div_4_Template_input_valueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.cardNumber = $event; })("ngModelChange", function CheckoutComponent_div_4_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.cardNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name on card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CheckoutComponent_div_4_Template_input_valueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.cardName = $event; })("ngModelChange", function CheckoutComponent_div_4_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.cardName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Expiry date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CheckoutComponent_div_4_Template_input_valueChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.cardExpiry = $event; })("ngModelChange", function CheckoutComponent_div_4_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.cardExpiry = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Security code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CheckoutComponent_div_4_Template_input_valueChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.cardCode = $event; })("ngModelChange", function CheckoutComponent_div_4_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.cardCode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_4_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.submitPayment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.cardNumber)("ngModel", ctx_r1.cardNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.cardName)("ngModel", ctx_r1.cardName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.cardExpiry)("ngModel", ctx_r1.cardExpiry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.cardCode)("ngModel", ctx_r1.cardCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.canPaymentSubmit());
} }
function CheckoutComponent_div_5_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r22.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r22.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, item_r22.price, "USD"), " x ", item_r22.quantity, " = ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 8, item_r22.quantity * item_r22.price, "USD"), " ");
} }
function CheckoutComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Order Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Item(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Payment method");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Order total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_5_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.submitCheckout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Place order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Order Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CheckoutComponent_div_5_div_25_Template, 9, 11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.cartData.products.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 4, ctx_r2.cartData.total, "USD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cartData.products);
} }
function CheckoutComponent_div_6_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r26.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r26.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, item_r26.price, "USD"), " x ", item_r26.quantity, " = ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 8, item_r26.quantity * item_r26.price, "USD"), " ");
} }
function CheckoutComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Thank you!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Please check your email for the order confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Order ID: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Continue shopping ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Order Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CheckoutComponent_div_6_div_18_Template, 9, 11, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.orderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.products);
} }
class CheckoutComponent {
    constructor(_auth, _cart) {
        this._auth = _auth;
        this._cart = _cart;
        this.currentStep = 1;
        this.loading = false;
        this.successMessage = '';
        this.billingAddress = [
            {
                name: 'Full name',
                placeholder: 'Enter your full name',
                type: 'text',
                value: '',
            },
            {
                name: 'Email',
                placeholder: 'Enter your email address',
                type: 'email',
                value: '',
            },
            {
                name: 'Address',
                placeholder: 'Enter your address',
                type: 'text',
                value: '',
            },
            {
                name: 'City',
                placeholder: 'Enter your city',
                type: 'text',
                value: '',
            },
            {
                name: 'Country',
                placeholder: 'Enter your country',
                type: 'text',
                value: '',
            },
            {
                name: 'ZIP',
                placeholder: 'Enter your zip code',
                type: 'text',
                value: '',
            },
            {
                name: 'Telephone',
                placeholder: 'Enter your telephone number',
                type: 'text',
                value: '',
            },
        ];
        this._auth.user.subscribe((user) => {
            if (user) {
                this.currentUser = user;
                this.billingAddress[0].value = user.full_name;
                this.billingAddress[1].value = user.email;
            }
        });
        this._cart.cartDataObs$.subscribe((cartData) => {
            this.cartData = cartData;
        });
    }
    ngOnInit() { }
    submitCheckout() {
        this.loading = true;
        setTimeout(() => {
            this._cart
                .submitCheckout(this.currentUser.user_id, this.cartData)
                .subscribe((res) => {
                console.log(res);
                this.loading = false;
                this.orderId = res.orderId;
                this.products = res.products;
                this.currentStep = 4;
                this._cart.clearCart();
            }, (err) => {
                console.log(err);
                this.loading = false;
            });
        }, 750);
    }
    getProgressPrecent() {
        return (this.currentStep / 4) * 100;
    }
    submitBilling() {
        this.nextStep();
    }
    canBillingSubmit() {
        return this.billingAddress.filter((field) => field.value.length > 0)
            .length !== 7
            ? true
            : false;
    }
    submitPayment() {
        this.nextStep();
    }
    canPaymentSubmit() {
        return this.cardNumber && this.cardName && this.cardExpiry && this.cardCode
            ? true
            : false;
    }
    nextStep() {
        this.currentStep += 1;
        localStorage.setItem('checkoutStep', this.currentStep.toString());
    }
    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep -= 1;
            localStorage.setItem('checkoutStep', this.currentStep.toString());
        }
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"])); };
CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 7, vars: 7, consts: [[1, "checkout-container"], [1, "progress-container"], [3, "nzPercent", "nzShowInfo", "nzStrokeWidth"], [4, "ngIf"], [1, "billing-container"], ["class", "input-container", 4, "ngFor", "ngForOf"], ["nz-button", "", 3, "disabled", "click"], [1, "input-container"], ["for", ""], ["nz-input", "", 3, "type", "name", "placeholder", "value", "ngModel", "valueChange", "ngModelChange"], [1, "payment-container"], ["nz-input", "", "type", "text", "name", "cardNumber", "placeholder", "1234 1234 1234 1234", 3, "value", "ngModel", "valueChange", "ngModelChange"], ["nz-input", "", "type", "text", "name", "cardName", "placeholder", "John Doe", 3, "value", "ngModel", "valueChange", "ngModelChange"], [1, "\u203C\uFE0F"], ["nz-input", "", "type", "text", "name", "cardExpiry", "placeholder", "06/30", 3, "value", "ngModel", "valueChange", "ngModelChange"], ["nz-input", "", "type", "text", "name", "cardCode", "placeholder", "123", 3, "value", "ngModel", "valueChange", "ngModelChange"], [1, "summary-container"], [1, "summary-container__order"], [1, "details"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "click"], [1, "summary-container__items"], [1, "item-list"], ["class", "item-container", 4, "ngFor", "ngForOf"], [1, "item-container"], [1, "item-image"], ["alt", "", 3, "src"], [1, "item-title"], [1, "item-total"], [1, "confirmation-container"], [1, "title"], [1, "order-id"], ["nz-button", "", "routerLink", "/", 1, "cta-button"], [1, "products-container"], [1, "products-container__list"], ["class", "list-item", 4, "ngFor", "ngForOf"], [1, "list-item"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-progress", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CheckoutComponent_div_3_Template, 8, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CheckoutComponent_div_4_Template, 24, 9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CheckoutComponent_div_5_Template, 26, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CheckoutComponent_div_6_Template, 19, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", ctx.getProgressPrecent())("nzShowInfo", false)("nzStrokeWidth", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStep === 4);
    } }, directives: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_3__["NzProgressComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["@charset \"UTF-8\";\n.checkout-container[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n  position: relative;\n}\n.checkout-container[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%] {\n  top: -12px;\n  left: 0px;\n  position: absolute;\n  height: 20px;\n  width: 100%;\n}\n.checkout-container[_ngcontent-%COMP%]   .billing-container[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .billing-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.checkout-container[_ngcontent-%COMP%]   .billing-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .input-container[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.checkout-container[_ngcontent-%COMP%]   .billing-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .input-container[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 2px;\n}\n.checkout-container[_ngcontent-%COMP%]   .billing-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .input-container[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  height: 44px;\n}\n.checkout-container[_ngcontent-%COMP%]   .billing-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n}\n.checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 2px;\n}\n.checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 44px;\n}\n.checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .\u203C\uFE0F[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 12px;\n}\n.checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__order[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__order[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__order[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__order[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 3px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__order[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__order[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  height: 44px;\n  width: 100%;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  margin-bottom: 24px;\n  padding: 8px 0;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .item-total[_ngcontent-%COMP%] {\n  text-align: right;\n  padding-left: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  padding-bottom: 40px;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  font-size: 2.75rem;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   .order-id[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 250px;\n  height: 44px;\n  margin: 24px auto auto;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .products-container[_ngcontent-%COMP%] {\n  text-align: left;\n  padding-top: 40px;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .products-container[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .products-container__list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  margin-bottom: 24px;\n  padding: 8px 0;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .products-container__list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .products-container__list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .products-container__list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%]   .products-container__list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .item-total[_ngcontent-%COMP%] {\n  text-align: right;\n  padding-left: 16px;\n}\n@media screen and (min-width: 1200px) {\n  .checkout-container[_ngcontent-%COMP%] {\n    padding: 0;\n    padding-bottom: 60px;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%] {\n    top: -60px;\n    left: 0px;\n    position: absolute;\n    height: 20px;\n    width: 100%;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .billing-container[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n    max-width: 600px;\n    margin: 48px auto 0;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .payment-container[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n    max-width: 600px;\n    margin: 48px auto 0;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .summary-container[_ngcontent-%COMP%] {\n    max-width: 1024px;\n    margin: 48px auto 0;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n    display: flex;\n    flex-direction: row-reverse;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .summary-container__order[_ngcontent-%COMP%] {\n    width: 350px;\n    padding: 16px;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n    padding: 16px;\n    margin: 0;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .summary-container__items[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .checkout-container[_ngcontent-%COMP%]   .confirmation-container[_ngcontent-%COMP%] {\n    max-width: 700px;\n    margin: 48px auto 0;\n    padding: 24px;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUFFO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRUo7QUFDSTtFQUNFLG1CQUFBO0FBQ047QUFDSTtFQUNFLG1CQUFBO0FBQ047QUFBTTtFQUNFLG1CQUFBO0FBRVI7QUFEUTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUdWO0FBRFE7RUFDRSxZQUFBO0FBR1Y7QUFDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ047QUFJSTtFQUNFLG1CQUFBO0FBRk47QUFJSTtFQUNFLG1CQUFBO0FBRk47QUFHTTtFQUNFLG1CQUFBO0FBRFI7QUFFUTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUFWO0FBRVE7RUFDRSxZQUFBO0FBQVY7QUFHTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBRFI7QUFJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRk47QUFPSTtFQUlFLG1CQUFBO0FBUk47QUFLTTtFQUNFLG1CQUFBO0FBSFI7QUFNTTtFQUNFLG1CQUFBO0FBSlI7QUFLUTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUhWO0FBSVU7RUFDRSxrQkFBQTtBQUZaO0FBTU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUpSO0FBUU07RUFDRSxtQkFBQTtBQU5SO0FBUU07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBTlI7QUFPUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBTFY7QUFNVTtFQUNFLGtCQUFBO0FBSlo7QUFLWTtFQUNFLFdBQUE7QUFIZDtBQU1VO0VBQ0UsWUFBQTtBQUpaO0FBTVU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBSlo7QUFVRTtFQUNFLGtCQUFBO0FBUko7QUFTSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQVBOO0FBU1E7RUFDRSxrQkFBQTtBQVBWO0FBV1E7RUFDRSxnQkFBQTtBQVRWO0FBYUk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFYTjtBQWFJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQVhOO0FBWU07RUFDRSxtQkFBQTtBQVZSO0FBYVE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVhWO0FBWVU7RUFDRSxrQkFBQTtBQVZaO0FBV1k7RUFDRSxXQUFBO0FBVGQ7QUFZVTtFQUNFLFlBQUE7QUFWWjtBQVlVO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQVZaO0FBa0JBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esb0JBQUE7RUFmRjtFQWdCRTtJQUNFLFVBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQWRKO0VBZ0JFO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtFQWRKO0VBZ0JFO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtFQWRKO0VBZ0JFO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0EsMkJBQUE7RUFkSjtFQWVJO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFiTjtFQWVJO0lBQ0UsWUFBQTtFQWJOO0VBY007SUFDRSxhQUFBO0lBQ0EsU0FBQTtFQVpSO0VBY007SUFDRSxhQUFBO0VBWlI7RUFnQkU7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7RUFkSjtBQUNGIiwiZmlsZSI6ImNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNoZWNrb3V0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDI0cHggMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNoZWNrb3V0LWNvbnRhaW5lciAucHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgdG9wOiAtMTJweDtcbiAgbGVmdDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5iaWxsaW5nLWNvbnRhaW5lciA+IGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5jaGVja291dC1jb250YWluZXIgLmJpbGxpbmctY29udGFpbmVyID4gZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5iaWxsaW5nLWNvbnRhaW5lciA+IGZvcm0gPiAuaW5wdXQtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5jaGVja291dC1jb250YWluZXIgLmJpbGxpbmctY29udGFpbmVyID4gZm9ybSA+IC5pbnB1dC1jb250YWluZXIgPiBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5iaWxsaW5nLWNvbnRhaW5lciA+IGZvcm0gPiAuaW5wdXQtY29udGFpbmVyID4gaW5wdXQge1xuICBoZWlnaHQ6IDQ0cHg7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5iaWxsaW5nLWNvbnRhaW5lciA+IGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5wYXltZW50LWNvbnRhaW5lciA+IGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5jaGVja291dC1jb250YWluZXIgLnBheW1lbnQtY29udGFpbmVyID4gZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5wYXltZW50LWNvbnRhaW5lciA+IGZvcm0gLmlucHV0LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5wYXltZW50LWNvbnRhaW5lciA+IGZvcm0gLmlucHV0LWNvbnRhaW5lciBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5wYXltZW50LWNvbnRhaW5lciA+IGZvcm0gLmlucHV0LWNvbnRhaW5lciBpbnB1dCB7XG4gIGhlaWdodDogNDRweDtcbn1cbi5jaGVja291dC1jb250YWluZXIgLnBheW1lbnQtY29udGFpbmVyID4gZm9ybSA+IC7igLzvuI8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGNvbHVtbi1nYXA6IDEycHg7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5wYXltZW50LWNvbnRhaW5lciA+IGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5zdW1tYXJ5LWNvbnRhaW5lcl9fb3JkZXIge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLmNoZWNrb3V0LWNvbnRhaW5lciAuc3VtbWFyeS1jb250YWluZXJfX29yZGVyID4gaDIge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmNoZWNrb3V0LWNvbnRhaW5lciAuc3VtbWFyeS1jb250YWluZXJfX29yZGVyIC5kZXRhaWxzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5jaGVja291dC1jb250YWluZXIgLnN1bW1hcnktY29udGFpbmVyX19vcmRlciAuZGV0YWlscyA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbi5jaGVja291dC1jb250YWluZXIgLnN1bW1hcnktY29udGFpbmVyX19vcmRlciAuZGV0YWlscyA+IGRpdiA+IHNwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5zdW1tYXJ5LWNvbnRhaW5lcl9fb3JkZXIgPiBidXR0b24ge1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNoZWNrb3V0LWNvbnRhaW5lciAuc3VtbWFyeS1jb250YWluZXJfX2l0ZW1zID4gaDIge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmNoZWNrb3V0LWNvbnRhaW5lciAuc3VtbWFyeS1jb250YWluZXJfX2l0ZW1zIC5pdGVtLWxpc3Qge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5jaGVja291dC1jb250YWluZXIgLnN1bW1hcnktY29udGFpbmVyX19pdGVtcyAuaXRlbS1saXN0IC5pdGVtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuLmNoZWNrb3V0LWNvbnRhaW5lciAuc3VtbWFyeS1jb250YWluZXJfX2l0ZW1zIC5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIC5pdGVtLWltYWdlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLmNoZWNrb3V0LWNvbnRhaW5lciAuc3VtbWFyeS1jb250YWluZXJfX2l0ZW1zIC5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIC5pdGVtLWltYWdlID4gaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5zdW1tYXJ5LWNvbnRhaW5lcl9faXRlbXMgLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLml0ZW0tdGl0bGUge1xuICBmbGV4LWdyb3c6IDE7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5zdW1tYXJ5LWNvbnRhaW5lcl9faXRlbXMgLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLml0ZW0tdG90YWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLmNoZWNrb3V0LWNvbnRhaW5lciAuY29uZmlybWF0aW9uLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jaGVja291dC1jb250YWluZXIgLmNvbmZpcm1hdGlvbi1jb250YWluZXIgPiBoZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbi5jaGVja291dC1jb250YWluZXIgLmNvbmZpcm1hdGlvbi1jb250YWluZXIgPiBoZWFkZXIgLnRpdGxlID4gaDEge1xuICBmb250LXNpemU6IDIuNzVyZW07XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5jb25maXJtYXRpb24tY29udGFpbmVyID4gaGVhZGVyIC5vcmRlci1pZCA+IHNwYW4ge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoZWNrb3V0LWNvbnRhaW5lciAuY29uZmlybWF0aW9uLWNvbnRhaW5lciAuY3RhLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIG1hcmdpbjogMjRweCBhdXRvIGF1dG87XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5jb25maXJtYXRpb24tY29udGFpbmVyIC5wcm9kdWN0cy1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5jaGVja291dC1jb250YWluZXIgLmNvbmZpcm1hdGlvbi1jb250YWluZXIgLnByb2R1Y3RzLWNvbnRhaW5lciA+IGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5jaGVja291dC1jb250YWluZXIgLmNvbmZpcm1hdGlvbi1jb250YWluZXIgLnByb2R1Y3RzLWNvbnRhaW5lcl9fbGlzdCAubGlzdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgcGFkZGluZzogOHB4IDA7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5jb25maXJtYXRpb24tY29udGFpbmVyIC5wcm9kdWN0cy1jb250YWluZXJfX2xpc3QgLmxpc3QtaXRlbSAuaXRlbS1pbWFnZSB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5jaGVja291dC1jb250YWluZXIgLmNvbmZpcm1hdGlvbi1jb250YWluZXIgLnByb2R1Y3RzLWNvbnRhaW5lcl9fbGlzdCAubGlzdC1pdGVtIC5pdGVtLWltYWdlID4gaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG59XG4uY2hlY2tvdXQtY29udGFpbmVyIC5jb25maXJtYXRpb24tY29udGFpbmVyIC5wcm9kdWN0cy1jb250YWluZXJfX2xpc3QgLmxpc3QtaXRlbSAuaXRlbS10aXRsZSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5jaGVja291dC1jb250YWluZXIgLmNvbmZpcm1hdGlvbi1jb250YWluZXIgLnByb2R1Y3RzLWNvbnRhaW5lcl9fbGlzdCAubGlzdC1pdGVtIC5pdGVtLXRvdGFsIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jaGVja291dC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gIH1cbiAgLmNoZWNrb3V0LWNvbnRhaW5lciAucHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgICB0b3A6IC02MHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jaGVja291dC1jb250YWluZXIgLmJpbGxpbmctY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IDQ4cHggYXV0byAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB9XG4gIC5jaGVja291dC1jb250YWluZXIgLnBheW1lbnQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IDQ4cHggYXV0byAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB9XG4gIC5jaGVja291dC1jb250YWluZXIgLnN1bW1hcnktY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICBtYXJnaW46IDQ4cHggYXV0byAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICB9XG4gIC5jaGVja291dC1jb250YWluZXIgLnN1bW1hcnktY29udGFpbmVyX19vcmRlciB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbiAgLmNoZWNrb3V0LWNvbnRhaW5lciAuc3VtbWFyeS1jb250YWluZXJfX2l0ZW1zIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLmNoZWNrb3V0LWNvbnRhaW5lciAuc3VtbWFyeS1jb250YWluZXJfX2l0ZW1zID4gaDIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5jaGVja291dC1jb250YWluZXIgLnN1bW1hcnktY29udGFpbmVyX19pdGVtcyAuaXRlbS1saXN0IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG4gIC5jaGVja291dC1jb250YWluZXIgLmNvbmZpcm1hdGlvbi1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgbWFyZ2luOiA0OHB4IGF1dG8gMDtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB9XG59Il19 */"] });


/***/ }),

/***/ "KRBT":
/*!*************************************************!*\
  !*** ./src/app/services/interceptor.service.ts ***!
  \*************************************************/
/*! exports provided: MyInterceptor, authInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyInterceptor", function() { return MyInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function() { return authInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/token-storage.service */ "Zr0/");



const TOKEN_HEADER_KEY = 'x-access-token';
class MyInterceptor {
    constructor(_token) {
        this._token = _token;
    }
    intercept(req, next) {
        let authReq = req;
        let token = this._token.getToken();
        if (token != null) {
            authReq = req.clone({
                headers: req.headers.set(TOKEN_HEADER_KEY, token),
            });
        }
        return next.handle(authReq);
    }
}
MyInterceptor.ɵfac = function MyInterceptor_Factory(t) { return new (t || MyInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"])); };
MyInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MyInterceptor, factory: MyInterceptor.ɵfac });
const authInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: MyInterceptor, multi: true },
];


/***/ }),

/***/ "LvIC":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/core */ "TaHA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/product.service */ "Gdn9");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! swiper/angular */ "UMfn");

// import Swiper core and required components













function ProductComponent_div_0_swiper_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 29);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r3.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ProductComponent_div_0_swiper_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "swiper", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductComponent_div_0_swiper_3_ng_template_1_Template, 1, 1, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("zoom", true)("slidesPerView", 1)("spaceBetween", 50)("pagination", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("zoom", true);
} }
function ProductComponent_div_0_swiper_4_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 29);
} if (rf & 2) {
    const image_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", image_r5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ProductComponent_div_0_swiper_4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProductComponent_div_0_swiper_4_1_ng_template_0_Template, 1, 1, "ng-template", 28);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("zoom", true);
} }
function ProductComponent_div_0_swiper_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "swiper", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductComponent_div_0_swiper_4_1_Template, 1, 1, undefined, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("zoom", true)("slidesPerView", 1)("spaceBetween", 50)("pagination", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.showcaseImages);
} }
const _c0 = function (a0) { return { color: a0 }; };
function ProductComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProductComponent_div_0_swiper_3_Template, 2, 5, "swiper", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProductComponent_div_0_swiper_4_Template, 2, 5, "swiper", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "10 Review(s) | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Add your review");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "QTY:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "nz-input-number", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductComponent_div_0_Template_nz_input_number_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductComponent_div_0_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.addToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Add to cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Category: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Share: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.showcaseImages.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.showcaseImages.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.product.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](22, 13, ctx_r0.product.price, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c0, ctx_r0.quantity > 0 ? "inherit" : "red"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.quantity === 0 ? "Out of stock" : "In stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.product.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.quantity)("nzMin", ctx_r0.product.quantity > 0 ? 1 : 0)("nzMax", ctx_r0.product.quantity > 0 ? ctx_r0.product.quantity : 0)("nzStep", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.quantity === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.product.category, " ");
} }
// install Swiper components
swiper_core__WEBPACK_IMPORTED_MODULE_1__["default"].use([
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Navigation"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Pagination"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["A11y"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Virtual"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Zoom"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Autoplay"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Thumbs"],
    swiper_core__WEBPACK_IMPORTED_MODULE_1__["Controller"],
]);
class ProductComponent {
    constructor(_route, _product, _cart) {
        this._route = _route;
        this._product = _product;
        this._cart = _cart;
        this.showcaseImages = [];
        this.loading = false;
    }
    ngOnInit() {
        this.loading = true;
        this._route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((param) => {
            return param.params.id;
        }))
            .subscribe((productId) => {
            // returns string so convert it to number
            this.id = parseInt(productId);
            this._product.getSingleProduct(productId).subscribe((product) => {
                console.log(product);
                this.product = product;
                if (product.quantity === 0)
                    this.quantity = 0;
                else
                    this.quantity = 1;
                if (product.images) {
                    this.showcaseImages = product.images.split(';');
                }
                this.loading = false;
            });
        });
    }
    addToCart() {
        this._cart.addProduct({
            id: this.id,
            price: this.product.price,
            quantity: this.quantity,
            image: this.product.image,
            title: this.product.title,
            maxQuantity: this.product.quantity,
        });
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"])); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 1, vars: 1, consts: [["class", "product-container", 4, "ngIf"], [1, "product-container"], [1, "product-container__image"], [3, "zoom", "slidesPerView", "spaceBetween", "pagination", 4, "ngIf"], [1, "product-container__details"], [1, "title"], [1, "reviews"], [1, "rating"], ["nz-icon", "", "nzType", "star", "nzTheme", "fill"], ["nz-icon", "", "nzType", "star"], [1, "review-link"], [2, "cursor", "pointer"], [1, "price-container"], [1, "price"], [1, "availability", 3, "ngStyle"], [1, "description"], [1, "cta"], [1, "add-to-cart"], [3, "ngModel", "nzMin", "nzMax", "nzStep", "ngModelChange"], ["nz-button", "", "nzType", "primary", 3, "disabled", "click"], [1, "category"], [1, "social-links"], ["nz-icon", "", "nzType", "facebook", "nzTheme", "outline"], ["nz-icon", "", "nzType", "twitter", "nzTheme", "outline"], ["nz-icon", "", "nzType", "google-plus", "nzTheme", "outline"], ["nz-icon", "", "nzType", "mail", "nzTheme", "outline"], [1, "additional"], [3, "zoom", "slidesPerView", "spaceBetween", "pagination"], ["swiperSlide", "", 3, "zoom"], ["alt", "`Product image`", 3, "src"], [4, "ngFor", "ngForOf"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProductComponent_div_0_Template, 46, 18, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_9__["NzInputNumberComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__["NzWaveDirective"], swiper_angular__WEBPACK_IMPORTED_MODULE_13__["SwiperComponent"], swiper_angular__WEBPACK_IMPORTED_MODULE_13__["SwiperSlideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: [".product-container[_ngcontent-%COMP%] {\n  padding-bottom: 60px;\n}\n.product-container__image[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  text-align: center;\n}\n.product-container__details[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1024px;\n  padding: 16px;\n}\n.product-container__details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 1.25;\n  margin-bottom: 6px;\n}\n.product-container__details[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.product-container__details[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.product-container__details[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  margin-right: 2px;\n  font-size: 1rem;\n  color: #aaa;\n  cursor: pointer;\n}\n.product-container__details[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:nth-child(n+1):nth-child(-n+4) {\n  color: #f9d71c;\n}\n.product-container__details[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   .review-link[_ngcontent-%COMP%] {\n  color: #525252;\n  font-size: 0.75rem;\n}\n.product-container__details[_ngcontent-%COMP%]   .price-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.product-container__details[_ngcontent-%COMP%]   .price-container[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin-right: 12px;\n}\n.product-container__details[_ngcontent-%COMP%]   .price-container[_ngcontent-%COMP%]   .availability[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n.product-container__details[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 40px;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  height: 46px;\n  margin-left: 12px;\n  border-radius: 50px;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin-bottom: 16px;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0 8px;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.product-container__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:hover {\n  color: #1890ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGO0FBQUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFBRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFFSjtBQURJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBR047QUFESTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBR047QUFGTTtFQUNFLGtCQUFBO0FBSVI7QUFIUTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBS1Y7QUFKVTtFQUNFLGNBQUE7QUFNWjtBQUZNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBSVI7QUFESTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBR047QUFGTTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFJUjtBQUZNO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FBSVI7QUFESTtFQUNFLG1CQUFBO0FBR047QUFBTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFEUTtFQUNFLGlCQUFBO0FBR1Y7QUFEUTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBR1Y7QUFBTTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQURRO0VBQ0UsaUJBQUE7QUFHVjtBQUFNO0VBQ0UseUJBQUE7QUFFUjtBQURRO0VBQ0UsaUJBQUE7QUFHVjtBQURRO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFHVjtBQUZVO0VBQ0UsY0FBQTtBQUlaIiwiZmlsZSI6InByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1jb250YWluZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICZfX2ltYWdlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gICZfX2RldGFpbHMge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIH1cclxuICAgIC5yZXZpZXdzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAucmF0aW5nIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgPiBpIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgY29sb3I6ICNhYWE7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAmOm50aC1jaGlsZChuICsgMSk6bnRoLWNoaWxkKC1uICsgNCkge1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y5ZDcxYztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnJldmlldy1saW5rIHtcclxuICAgICAgICBjb2xvcjogIzUyNTI1MjtcclxuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcmljZS1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAucHJpY2Uge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgLmF2YWlsYWJpbGl0eSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuY3RhIHtcclxuICAgICAgLmFkZC10by1jYXJ0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICA+IHNwYW4ge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgID4gYnV0dG9uIHtcclxuICAgICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmNhdGVnb3J5IHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgPiBzcGFuIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuc29jaWFsLWxpbmtzIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgPiBpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTg5MGZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbi8vICAgLnByb2R1Y3QtY29udGFpbmVyIHtcclxuLy8gICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4vLyAgICAgJl9faW1hZ2Uge1xyXG4vLyAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4vLyAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICB9XHJcbi8vICAgICAmX19kZXRhaWxzIHtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuIl19 */"] });


/***/ }),

/***/ "OuDC":
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");










const _c0 = function () { return { "margin-bottom": "16px" }; };
function LoginComponent_nz_alert_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 14);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMessage", ctx_r0.error)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
class LoginComponent {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.email = '';
        this.password = '';
        this.error = '';
        this.loading = false;
    }
    ngOnInit() { }
    onSubmit() {
        this.loading = true;
        this.error = '';
        if (!this.email || !this.password) {
            this.error = 'Make sure to fill everything ;)';
        }
        else {
            this._auth
                .login({ email: this.email, password: this.password })
                .subscribe((res) => {
                this.loading = false;
                this._router.navigate(['/']);
            }, (err) => {
                console.log(err);
                this.error = err.error.message;
                this.loading = false;
            });
        }
    }
    canSubmit() {
        return this.email.length > 0 && this.password.length > 0;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 23, vars: 5, consts: [[1, "login-container"], [1, "form-container"], ["nzShowIcon", "", "nzType", "error", 3, "nzMessage", "ngStyle", 4, "ngIf"], [3, "ngSubmit"], [1, "input-container"], ["for", "email"], ["nz-input", "", "type", "email", "name", "email", "placeholder", "Enter email address", 3, "ngModel", "ngModelChange"], ["for", "password"], ["nz-input", "", "type", "password", "name", "password", "placeholder", "Enter your password", 3, "ngModel", "ngModelChange"], [1, "cta-container"], ["nz-button", "", "type", "submit", 3, "disabled", "nzLoading"], ["routerLink", "/register"], [1, "forgot-password"], ["href", ""], ["nzShowIcon", "", "nzType", "error", 3, "nzMessage", "ngStyle"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign In to Eccom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_nz_alert_4_Template, 1, 3, "nz-alert", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Create a new account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.canSubmit())("nzLoading", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__["NzAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: [".login-container[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  max-width: 475px;\n  padding: 24px 16px;\n  margin: 0 auto;\n  border-radius: 3px;\n  background-color: #fff;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > .error-container[_ngcontent-%COMP%] {\n  padding: 12px;\n  margin: 0 0 16px;\n  color: #fff;\n  background-color: #f83333;\n  border-radius: 4px;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .cta-container[_ngcontent-%COMP%] {\n  margin-top: 36px;\n  margin-bottom: 60px;\n  text-align: center;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .cta-container[_ngcontent-%COMP%]    > button[type=submit][_ngcontent-%COMP%] {\n  height: 52px;\n  width: 100%;\n  margin-bottom: 12px;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .cta-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  text-align: center;\n  font-size: 0.85rem;\n}\n.login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #121212;\n}\n@media screen and (min-width: 768px) {\n  .login-container[_ngcontent-%COMP%] {\n    padding: 48px 16px 240px;\n  }\n  .login-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    padding: 36px;\n    border: 1px solid #ccc;\n  }\n}\n.input-container[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.input-container[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  display: inline-block;\n  margin-bottom: 6px;\n}\n.input-container[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFFSjtBQUFJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUVOO0FBQUk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUVOO0FBQ007RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUFRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUVWO0FBQVE7RUFDRSxnQkFBQTtBQUVWO0FBQ007RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUFRO0VBQ0UsY0FBQTtBQUVWO0FBS0E7RUFDRTtJQUNFLHdCQUFBO0VBRkY7RUFJRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtFQUZKO0FBQ0Y7QUFNQTtFQUNFLG1CQUFBO0FBSkY7QUFLRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUhKO0FBS0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFISiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDI0cHggMTZweDtcclxuICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA0NzVweDtcclxuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgICA+IGgyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgfVxyXG4gICAgPiAuZXJyb3ItY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgbWFyZ2luOiAwIDAgMTZweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDUxLCA1MSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICAgID4gZm9ybSB7XHJcbiAgICAgID4gLmN0YS1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDM2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgPiBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgID4gZGl2IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5mb3Jnb3QtcGFzc3dvcmQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICAgID4gYSB7XHJcbiAgICAgICAgICBjb2xvcjogIzEyMTIxMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA0OHB4IDE2cHggMjQwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY4O1xyXG4gICAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZzogMzZweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC1jb250YWluZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgPiBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIH1cclxuICA+IGlucHV0IHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Vy/u":
/*!**********************************************************!*\
  !*** ./src/app/products-card/products-card.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsCardComponent", function() { return ProductsCardComponent; });
/* harmony import */ var _test_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.json */ "dQCy");
var _test_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./test.json */ "dQCy", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/model.service */ "tB1I");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a1) { return ["/product", a1]; };
function ProductsCardComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r0.data.Name + " details")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, i_r1.Model_ID));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", i_r1.Product_Image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r1.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r1.Short_Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r1.PriceText);
} }
const _c1 = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap\");\nbody[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  color: #444444;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: inherit;\n}\n.section-products[_ngcontent-%COMP%] {\n  padding: 80px 0 54px;\n}\n.section-products[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.section-products[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #fe302f;\n  font-weight: 500;\n}\n.section-products[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 400;\n  color: #444444;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%] {\n  margin-bottom: 26px;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.section-products[_ngcontent-%COMP%]   #product-1[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]::before {\n  background-size: cover;\n  transition: all 0.3s;\n}\n.section-products[_ngcontent-%COMP%]   #product-2[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]::before {\n  background: url(\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/CrossRoads%20of%20Style%20and%20Function.png\") no-repeat center;\n  background-size: cover;\n}\n.section-products[_ngcontent-%COMP%]   #product-3[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]::before {\n  background: url(\"https://i.ibb.co/L8Nrb7p/1.jpg\") no-repeat center;\n  background-size: cover;\n}\n.section-products[_ngcontent-%COMP%]   #product-4[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]::before {\n  background: url(\"https://i.ibb.co/cLnZjnS/2.jpg\") no-repeat center;\n  background-size: cover;\n}\n.section-products[_ngcontent-%COMP%]   #product-5[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]::before {\n  background: url(\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Book%20Rack_1.png\") no-repeat center;\n  background-size: cover;\n  transition: all 0.3s;\n}\n.section-products[_ngcontent-%COMP%]   #product-6[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]::before {\n  background: url(\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Comfort%20in%20the%20Kitchen.png\") no-repeat center;\n  background-size: cover;\n}\n.section-products[_ngcontent-%COMP%]   #product-7[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]::before {\n  background: url(\"https://i.ibb.co/L8Nrb7p/1.jpg\") no-repeat center;\n  background-size: cover;\n}\n.section-products[_ngcontent-%COMP%]   #product-8[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]::before {\n  background: url(\"https://i.ibb.co/cLnZjnS/2.jpg\") no-repeat center;\n  background-size: cover;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%], .section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 20px;\n  color: #ffffff;\n  background-color: #fe302f;\n  padding: 2px 8px;\n  text-transform: uppercase;\n  font-size: 0.85rem;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%] {\n  left: 0;\n  background-color: #444444;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -41px;\n  left: 20px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  opacity: 0;\n  transition: bottom 0.5s, opacity 0.5s;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]:hover   .part-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  bottom: 30px;\n  opacity: 1;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 4px;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  background-color: #ffffff;\n  color: #444444;\n  text-align: center;\n  box-shadow: 0 2px 20px rgba(50, 50, 50, 0.1);\n  transition: color 0.2s;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fe302f;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1rem;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   .product-old-price[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 7px;\n  margin-right: 2px;\n  opacity: 0.6;\n}\n.section-products[_ngcontent-%COMP%]   .single-product[_ngcontent-%COMP%]   .part-2[_ngcontent-%COMP%]   .product-old-price[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background-color: #444444;\n  transform: translateY(-50%);\n}\n.product[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3RzLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUZBQUE7QUFFUjtFQUNJLGtDQUFBO0VBQ0EsY0FBQTtBQUFKO0FBR0E7O0VBRUkscUJBQUE7RUFDQSxjQUFBO0FBQUo7QUFHQTtFQUNJLG9CQUFBO0FBQUo7QUFHQTtFQUNJLG1CQUFBO0FBQUo7QUFHQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUdBO0VBQ0ksbUJBQUE7QUFBSjtBQUdBO0VBS0ksZ0JBQUE7QUFKSjtBQXNCQTtFQUVJLHNCQUFBO0VBQ0Ysb0JBQUE7QUFwQkY7QUF3QkE7RUFDSSw2SkFBQTtFQUNBLHNCQUFBO0FBckJKO0FBd0JBO0VBQ0ksa0VBQUE7RUFDQSxzQkFBQTtBQXJCSjtBQXdCQTtFQUNJLGtFQUFBO0VBQ0Esc0JBQUE7QUFyQko7QUF1QkE7RUFDSSxnSEFBQTtFQUNBLHNCQUFBO0VBQ0Ysb0JBQUE7QUFwQkY7QUF1QkE7RUFDSSxpSkFBQTtFQUNBLHNCQUFBO0FBcEJKO0FBdUJBO0VBQ0ksa0VBQUE7RUFDQSxzQkFBQTtBQXBCSjtBQXVCQTtFQUNJLGtFQUFBO0VBQ0Esc0JBQUE7QUFwQko7QUF1QkE7O0VBRUksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQXBCSjtBQXVCQTtFQUNJLE9BQUE7RUFDQSx5QkFBQTtBQXBCSjtBQXVCQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0FBcEJKO0FBdUJBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUFwQko7QUF1QkE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0FBcEJKO0FBdUJBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHNCQUFBO0FBcEJKO0FBdUJBO0VBQ0ksY0FBQTtBQXBCSjtBQXVCQTtFQUNJLGVBQUE7QUFwQko7QUF1QkE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7QUFwQko7QUF1QkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFwQko7QUF1QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQXBCSjtBQXNCQTtFQUNJLGdCQUFBO0FBbkJKIiwiZmlsZSI6InByb2R1Y3RzLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICM0NDQ0NDQ7XHJcbn1cclxuXHJcbmEsXHJcbmE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXByb2R1Y3RzIHtcclxuICAgIHBhZGRpbmc6IDgwcHggMCA1NHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi1wcm9kdWN0cyAuaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXByb2R1Y3RzIC5oZWFkZXIgaDMge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6ICNmZTMwMmY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi1wcm9kdWN0cyAuaGVhZGVyIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjNDQ0NDQ0OyBcclxufVxyXG5cclxuLnNlY3Rpb24tcHJvZHVjdHMgLnNpbmdsZS1wcm9kdWN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI2cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXByb2R1Y3RzIC5zaW5nbGUtcHJvZHVjdCAucGFydC0xIHtcclxuICAgIC8vcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gaGVpZ2h0OiAyOTBweDtcclxuICAgIC8vIG1heC1oZWlnaHQ6IDI5MHB4O1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8vIC5zZWN0aW9uLXByb2R1Y3RzIC5zaW5nbGUtcHJvZHVjdCAucGFydC0xOjpiZWZvcmUge1xyXG4vLyBcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG4vLyBcdFx0Y29udGVudDogXCJcIjtcclxuLy8gXHRcdHRvcDogMDtcclxuLy8gXHRcdGxlZnQ6IDA7XHJcbi8vIFx0XHR3aWR0aDogMTAwJTtcclxuLy8gXHRcdGhlaWdodDogMTAwJTtcclxuLy8gXHRcdC8vei1pbmRleDogLTE7XHJcbi8vIFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuLy8gfVxyXG5cclxuLy8gLnNlY3Rpb24tcHJvZHVjdHMgLnNpbmdsZS1wcm9kdWN0OmhvdmVyIC5wYXJ0LTE6OmJlZm9yZSB7XHJcbi8vIFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMiwxLjIpIHJvdGF0ZSg1ZGVnKTtcclxuLy8gfVxyXG5cclxuLnNlY3Rpb24tcHJvZHVjdHMgI3Byb2R1Y3QtMSAucGFydC0xOjpiZWZvcmUge1xyXG4gICBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICBcclxufVxyXG5cclxuLnNlY3Rpb24tcHJvZHVjdHMgI3Byb2R1Y3QtMiAucGFydC0xOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly90dWxhbmVkaWdjb250ZW50LmJsb2IuY29yZS53aW5kb3dzLm5ldC9tcy1pbmN1YmF0aW9uLTIwMjEvdGh1bWJuYWlscy9Dcm9zc1JvYWRzJTIwb2YlMjBTdHlsZSUyMGFuZCUyMEZ1bmN0aW9uLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnNlY3Rpb24tcHJvZHVjdHMgI3Byb2R1Y3QtMyAucGFydC0xOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pLmliYi5jby9MOE5yYjdwLzEuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uc2VjdGlvbi1wcm9kdWN0cyAjcHJvZHVjdC00IC5wYXJ0LTE6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2kuaWJiLmNvL2NMblpqblMvMi5qcGdcIikgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnNlY3Rpb24tcHJvZHVjdHMgI3Byb2R1Y3QtNSAucGFydC0xOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly90dWxhbmVkaWdjb250ZW50LmJsb2IuY29yZS53aW5kb3dzLm5ldC93ZWItYXItZGVtby9Cb29rJTIwUmFja18xLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRcdHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4uc2VjdGlvbi1wcm9kdWN0cyAjcHJvZHVjdC02IC5wYXJ0LTE6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL3R1bGFuZWRpZ2NvbnRlbnQuYmxvYi5jb3JlLndpbmRvd3MubmV0L21zLWluY3ViYXRpb24tMjAyMS90aHVtYm5haWxzL0NvbWZvcnQlMjBpbiUyMHRoZSUyMEtpdGNoZW4ucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uc2VjdGlvbi1wcm9kdWN0cyAjcHJvZHVjdC03IC5wYXJ0LTE6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2kuaWJiLmNvL0w4TnJiN3AvMS5qcGdcIikgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXByb2R1Y3RzICNwcm9kdWN0LTggLnBhcnQtMTo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaS5pYmIuY28vY0xuWmpuUy8yLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnNlY3Rpb24tcHJvZHVjdHMgLnNpbmdsZS1wcm9kdWN0IC5wYXJ0LTEgLmRpc2NvdW50LFxyXG4uc2VjdGlvbi1wcm9kdWN0cyAuc2luZ2xlLXByb2R1Y3QgLnBhcnQtMSAubmV3IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZTMwMmY7XHJcbiAgICBwYWRkaW5nOiAycHggOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxufVxyXG5cclxuLnNlY3Rpb24tcHJvZHVjdHMgLnNpbmdsZS1wcm9kdWN0IC5wYXJ0LTEgLm5ldyB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0NDtcclxufVxyXG5cclxuLnNlY3Rpb24tcHJvZHVjdHMgLnNpbmdsZS1wcm9kdWN0IC5wYXJ0LTEgdWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtNDFweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMC41cywgb3BhY2l0eSAwLjVzO1xyXG59XHJcblxyXG4uc2VjdGlvbi1wcm9kdWN0cyAuc2luZ2xlLXByb2R1Y3Q6aG92ZXIgLnBhcnQtMSB1bCB7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uc2VjdGlvbi1wcm9kdWN0cyAuc2luZ2xlLXByb2R1Y3QgLnBhcnQtMSB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufVxyXG5cclxuLnNlY3Rpb24tcHJvZHVjdHMgLnNpbmdsZS1wcm9kdWN0IC5wYXJ0LTEgdWwgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjNDQ0NDQ0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMjBweCByZ2IoNTAgNTAgNTAgLyAxMCUpO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcclxufVxyXG5cclxuLnNlY3Rpb24tcHJvZHVjdHMgLnNpbmdsZS1wcm9kdWN0IC5wYXJ0LTEgdWwgbGkgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZlMzAyZjtcclxufVxyXG5cclxuLnNlY3Rpb24tcHJvZHVjdHMgLnNpbmdsZS1wcm9kdWN0IC5wYXJ0LTIgLnByb2R1Y3QtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uc2VjdGlvbi1wcm9kdWN0cyAuc2luZ2xlLXByb2R1Y3QgLnBhcnQtMiBoNCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uLXByb2R1Y3RzIC5zaW5nbGUtcHJvZHVjdCAucGFydC0yIC5wcm9kdWN0LW9sZC1wcmljZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwIDdweDtcclxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4uc2VjdGlvbi1wcm9kdWN0cyAuc2luZ2xlLXByb2R1Y3QgLnBhcnQtMiAucHJvZHVjdC1vbGQtcHJpY2U6OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0NDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG4ucHJvZHVjdHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn0iXX0= */";
class ProductsCardComponent {
    constructor(modelService) {
        this.modelService = modelService;
        this.data = _test_json__WEBPACK_IMPORTED_MODULE_0__["value"];
        this.count = [1, 2, 3, 4];
    }
    ngOnInit() {
        this.modelService.getModel().subscribe(data => {
            this.data = data.result;
            console.log(this.data);
        });
        console.log(this.category);
    }
    ngOnChanges(changes) {
        console.log(changes.category.currentValue);
        this.modelService.getModelByCategory(changes.category.currentValue).subscribe(data => {
            console.log(data);
        });
    }
}
ProductsCardComponent.ɵfac = function ProductsCardComponent_Factory(t) { return new (t || ProductsCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_model_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"])); };
ProductsCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductsCardComponent, selectors: [["app-products-card"]], inputs: { category: "category" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 17, vars: 1, consts: [["lang", "en"], ["charset", "UTF-8"], ["rel", "stylesheet", "href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"], [1, "section-products"], [1, "container"], [1, "row", "justify-content-center", "text-center"], [1, "col-md-8", "col-lg-6"], [1, "header"], [1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "mb-5", "product", "single-product"], [3, "title", "routerLink"], [2, "position", "relative", "overflow", "hidden", "background-color", "rgb(238, 238, 238)"], ["width", "200px", "height", "200px", "alt", "A 3D model of an astronaut", 1, "c", 2, "display", "block", "margin-left", "auto", "margin-right", "auto", "grid-column", "9 / 13", "grid-row", "1 / 7", 3, "src"], [1, "part-2", "mt-3"], [1, "product-title"], [1, "product-price"]], template: function ProductsCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "CodePen - Popular Products Section Using HTML , CSS , Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProductsCardComponent_div_16_Template, 12, 8, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [_c1, _c1] });


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/token-storage.service */ "Zr0/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");











const _c0 = function () { return { marginBottom: "12px" }; };
function ProfileComponent_nz_alert_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 7);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx_r0.alertType)("nzMessage", ctx_r0.alertMessage)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
} }
function ProfileComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ProfileComponent_div_6_Template_input_valueChange_3_listener($event) { const field_r2 = ctx.$implicit; return field_r2.value = $event; })("ngModelChange", function ProfileComponent_div_6_Template_input_ngModelChange_3_listener($event) { const field_r2 = ctx.$implicit; return field_r2.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](field_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", field_r2.key)("type", field_r2.type)("value", field_r2.value)("ngModel", field_r2.value);
} }
class ProfileComponent {
    constructor(_api, _token, _router) {
        this._api = _api;
        this._token = _token;
        this._router = _router;
        this.user = [
            {
                key: 'fullName',
                label: 'Full name',
                value: '',
                type: 'text',
            },
            {
                key: 'email',
                label: 'Email address',
                value: '',
                type: 'email',
            },
            {
                key: 'password',
                label: 'Password',
                value: '',
                type: 'password',
            },
            {
                key: 'confirmPassword',
                label: 'Confirm password',
                value: '',
                type: 'password',
            },
        ];
        this.userId = null;
        this.alertMessage = '';
        this.alertType = '';
        this.alertVisible = false;
        this.loading = false;
    }
    // Update user fields with current details
    ngOnInit() {
        const { user_id, full_name, email } = this._token.getUser();
        this.userId = user_id;
        this.user[0].value = full_name;
        this.user[1].value = email;
        console.log(this.user);
    }
    canUpdate() {
        return this.user.filter((field) => field.value.length > 0).length !== 4
            ? true
            : false;
    }
    // Submit data to be updated
    onSubmit() {
        this.alertVisible = false;
        if (this.user[2].value !== this.user[3].value) {
            this.alertType = 'error';
            this.alertMessage = 'Passwords do not match';
            this.alertVisible = true;
        }
        else {
            this.loading = true;
            this._api
                .putTypeRequest(`users/${this.userId}`, {
                fullName: this.user[0].value,
                email: this.user[1].value,
                password: this.user[2].value,
            })
                .subscribe((res) => {
                console.log(res);
                this.alertMessage = res.message;
                this.alertType = 'success';
                this.alertVisible = true;
                this.loading = false;
                const oldDetails = this._token.getUser();
                this._token.setUser(Object.assign(Object.assign({}, oldDetails), { full_name: this.user[0].value, email: this.user[1].value }));
                this.user[2].value = '';
                this.user[3].value = '';
                // window.location.reload();
            }, (err) => {
                console.log(err);
                this.alertMessage = err.error.message;
                this.alertVisible = true;
                this.alertType = 'error';
                this.loading = false;
            });
        }
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 10, vars: 4, consts: [[1, "profile-container"], [1, "form-container"], ["nzShowIcon", "", 3, "nzType", "nzMessage", "ngStyle", 4, "ngIf"], [3, "ngSubmit"], ["class", "input-container", 4, "ngFor", "ngForOf"], [1, "cta-container"], ["nz-button", "", "type", "submit", 3, "nzLoading", "disabled"], ["nzShowIcon", "", 3, "nzType", "nzMessage", "ngStyle"], [1, "input-container"], ["for", "field.key"], ["nz-input", "", 3, "name", "type", "value", "ngModel", "valueChange", "ngModelChange"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_nz_alert_4_Template, 1, 4, "nz-alert", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_div_6_Template, 4, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alertVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.loading)("disabled", ctx.canUpdate());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__["NzAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".profile-container[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n}\n.profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  max-width: 475px;\n  padding: 24px 16px;\n  margin: 0 auto;\n}\n.profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  display: inline-block;\n  margin-bottom: 6px;\n}\n.profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  width: 100%;\n}\n.profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  height: 52px;\n  width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .profile-container[_ngcontent-%COMP%] {\n    padding: 48px 16px 240px;\n  }\n  .profile-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    padding: 36px;\n    border: 1px solid #ccc;\n    border-radius: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUVKO0FBREk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBR047QUFBTTtFQUNFLG1CQUFBO0FBRVI7QUFEUTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUdWO0FBRFE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFHVjtBQUFNO0VBQ0UsZ0JBQUE7QUFFUjtBQURRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFHVjtBQUlBO0VBQ0U7SUFDRSx3QkFBQTtFQURGO0VBRUU7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQUFKO0FBQ0YiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMjRweCAxNnB4O1xyXG4gIC5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDQ3NXB4O1xyXG4gICAgcGFkZGluZzogMjRweCAxNnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICA+IGgyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgPiBmb3JtIHtcclxuICAgICAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICA+IGxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgID4gaW5wdXQge1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jdGEtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgID4gYnV0dG9uIHtcclxuICAgICAgICAgIGhlaWdodDogNTJweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAucHJvZmlsZS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNDhweCAxNnB4IDI0MHB4O1xyXG4gICAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZzogMzZweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgLy8gICA+IGgyIHtcclxuICAgICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLy8gICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/components/login/login.component */ "OuDC");
/* harmony import */ var _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/components/register/register.component */ "ysMu");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-history/order-history.component */ "d759");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/product.component */ "LvIC");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product-card/product-card.component */ "8R/P");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/auth.module */ "Yj9t");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_interceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/interceptor.service */ "KRBT");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guards/auth-guard.service */ "Hs9l");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/notification */ "bNXi");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/progress */ "W9fG");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _google_model_viewer__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @google/model-viewer */ "PzGh");
/* harmony import */ var _products_card_products_card_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./products-card/products-card.component */ "Vy/u");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./product-details/product-details.component */ "ylPK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/core */ "fXoL");








































Object(_angular_common__WEBPACK_IMPORTED_MODULE_21__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_22___default.a);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdefineInjector"]({ providers: [
        _services_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["authInterceptorProviders"],
        _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGuardService"],
        { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_20__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_20__["en_US"] },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_16__["AuthModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__["NzButtonModule"],
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_25__["NzDropDownModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_26__["NzIconModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__["NzInputModule"],
            ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_28__["NzAlertModule"],
            ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_29__["NzInputNumberModule"],
            swiper_angular__WEBPACK_IMPORTED_MODULE_30__["SwiperModule"],
            ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_31__["NzSpinModule"],
            ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_32__["NzNotificationModule"],
            ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_33__["NzProgressModule"],
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__["NzTableModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"],
        _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_9__["OrderHistoryComponent"],
        _product_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"],
        _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__["CheckoutComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
        _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_15__["ProductCardComponent"],
        _products_card_products_card_component__WEBPACK_IMPORTED_MODULE_36__["ProductsCardComponent"],
        _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_37__["ProductDetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_16__["AuthModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__["NzButtonModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_25__["NzDropDownModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_26__["NzIconModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__["NzInputModule"],
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_28__["NzAlertModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_29__["NzInputNumberModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_30__["SwiperModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_31__["NzSpinModule"],
        ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_32__["NzNotificationModule"],
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_33__["NzProgressModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__["NzTableModule"]] }); })();


/***/ }),

/***/ "Zr0/":
/*!***************************************************!*\
  !*** ./src/app/services/token-storage.service.ts ***!
  \***************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TokenStorageService {
    constructor() {
        this.TOKEN_KEY = 'auth-token';
        this.USER_KEY = 'auth-user';
    }
    getToken() {
        return sessionStorage.getItem(this.TOKEN_KEY);
    }
    setToken(token) {
        sessionStorage.removeItem(this.TOKEN_KEY);
        sessionStorage.setItem(this.TOKEN_KEY, token);
    }
    getUser() {
        return JSON.parse(sessionStorage.getItem(this.USER_KEY));
    }
    setUser(user) {
        sessionStorage.removeItem(this.USER_KEY);
        sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }
    clearStorage() {
        sessionStorage.clear();
    }
}
TokenStorageService.ɵfac = function TokenStorageService_Factory(t) { return new (t || TokenStorageService)(); };
TokenStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenStorageService, factory: TokenStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "bkdU":
/*!********************************!*\
  !*** ./src/app/home/test.json ***!
  \********************************/
/*! exports provided: value, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"value\":[{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Book%20Rack_1.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Book%20Rack_1.glb\",\"DisplayProductNumber\":\"hexa1018\",\"Description\":\"A storage unit with open shelves to keep books and other things of various shapes and sizes and a display shelf. Crafted for compact homes. Suitable for Study rooms and Living room. Sense and sensibility, just like its namesake. Thebook rack slim, compact design belies its capacity. The five open shelves give you room aplenty for your next book shopping spree.\",\"Model_ID\":\"Book_Rack_AT\",\"Color\":\"Brown\",\"ColorCode\":{\"R\":179,\"G\":157,\"B\":133},\"Volume\":352350,\"Usage\":\"Home\",\"Length\":150,\"SubCategory\":\"Rack\",\"Height\":81,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Book%20Rack_1.png\",\"PriceText\":\"$ 499\",\"Price\":499,\"Area\":2349,\"Width\":29,\"Name\":\"Book Rack\",\"Short_Description\":\"Aesthetic piece of furniture for your work space\",\"variants\":[],\"dimensions\":[{\"Length\":150,\"Width\":29,\"Height\":81,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Comfort%20in%20the%20Kitchen.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Comfort%20in%20the%20Kitchen.glb\",\"DisplayProductNumber\":\"hexa1002\",\"Description\":\"Regardless of it’s size or layout, the kitchen can also function as your office. Transform your “surface” into a standing height desk with the Coordinate Portable Desktop Riser.  A simple lift transforms the  coffee table to laptop table. Great for those prone to bringing home work from the office. And for those who like to put their feet up and binge watch The Office. The elegant oak finish means it can sit pretty in your living room, letting you multitask.\",\"Model_ID\":\"WFHSF_2\",\"Color\":\"Brown\",\"ColorCode\":{\"R\":196,\"G\":163,\"B\":138},\"Volume\":322368,\"Usage\":\"\",\"Length\":73,\"SubCategory\":\"Set\",\"Height\":96,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Comfort%20in%20the%20Kitchen.png\",\"PriceText\":\"$ 699\",\"Price\":699,\"Area\":7008,\"Width\":46,\"Name\":\"Comfort in the Kitchen\",\"Short_Description\":\" Uniform horizontal slats to bring an element of play at your kitchen.\",\"variants\":[],\"dimensions\":[{\"Length\":73,\"Width\":46,\"Height\":96,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/CrossRoads%20Of%20Style%20and%20Function.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/CrossRoads%20Of%20Style%20and%20Function.glb\",\"DisplayProductNumber\":\"hexa10001\",\"Description\":\"Create a workspace that blends seamlessly into your functional home environment. The ample surface and drawers make it an ideal desk for students and professionals alike. We offer a broad offering so you can choose the form and function that works best for your space!\",\"Model_ID\":\"WFHSF_1\",\"Color\":\"Grey\",\"ColorCode\":{\"R\":123,\"G\":122,\"B\":122},\"Volume\":731640,\"Usage\":\"WFH\",\"Length\":67,\"SubCategory\":\"Set\",\"Height\":140,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/CrossRoads%20of%20Style%20and%20Function.png\",\"PriceText\":\"$ 699\",\"Price\":699,\"Area\":9380,\"Width\":78,\"Name\":\"Crossroads of Style and Function\",\"Short_Description\":\"Reflecting  design that is sleek, trendy and functional.\",\"variants\":[],\"dimensions\":[{\"Length\":67,\"Width\":78,\"Height\":140,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Dedicated%20Furniture.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Dedicated%20Furniture.glb\",\"DisplayProductNumber\":\"hexa1008\",\"Description\":\"This chic space with perfect ergnomics gets the most out of the space occupied while looking elegant. It has a wire manager on either ends and is wide and deep enough to hold an extension cord and all the cables needed to power all of your devices.\",\"Model_ID\":\"WFHSF_8\",\"Color\":\"Brown\",\"ColorCode\":{\"R\":69,\"G\":68,\"B\":68},\"Volume\":3652960,\"Usage\":\"WFH\",\"Length\":170,\"SubCategory\":\"Set\",\"Height\":79,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Dedicated%20Furniture.png\",\"PriceText\":\"$ 699\",\"Price\":699,\"Area\":21488,\"Width\":272,\"Name\":\"Dedicated Furniture\",\"Short_Description\":\"Productivity meets style with the Poise table\",\"variants\":[],\"dimensions\":[{\"Length\":170,\"Width\":272,\"Height\":79,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Make%20it%20your%20Own.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Make%20it%20your%20Own.glb\",\"DisplayProductNumber\":\"hexa1005\",\"Description\":\"An elegant design that helps you be clutter free. Whenever you feel like working at home, there is a friendly co-worker ready to help you. The executive chair is your table’s best friend and your favourite working companion.\",\"Model_ID\":\"WFHSF_5\",\"Color\":\"Grey\",\"ColorCode\":{\"R\":136,\"G\":138,\"B\":145},\"Volume\":1921280,\"Usage\":\"WFH\",\"Length\":152,\"SubCategory\":\"Set\",\"Height\":169,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Make%20it%20your%20Own.png\",\"PriceText\":\"$ 699\",\"Price\":699,\"Area\":12008,\"Width\":79,\"Name\":\"Make it your Own\",\"Short_Description\":\"Crafted in a thin and light design\",\"variants\":[],\"dimensions\":[{\"Length\":152,\"Width\":79,\"Height\":169,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Simple%20and%20Inspiring.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Simple%20and%20Inspiring.glb\",\"DisplayProductNumber\":\"1001\",\"Description\":\"Here, a simple desk can create an office that’s both inspiring and practical. The small storage pedestal helps conceal supplies and files that completes a fully functional home office. The slim proportions and simple design can fit into any kind of work/study space\",\"Model_ID\":\"WFHSF_4\",\"Color\":\"Brown\",\"ColorCode\":{\"R\":221,\"G\":195,\"B\":179},\"Volume\":866400.9,\"Usage\":\"WFH\",\"Length\":152,\"SubCategory\":\"Set\",\"Height\":76,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Simple%20and%20Inspiring.png\",\"PriceText\":\"$ 699\",\"Price\":699,\"Area\":11552.9,\"Width\":75,\"Name\":\"Simple and Inspiring\",\"Short_Description\":\"Robust design with bold framework\",\"variants\":[],\"dimensions\":[{\"Length\":152,\"Width\":75,\"Height\":76,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Space%20saver.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Space%20saver.glb\",\"DisplayProductNumber\":\"hexa1006\",\"Description\":\"This approach requires getting the most out of every inch of space by adding a versatile between table with a comfortable Solve task chair. Once the work day is done, nest it away to make room for other activities.\",\"Model_ID\":\"WFHSF_6\",\"Color\":\"White\",\"ColorCode\":{\"R\":217,\"G\":217,\"B\":216},\"Volume\":783900,\"Usage\":\"WFH\",\"Length\":78,\"SubCategory\":\"Set\",\"Height\":150,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Space%20Saver.png\",\"PriceText\":\"$ 699\",\"Price\":699,\"Area\":10050,\"Width\":67,\"Name\":\"Space saver\",\"Short_Description\":\" Designed to comfortably and aesthetically provide a working surface\",\"variants\":[],\"dimensions\":[{\"Length\":78,\"Width\":67,\"Height\":150,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Teapoy_1.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Teapoy_1.glb\",\"DisplayProductNumber\":\"hexa1022\",\"Description\":\"Have a seat!  The tea table set makes a great addition to your home. It has an extremely modern contemporary look that helps you set up space in your home, restaurant, office, etc. It is durable and long lasting body.  If you like the no fuss approach, this is the perfect teapoy table for you. \",\"Model_ID\":\"Teapoy_AT_2\",\"Color\":\"Brown\",\"ColorCode\":{\"R\":208,\"G\":193,\"B\":172},\"Volume\":262400,\"Usage\":\"Home\",\"Length\":80,\"SubCategory\":\"Set\",\"Height\":41,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Teapoy_1.png\",\"PriceText\":\"$ 699\",\"Price\":699,\"Area\":3280,\"Width\":80,\"Name\":\"Teapoy Set\",\"Short_Description\":\"Contemporary is very current and in trend, of the here and now.\",\"variants\":[],\"dimensions\":[{\"Length\":80,\"Width\":80,\"Height\":41,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/The%20Bold%20and%20Beautiful.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/The%20Bold%20and%20Beautiful.glb\",\"DisplayProductNumber\":\"hexa1007\",\"Description\":\"This chic space with clean lines excels at all the fundamentals. A clean and elegant table with contemporary book-end design. Comes along with a drawer, wire-manager and compact design to satisfy all needs.\",\"Model_ID\":\"WFHSF_7\",\"Color\":\"Brown\",\"ColorCode\":{\"R\":102,\"G\":85,\"B\":70},\"Volume\":1238328,\"Usage\":\"WFH\",\"Length\":108,\"SubCategory\":\"Set\",\"Height\":182,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/The%20Bold%20and%20Beautiful.png\",\"PriceText\":\"$ 699\",\"Price\":699,\"Area\":11466,\"Width\":63,\"Name\":\"The Bold and Beautiful\",\"Short_Description\":\"Enhance your home with your own unique style\",\"variants\":[],\"dimensions\":[{\"Length\":108,\"Width\":63,\"Height\":182,\"Section\":null}]},{\"IosSrc\":\"https://hnicorpcdn.azureedge.net/furniture-mr/web-ar/Two%20seater%20Sofa_1.usdz\",\"Src\":\"https://hnicorpcdn.azureedge.net/furniture-mr/web-ar/Two%20seater%20Sofa_1.glb\",\"DisplayProductNumber\":\"hexa1023\",\"Description\":\"Beautify your space with elegance. Give your back the comfort it needs while adding a hint of finess to your living room décor with this classy sofa. Crafted from premium quality solid wood, the sofa features a two-seater design with textured fabric upholstery that adds to the over-all look of your home-front.\",\"Model_ID\":\"Sofa_AT_1\",\"Color\":\"White\",\"ColorCode\":{\"R\":192,\"G\":178,\"B\":164},\"Volume\":111520,\"Usage\":\"Home\",\"Length\":40,\"SubCategory\":\"Sofa\",\"Height\":68,\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1023.png\",\"PriceText\":\"$ 999\",\"Price\":999,\"Area\":2788,\"Width\":41,\"Name\":\"Two seater sofa\",\"Short_Description\":\"Add that touch of warmth that modern homes need.\",\"variants\":[],\"dimensions\":[{\"Length\":40,\"Width\":41,\"Height\":68,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Workspace%20with%20a%20view.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Workspace%20with%20a%20view.glb\",\"DisplayProductNumber\":\"1003\",\"Description\":\"Although space might be tight, a little creativity and rearranging goes a long way. This desk really maximizes the space with the open leg support that keeps the room feeling open and airy. Add the Matter task chair that combines style and comfort for the perfect finish to the room.\",\"Model_ID\":\"WFHSF_3\",\"Color\":\"Grey\",\"ColorCode\":{\"R\":150,\"G\":142,\"B\":150},\"Volume\":2311848,\"Usage\":\"WHF\",\"Length\":189,\"SubCategory\":\"Set\",\"Height\":138,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Workspace%20with%20a%20view.png\",\"PriceText\":\"$ 699\",\"Price\":699,\"Area\":26271,\"Width\":88,\"Name\":\"Workspace with a view\",\"Short_Description\":\"Sleek and smart desk designed to fit in any corner of your room\",\"variants\":[],\"dimensions\":[{\"Length\":189,\"Width\":88,\"Height\":138,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_C_AT2_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_C_AT2_512.glb\",\"DisplayProductNumber\":\"hexa1010\",\"Description\":\"An essential key to successful teamwork and collaboration is creating a functional office design where people can be accessible to one another. The work area designed for maximum and effective utilization of the space available, without compromising comfort and privacy. Arrange your files and papers neatly inside the drawers that operate smoothly on quality hardware. There’s another pocket to accommodate all the messy wires.\",\"Model_ID\":\"_C_AT2\",\"Color\":\"Yellow\",\"ColorCode\":{\"R\":215,\"G\":196,\"B\":100},\"Volume\":15123420,\"Usage\":\"Office\",\"Length\":138,\"SubCategory\":\"Cubicle\",\"Height\":562,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Array%20Cubicle%20Set.png\",\"PriceText\":\"$ 1999\",\"Price\":1999,\"Area\":109590,\"Width\":195,\"Name\":\"Array Cubicle Set\",\"Short_Description\":\"Simple and Comfortable work from home furnitures\",\"variants\":[],\"dimensions\":[{\"Length\":138,\"Width\":195,\"Height\":562,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_C_AT3_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_C_AT3_512.glb\",\"DisplayProductNumber\":\"hexa1009\",\"Description\":\"Worspace designed for maximum productivity and inspired by modern ergonomics. The sofa in between is compact, cozy gives you ultimate comfort. Beautifully finished, the dual tone desk will complement any decor style. The generous table has room for you to spread out, and the two deep drawers help keep a check on overflowing papers, files, and more. There’s plenty of space below for legs to stretch comfortably\",\"Model_ID\":\"_C_AT3\",\"Color\":\"Green\",\"ColorCode\":{\"R\":165,\"G\":176,\"B\":150},\"Volume\":13400320,\"Usage\":\"Office\",\"Length\":152,\"SubCategory\":\"Cubicle\",\"Height\":580,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Cubicle%20Set.png\",\"PriceText\":\"$ 1999\",\"Price\":1999,\"Area\":88160,\"Width\":152,\"Name\":\"Cubicle Set\",\"Short_Description\":\"Add style and functionality to your work from home office furniture space.\",\"variants\":[],\"dimensions\":[{\"Length\":152,\"Width\":152,\"Height\":580,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_C_GIM3_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_C_GIM3_512.glb\",\"DisplayProductNumber\":\"hexa1016\",\"Description\":\"The users feel connected to their co-workers while still maintaining an element of personal space in an otherwise open environment. Bonus features include personal storage lockers under the desktops and panel supported benches Created for today’s active workplace, active workstyles, and active sitting. It is responsive and supportive of your every move\",\"Model_ID\":\"_C_GIM3\",\"Color\":\"Blue\",\"ColorCode\":{\"R\":49,\"G\":85,\"B\":122},\"Volume\":21410634,\"Usage\":\"Office\",\"Length\":137,\"SubCategory\":\"Cubicle\",\"Height\":427,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Cubic%20Medley.png\",\"PriceText\":\"$ 1999\",\"Price\":1999,\"Area\":156282,\"Width\":366,\"Name\":\"Cubic Medley\",\"Short_Description\":\"Tech-savvy and impressively eye-catching\",\"variants\":[],\"dimensions\":[{\"Length\":137,\"Width\":366,\"Height\":427,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_CR_HOC_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_CR_HOC_512.glb\",\"DisplayProductNumber\":\"hexa1017\",\"Description\":\"These tables are designed to evoke a personal experience and visceral reaction to its detail and materials. The passion for organic materials puts the wood and joinery in focus, concentrating you to how a vertical surface links to a horizontal surface. This airplane section, modern and round, softly transcends, pointing more toward the future than the past.\",\"Model_ID\":\"_CR_HOC\",\"Color\":\"Black\",\"ColorCode\":{\"R\":47,\"G\":42,\"B\":37},\"Volume\":4542060,\"Usage\":\"Office\",\"Length\":85,\"SubCategory\":\"Table\",\"Height\":366,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Harmani%20Oval%20Conference.png\",\"PriceText\":\"$ 699\",\"Price\":699,\"Area\":53436,\"Width\":146,\"Name\":\"Harmani Oval Conference\",\"Short_Description\":\"You can never be out of reasons for gathering around your conference table\",\"variants\":[],\"dimensions\":[{\"Length\":85,\"Width\":146,\"Height\":366,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_IC_ACB_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_IC_ACB_512.glb\",\"DisplayProductNumber\":\"hexa1012\",\"Description\":\"This chair provides great durability and toughness so that you can say goodbye to all your worries while relaxing on the comfortable leatherette cushion upholstery. Designed with sleek curved armrest, this chair will bring a professional tone and convert your working space at home into a professional office setting. Let the hard working days now be filled with sturdiness.\",\"Model_ID\":\"_IC_ACB\",\"Color\":\"Orange\",\"ColorCode\":{\"R\":254,\"G\":119,\"B\":46},\"Volume\":318246,\"Usage\":\"Office\",\"Length\":93,\"SubCategory\":\"Chair\",\"Height\":59,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Array%20Conference%20Chair.png\",\"PriceText\":\"$ 199\",\"Price\":199,\"Area\":3422,\"Width\":58,\"Name\":\"Array Conference Chair\",\"Short_Description\":\" A fluid chair is a must for a healthier, happier work spot.\",\"variants\":[],\"dimensions\":[{\"Length\":93,\"Width\":58,\"Height\":59,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_IC_AGP3_B_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_IC_AGP3_B_512.glb\",\"DisplayProductNumber\":\"hexa1011\",\"Description\":\"With three back materials, synchro-tilt control and an optional adjustable lumbar support, Solve answers the need for a higher level of personalization. The 4-Way Stretch mesh back provides responsive support and a softer fit. The geometric ReActiv back flexes and moves with the user to provide a firmer fit, and an upholstered front can be added to increase support and thermal comfort. Solve helps anyone achieve optimal balance and alignment, making it an ideal solution for everybody.\",\"Model_ID\":\"_IC_AGP3\",\"Color\":\"White\",\"ColorCode\":{\"R\":133,\"G\":129,\"B\":129},\"Volume\":100,\"Usage\":\"Office\",\"Length\":130,\"SubCategory\":\"Chair\",\"Height\":73,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_IC_AGP3_B-removebg-preview.png\",\"PriceText\":\"$ 199\",\"Price\":199,\"Area\":5548,\"Width\":76,\"Name\":\"Chair Array Black\",\"Short_Description\":\"Complete multitask chairs offering effortless mobility\",\"variants\":[],\"dimensions\":[{\"Length\":130,\"Width\":76,\"Height\":73,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_L_CB_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_L_CB_512.glb\",\"DisplayProductNumber\":\"hexa1013\",\"Description\":\"A wonderful lounger offers a fine resting experience. If you’re looking for the finer things in life, here’s a product that will surely catch your fancy.The bonded leather upholstery and foam cushions allow the lounger to offer an amazing amount of comfort. \",\"Model_ID\":\"_L_CB\",\"Color\":\"Yellow\",\"ColorCode\":{\"R\":223,\"G\":187,\"B\":41},\"Volume\":368954305,\"Usage\":\"Office\",\"Length\":271,\"SubCategory\":\"Lounge\",\"Height\":1385,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Collaborative%20Furniture.png\",\"PriceText\":\"$ 1999\",\"Price\":1999,\"Area\":1361455,\"Width\":983,\"Name\":\" Collaborative Furniture\",\"Short_Description\":\"Office furniture that encourages workforce collaboration\",\"variants\":[],\"dimensions\":[{\"Length\":271,\"Width\":983,\"Height\":1385,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_L_MH2_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_L_MH2_512.glb\",\"DisplayProductNumber\":\"hexa1014\",\"Description\":\"For every tablet, coffee mug, or notepad, there's a need for an occasional table. Don't scramble to find an open meeting room when you can move the tables you need around a lounge space. The cross-bar design provides a mid-century aesthetic which fits perfectly with any lounge setting to bring people together effortlessly.\",\"Model_ID\":\"_L_MH2\",\"Color\":\"Grey\",\"ColorCode\":{\"R\":64,\"G\":63,\"B\":61},\"Volume\":286272000,\"Usage\":\"Office\",\"Length\":355,\"SubCategory\":\"Large Seater\",\"Height\":900,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Miter%20Round%20Side%20Table%20with%20Lounge%20set.png\",\"PriceText\":\"$ 699\",\"Price\":699,\"Area\":806400,\"Width\":896,\"Name\":\"Miter Round Side Table with Lounge set\",\"Short_Description\":\"Unique, captivating and fashioned out of fine-quality\",\"variants\":[],\"dimensions\":[{\"Length\":355,\"Width\":896,\"Height\":900,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Monaca%20Sofa_1.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Monaca%20Sofa_1.glb\",\"DisplayProductNumber\":\"hexa1025\",\"Description\":\"Be it the attractive color of the piece or even the comfortable seating ergonomics, we've got them sorted with our lounger sofa. Generous proportions to stretch, lean back, or sneak in a nap, you can do it all. Bring a sense of comfort and cohesion to your favorite seating space with this sofa.\",\"Model_ID\":\"Sofa_AT_1_02\",\"Color\":\"White\",\"ColorCode\":{\"R\":193,\"G\":180,\"B\":164},\"Volume\":528138,\"Usage\":\"Home\",\"Length\":99,\"SubCategory\":\"Sofa\",\"Height\":233,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Monaca%20Sofa_1.png\",\"PriceText\":\"$ 999\",\"Price\":999,\"Area\":233,\"Width\":78,\"Name\":\"Three seater sofa\",\"Short_Description\":\"Sofa set brings impeccable aesthetics and design value to your interiors\",\"variants\":[],\"dimensions\":[{\"Length\":99,\"Width\":78,\"Height\":233,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Night%20Lamp_1.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Night%20Lamp_1.glb\",\"DisplayProductNumber\":\"hexa1021\",\"Description\":\"Modify brightness and match the ambience with colors. The soft and cozy material of it presents a beautiful simple look and transforms the room into a cozy and relaxed enviornment. Illuminate your room effectively with this Stylish and Elegant Lamp Customary because every room deserves one.\",\"Model_ID\":\"Table_Lamp_AT_2\",\"Color\":\"Black\",\"ColorCode\":{\"R\":37,\"G\":38,\"B\":43},\"Volume\":29520,\"Usage\":\"Home\",\"Length\":30,\"SubCategory\":\"Lamp\",\"Height\":24,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Night%20Lamp_1.png\",\"PriceText\":\"$ 299\",\"Price\":299,\"Area\":0,\"Width\":41,\"Name\":\"Dark Lamp\",\"Short_Description\":\"Unique simple tap design dark lamp\",\"variants\":[],\"dimensions\":[{\"Length\":30,\"Width\":41,\"Height\":24,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Table%20Lamp_1.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Table%20Lamp_1.glb\",\"DisplayProductNumber\":\"hexa1020\",\"Description\":\"A lovely, inexpensive, and practical table lamp to meet your basic fashion lighting needs. Furnish your home and  light up your desk. As a side table lamp, it is perfect for your bedroom or kid room, matching with any décor, it may help to decorate uour home and make it modernised.\",\"Model_ID\":\"Table_Lamp_AT_1\",\"Color\":\"White\",\"ColorCode\":{\"R\":227,\"G\":227,\"B\":229},\"Volume\":30015,\"Usage\":\"Home\",\"Length\":29,\"SubCategory\":\"Lamp\",\"Height\":23,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Table%20Lamp_1.png\",\"PriceText\":\"$ 299\",\"Price\":299,\"Area\":1035,\"Width\":45,\"Name\":\"White Lamp\",\"Short_Description\":\"Design which are influenced by architectural concept\",\"variants\":[],\"dimensions\":[{\"Length\":29,\"Width\":45,\"Height\":23,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Wall%20Rack_1.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Wall%20Rack_1.glb\",\"DisplayProductNumber\":\"hexa1024\",\"Description\":\"Match your rack with your ambience. It is not only a storage solution to your house, but also a pretty display in your house. You can store your books, show-piece items by keeping them well organised yet easy to access.\",\"Model_ID\":\"Wooden_Rack_AT\",\"Color\":\"Grey\",\"ColorCode\":{\"R\":164,\"G\":155,\"B\":138},\"Volume\":284130,\"Usage\":\"Home\",\"Length\":154,\"SubCategory\":\"Rack\",\"Height\":45,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Wall%20Rack_1.png\",\"PriceText\":\"$ 249\",\"Price\":249,\"Area\":1845,\"Width\":41,\"Name\":\"Show piece Rack\",\"Short_Description\":\"Modern furniture lives at the intersection of clean lines and relaxed comfort\",\"variants\":[],\"dimensions\":[{\"Length\":154,\"Width\":41,\"Height\":45,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Wooden%20Stool_1.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Wooden%20Stool_1.glb\",\"DisplayProductNumber\":\"hexa1019\",\"Description\":\"Cozy and efficient tea table in a low budget. A polished finish coffee/ tea table adds an elegant touch to your living room décor. The secondary material is hard wooden columns. It is rich in quality and hence long lasting.\",\"Model_ID\":\"Teapoy_AT_1\",\"Color\":\"Brown\",\"ColorCode\":{\"R\":209,\"G\":138,\"B\":106},\"Volume\":154800,\"Usage\":\"Home\",\"Length\":60,\"SubCategory\":\"Table\",\"Height\":43,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Wooden%20Stool_1.png\",\"PriceText\":\"$ 499\",\"Price\":499,\"Area\":2580,\"Width\":60,\"Name\":\"Teapoy\",\"Short_Description\":\"classic amalgamation of form and function\",\"variants\":[],\"dimensions\":[{\"Length\":60,\"Width\":60,\"Height\":43,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/SEYCHR_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/SEYCHR_512.glb\",\"DisplayProductNumber\":\"hexa1030\",\"Description\":\"The Seymour Chair offers incredible flexibility - with design options including swivel or fixed base, and three different back heights including a low, mid and high back for extra head support. A luxurious way to relax at home.\",\"Model_ID\":\"SEYCHR\",\"Color\":\"Brown\",\"ColorCode\":{\"R\":37,\"G\":37,\"B\":37},\"Volume\":845240000,\"Usage\":\"Office\",\"Length\":850,\"SubCategory\":\"Chair\",\"Height\":1130,\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1040.png\",\"PriceText\":\"$ 199\",\"Price\":199,\"Area\":748000,\"Width\":880,\"Name\":\"Seymour Chair\",\"Short_Description\":\"The Seymour chair is available in a range of back heights so you can customise \",\"variants\":[],\"dimensions\":[{\"Length\":850,\"Width\":880,\"Height\":1130,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLQIDT_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLQIDT_512.glb\",\"DisplayProductNumber\":\"hexa1031\",\"Description\":\"Quay's slender legs and gentle curves will bring a luxurious elegance to any dining room. Complemented by Quay dining chairs available in a wide range of premium fabrics and leathers.\",\"Model_ID\":\"KLQIDT\",\"Color\":\"Grey\",\"ColorCode\":{\"R\":81,\"G\":76,\"B\":72},\"Volume\":1368000000,\"Usage\":\"Office\",\"Length\":1000,\"SubCategory\":\"Table\",\"Height\":760,\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1031.png\",\"PriceText\":\"$ 499\",\"Price\":499,\"Area\":748000,\"Width\":1800,\"Name\":\"Quay Indoor Dining Table\",\"Short_Description\":\"Quay's slender legs and gentle curves will bring a luxurious elegance to any dining room\",\"variants\":[],\"dimensions\":[{\"Length\":1000,\"Width\":1800,\"Height\":760,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLSAFL.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLSAFL_512.glb\",\"DisplayProductNumber\":\"hexa1032\",\"Description\":\"Create the perfect ambience with a sophisticated collection of lamps and pendant lights.\",\"Model_ID\":\"KLSAFL\",\"Color\":\"Black\",\"ColorCode\":{\"R\":24,\"G\":24,\"B\":26},\"Volume\":34614000,\"Usage\":\"Office\",\"Length\":100,\"SubCategory\":\"Lamp\",\"Height\":1923,\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1032.png\",\"PriceText\":\"$ 299\",\"Price\":299,\"Area\":18000,\"Width\":180,\"Name\":\"Solifiore Arum Floor Lamp\",\"Short_Description\":\"Customise your space with our range of lightning products\",\"variants\":[],\"dimensions\":[{\"Length\":100,\"Width\":180,\"Height\":1923,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLSGFL_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLSGFL_512.glb\",\"Name\":\"Solifiore Gymea Floor Lamp\",\"Model_ID\":\"KLSGFL\",\"SubCategory\":\"Lamp\",\"DisplayProductNumber\":\"hexa1033\",\"Usage\":\"Office \",\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1033.png\",\"PriceText\":\"$ 299\",\"Price\":299,\"Description\":\"Create the perfect ambience with a sophisticated collection of lamps and pendant lights.\",\"Short_Description\":\"Customise your space with our range of lightning products\",\"Color\":\"Black\",\"Volume \":\"31000\",\"Area\":\"55645000\",\"Length\":100,\"Width\":310,\"Height\":1795,\"ColorCode\":{\"R\":28,\"G\":28,\"B\":30},\"variants\":[],\"dimensions\":[{\"Length\":100,\"Width\":310,\"Height\":1795,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/BETRLS_1_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/BETRLS_1_512.glb\",\"Name\":\"Betrillo Loveseat\",\"Model_ID\":\"BETRLS\",\"SubCategory\":\"Sofa\",\"DisplayProductNumber\":\"hexa1034\",\"Usage\":\"Office \",\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1034.png\",\"PriceText\":\"$ 999\",\"Price\":999,\"Description\":\"Great design draws inspiration from various places, and the Betrillo loveseat is no exception. Diamond-stitched pattern seen in high-end handbags and luxury car interiors is simply irresistible on this sumptuous, generously padded seating experience\",\"Short_Description\":\"Durable, easy-care leather alternative delivers the look you crave at a PriceText that’s decidedly easy on your purse.\",\"Color\":\"Black\",\"Volume \":\"1683000\",\"Area\":\"1565190000\",\"Length\":990,\"Width\":1700,\"Height\":930,\"ColorCode\":{\"R\":39,\"G\":38,\"B\":36},\"variants\":[],\"dimensions\":[{\"Length\":990,\"Width\":1700,\"Height\":930,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/ISCSTL_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/ISCSTL_512.glb\",\"Name\":\"Issho Coffee & Side Table\",\"Model_ID\":\"ISCSTL\",\"SubCategory\":\"Table\",\"DisplayProductNumber\":\"hexa1035\",\"Usage\":\"Office \",\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1035.png\",\"PriceText\":\"$ 499\",\"Price\":499,\"Description\":\"Inspired by organic forms and architectural lines, Issho celebrates an elegance of craftmanship and subtle detailing. The table is presented in a series of repeated ‘fins’ that forms a sculptural base both distinctively beautiful and functional.\",\"Short_Description\":\"Featuring asymmetric pebble shaped tops to bring a calming and meditative poise to living spaces.\",\"Color\":\"Brown\",\"Volume \":\"92977500\",\"Area\":\"122500\",\"Length\":350,\"Width\":350,\"Height\":759,\"ColorCode\":{\"R\":87,\"G\":87,\"B\":87},\"variants\":[],\"dimensions\":[{\"Length\":350,\"Width\":350,\"Height\":759,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/MOCOTL_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/MOCOTL_512.glb\",\"Name\":\"Monument Coffee Table\",\"Model_ID\":\"MOCOTL\",\"SubCategory\":\"Table\",\"DisplayProductNumber\":\"hexa1036\",\"Usage\":\"Office \",\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1036.png\",\"PriceText\":\"$ 499\",\"Price\":499,\"Description\":\"Timeless and sculptural, Monument showcases materiality in its bold yet simple form. Crafted from premium porcelain ceramic, it’s the perfect occasional table for both the indoors and outdoors.\",\"Short_Description\":\"The low and square variants are ideal as coffee tables, whilst the tall is perfect as a bedside or side table.\",\"Color\":\"Grey\",\"Volume \":\"76532000\",\"Area\":\"201400\",\"Length\":530,\"Width\":380,\"Height\":380,\"ColorCode\":{\"R\":102,\"G\":102,\"B\":102},\"variants\":[],\"dimensions\":[{\"Length\":530,\"Width\":380,\"Height\":380,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLASDO_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLASDO_512.glb\",\"Name\":\"Aspen Sideboard 2 Door 1 Drawer\",\"Model_ID\":\"KLASDD\",\"SubCategory\":\"Rack\",\"DisplayProductNumber\":\"hexa1037\",\"Usage\":\"Office \",\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1037.png\",\"PriceText\":\"$ 499\",\"Price\":499,\"Description\":\"The Aspen Sideboard offers a beautiful, classic aesthetic that will work harmoniously in your home. Aspen Sideboard seamlessly blends style and practicality with a clever soft-close drawer to keep your space clutter free.\",\"Short_Description\":\"Crafted from high quality solid and sustainably sourced American Walnut Timber\",\"Color\":\"Brown\",\"Volume \":\"610560000\",\"Area\":\"1272000\",\"Length\":636,\"Width\":2000,\"Height\":480,\"ColorCode\":{\"R\":80,\"G\":48,\"B\":33},\"variants\":[],\"dimensions\":[{\"Length\":636,\"Width\":2000,\"Height\":480,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/MACLST_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/MACLST_512.glb\",\"Name\":\"Macleary Loveseat\",\"Model_ID\":\"MACLST\",\"SubCategory\":\"Sofa\",\"DisplayProductNumber\":\"hexa1038\",\"Usage\":\"Office \",\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1038.png\",\"PriceText\":\"$ 499\",\"Price\":499,\"Description\":\"Get comfortable with a modern aesthetic when you add the Macleary loveseat to your home or office. A clean, linear design fits so well into any sophisticated space. With velvet upholstery and a sleek metal accent leg, this piece elevates your decor to up-to-the-minute cool.\",\"Short_Description\":\"High-resiliency foam cushions wrapped in thick poly fiber\",\"Color\":\"Green\",\"Volume \":\"1087212000\",\"Area\":\"1264200\",\"Length\":860,\"Width\":1470,\"Height\":860,\"ColorCode\":{\"R\":95,\"G\":105,\"B\":70},\"variants\":[],\"dimensions\":[{\"Length\":860,\"Width\":1470,\"Height\":860,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/DALIBC_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/DALIBC_512.glb\",\"Name\":\"Dainelli Libreria Bookcase\",\"Model_ID\":\"DALIBC\",\"SubCategory\":\"Rack\",\"DisplayProductNumber\":\"hexa1039\",\"Usage\":\"Office \",\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1039.png\",\"PriceText\":\"$ 299\",\"Price\":299,\"Description\":\"Match your rack with your ambience. It is not only a storage solution to your house, but also a pretty display in your house. You can store your books, show-piece items by keeping them well organised yet easy to access.\",\"Short_Description\":\"Modern furniture lives at the intersection of clean lines and relaxed comfort\",\"Color\":\"Brown\",\"Volume \":\"1060000000\",\"Area\":\"530000\",\"Length\":500,\"Width\":1060,\"Height\":2000,\"ColorCode\":{\"R\":2,\"G\":2,\"B\":2},\"variants\":[],\"dimensions\":[{\"Length\":500,\"Width\":1060,\"Height\":2000,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KINGBLD_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KINGBLD_512.glb\",\"Name\":\"Queen boulevard\",\"Model_ID\":\"KNGBLD\",\"SubCategory\":\"Chair\",\"DisplayProductNumber\":\"hexa1040\",\"Usage\":\"Office \",\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1030.png\",\"PriceText\":\"$ 199\",\"Price\":199,\"Description\":\"With a contemporary curve design, Queen Boulevard Chair opens to the room and invites everyone to enjoy exceptional lounging comfort. This large and luxurious armchair and a more compact version with angled edges and curves can be customised to perfectly fit the needs of the room, whether in the bedroom or living room.\",\"Short_Description\":\"The contemporary curve design of the Queen Boulevard Chair complements any living space\",\"Color\":\"Grey\",\"Volume \":\"504300000\",\"Area\":\"672400\",\"Length\":820,\"Width\":820,\"Height\":750,\"ColorCode\":{\"R\":30,\"G\":30,\"B\":30},\"variants\":[],\"dimensions\":[{\"Length\":820,\"Width\":820,\"Height\":750,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_F_MSG_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_F_MSG_512.glb\",\"Name\":\"Outdoor Fireplace\",\"Model_ID\":\"_F_MSG\",\"SubCategory\":\"Hearth\",\"DisplayProductNumber\":\"hexa1069\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Outdoor%20Fireplace.png\",\"PriceText\":\"$ 499\",\"Price\":499,\"Description\":\"It consists of flaming effects, use of heating operation is not mandatory,  it can be used as a decorative product with flaming effect. It is all weather product.\",\"Short_Description\":\"All you need is a good sweater and snuggle up with your loved ones by the fire\",\"Color\":\"Brown\",\"Volume \":\"879010\",\"Area\":\"7205\",\"Length\":131,\"Width\":55,\"Height\":122,\"ColorCode\":{\"R\":153,\"G\":132,\"B\":113},\"variants\":[],\"dimensions\":[{\"Length\":131,\"Width\":55,\"Height\":122,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_F_FFO_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_F_FFO_512.glb\",\"Name\":\"Beautiful Traditional Gas Fireplace\",\"Model_ID\":\"_F_FFO\",\"SubCategory\":\"Hearth\",\"DisplayProductNumber\":\"hexa1071\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Beautiful%20Traditional%20Gas%20Fireplace.png\",\"PriceText\":\"$ 499\",\"Price\":499,\"Description\":\"Choose the traditional Majestic fireplace that's just right for your home's style. Each Majestic fireplace is engineered for performance, style and lasting reliability. All of our products are designed by hearth experts utilizing strict engineering \",\"Short_Description\":\"There are no sparks, open flames, or toxic fumes to worry\",\"Color\":\"Grey\",\"Volume \":\"5776000\",\"Area\":\"19000\",\"Length\":79,\"Width\":250,\"Height\":304,\"ColorCode\":{\"R\":174,\"G\":129,\"B\":121},\"variants\":[],\"dimensions\":[{\"Length\":79,\"Width\":250,\"Height\":304,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_F_DWBS_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_F_DWBS_512.glb\",\"Name\":\"Defiant Wood Burning Hearth\",\"Model_ID\":\"_F_DWBS\",\"SubCategory\":\"Hearth\",\"DisplayProductNumber\":\"hexa1073\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Defiant%20Wood%20Burning%20Stove.png\",\"PriceText\":\"$ 499\",\"Price\":499,\"Description\":\"The Defiant provides more than heat: it’s a skillfully crafted, timeless piece of American history.  In fact, the last original Defiant Parlor Stove is located in the Smithsonian’s National History collection.  Named over 40 years ago to “defy the wintery blast,” today’s Defiant does that and more\",\"Short_Description\":\"Minimizing effort and keeping smoke and embers contained\",\"Color\":\"Red\",\"Volume \":\"528138\",\"Area\":\"6660\",\"Length\":60,\"Width\":111,\"Height\":79,\"ColorCode\":{\"R\":148,\"G\":64,\"B\":66},\"variants\":[],\"dimensions\":[{\"Length\":60,\"Width\":111,\"Height\":79,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_F_STRD_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_F_STRD_512.glb\",\"Name\":\" Direct Vent gas Hearth\",\"Model_ID\":\"_F_STRD\",\"SubCategory\":\"Hearth\",\"DisplayProductNumber\":\"hexa1075\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Direct%20Vent%20Gas%20Stove.png\",\"PriceText\":\"$ 499\",\"Price\":499,\"Description\":\"Beauty meets versatility. Defined by thoughtful design, cast iron styling and authentic embers, the Vermont Castings Direct Vent gas stoves achieve a timeless look. Multiple finish and control options create the stove that’s right for your home.\",\"Short_Description\":\"Traditional European-styling to blend seamlessly into its surroundings\",\"Color\":\"Black\",\"Volume \":\"184960\",\"Area\":\"2720\",\"Length\":40,\"Width\":68,\"Height\":68,\"ColorCode\":{\"R\":37,\"G\":40,\"B\":45},\"variants\":[],\"dimensions\":[{\"Length\":40,\"Width\":68,\"Height\":68,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLKCD3_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLKCD3_512.glb\",\"Name\":\"King Cloud III\",\"Model_ID\":\"KLKCD3\",\"SubCategory\":\"Sofa\",\"DisplayProductNumber\":\"hexa1100\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLKCD3.png\",\"PriceText\":\"$ 999\",\"Price\":999,\"Description\":\"The world’s most advanced modular recliner with TouchGlide control technology that memorises your preferred seating position. Smart Pocket allow you to integrate smart accessories for truly personalised comfort.\",\"Short_Description\":\"Three recliner modules with two wide arms and Smart Pockets™. Customise in your choice of premium fabric or European leather.\",\"Color\":\"Grey\",\"Volume \":\"2354352\",\"Area\":\"30576\",\"Length\":294,\"Width\":104,\"Height\":77,\"ColorCode\":{\"R\":120,\"G\":106,\"B\":106},\"variants\":[],\"dimensions\":[{\"Length\":294,\"Width\":104,\"Height\":77,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLTUCD_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLTUCD_512.glb\",\"Name\":\"Jasper Bed\",\"Model_ID\":\"KLTUCD\",\"SubCategory\":\"Bed\",\"DisplayProductNumber\":\"hexa1101\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLTUCD.png\",\"PriceText\":\"$ 599\",\"Price\":599,\"Description\":\"The ultimate expression of luxury and simplicity, the iconic Jasper has now made its way into the bedroom. Discover a contemporary combination of thoughtful Australian design, blended with a unique sleek grandeur.\",\"Short_Description\":\"The ultimate expression of luxury and simplicity.\",\"Color\":\"Grey\",\"Volume \":\"5859093\",\"Area\":\"63001\",\"Length\":251,\"Width\":251,\"Height\":93,\"ColorCode\":{\"R\":92,\"G\":83,\"B\":82},\"variants\":[],\"dimensions\":[{\"Length\":251,\"Width\":251,\"Height\":93,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/aplsch.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/APLSCH.glb\",\"Name\":\"Luxembourg\",\"Model_ID\":\"APLSCH\",\"SubCategory\":\"Sofa\",\"DisplayProductNumber\":\"hexa1102\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/APLSCH.png\",\"PriceText\":\"$ 999\",\"Price\":999,\"Description\":\"A rather fine design with a universal appeal and a good sense of taste, one for a lifetime.\",\"Short_Description\":\"A rather fine design with a universal appeal\",\"Color\":\"Cream\",\"Volume \":\"1748851.2\",\"Area\":\"23256\",\"Length\":228,\"Width\":102,\"Height\":75,\"ColorCode\":{\"R\":158,\"G\":149,\"B\":142},\"variants\":[],\"dimensions\":[{\"Length\":228,\"Width\":102,\"Height\":75,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/apfloc.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/APFLOC.glb\",\"Name\":\"Florence\",\"Model_ID\":\"APFLOC\",\"SubCategory\":\"Sofa\",\"DisplayProductNumber\":\"hexa1103\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/APFLOC.png\",\"PriceText\":\"$ 999\",\"Price\":999,\"Description\":\"The tasteful design of this sofa is deeply influenced by the artsy city of Florence; speaks of nothing but elegance!\",\"Short_Description\":\"Speaks of nothing but elegance!\",\"Color\":\"Blue\",\"Volume \":\"1526259.456\",\"Area\":\"18213.12\",\"Length\":210,\"Width\":86,\"Height\":83,\"ColorCode\":{\"R\":107,\"G\":147,\"B\":166},\"variants\":[],\"dimensions\":[{\"Length\":210,\"Width\":86,\"Height\":83,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/apastpi.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/APASTPI.glb\",\"Name\":\"Ardour\",\"Model_ID\":\"APASTPI\",\"SubCategory\":\"Lamp\",\"DisplayProductNumber\":\"hexa1104\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/APASTPI.png\",\"PriceText\":\"$ 299\",\"Price\":299,\"Description\":\"A harmony of the old and new, the Ardour Chandelier pairs the time-loved crystal with new-age chrome and clever embellishments. This voguish design adds a hint of drama without overwhelming the space.\",\"Short_Description\":\"Ardour Chandelier pairs the time-loved crystal with new-age chrome and clever embellishments.\",\"Color\":\"Golden\",\"Volume \":\"323640\",\"Area\":\"3720\",\"Length\":60,\"Width\":62,\"Height\":87,\"ColorCode\":{\"R\":147,\"G\":120,\"B\":80},\"variants\":[],\"dimensions\":[{\"Length\":60,\"Width\":62,\"Height\":87,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/apardr.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/APARDR.glb\",\"Name\":\"Astrapia\",\"Model_ID\":\"APARDR\",\"SubCategory\":\"Lamp\",\"DisplayProductNumber\":\"hexa1105\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/APARDR.png\",\"PriceText\":\"$ 299\",\"Price\":299,\"Description\":\"Enfolding a space with a gilded glow, the Astrapia Chandelier exudes warmth and a vintage style. Centralizing on crystal and glass, this shimmering beauty speaks of vibrancy through alluring charm.\",\"Short_Description\":\"Enfolding a space with a gilded glow.\",\"Color\":\"White\",\"Volume \":\"1120000\",\"Area\":\"10000\",\"Length\":100,\"Width\":100,\"Height\":112,\"ColorCode\":{\"R\":255,\"G\":255,\"B\":35},\"variants\":[],\"dimensions\":[{\"Length\":100,\"Width\":100,\"Height\":112,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/phelr1.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/PHELR1.glb\",\"Name\":\"Pavilion House\",\"Model_ID\":\"PHELR1\",\"SubCategory\":\"Living Room\",\"DisplayProductNumber\":\"hexa6\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/PHELR1.png\",\"PriceText\":\"$ 299\",\"Price\":299,\"Description\":\"Giving your Home a new Style Every Style.\",\"Short_Description\":\"Good design for good moments.\",\"Color\":\"Creme\",\"Volume \":\"1120000\",\"Area\":\"10000\",\"Length\":100,\"Width\":100,\"Height\":112,\"ColorCode\":{\"R\":196,\"G\":170,\"B\":132},\"variants\":[],\"dimensions\":[{\"Length\":100,\"Width\":100,\"Height\":112,\"Section\":null}]},{\"IosSrc\":\"\",\"Src\":\"\",\"Name\":\"Harrods Court\",\"Model_ID\":\"HCELR2\",\"SubCategory\":\"Living Room\",\"DisplayProductNumber\":\"hexa7\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HCELR2.png\",\"PriceText\":\"$ 299999\",\"Price\":299999,\"Description\":\"You spend a lot of time in your living room, so it not only needs to look great, but it also needs to be functional and comfortable. Mastering this trifecta can be a design challenge for sure, but we've rounded up the best living room examples to inspire your own decorating projects.\",\"Short_Description\":\"Art of living stylishly.\",\"Color\":\"White\",\"Volume \":\"1120000\",\"Area\":\"10000\",\"Length\":890,\"Width\":695,\"Height\":270,\"ColorCode\":{\"R\":253,\"G\":225,\"B\":178},\"variants\":[],\"dimensions\":[{\"Length\":890,\"Width\":695,\"Height\":270,\"Section\":null}]},{\"IosSrc\":\"\",\"Src\":\"\",\"Name\":\"L shaped sofa\",\"Model_ID\":\"LSOFA\",\"SubCategory\":\"Sofa\",\"DisplayProductNumber\":\"hexa8\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/LSOFA.png\",\"PriceText\":\"$ 1999\",\"Price\":1999,\"Description\":\"Welcome your guests into your home with pride. This sofa is the ultimate statement sofa, made for royal treatment.The wood used in the furniture is perfectly seasoned for optimum moisture content, to reduce the possibility of seasonal expansion or contraction of the products. Durable for long term use and held up by Strong legs that last a lifetime.\",\"Short_Description\":\"Design with distinction\",\"Color\":\"White\",\"Volume \":\"1120000\",\"Area\":\"10000\",\"Length\":400,\"Width\":350,\"Height\":130,\"ColorCode\":{\"R\":162,\"G\":151,\"B\":137},\"variants\":[],\"dimensions\":[{\"Length\":250,\"Width\":150,\"Height\":130,\"Section\":\"right\"},{\"Length\":350,\"Width\":150,\"Height\":130,\"Section\":\"left\"}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/APATVU.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/APATVU.glb\",\"Name\":\"Alicia TV Unit\",\"Model_ID\":\"APATVU\",\"SubCategory\":\"Table\",\"DisplayProductNumber\":\"hexa88\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/APATVU.png\",\"PriceText\":\"$ 299\",\"Price\":299,\"Description\":\"Adorn your living room with Alicia, a TV unit so suave that it speaks of nothing but pure elegance!\",\"Short_Description\":\"Create. Update. Renovate.\",\"Color\":\"Brown\",\"Volume \":\"1120000\",\"Area\":\"10000\",\"Length\":1450,\"Width\":400,\"Height\":400,\"ColorCode\":{\"R\":55,\"G\":51,\"B\":50},\"variants\":[],\"dimensions\":[{\"Length\":1450,\"Width\":400,\"Height\":400,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/ASRWS.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/ASRWS.glb\",\"Name\":\"Chair Sets\",\"Model_ID\":\"ASRWS\",\"SubCategory\":\"Chair\",\"DisplayProductNumber\":\"hexa98\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/ASRWS.png\",\"PriceText\":\"$ 799\",\"Price\":799,\"Description\":\"Your table’s best friend and your favourite working companion\",\"Short_Description\":\"Anything but ordinary\",\"Color\":\"Gray\",\"Volume \":\"1120000\",\"Area\":\"10000\",\"Length\":1450,\"Width\":400,\"Height\":400,\"ColorCode\":{\"R\":105,\"G\":107,\"B\":106},\"variants\":[],\"dimensions\":[{\"Length\":1450,\"Width\":400,\"Height\":400,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/LSOFA.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/LSOFA.glb\",\"Name\":\"Modular L shaped sofa\",\"Model_ID\":\"LModularSOFA\",\"SubCategory\":\"Sofa\",\"DisplayProductNumber\":\"hexa85\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/ModularLSOFA.png\",\"PriceText\":\"$ 899\",\"Price\":899,\"Description\":\"Reflecting designs that are sleek, trendy and functional. This sofa is the ultimate statement sofa, made for royal treatment.The wood used in the furniture is perfectly seasoned for optimum moisture content, to reduce the possibility of seasonal expansion or contraction of the products. Durable for long term use and held up by Strong legs that last a lifetime.\",\"Short_Description\":\"Sit with luxury\",\"Color\":\"Brown\",\"Volume \":\"1120000\",\"Area\":\"10000\",\"Length\":400,\"Width\":350,\"Height\":130,\"ColorCode\":{\"R\":107,\"G\":45,\"B\":33},\"variants\":[],\"dimensions\":[{\"Length\":350,\"Width\":160,\"Height\":63,\"Section\":\"right\"},{\"Length\":373,\"Width\":94,\"Height\":63,\"Section\":\"left\"}]}]}");

/***/ }),

/***/ "c14U":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/notification */ "bNXi");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "H+bZ");




class CartService {
    constructor(_notification, _api) {
        this._notification = _notification;
        this._api = _api;
        this.cartData = {
            products: [],
            total: 0,
        };
        this.cartDataObs$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.cartData);
        let localCartData = JSON.parse(localStorage.getItem('cart'));
        if (localCartData)
            this.cartData = localCartData;
        this.cartDataObs$.next(this.cartData);
    }
    submitCheckout(userId, cart) {
        return this._api.postTypeRequest('orders/create', {
            userId: userId,
            cart: cart,
        });
    }
    addProduct(params) {
        const { id, price, quantity, image, title, maxQuantity } = params;
        const product = { id, price, quantity, image, title, maxQuantity };
        if (!this.isProductInCart(id)) {
            if (quantity)
                this.cartData.products.push(product);
            else
                this.cartData.products.push(Object.assign(Object.assign({}, product), { quantity: 1 }));
        }
        else {
            // copy array, find item index and update
            let updatedProducts = [...this.cartData.products];
            let productIndex = updatedProducts.findIndex((prod) => prod.id == id);
            let product = updatedProducts[productIndex];
            // if no quantity, increment
            if (quantity) {
                updatedProducts[productIndex] = Object.assign(Object.assign({}, product), { quantity: quantity });
            }
            else {
                updatedProducts[productIndex] = Object.assign(Object.assign({}, product), { quantity: product.quantity + 1 });
            }
            console.log(updatedProducts);
            this.cartData.products = updatedProducts;
        }
        this.cartData.total = this.getCartTotal();
        this._notification.create('success', 'Product added to cart', `${title} was successfully added to the cart`);
        this.cartDataObs$.next(Object.assign({}, this.cartData));
        localStorage.setItem('cart', JSON.stringify(this.cartData));
    }
    updateCart(id, quantity) {
        // copy array, find item index and update
        let updatedProducts = [...this.cartData.products];
        let productIndex = updatedProducts.findIndex((prod) => prod.id == id);
        updatedProducts[productIndex] = Object.assign(Object.assign({}, updatedProducts[productIndex]), { quantity: quantity });
        this.cartData.products = updatedProducts;
        this.cartData.total = this.getCartTotal();
        this.cartDataObs$.next(Object.assign({}, this.cartData));
        console.log(this.cartData.products);
        localStorage.setItem('cart', JSON.stringify(this.cartData));
    }
    removeProduct(id) {
        let updatedProducts = this.cartData.products.filter((prod) => prod.id !== id);
        this.cartData.products = updatedProducts;
        this.cartData.total = this.getCartTotal();
        this.cartDataObs$.next(Object.assign({}, this.cartData));
        localStorage.setItem('cart', JSON.stringify(this.cartData));
        this._notification.create('success', 'Removed successfully', 'The selected item was removed from the cart successfully');
    }
    clearCart() {
        this.cartData = {
            products: [],
            total: 0,
        };
        this.cartDataObs$.next(Object.assign({}, this.cartData));
        localStorage.setItem('cart', JSON.stringify(this.cartData));
    }
    getCartTotal() {
        let totalSum = 0;
        this.cartData.products.forEach((prod) => (totalSum += prod.price * prod.quantity));
        return totalSum;
    }
    isProductInCart(id) {
        return this.cartData.products.findIndex((prod) => prod.id === id) !== -1;
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_2__["NzNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "c2A7":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function CartComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your cart is empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { border: a0 }; };
function CartComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_2_div_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const product_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.removeCartItem(product_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-input-number", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartComponent_div_2_div_4_Template_nz_input_number_ngModelChange_12_listener($event) { const product_r3 = ctx.$implicit; return product_r3.quantity = $event; })("ngModelChange", function CartComponent_div_2_div_4_Template_nz_input_number_ngModelChange_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const product_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.updateCart(product_r3.id, product_r3.quantity); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, i_r4 === ctx_r2.cartData.products.length - 1 && "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 8, product_r3.price, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", product_r3.quantity)("nzMin", product_r3.maxQuantity > 0 ? 1 : 0)("nzMax", product_r3.maxQuantity > 0 ? product_r3.maxQuantity : 0)("nzStep", 1);
} }
function CartComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CartComponent_div_2_div_4_Template, 13, 13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cartData.products);
} }
class CartComponent {
    constructor(_cart) {
        this._cart = _cart;
        this._cart.cartDataObs$.subscribe((cartData) => {
            this.cartData = cartData;
            console.log(cartData);
        });
    }
    ngOnInit() { }
    updateCart(id, quantity) {
        console.log({ id, quantity });
        this._cart.updateCart(id, quantity);
    }
    removeCartItem(id) {
        this._cart.removeProduct(id);
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 21, vars: 8, consts: [[1, "cart-container"], ["class", "cart-container__empty", 4, "ngIf"], ["class", "cart-container__list", 4, "ngIf"], [1, "cart-container__total"], [1, "price"], [1, "cta"], ["nz-button", "", "nzType", "primary", "routerLink", "/checkout", 3, "disabled"], ["nz-button", "", "routerLink", "/"], [1, "cart-container__empty"], [1, "cart-container__list"], [1, "list-header"], ["class", "list-item", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "list-item", 3, "ngStyle"], [1, "list-item__remove", 3, "click"], [1, "list-item__image"], ["alt", "", 3, "src"], [1, "list-item__details"], [1, "title"], [3, "ngModel", "nzMin", "nzMax", "nzStep", "ngModelChange"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_div_2_Template, 5, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Total amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Total items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Checkout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Back to shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartData.products.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartData.products.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 5, ctx.cartData.total, "USD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cartData.products.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.cartData.products.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_7__["NzInputNumberComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".cart-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.cart-container__empty[_ngcontent-%COMP%] {\n  margin: 24px 16px 0;\n  padding: 16px 24px;\n  text-align: center;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  font-size: 1rem;\n  font-weight: 500;\n}\n.cart-container__list[_ngcontent-%COMP%] {\n  max-height: 60vh;\n  flex-grow: 1;\n  padding: 16px;\n  overflow-y: auto;\n  border-bottom: 1px solid #ccc;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #ccc;\n  position: relative;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__remove[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  height: 22px;\n  width: 22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  z-index: 1;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__remove[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__image[_ngcontent-%COMP%] {\n  margin-right: 16px;\n  min-height: 100px;\n  min-width: 100px;\n  max-height: 100px;\n  max-width: 100px;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__details[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  position: relative;\n  padding: 22px 0;\n  padding-right: 18px;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  font-size: 1.125rem;\n  font-weight: 500;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__details[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  font-size: 1rem;\n}\n.cart-container__list[_ngcontent-%COMP%]   .list-item__details[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: -6px;\n}\n.cart-container__total[_ngcontent-%COMP%] {\n  padding: 24px 16px 16px;\n  display: flex;\n  flex-direction: column;\n}\n.cart-container__total[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n}\n.cart-container__total[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n}\n.cart-container__total[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  flex-grow: 1;\n}\n.cart-container__total[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2)    > h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #787878;\n  font-weight: 400;\n}\n.cart-container__total[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2)    > h2[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #787878;\n  font-weight: 400;\n}\n.cart-container__total[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.cart-container__total[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 100%;\n  margin-bottom: 12px;\n}\n@media screen and (min-width: 1200px) {\n  .cart-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    max-width: 1024px;\n    margin: 48px auto 0;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n  }\n  .cart-container__empty[_ngcontent-%COMP%] {\n    margin: 0;\n    padding-top: 40px;\n    flex-grow: 1;\n    border: none;\n  }\n  .cart-container__list[_ngcontent-%COMP%] {\n    border: none;\n  }\n  .cart-container__total[_ngcontent-%COMP%] {\n    width: 350px;\n    padding: 0 16px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .cart-container__total[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    padding: 16px 0;\n  }\n  .cart-container__total[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .cart-container__total[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .cart-container__total[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    height: 48px;\n    width: 100%;\n    margin-bottom: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUFFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQUVKO0FBREk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUdOO0FBRk07RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUlBLFVBQUE7QUFDUjtBQUpRO0VBQ0Usa0JBQUE7QUFNVjtBQUZNO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUlSO0FBSFE7RUFDRSxXQUFBO0FBS1Y7QUFGTTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUlSO0FBSFE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFLVjtBQUhRO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBS1Y7QUFIUTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFLVjtBQUFFO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFFSjtBQURJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFHTjtBQUZNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUlSO0FBSFE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFLVjtBQURRO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUdWO0FBRFE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUdWO0FBQ0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNOO0FBQU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRVI7QUFJQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7RUFERjtFQUVFO0lBQ0UsU0FBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUFBSjtFQUVFO0lBQ0UsWUFBQTtFQUFKO0VBRUU7SUFDRSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7SUFDQSwyQkFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7RUFBSjtFQUNJO0lBQ0UsV0FBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0VBQ047RUFBTTtJQUNFLGtCQUFBO0VBRVI7RUFDSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUFDTjtFQUFNO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQUVSO0FBQ0YiLCJmaWxlIjoiY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICZfX2VtcHR5IHtcclxuICAgIG1hcmdpbjogMjRweCAxNnB4IDA7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgJl9fbGlzdCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA2MHZoO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIC5saXN0LWl0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgJl9fcmVtb3ZlIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogOHB4O1xyXG4gICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgID4gaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIH1cclxuICAgICAgJl9faW1hZ2Uge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgPiBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICZfX2RldGFpbHMge1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMjJweCAwO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmN0YSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogLTZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJl9fdG90YWwge1xyXG4gICAgcGFkZGluZzogMjRweCAxNnB4IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC5wcmljZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICA+IGgzIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgPiBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgPiBoMyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICBjb2xvcjogIzc4Nzg3ODtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgID4gaDIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAjNzg3ODc4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jdGEge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICA+IGJ1dHRvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jYXJ0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1heC13aWR0aDogMTAyNHB4O1xyXG4gICAgbWFyZ2luOiA0OHB4IGF1dG8gMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAmX19lbXB0eSB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG4gICAgJl9fbGlzdCB7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICAgICZfX3RvdGFsIHtcclxuICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgICAgICAgPiBoMyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jdGEge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICA+IGJ1dHRvbiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "d759":
/*!**********************************************************!*\
  !*** ./src/app/order-history/order-history.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryComponent", function() { return OrderHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product.service */ "Gdn9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");






function OrderHistoryComponent_nz_table_4_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.order_id);
} }
function OrderHistoryComponent_nz_table_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "OrderID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrderHistoryComponent_nz_table_4_tr_11_Template, 7, 3, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx_r0.orders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r1.data);
} }
class OrderHistoryComponent {
    constructor(_api, _auth, _product) {
        this._api = _api;
        this._auth = _auth;
        this._product = _product;
        this.listOfData = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
            },
        ];
        this.orders = [];
        this.error = '';
        this.user = this._auth.getUser();
    }
    ngOnInit() {
        this._api.getTypeRequest(`orders/?userId=${this.user.user_id}`).subscribe((res) => {
            console.log(res);
            res.data.forEach((item) => {
                this._product
                    .getSingleProduct(item.product_id)
                    .subscribe((product) => {
                    console.log(product);
                    this.orders.push(Object.assign(Object.assign({}, product), item));
                });
            });
            // let uniqueProductsArray = Array.from(
            //   new Set(res.data.map((p) => p.product_id))
            // );
        }, (err) => {
            this.error = err.error.message;
        });
    }
}
OrderHistoryComponent.ɵfac = function OrderHistoryComponent_Factory(t) { return new (t || OrderHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"])); };
OrderHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderHistoryComponent, selectors: [["app-order-history"]], decls: 5, vars: 2, consts: [[1, "order-history-container"], [3, "nzData", 4, "ngIf"], [3, "nzData"], ["basicTable", ""], [4, "ngFor", "ngForOf"]], template: function OrderHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Order History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderHistoryComponent_nz_table_4_Template, 12, 2, "nz-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.error, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orders.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".order-history-container[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n  max-width: 1024px;\n  margin: 0 auto;\n}\n.order-history-container[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.order-history-container[_ngcontent-%COMP%]   .order-list[_ngcontent-%COMP%]   .order-container[_ngcontent-%COMP%]   .order-image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media screen and (min-width: 1200px) {\n  .order-history-container[_ngcontent-%COMP%] {\n    margin-top: 48px;\n    padding: 24px;\n    border: 1px solid #ccc;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9yZGVyLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQUU7RUFDRSxtQkFBQTtBQUVKO0FBR1E7RUFDRSxXQUFBO0FBRFY7QUFZQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7RUFWRjtBQUNGIiwiZmlsZSI6Im9yZGVyLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXItaGlzdG9yeS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDI0cHggMTZweDtcclxuICBtYXgtd2lkdGg6IDEwMjRweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICA+IGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgfVxyXG4gIC5vcmRlci1saXN0IHtcclxuICAgIC5vcmRlci1jb250YWluZXIge1xyXG4gICAgICAub3JkZXItaW1hZ2Uge1xyXG4gICAgICAgID4gaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAub3JkZXItdGl0bGUge1xyXG4gICAgICB9XHJcbiAgICAgIC5vcmRlci10b3RhbCB7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5vcmRlci1oaXN0b3J5LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiA0OHB4O1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "dQCy":
/*!*****************************************!*\
  !*** ./src/app/products-card/test.json ***!
  \*****************************************/
/*! exports provided: value, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"value\":[{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Book%20Rack_1.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Book%20Rack_1.glb\",\"DisplayProductNumber\":\"hexa1018\",\"Description\":\"A storage unit with open shelves to keep books and other things of various shapes and sizes and a display shelf. Crafted for compact homes. Suitable for Study rooms and Living room. Sense and sensibility, just like its namesake. Thebook rack slim, compact design belies its capacity. The five open shelves give you room aplenty for your next book shopping spree.\",\"Model_ID\":\"Book_Rack_AT\",\"Color\":\"Brown\",\"ColorCode\":{\"R\":179,\"G\":157,\"B\":133},\"Volume\":352350,\"Usage\":\"Home\",\"Length\":150,\"SubCategory\":\"Rack\",\"Height\":81,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Book%20Rack_1.png\",\"PriceText\":\"$ 499\",\"Price\":499,\"Area\":2349,\"Width\":29,\"Name\":\"Book Rack\",\"Short_Description\":\"Aesthetic piece of furniture for your work space\",\"variants\":[],\"dimensions\":[{\"Length\":150,\"Width\":29,\"Height\":81,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Comfort%20in%20the%20Kitchen.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Comfort%20in%20the%20Kitchen.glb\",\"DisplayProductNumber\":\"hexa1002\",\"Description\":\"Regardless of it’s size or layout, the kitchen can also function as your office. Transform your “surface” into a standing height desk with the Coordinate Portable Desktop Riser.  A simple lift transforms the  coffee table to laptop table. Great for those prone to bringing home work from the office. And for those who like to put their feet up and binge watch The Office. The elegant oak finish means it can sit pretty in your living room, letting you multitask.\",\"Model_ID\":\"WFHSF_2\",\"Color\":\"Brown\",\"ColorCode\":{\"R\":196,\"G\":163,\"B\":138},\"Volume\":322368,\"Usage\":\"\",\"Length\":73,\"SubCategory\":\"Set\",\"Height\":96,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Comfort%20in%20the%20Kitchen.png\",\"PriceText\":\"$ 699\",\"Price\":699,\"Area\":7008,\"Width\":46,\"Name\":\"Comfort in the Kitchen\",\"Short_Description\":\" Uniform horizontal slats to bring an element of play at your kitchen.\",\"variants\":[],\"dimensions\":[{\"Length\":73,\"Width\":46,\"Height\":96,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/CrossRoads%20Of%20Style%20and%20Function.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/CrossRoads%20Of%20Style%20and%20Function.glb\",\"DisplayProductNumber\":\"hexa10001\",\"Description\":\"Create a workspace that blends seamlessly into your functional home environment. The ample surface and drawers make it an ideal desk for students and professionals alike. We offer a broad offering so you can choose the form and function that works best for your space!\",\"Model_ID\":\"WFHSF_1\",\"Color\":\"Grey\",\"ColorCode\":{\"R\":123,\"G\":122,\"B\":122},\"Volume\":731640,\"Usage\":\"WFH\",\"Length\":67,\"SubCategory\":\"Set\",\"Height\":140,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/CrossRoads%20of%20Style%20and%20Function.png\",\"PriceText\":\"$ 699\",\"Price\":699,\"Area\":9380,\"Width\":78,\"Name\":\"Crossroads of Style and Function\",\"Short_Description\":\"Reflecting  design that is sleek, trendy and functional.\",\"variants\":[],\"dimensions\":[{\"Length\":67,\"Width\":78,\"Height\":140,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Dedicated%20Furniture.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Dedicated%20Furniture.glb\",\"DisplayProductNumber\":\"hexa1008\",\"Description\":\"This chic space with perfect ergnomics gets the most out of the space occupied while looking elegant. It has a wire manager on either ends and is wide and deep enough to hold an extension cord and all the cables needed to power all of your devices.\",\"Model_ID\":\"WFHSF_8\",\"Color\":\"Brown\",\"ColorCode\":{\"R\":69,\"G\":68,\"B\":68},\"Volume\":3652960,\"Usage\":\"WFH\",\"Length\":170,\"SubCategory\":\"Set\",\"Height\":79,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Dedicated%20Furniture.png\",\"PriceText\":\"$ 699\",\"Price\":699,\"Area\":21488,\"Width\":272,\"Name\":\"Dedicated Furniture\",\"Short_Description\":\"Productivity meets style with the Poise table\",\"variants\":[],\"dimensions\":[{\"Length\":170,\"Width\":272,\"Height\":79,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Make%20it%20your%20Own.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Make%20it%20your%20Own.glb\",\"DisplayProductNumber\":\"hexa1005\",\"Description\":\"An elegant design that helps you be clutter free. Whenever you feel like working at home, there is a friendly co-worker ready to help you. The executive chair is your table’s best friend and your favourite working companion.\",\"Model_ID\":\"WFHSF_5\",\"Color\":\"Grey\",\"ColorCode\":{\"R\":136,\"G\":138,\"B\":145},\"Volume\":1921280,\"Usage\":\"WFH\",\"Length\":152,\"SubCategory\":\"Set\",\"Height\":169,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Make%20it%20your%20Own.png\",\"PriceText\":\"$ 699\",\"Price\":699,\"Area\":12008,\"Width\":79,\"Name\":\"Make it your Own\",\"Short_Description\":\"Crafted in a thin and light design\",\"variants\":[],\"dimensions\":[{\"Length\":152,\"Width\":79,\"Height\":169,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Simple%20and%20Inspiring.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Simple%20and%20Inspiring.glb\",\"DisplayProductNumber\":\"1001\",\"Description\":\"Here, a simple desk can create an office that’s both inspiring and practical. The small storage pedestal helps conceal supplies and files that completes a fully functional home office. The slim proportions and simple design can fit into any kind of work/study space\",\"Model_ID\":\"WFHSF_4\",\"Color\":\"Brown\",\"ColorCode\":{\"R\":221,\"G\":195,\"B\":179},\"Volume\":866400.9,\"Usage\":\"WFH\",\"Length\":152,\"SubCategory\":\"Set\",\"Height\":76,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Simple%20and%20Inspiring.png\",\"PriceText\":\"$ 699\",\"Price\":699,\"Area\":11552.9,\"Width\":75,\"Name\":\"Simple and Inspiring\",\"Short_Description\":\"Robust design with bold framework\",\"variants\":[],\"dimensions\":[{\"Length\":152,\"Width\":75,\"Height\":76,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Space%20saver.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Space%20saver.glb\",\"DisplayProductNumber\":\"hexa1006\",\"Description\":\"This approach requires getting the most out of every inch of space by adding a versatile between table with a comfortable Solve task chair. Once the work day is done, nest it away to make room for other activities.\",\"Model_ID\":\"WFHSF_6\",\"Color\":\"White\",\"ColorCode\":{\"R\":217,\"G\":217,\"B\":216},\"Volume\":783900,\"Usage\":\"WFH\",\"Length\":78,\"SubCategory\":\"Set\",\"Height\":150,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Space%20Saver.png\",\"PriceText\":\"$ 699\",\"Price\":699,\"Area\":10050,\"Width\":67,\"Name\":\"Space saver\",\"Short_Description\":\" Designed to comfortably and aesthetically provide a working surface\",\"variants\":[],\"dimensions\":[{\"Length\":78,\"Width\":67,\"Height\":150,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Teapoy_1.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Teapoy_1.glb\",\"DisplayProductNumber\":\"hexa1022\",\"Description\":\"Have a seat!  The tea table set makes a great addition to your home. It has an extremely modern contemporary look that helps you set up space in your home, restaurant, office, etc. It is durable and long lasting body.  If you like the no fuss approach, this is the perfect teapoy table for you. \",\"Model_ID\":\"Teapoy_AT_2\",\"Color\":\"Brown\",\"ColorCode\":{\"R\":208,\"G\":193,\"B\":172},\"Volume\":262400,\"Usage\":\"Home\",\"Length\":80,\"SubCategory\":\"Set\",\"Height\":41,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Teapoy_1.png\",\"PriceText\":\"$ 699\",\"Price\":699,\"Area\":3280,\"Width\":80,\"Name\":\"Teapoy Set\",\"Short_Description\":\"Contemporary is very current and in trend, of the here and now.\",\"variants\":[],\"dimensions\":[{\"Length\":80,\"Width\":80,\"Height\":41,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/The%20Bold%20and%20Beautiful.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/The%20Bold%20and%20Beautiful.glb\",\"DisplayProductNumber\":\"hexa1007\",\"Description\":\"This chic space with clean lines excels at all the fundamentals. A clean and elegant table with contemporary book-end design. Comes along with a drawer, wire-manager and compact design to satisfy all needs.\",\"Model_ID\":\"WFHSF_7\",\"Color\":\"Brown\",\"ColorCode\":{\"R\":102,\"G\":85,\"B\":70},\"Volume\":1238328,\"Usage\":\"WFH\",\"Length\":108,\"SubCategory\":\"Set\",\"Height\":182,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/The%20Bold%20and%20Beautiful.png\",\"PriceText\":\"$ 699\",\"Price\":699,\"Area\":11466,\"Width\":63,\"Name\":\"The Bold and Beautiful\",\"Short_Description\":\"Enhance your home with your own unique style\",\"variants\":[],\"dimensions\":[{\"Length\":108,\"Width\":63,\"Height\":182,\"Section\":null}]},{\"IosSrc\":\"https://hnicorpcdn.azureedge.net/furniture-mr/web-ar/Two%20seater%20Sofa_1.usdz\",\"Src\":\"https://hnicorpcdn.azureedge.net/furniture-mr/web-ar/Two%20seater%20Sofa_1.glb\",\"DisplayProductNumber\":\"hexa1023\",\"Description\":\"Beautify your space with elegance. Give your back the comfort it needs while adding a hint of finess to your living room décor with this classy sofa. Crafted from premium quality solid wood, the sofa features a two-seater design with textured fabric upholstery that adds to the over-all look of your home-front.\",\"Model_ID\":\"Sofa_AT_1\",\"Color\":\"White\",\"ColorCode\":{\"R\":192,\"G\":178,\"B\":164},\"Volume\":111520,\"Usage\":\"Home\",\"Length\":40,\"SubCategory\":\"Sofa\",\"Height\":68,\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1023.png\",\"PriceText\":\"$ 999\",\"Price\":999,\"Area\":2788,\"Width\":41,\"Name\":\"Two seater sofa\",\"Short_Description\":\"Add that touch of warmth that modern homes need.\",\"variants\":[],\"dimensions\":[{\"Length\":40,\"Width\":41,\"Height\":68,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Workspace%20with%20a%20view.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Workspace%20with%20a%20view.glb\",\"DisplayProductNumber\":\"1003\",\"Description\":\"Although space might be tight, a little creativity and rearranging goes a long way. This desk really maximizes the space with the open leg support that keeps the room feeling open and airy. Add the Matter task chair that combines style and comfort for the perfect finish to the room.\",\"Model_ID\":\"WFHSF_3\",\"Color\":\"Grey\",\"ColorCode\":{\"R\":150,\"G\":142,\"B\":150},\"Volume\":2311848,\"Usage\":\"WHF\",\"Length\":189,\"SubCategory\":\"Set\",\"Height\":138,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Workspace%20with%20a%20view.png\",\"PriceText\":\"$ 699\",\"Price\":699,\"Area\":26271,\"Width\":88,\"Name\":\"Workspace with a view\",\"Short_Description\":\"Sleek and smart desk designed to fit in any corner of your room\",\"variants\":[],\"dimensions\":[{\"Length\":189,\"Width\":88,\"Height\":138,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_C_AT2_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_C_AT2_512.glb\",\"DisplayProductNumber\":\"hexa1010\",\"Description\":\"An essential key to successful teamwork and collaboration is creating a functional office design where people can be accessible to one another. The work area designed for maximum and effective utilization of the space available, without compromising comfort and privacy. Arrange your files and papers neatly inside the drawers that operate smoothly on quality hardware. There’s another pocket to accommodate all the messy wires.\",\"Model_ID\":\"_C_AT2\",\"Color\":\"Yellow\",\"ColorCode\":{\"R\":215,\"G\":196,\"B\":100},\"Volume\":15123420,\"Usage\":\"Office\",\"Length\":138,\"SubCategory\":\"Cubicle\",\"Height\":562,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Array%20Cubicle%20Set.png\",\"PriceText\":\"$ 1999\",\"Price\":1999,\"Area\":109590,\"Width\":195,\"Name\":\"Array Cubicle Set\",\"Short_Description\":\"Simple and Comfortable work from home furnitures\",\"variants\":[],\"dimensions\":[{\"Length\":138,\"Width\":195,\"Height\":562,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_C_AT3_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_C_AT3_512.glb\",\"DisplayProductNumber\":\"hexa1009\",\"Description\":\"Worspace designed for maximum productivity and inspired by modern ergonomics. The sofa in between is compact, cozy gives you ultimate comfort. Beautifully finished, the dual tone desk will complement any decor style. The generous table has room for you to spread out, and the two deep drawers help keep a check on overflowing papers, files, and more. There’s plenty of space below for legs to stretch comfortably\",\"Model_ID\":\"_C_AT3\",\"Color\":\"Green\",\"ColorCode\":{\"R\":165,\"G\":176,\"B\":150},\"Volume\":13400320,\"Usage\":\"Office\",\"Length\":152,\"SubCategory\":\"Cubicle\",\"Height\":580,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Cubicle%20Set.png\",\"PriceText\":\"$ 1999\",\"Price\":1999,\"Area\":88160,\"Width\":152,\"Name\":\"Cubicle Set\",\"Short_Description\":\"Add style and functionality to your work from home office furniture space.\",\"variants\":[],\"dimensions\":[{\"Length\":152,\"Width\":152,\"Height\":580,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_C_GIM3_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_C_GIM3_512.glb\",\"DisplayProductNumber\":\"hexa1016\",\"Description\":\"The users feel connected to their co-workers while still maintaining an element of personal space in an otherwise open environment. Bonus features include personal storage lockers under the desktops and panel supported benches Created for today’s active workplace, active workstyles, and active sitting. It is responsive and supportive of your every move\",\"Model_ID\":\"_C_GIM3\",\"Color\":\"Blue\",\"ColorCode\":{\"R\":49,\"G\":85,\"B\":122},\"Volume\":21410634,\"Usage\":\"Office\",\"Length\":137,\"SubCategory\":\"Cubicle\",\"Height\":427,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Cubic%20Medley.png\",\"PriceText\":\"$ 1999\",\"Price\":1999,\"Area\":156282,\"Width\":366,\"Name\":\"Cubic Medley\",\"Short_Description\":\"Tech-savvy and impressively eye-catching\",\"variants\":[],\"dimensions\":[{\"Length\":137,\"Width\":366,\"Height\":427,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_CR_HOC_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_CR_HOC_512.glb\",\"DisplayProductNumber\":\"hexa1017\",\"Description\":\"These tables are designed to evoke a personal experience and visceral reaction to its detail and materials. The passion for organic materials puts the wood and joinery in focus, concentrating you to how a vertical surface links to a horizontal surface. This airplane section, modern and round, softly transcends, pointing more toward the future than the past.\",\"Model_ID\":\"_CR_HOC\",\"Color\":\"Black\",\"ColorCode\":{\"R\":47,\"G\":42,\"B\":37},\"Volume\":4542060,\"Usage\":\"Office\",\"Length\":85,\"SubCategory\":\"Table\",\"Height\":366,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Harmani%20Oval%20Conference.png\",\"PriceText\":\"$ 699\",\"Price\":699,\"Area\":53436,\"Width\":146,\"Name\":\"Harmani Oval Conference\",\"Short_Description\":\"You can never be out of reasons for gathering around your conference table\",\"variants\":[],\"dimensions\":[{\"Length\":85,\"Width\":146,\"Height\":366,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_IC_ACB_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_IC_ACB_512.glb\",\"DisplayProductNumber\":\"hexa1012\",\"Description\":\"This chair provides great durability and toughness so that you can say goodbye to all your worries while relaxing on the comfortable leatherette cushion upholstery. Designed with sleek curved armrest, this chair will bring a professional tone and convert your working space at home into a professional office setting. Let the hard working days now be filled with sturdiness.\",\"Model_ID\":\"_IC_ACB\",\"Color\":\"Orange\",\"ColorCode\":{\"R\":254,\"G\":119,\"B\":46},\"Volume\":318246,\"Usage\":\"Office\",\"Length\":93,\"SubCategory\":\"Chair\",\"Height\":59,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Array%20Conference%20Chair.png\",\"PriceText\":\"$ 199\",\"Price\":199,\"Area\":3422,\"Width\":58,\"Name\":\"Array Conference Chair\",\"Short_Description\":\" A fluid chair is a must for a healthier, happier work spot.\",\"variants\":[],\"dimensions\":[{\"Length\":93,\"Width\":58,\"Height\":59,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_IC_AGP3_B_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_IC_AGP3_B_512.glb\",\"DisplayProductNumber\":\"hexa1011\",\"Description\":\"With three back materials, synchro-tilt control and an optional adjustable lumbar support, Solve answers the need for a higher level of personalization. The 4-Way Stretch mesh back provides responsive support and a softer fit. The geometric ReActiv back flexes and moves with the user to provide a firmer fit, and an upholstered front can be added to increase support and thermal comfort. Solve helps anyone achieve optimal balance and alignment, making it an ideal solution for everybody.\",\"Model_ID\":\"_IC_AGP3\",\"Color\":\"White\",\"ColorCode\":{\"R\":133,\"G\":129,\"B\":129},\"Volume\":100,\"Usage\":\"Office\",\"Length\":130,\"SubCategory\":\"Chair\",\"Height\":73,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_IC_AGP3_B-removebg-preview.png\",\"PriceText\":\"$ 199\",\"Price\":199,\"Area\":5548,\"Width\":76,\"Name\":\"Chair Array Black\",\"Short_Description\":\"Complete multitask chairs offering effortless mobility\",\"variants\":[],\"dimensions\":[{\"Length\":130,\"Width\":76,\"Height\":73,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_L_CB_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_L_CB_512.glb\",\"DisplayProductNumber\":\"hexa1013\",\"Description\":\"A wonderful lounger offers a fine resting experience. If you’re looking for the finer things in life, here’s a product that will surely catch your fancy.The bonded leather upholstery and foam cushions allow the lounger to offer an amazing amount of comfort. \",\"Model_ID\":\"_L_CB\",\"Color\":\"Yellow\",\"ColorCode\":{\"R\":223,\"G\":187,\"B\":41},\"Volume\":368954305,\"Usage\":\"Office\",\"Length\":271,\"SubCategory\":\"Lounge\",\"Height\":1385,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Collaborative%20Furniture.png\",\"PriceText\":\"$ 1999\",\"Price\":1999,\"Area\":1361455,\"Width\":983,\"Name\":\" Collaborative Furniture\",\"Short_Description\":\"Office furniture that encourages workforce collaboration\",\"variants\":[],\"dimensions\":[{\"Length\":271,\"Width\":983,\"Height\":1385,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_L_MH2_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_L_MH2_512.glb\",\"DisplayProductNumber\":\"hexa1014\",\"Description\":\"For every tablet, coffee mug, or notepad, there's a need for an occasional table. Don't scramble to find an open meeting room when you can move the tables you need around a lounge space. The cross-bar design provides a mid-century aesthetic which fits perfectly with any lounge setting to bring people together effortlessly.\",\"Model_ID\":\"_L_MH2\",\"Color\":\"Grey\",\"ColorCode\":{\"R\":64,\"G\":63,\"B\":61},\"Volume\":286272000,\"Usage\":\"Office\",\"Length\":355,\"SubCategory\":\"Large Seater\",\"Height\":900,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Miter%20Round%20Side%20Table%20with%20Lounge%20set.png\",\"PriceText\":\"$ 699\",\"Price\":699,\"Area\":806400,\"Width\":896,\"Name\":\"Miter Round Side Table with Lounge set\",\"Short_Description\":\"Unique, captivating and fashioned out of fine-quality\",\"variants\":[],\"dimensions\":[{\"Length\":355,\"Width\":896,\"Height\":900,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Monaca%20Sofa_1.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Monaca%20Sofa_1.glb\",\"DisplayProductNumber\":\"hexa1025\",\"Description\":\"Be it the attractive color of the piece or even the comfortable seating ergonomics, we've got them sorted with our lounger sofa. Generous proportions to stretch, lean back, or sneak in a nap, you can do it all. Bring a sense of comfort and cohesion to your favorite seating space with this sofa.\",\"Model_ID\":\"Sofa_AT_1_02\",\"Color\":\"White\",\"ColorCode\":{\"R\":193,\"G\":180,\"B\":164},\"Volume\":528138,\"Usage\":\"Home\",\"Length\":99,\"SubCategory\":\"Sofa\",\"Height\":233,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Monaca%20Sofa_1.png\",\"PriceText\":\"$ 999\",\"Price\":999,\"Area\":233,\"Width\":78,\"Name\":\"Three seater sofa\",\"Short_Description\":\"Sofa set brings impeccable aesthetics and design value to your interiors\",\"variants\":[],\"dimensions\":[{\"Length\":99,\"Width\":78,\"Height\":233,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Night%20Lamp_1.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Night%20Lamp_1.glb\",\"DisplayProductNumber\":\"hexa1021\",\"Description\":\"Modify brightness and match the ambience with colors. The soft and cozy material of it presents a beautiful simple look and transforms the room into a cozy and relaxed enviornment. Illuminate your room effectively with this Stylish and Elegant Lamp Customary because every room deserves one.\",\"Model_ID\":\"Table_Lamp_AT_2\",\"Color\":\"Black\",\"ColorCode\":{\"R\":37,\"G\":38,\"B\":43},\"Volume\":29520,\"Usage\":\"Home\",\"Length\":30,\"SubCategory\":\"Lamp\",\"Height\":24,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Night%20Lamp_1.png\",\"PriceText\":\"$ 299\",\"Price\":299,\"Area\":0,\"Width\":41,\"Name\":\"Dark Lamp\",\"Short_Description\":\"Unique simple tap design dark lamp\",\"variants\":[],\"dimensions\":[{\"Length\":30,\"Width\":41,\"Height\":24,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Table%20Lamp_1.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Table%20Lamp_1.glb\",\"DisplayProductNumber\":\"hexa1020\",\"Description\":\"A lovely, inexpensive, and practical table lamp to meet your basic fashion lighting needs. Furnish your home and  light up your desk. As a side table lamp, it is perfect for your bedroom or kid room, matching with any décor, it may help to decorate uour home and make it modernised.\",\"Model_ID\":\"Table_Lamp_AT_1\",\"Color\":\"White\",\"ColorCode\":{\"R\":227,\"G\":227,\"B\":229},\"Volume\":30015,\"Usage\":\"Home\",\"Length\":29,\"SubCategory\":\"Lamp\",\"Height\":23,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Table%20Lamp_1.png\",\"PriceText\":\"$ 299\",\"Price\":299,\"Area\":1035,\"Width\":45,\"Name\":\"White Lamp\",\"Short_Description\":\"Design which are influenced by architectural concept\",\"variants\":[],\"dimensions\":[{\"Length\":29,\"Width\":45,\"Height\":23,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Wall%20Rack_1.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Wall%20Rack_1.glb\",\"DisplayProductNumber\":\"hexa1024\",\"Description\":\"Match your rack with your ambience. It is not only a storage solution to your house, but also a pretty display in your house. You can store your books, show-piece items by keeping them well organised yet easy to access.\",\"Model_ID\":\"Wooden_Rack_AT\",\"Color\":\"Grey\",\"ColorCode\":{\"R\":164,\"G\":155,\"B\":138},\"Volume\":284130,\"Usage\":\"Home\",\"Length\":154,\"SubCategory\":\"Rack\",\"Height\":45,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Wall%20Rack_1.png\",\"PriceText\":\"$ 249\",\"Price\":249,\"Area\":1845,\"Width\":41,\"Name\":\"Show piece Rack\",\"Short_Description\":\"Modern furniture lives at the intersection of clean lines and relaxed comfort\",\"variants\":[],\"dimensions\":[{\"Length\":154,\"Width\":41,\"Height\":45,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Wooden%20Stool_1.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Wooden%20Stool_1.glb\",\"DisplayProductNumber\":\"hexa1019\",\"Description\":\"Cozy and efficient tea table in a low budget. A polished finish coffee/ tea table adds an elegant touch to your living room décor. The secondary material is hard wooden columns. It is rich in quality and hence long lasting.\",\"Model_ID\":\"Teapoy_AT_1\",\"Color\":\"Brown\",\"ColorCode\":{\"R\":209,\"G\":138,\"B\":106},\"Volume\":154800,\"Usage\":\"Home\",\"Length\":60,\"SubCategory\":\"Table\",\"Height\":43,\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/Wooden%20Stool_1.png\",\"PriceText\":\"$ 499\",\"Price\":499,\"Area\":2580,\"Width\":60,\"Name\":\"Teapoy\",\"Short_Description\":\"classic amalgamation of form and function\",\"variants\":[],\"dimensions\":[{\"Length\":60,\"Width\":60,\"Height\":43,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/SEYCHR_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/SEYCHR_512.glb\",\"DisplayProductNumber\":\"hexa1030\",\"Description\":\"The Seymour Chair offers incredible flexibility - with design options including swivel or fixed base, and three different back heights including a low, mid and high back for extra head support. A luxurious way to relax at home.\",\"Model_ID\":\"SEYCHR\",\"Color\":\"Brown\",\"ColorCode\":{\"R\":37,\"G\":37,\"B\":37},\"Volume\":845240000,\"Usage\":\"Office\",\"Length\":850,\"SubCategory\":\"Chair\",\"Height\":1130,\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1040.png\",\"PriceText\":\"$ 199\",\"Price\":199,\"Area\":748000,\"Width\":880,\"Name\":\"Seymour Chair\",\"Short_Description\":\"The Seymour chair is available in a range of back heights so you can customise \",\"variants\":[],\"dimensions\":[{\"Length\":850,\"Width\":880,\"Height\":1130,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLQIDT_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLQIDT_512.glb\",\"DisplayProductNumber\":\"hexa1031\",\"Description\":\"Quay's slender legs and gentle curves will bring a luxurious elegance to any dining room. Complemented by Quay dining chairs available in a wide range of premium fabrics and leathers.\",\"Model_ID\":\"KLQIDT\",\"Color\":\"Grey\",\"ColorCode\":{\"R\":81,\"G\":76,\"B\":72},\"Volume\":1368000000,\"Usage\":\"Office\",\"Length\":1000,\"SubCategory\":\"Table\",\"Height\":760,\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1031.png\",\"PriceText\":\"$ 499\",\"Price\":499,\"Area\":748000,\"Width\":1800,\"Name\":\"Quay Indoor Dining Table\",\"Short_Description\":\"Quay's slender legs and gentle curves will bring a luxurious elegance to any dining room\",\"variants\":[],\"dimensions\":[{\"Length\":1000,\"Width\":1800,\"Height\":760,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLSAFL.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLSAFL_512.glb\",\"DisplayProductNumber\":\"hexa1032\",\"Description\":\"Create the perfect ambience with a sophisticated collection of lamps and pendant lights.\",\"Model_ID\":\"KLSAFL\",\"Color\":\"Black\",\"ColorCode\":{\"R\":24,\"G\":24,\"B\":26},\"Volume\":34614000,\"Usage\":\"Office\",\"Length\":100,\"SubCategory\":\"Lamp\",\"Height\":1923,\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1032.png\",\"PriceText\":\"$ 299\",\"Price\":299,\"Area\":18000,\"Width\":180,\"Name\":\"Solifiore Arum Floor Lamp\",\"Short_Description\":\"Customise your space with our range of lightning products\",\"variants\":[],\"dimensions\":[{\"Length\":100,\"Width\":180,\"Height\":1923,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLSGFL_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLSGFL_512.glb\",\"Name\":\"Solifiore Gymea Floor Lamp\",\"Model_ID\":\"KLSGFL\",\"SubCategory\":\"Lamp\",\"DisplayProductNumber\":\"hexa1033\",\"Usage\":\"Office \",\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1033.png\",\"PriceText\":\"$ 299\",\"Price\":299,\"Description\":\"Create the perfect ambience with a sophisticated collection of lamps and pendant lights.\",\"Short_Description\":\"Customise your space with our range of lightning products\",\"Color\":\"Black\",\"Volume \":\"31000\",\"Area\":\"55645000\",\"Length\":100,\"Width\":310,\"Height\":1795,\"ColorCode\":{\"R\":28,\"G\":28,\"B\":30},\"variants\":[],\"dimensions\":[{\"Length\":100,\"Width\":310,\"Height\":1795,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/BETRLS_1_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/BETRLS_1_512.glb\",\"Name\":\"Betrillo Loveseat\",\"Model_ID\":\"BETRLS\",\"SubCategory\":\"Sofa\",\"DisplayProductNumber\":\"hexa1034\",\"Usage\":\"Office \",\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1034.png\",\"PriceText\":\"$ 999\",\"Price\":999,\"Description\":\"Great design draws inspiration from various places, and the Betrillo loveseat is no exception. Diamond-stitched pattern seen in high-end handbags and luxury car interiors is simply irresistible on this sumptuous, generously padded seating experience\",\"Short_Description\":\"Durable, easy-care leather alternative delivers the look you crave at a PriceText that’s decidedly easy on your purse.\",\"Color\":\"Black\",\"Volume \":\"1683000\",\"Area\":\"1565190000\",\"Length\":990,\"Width\":1700,\"Height\":930,\"ColorCode\":{\"R\":39,\"G\":38,\"B\":36},\"variants\":[],\"dimensions\":[{\"Length\":990,\"Width\":1700,\"Height\":930,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/ISCSTL_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/ISCSTL_512.glb\",\"Name\":\"Issho Coffee & Side Table\",\"Model_ID\":\"ISCSTL\",\"SubCategory\":\"Table\",\"DisplayProductNumber\":\"hexa1035\",\"Usage\":\"Office \",\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1035.png\",\"PriceText\":\"$ 499\",\"Price\":499,\"Description\":\"Inspired by organic forms and architectural lines, Issho celebrates an elegance of craftmanship and subtle detailing. The table is presented in a series of repeated ‘fins’ that forms a sculptural base both distinctively beautiful and functional.\",\"Short_Description\":\"Featuring asymmetric pebble shaped tops to bring a calming and meditative poise to living spaces.\",\"Color\":\"Brown\",\"Volume \":\"92977500\",\"Area\":\"122500\",\"Length\":350,\"Width\":350,\"Height\":759,\"ColorCode\":{\"R\":87,\"G\":87,\"B\":87},\"variants\":[],\"dimensions\":[{\"Length\":350,\"Width\":350,\"Height\":759,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/MOCOTL_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/MOCOTL_512.glb\",\"Name\":\"Monument Coffee Table\",\"Model_ID\":\"MOCOTL\",\"SubCategory\":\"Table\",\"DisplayProductNumber\":\"hexa1036\",\"Usage\":\"Office \",\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1036.png\",\"PriceText\":\"$ 499\",\"Price\":499,\"Description\":\"Timeless and sculptural, Monument showcases materiality in its bold yet simple form. Crafted from premium porcelain ceramic, it’s the perfect occasional table for both the indoors and outdoors.\",\"Short_Description\":\"The low and square variants are ideal as coffee tables, whilst the tall is perfect as a bedside or side table.\",\"Color\":\"Grey\",\"Volume \":\"76532000\",\"Area\":\"201400\",\"Length\":530,\"Width\":380,\"Height\":380,\"ColorCode\":{\"R\":102,\"G\":102,\"B\":102},\"variants\":[],\"dimensions\":[{\"Length\":530,\"Width\":380,\"Height\":380,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLASDO_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLASDO_512.glb\",\"Name\":\"Aspen Sideboard 2 Door 1 Drawer\",\"Model_ID\":\"KLASDD\",\"SubCategory\":\"Rack\",\"DisplayProductNumber\":\"hexa1037\",\"Usage\":\"Office \",\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1037.png\",\"PriceText\":\"$ 499\",\"Price\":499,\"Description\":\"The Aspen Sideboard offers a beautiful, classic aesthetic that will work harmoniously in your home. Aspen Sideboard seamlessly blends style and practicality with a clever soft-close drawer to keep your space clutter free.\",\"Short_Description\":\"Crafted from high quality solid and sustainably sourced American Walnut Timber\",\"Color\":\"Brown\",\"Volume \":\"610560000\",\"Area\":\"1272000\",\"Length\":636,\"Width\":2000,\"Height\":480,\"ColorCode\":{\"R\":80,\"G\":48,\"B\":33},\"variants\":[],\"dimensions\":[{\"Length\":636,\"Width\":2000,\"Height\":480,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/MACLST_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/MACLST_512.glb\",\"Name\":\"Macleary Loveseat\",\"Model_ID\":\"MACLST\",\"SubCategory\":\"Sofa\",\"DisplayProductNumber\":\"hexa1038\",\"Usage\":\"Office \",\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1038.png\",\"PriceText\":\"$ 499\",\"Price\":499,\"Description\":\"Get comfortable with a modern aesthetic when you add the Macleary loveseat to your home or office. A clean, linear design fits so well into any sophisticated space. With velvet upholstery and a sleek metal accent leg, this piece elevates your decor to up-to-the-minute cool.\",\"Short_Description\":\"High-resiliency foam cushions wrapped in thick poly fiber\",\"Color\":\"Green\",\"Volume \":\"1087212000\",\"Area\":\"1264200\",\"Length\":860,\"Width\":1470,\"Height\":860,\"ColorCode\":{\"R\":95,\"G\":105,\"B\":70},\"variants\":[],\"dimensions\":[{\"Length\":860,\"Width\":1470,\"Height\":860,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/DALIBC_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/DALIBC_512.glb\",\"Name\":\"Dainelli Libreria Bookcase\",\"Model_ID\":\"DALIBC\",\"SubCategory\":\"Rack\",\"DisplayProductNumber\":\"hexa1039\",\"Usage\":\"Office \",\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1039.png\",\"PriceText\":\"$ 299\",\"Price\":299,\"Description\":\"Match your rack with your ambience. It is not only a storage solution to your house, but also a pretty display in your house. You can store your books, show-piece items by keeping them well organised yet easy to access.\",\"Short_Description\":\"Modern furniture lives at the intersection of clean lines and relaxed comfort\",\"Color\":\"Brown\",\"Volume \":\"1060000000\",\"Area\":\"530000\",\"Length\":500,\"Width\":1060,\"Height\":2000,\"ColorCode\":{\"R\":2,\"G\":2,\"B\":2},\"variants\":[],\"dimensions\":[{\"Length\":500,\"Width\":1060,\"Height\":2000,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KINGBLD_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KINGBLD_512.glb\",\"Name\":\"Queen boulevard\",\"Model_ID\":\"KNGBLD\",\"SubCategory\":\"Chair\",\"DisplayProductNumber\":\"hexa1040\",\"Usage\":\"Office \",\"Product_Image\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1030.png\",\"PriceText\":\"$ 199\",\"Price\":199,\"Description\":\"With a contemporary curve design, Queen Boulevard Chair opens to the room and invites everyone to enjoy exceptional lounging comfort. This large and luxurious armchair and a more compact version with angled edges and curves can be customised to perfectly fit the needs of the room, whether in the bedroom or living room.\",\"Short_Description\":\"The contemporary curve design of the Queen Boulevard Chair complements any living space\",\"Color\":\"Grey\",\"Volume \":\"504300000\",\"Area\":\"672400\",\"Length\":820,\"Width\":820,\"Height\":750,\"ColorCode\":{\"R\":30,\"G\":30,\"B\":30},\"variants\":[],\"dimensions\":[{\"Length\":820,\"Width\":820,\"Height\":750,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_F_MSG_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_F_MSG_512.glb\",\"Name\":\"Outdoor Fireplace\",\"Model_ID\":\"_F_MSG\",\"SubCategory\":\"Hearth\",\"DisplayProductNumber\":\"hexa1069\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Outdoor%20Fireplace.png\",\"PriceText\":\"$ 499\",\"Price\":499,\"Description\":\"It consists of flaming effects, use of heating operation is not mandatory,  it can be used as a decorative product with flaming effect. It is all weather product.\",\"Short_Description\":\"All you need is a good sweater and snuggle up with your loved ones by the fire\",\"Color\":\"Brown\",\"Volume \":\"879010\",\"Area\":\"7205\",\"Length\":131,\"Width\":55,\"Height\":122,\"ColorCode\":{\"R\":153,\"G\":132,\"B\":113},\"variants\":[],\"dimensions\":[{\"Length\":131,\"Width\":55,\"Height\":122,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_F_FFO_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_F_FFO_512.glb\",\"Name\":\"Beautiful Traditional Gas Fireplace\",\"Model_ID\":\"_F_FFO\",\"SubCategory\":\"Hearth\",\"DisplayProductNumber\":\"hexa1071\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Beautiful%20Traditional%20Gas%20Fireplace.png\",\"PriceText\":\"$ 499\",\"Price\":499,\"Description\":\"Choose the traditional Majestic fireplace that's just right for your home's style. Each Majestic fireplace is engineered for performance, style and lasting reliability. All of our products are designed by hearth experts utilizing strict engineering \",\"Short_Description\":\"There are no sparks, open flames, or toxic fumes to worry\",\"Color\":\"Grey\",\"Volume \":\"5776000\",\"Area\":\"19000\",\"Length\":79,\"Width\":250,\"Height\":304,\"ColorCode\":{\"R\":174,\"G\":129,\"B\":121},\"variants\":[],\"dimensions\":[{\"Length\":79,\"Width\":250,\"Height\":304,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_F_DWBS_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_F_DWBS_512.glb\",\"Name\":\"Defiant Wood Burning Hearth\",\"Model_ID\":\"_F_DWBS\",\"SubCategory\":\"Hearth\",\"DisplayProductNumber\":\"hexa1073\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Defiant%20Wood%20Burning%20Stove.png\",\"PriceText\":\"$ 499\",\"Price\":499,\"Description\":\"The Defiant provides more than heat: it’s a skillfully crafted, timeless piece of American history.  In fact, the last original Defiant Parlor Stove is located in the Smithsonian’s National History collection.  Named over 40 years ago to “defy the wintery blast,” today’s Defiant does that and more\",\"Short_Description\":\"Minimizing effort and keeping smoke and embers contained\",\"Color\":\"Red\",\"Volume \":\"528138\",\"Area\":\"6660\",\"Length\":60,\"Width\":111,\"Height\":79,\"ColorCode\":{\"R\":148,\"G\":64,\"B\":66},\"variants\":[],\"dimensions\":[{\"Length\":60,\"Width\":111,\"Height\":79,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_F_STRD_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HNI_F_STRD_512.glb\",\"Name\":\" Direct Vent gas Hearth\",\"Model_ID\":\"_F_STRD\",\"SubCategory\":\"Hearth\",\"DisplayProductNumber\":\"hexa1075\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/ms-incubation-2021/thumbnails/Direct%20Vent%20Gas%20Stove.png\",\"PriceText\":\"$ 499\",\"Price\":499,\"Description\":\"Beauty meets versatility. Defined by thoughtful design, cast iron styling and authentic embers, the Vermont Castings Direct Vent gas stoves achieve a timeless look. Multiple finish and control options create the stove that’s right for your home.\",\"Short_Description\":\"Traditional European-styling to blend seamlessly into its surroundings\",\"Color\":\"Black\",\"Volume \":\"184960\",\"Area\":\"2720\",\"Length\":40,\"Width\":68,\"Height\":68,\"ColorCode\":{\"R\":37,\"G\":40,\"B\":45},\"variants\":[],\"dimensions\":[{\"Length\":40,\"Width\":68,\"Height\":68,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLKCD3_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLKCD3_512.glb\",\"Name\":\"King Cloud III\",\"Model_ID\":\"KLKCD3\",\"SubCategory\":\"Sofa\",\"DisplayProductNumber\":\"hexa1100\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLKCD3.png\",\"PriceText\":\"$ 999\",\"Price\":999,\"Description\":\"The world’s most advanced modular recliner with TouchGlide control technology that memorises your preferred seating position. Smart Pocket allow you to integrate smart accessories for truly personalised comfort.\",\"Short_Description\":\"Three recliner modules with two wide arms and Smart Pockets™. Customise in your choice of premium fabric or European leather.\",\"Color\":\"Grey\",\"Volume \":\"2354352\",\"Area\":\"30576\",\"Length\":294,\"Width\":104,\"Height\":77,\"ColorCode\":{\"R\":120,\"G\":106,\"B\":106},\"variants\":[],\"dimensions\":[{\"Length\":294,\"Width\":104,\"Height\":77,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLTUCD_512.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLTUCD_512.glb\",\"Name\":\"Jasper Bed\",\"Model_ID\":\"KLTUCD\",\"SubCategory\":\"Bed\",\"DisplayProductNumber\":\"hexa1101\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/KLTUCD.png\",\"PriceText\":\"$ 599\",\"Price\":599,\"Description\":\"The ultimate expression of luxury and simplicity, the iconic Jasper has now made its way into the bedroom. Discover a contemporary combination of thoughtful Australian design, blended with a unique sleek grandeur.\",\"Short_Description\":\"The ultimate expression of luxury and simplicity.\",\"Color\":\"Grey\",\"Volume \":\"5859093\",\"Area\":\"63001\",\"Length\":251,\"Width\":251,\"Height\":93,\"ColorCode\":{\"R\":92,\"G\":83,\"B\":82},\"variants\":[],\"dimensions\":[{\"Length\":251,\"Width\":251,\"Height\":93,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/aplsch.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/APLSCH.glb\",\"Name\":\"Luxembourg\",\"Model_ID\":\"APLSCH\",\"SubCategory\":\"Sofa\",\"DisplayProductNumber\":\"hexa1102\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/APLSCH.png\",\"PriceText\":\"$ 999\",\"Price\":999,\"Description\":\"A rather fine design with a universal appeal and a good sense of taste, one for a lifetime.\",\"Short_Description\":\"A rather fine design with a universal appeal\",\"Color\":\"Cream\",\"Volume \":\"1748851.2\",\"Area\":\"23256\",\"Length\":228,\"Width\":102,\"Height\":75,\"ColorCode\":{\"R\":158,\"G\":149,\"B\":142},\"variants\":[],\"dimensions\":[{\"Length\":228,\"Width\":102,\"Height\":75,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/apfloc.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/APFLOC.glb\",\"Name\":\"Florence\",\"Model_ID\":\"APFLOC\",\"SubCategory\":\"Sofa\",\"DisplayProductNumber\":\"hexa1103\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/APFLOC.png\",\"PriceText\":\"$ 999\",\"Price\":999,\"Description\":\"The tasteful design of this sofa is deeply influenced by the artsy city of Florence; speaks of nothing but elegance!\",\"Short_Description\":\"Speaks of nothing but elegance!\",\"Color\":\"Blue\",\"Volume \":\"1526259.456\",\"Area\":\"18213.12\",\"Length\":210,\"Width\":86,\"Height\":83,\"ColorCode\":{\"R\":107,\"G\":147,\"B\":166},\"variants\":[],\"dimensions\":[{\"Length\":210,\"Width\":86,\"Height\":83,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/apastpi.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/APASTPI.glb\",\"Name\":\"Ardour\",\"Model_ID\":\"APASTPI\",\"SubCategory\":\"Lamp\",\"DisplayProductNumber\":\"hexa1104\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/APASTPI.png\",\"PriceText\":\"$ 299\",\"Price\":299,\"Description\":\"A harmony of the old and new, the Ardour Chandelier pairs the time-loved crystal with new-age chrome and clever embellishments. This voguish design adds a hint of drama without overwhelming the space.\",\"Short_Description\":\"Ardour Chandelier pairs the time-loved crystal with new-age chrome and clever embellishments.\",\"Color\":\"Golden\",\"Volume \":\"323640\",\"Area\":\"3720\",\"Length\":60,\"Width\":62,\"Height\":87,\"ColorCode\":{\"R\":147,\"G\":120,\"B\":80},\"variants\":[],\"dimensions\":[{\"Length\":60,\"Width\":62,\"Height\":87,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/apardr.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/APARDR.glb\",\"Name\":\"Astrapia\",\"Model_ID\":\"APARDR\",\"SubCategory\":\"Lamp\",\"DisplayProductNumber\":\"hexa1105\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/APARDR.png\",\"PriceText\":\"$ 299\",\"Price\":299,\"Description\":\"Enfolding a space with a gilded glow, the Astrapia Chandelier exudes warmth and a vintage style. Centralizing on crystal and glass, this shimmering beauty speaks of vibrancy through alluring charm.\",\"Short_Description\":\"Enfolding a space with a gilded glow.\",\"Color\":\"White\",\"Volume \":\"1120000\",\"Area\":\"10000\",\"Length\":100,\"Width\":100,\"Height\":112,\"ColorCode\":{\"R\":255,\"G\":255,\"B\":35},\"variants\":[],\"dimensions\":[{\"Length\":100,\"Width\":100,\"Height\":112,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/phelr1.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/PHELR1.glb\",\"Name\":\"Pavilion House\",\"Model_ID\":\"PHELR1\",\"SubCategory\":\"Living Room\",\"DisplayProductNumber\":\"hexa6\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/PHELR1.png\",\"PriceText\":\"$ 299\",\"Price\":299,\"Description\":\"Giving your Home a new Style Every Style.\",\"Short_Description\":\"Good design for good moments.\",\"Color\":\"Creme\",\"Volume \":\"1120000\",\"Area\":\"10000\",\"Length\":100,\"Width\":100,\"Height\":112,\"ColorCode\":{\"R\":196,\"G\":170,\"B\":132},\"variants\":[],\"dimensions\":[{\"Length\":100,\"Width\":100,\"Height\":112,\"Section\":null}]},{\"IosSrc\":\"\",\"Src\":\"\",\"Name\":\"Harrods Court\",\"Model_ID\":\"HCELR2\",\"SubCategory\":\"Living Room\",\"DisplayProductNumber\":\"hexa7\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/HCELR2.png\",\"PriceText\":\"$ 299999\",\"Price\":299999,\"Description\":\"You spend a lot of time in your living room, so it not only needs to look great, but it also needs to be functional and comfortable. Mastering this trifecta can be a design challenge for sure, but we've rounded up the best living room examples to inspire your own decorating projects.\",\"Short_Description\":\"Art of living stylishly.\",\"Color\":\"White\",\"Volume \":\"1120000\",\"Area\":\"10000\",\"Length\":890,\"Width\":695,\"Height\":270,\"ColorCode\":{\"R\":253,\"G\":225,\"B\":178},\"variants\":[],\"dimensions\":[{\"Length\":890,\"Width\":695,\"Height\":270,\"Section\":null}]},{\"IosSrc\":\"\",\"Src\":\"\",\"Name\":\"L shaped sofa\",\"Model_ID\":\"LSOFA\",\"SubCategory\":\"Sofa\",\"DisplayProductNumber\":\"hexa8\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/LSOFA.png\",\"PriceText\":\"$ 1999\",\"Price\":1999,\"Description\":\"Welcome your guests into your home with pride. This sofa is the ultimate statement sofa, made for royal treatment.The wood used in the furniture is perfectly seasoned for optimum moisture content, to reduce the possibility of seasonal expansion or contraction of the products. Durable for long term use and held up by Strong legs that last a lifetime.\",\"Short_Description\":\"Design with distinction\",\"Color\":\"White\",\"Volume \":\"1120000\",\"Area\":\"10000\",\"Length\":400,\"Width\":350,\"Height\":130,\"ColorCode\":{\"R\":162,\"G\":151,\"B\":137},\"variants\":[],\"dimensions\":[{\"Length\":250,\"Width\":150,\"Height\":130,\"Section\":\"right\"},{\"Length\":350,\"Width\":150,\"Height\":130,\"Section\":\"left\"}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/APATVU.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/APATVU.glb\",\"Name\":\"Alicia TV Unit\",\"Model_ID\":\"APATVU\",\"SubCategory\":\"Table\",\"DisplayProductNumber\":\"hexa88\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/APATVU.png\",\"PriceText\":\"$ 299\",\"Price\":299,\"Description\":\"Adorn your living room with Alicia, a TV unit so suave that it speaks of nothing but pure elegance!\",\"Short_Description\":\"Create. Update. Renovate.\",\"Color\":\"Brown\",\"Volume \":\"1120000\",\"Area\":\"10000\",\"Length\":1450,\"Width\":400,\"Height\":400,\"ColorCode\":{\"R\":55,\"G\":51,\"B\":50},\"variants\":[],\"dimensions\":[{\"Length\":1450,\"Width\":400,\"Height\":400,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/ASRWS.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/ASRWS.glb\",\"Name\":\"Chair Sets\",\"Model_ID\":\"ASRWS\",\"SubCategory\":\"Chair\",\"DisplayProductNumber\":\"hexa98\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/ASRWS.png\",\"PriceText\":\"$ 799\",\"Price\":799,\"Description\":\"Your table’s best friend and your favourite working companion\",\"Short_Description\":\"Anything but ordinary\",\"Color\":\"Gray\",\"Volume \":\"1120000\",\"Area\":\"10000\",\"Length\":1450,\"Width\":400,\"Height\":400,\"ColorCode\":{\"R\":105,\"G\":107,\"B\":106},\"variants\":[],\"dimensions\":[{\"Length\":1450,\"Width\":400,\"Height\":400,\"Section\":null}]},{\"IosSrc\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/LSOFA.usdz\",\"Src\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/LSOFA.glb\",\"Name\":\"Modular L shaped sofa\",\"Model_ID\":\"LModularSOFA\",\"SubCategory\":\"Sofa\",\"DisplayProductNumber\":\"hexa85\",\"Usage\":\"Home\",\"Product_Image\":\"https://tulanedigcontent.blob.core.windows.net/web-ar-demo/ModularLSOFA.png\",\"PriceText\":\"$ 899\",\"Price\":899,\"Description\":\"Reflecting designs that are sleek, trendy and functional. This sofa is the ultimate statement sofa, made for royal treatment.The wood used in the furniture is perfectly seasoned for optimum moisture content, to reduce the possibility of seasonal expansion or contraction of the products. Durable for long term use and held up by Strong legs that last a lifetime.\",\"Short_Description\":\"Sit with luxury\",\"Color\":\"Brown\",\"Volume \":\"1120000\",\"Area\":\"10000\",\"Length\":400,\"Width\":350,\"Height\":130,\"ColorCode\":{\"R\":107,\"G\":45,\"B\":33},\"variants\":[],\"dimensions\":[{\"Length\":350,\"Width\":160,\"Height\":63,\"Section\":\"right\"},{\"Length\":373,\"Width\":94,\"Height\":63,\"Section\":\"left\"}]}]}");

/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/token-storage.service */ "Zr0/");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");











function HeaderComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your cart is empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "border-bottom": a0 }; };
function HeaderComponent_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_18_div_2_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const product_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.removeProductFromCart(product_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, i_r8 !== ctx_r6.cartData.products.length - 1 && "1px solid #ccc"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r7.quantity, " x ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 5, product_r7.price, "USD"));
} }
const _c1 = function () { return { borderLeft: "none", borderRight: "none", borderBottom: "none" }; };
function HeaderComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_18_div_2_Template, 14, 10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_18_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.toggleDropdown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " View cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_18_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.toggleDropdown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Checkout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cartData.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.cartData.products.length, " Item(s) selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, ctx_r2.cartData.total, "USD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
} }
function HeaderComponent_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sign in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sign up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.logout() && ctx_r18.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sign out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function () { return { "font-size": "1.25rem", "padding-top": "6px", "color": "white" }; };
const _c3 = function () { return { fontSize: "24px", paddingTop: "3px", "color": "white" }; };
class HeaderComponent {
    constructor(_token, _auth, _cart) {
        this._token = _token;
        this._auth = _auth;
        this._cart = _cart;
        this.isMenuOpen = false;
        this.isMobile = false;
        this.isLoggedIn = false;
        this.dropdownVisible = false;
        this.getScreenSize();
        this._auth.user.subscribe((user) => {
            if (user)
                this.isLoggedIn = true;
            else
                this.isLoggedIn = false;
        });
        this._cart.cartDataObs$.subscribe((cartData) => {
            this.cartData = cartData;
        });
    }
    getScreenSize(event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        if (this.screenWidth > 768)
            this.isMobile = false;
        else
            this.isMobile = true;
    }
    ngOnInit() {
        if (this._token.getUser())
            this.isLoggedIn = true;
        else
            this.isLoggedIn = false;
    }
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
    toggleDropdown() {
        this.dropdownVisible = !this.dropdownVisible;
    }
    removeProductFromCart(id) {
        this._cart.removeProduct(id);
    }
    logout() {
        this._auth.logout();
        this.isMenuOpen = false;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HeaderComponent_resize_HostBindingHandler($event) { return ctx.getScreenSize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 38, vars: 14, consts: [[1, "header-container"], [1, "header-container__left"], ["nz-button", "", "nzType", "text", "size", "large", "nzShape", "circle", "nzSize", "large", 3, "click"], ["nz-icon", "", "nzType", "menu", 3, "ngStyle"], [1, "header-container__middle"], ["src", "assets/eagleIcon.png", "height", "40", "width", "40", 1, "mr-2"], ["routerLink", "/", 2, "color", "white"], [1, "header-container__right"], [1, "cart-counter"], ["nz-button", "", "nz-dropdown", "", "nzType", "text", "nzTrigger", "click", "nzPlacement", "right", "nzShape", "circle", "nzSize", "large", 3, "nzDropdownMenu", "nzVisible", "nzVisibleChange"], ["nz-icon", "", "nzType", "shopping-cart", 3, "ngStyle"], ["menu", "nzDropdownMenu"], [1, "cart-dropdown"], ["class", "cart-dropdown__empty", 4, "ngIf"], ["class", "cart-dropdown__content", 4, "ngIf"], [3, "className"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "color", "white", 3, "click"], [1, "side-menu__content"], ["src", "assets/eagleIcon.png", "height", "40", "width", "40", 1, "logo"], ["routerLink", "/", 2, "color", "white", 3, "click"], ["routerLink", "/cart", 2, "color", "white", 3, "click"], ["routerLink", "/profile", 2, "color", "white", 3, "click"], ["routerLink", "/order-history", 2, "color", "white", 3, "click"], [1, "\uD83C\uDF51"], ["nz-button", "", "routerLink", "/login", "style", "color:white", 3, "click", 4, "ngIf"], ["nz-button", "", "routerLink", "/register", "style", "color:white", 3, "click", 4, "ngIf"], ["nz-button", "", 3, "click", 4, "ngIf"], [3, "className", "click"], [1, "cart-dropdown__empty"], [1, "cart-dropdown__content"], [1, "product-list"], ["class", "product-list__item", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "cart-info"], [1, "selected-amount"], [1, "total-price"], [1, "cart-cta"], ["nz-button", "", "nzSize", "large", "routerLink", "/cart", 3, "ngStyle", "click"], ["nz-button", "", "nzType", "primary", "nzSize", "large", "routerLink", "/checkout", 3, "ngStyle", "click"], [1, "product-list__item", 3, "ngStyle"], [1, "product-item"], [1, "product-item__remove", 3, "click"], [1, "product-item__image"], ["alt", "", 3, "src"], [1, "product-item__description"], [1, "product-name"], [1, "product-amount"], ["nz-button", "", "routerLink", "/login", 2, "color", "white", 3, "click"], ["nz-button", "", "routerLink", "/register", 2, "color", "white", 3, "click"], ["nz-button", "", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "WebAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function HeaderComponent_Template_button_nzVisibleChange_12_listener() { return ctx.toggleDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-dropdown-menu", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderComponent_div_17_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HeaderComponent_div_18_Template, 14, 10, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_i_click_20_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_25_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_27_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_29_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_31_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Order History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HeaderComponent_button_34_Template, 2, 0, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HeaderComponent_button_35_Template, 2, 0, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HeaderComponent_button_36_Template, 2, 0, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_37_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cartData.products.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r0)("nzVisible", ctx.dropdownVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartData.products.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartData.products.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.isMenuOpen ? "side-menu show" : "side-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.isMenuOpen ? "darken-background enable" : "darken-background");
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropdownButtonDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropDownDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__["NzDropdownMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__["NzWaveDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], styles: ["@charset \"UTF-8\";\n.header-container[_ngcontent-%COMP%] {\n  background-color: #316B83;\n  color: #fff !important;\n  height: 60px;\n  padding: 0 16px;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #ccc;\n}\n.header-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header-container__left[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.header-container__middle[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  text-align: center;\n}\n.header-container__right[_ngcontent-%COMP%] {\n  position: relative;\n}\n.header-container__right[_ngcontent-%COMP%]   .cart-counter[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: green;\n  width: 17px;\n  height: 17px;\n  font-size: 11px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50px;\n  position: absolute;\n  right: 0px;\n  top: 12px;\n  z-index: 2;\n}\n@media screen and (min-width: 768px) {\n  .header-container[_ngcontent-%COMP%] {\n    padding: 0 24px;\n  }\n}\n.cart-dropdown[_ngcontent-%COMP%] {\n  max-width: 280px;\n  min-width: 280px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n}\n.cart-dropdown__empty[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: center;\n  font-weight: 500;\n}\n.cart-dropdown__content[_ngcontent-%COMP%] {\n  padding-top: 12px;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list[_ngcontent-%COMP%] {\n  padding: 0 12px;\n  max-height: 180px;\n  overflow-y: auto;\n  border-bottom: 1px solid #ccc;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list__item[_ngcontent-%COMP%] {\n  padding: 12px 0;\n  margin-bottom: 12px;\n  cursor: default;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list__item[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  align-items: center;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list__item[_ngcontent-%COMP%]   .product-item__remove[_ngcontent-%COMP%] {\n  top: 4px;\n  right: 0px;\n  position: absolute;\n  border: 1px solid #ccc;\n  height: 22px;\n  width: 22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list__item[_ngcontent-%COMP%]   .product-item__image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 72px;\n  width: 72px;\n  object-fit: contain;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list__item[_ngcontent-%COMP%]   .product-item__description[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  padding-right: 24px;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list__item[_ngcontent-%COMP%]   .product-item__description[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .product-list__item[_ngcontent-%COMP%]   .product-item__description[_ngcontent-%COMP%]   .product-amount[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .cart-info[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .cart-info[_ngcontent-%COMP%]   .selected-amount[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .cart-info[_ngcontent-%COMP%]   .total-price[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 500;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .cart-cta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.cart-dropdown__content[_ngcontent-%COMP%]   .cart-cta[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.nav-container[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: #eee;\n  border-bottom: 1px solid #ccc;\n}\n.nav-container[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  display: flex;\n}\n.nav-container[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 16px;\n}\n.side-menu[_ngcontent-%COMP%] {\n  width: 285px;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  padding: 56px 0px 24px;\n  transform: translateX(-285px);\n  background-color: #316B83;\n  border-right: 1px solid #ccc;\n  transition: all 0.35s ease;\n  z-index: 10002;\n}\n.side-menu[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  top: 24px;\n  right: 24px;\n  position: absolute;\n  font-size: 1.25rem;\n  cursor: pointer;\n}\n.side-menu__content[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n}\n.side-menu__content[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  padding-left: 24px;\n  margin-bottom: 24px;\n  outline: none;\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n.side-menu__content[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%]:hover {\n  transform: translateX(16px);\n}\n.side-menu__content[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  outline: none;\n  padding: 8px 0 8px 24px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.side-menu__content[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\n  background-color: rgba(71, 70, 70, 0.863);\n}\n.side-menu__content[_ngcontent-%COMP%]   .\uD83C\uDF51[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.side-menu__content[_ngcontent-%COMP%]   .\uD83C\uDF51[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  height: 44px;\n  width: 236px;\n  flex-grow: 1;\n  border: 1px solid #ccc;\n  background: transparent;\n}\n.side-menu.show[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.darken-background[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: transparent;\n  transition: background-color 0.35s ease;\n  z-index: 10001;\n  pointer-events: none;\n}\n.darken-background.enable[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n  pointer-events: auto;\n}\n.logo[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUVGO0FBREU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFHSjtBQURFO0VBRUUsZ0JBQUE7QUFFSjtBQUFFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBRUo7QUFFRTtFQUNFLGtCQUFBO0FBQUo7QUFDSTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNOO0FBSUE7RUFDRTtJQUNFLGVBQUE7RUFERjtBQUNGO0FBS0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQUhGO0FBSUU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUZKO0FBSUU7RUFDRSxpQkFBQTtBQUZKO0FBR0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FBRE47QUFFTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBUjtBQUNRO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDVjtBQUFVO0VBQ0UsUUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFFWjtBQUNZO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNkO0FBRVU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBQVo7QUFDWTtFQUNFLG1CQUFBO0FBQ2Q7QUFFYztFQUNFLGdCQUFBO0FBQWhCO0FBT0k7RUFDRSxhQUFBO0FBTE47QUFNTTtFQUNFLG1CQUFBO0FBSlI7QUFNTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFKUjtBQU9JO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBTE47QUFNTTtFQUNFLFdBQUE7QUFKUjtBQVVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFQRjtBQVNJO0VBQ0UsYUFBQTtBQVBOO0FBUU07RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFOUjtBQWNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBWEY7QUFZRTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFWSjtBQVlFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBVko7QUFXSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBVE47QUFVTTtFQUNFLDJCQUFBO0FBUlI7QUFhUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBWFY7QUFZVTtFQUNFLHlDQUFBO0FBVlo7QUFlSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBYk47QUFjTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQVpSO0FBa0JBO0VBQ0Usd0JBQUE7QUFmRjtBQWtCQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQWZGO0FBa0JBO0VBQ0Usb0NBQUE7RUFDQSxvQkFBQTtBQWZGO0FBaUJBO0VBQ0UsaUJBQUE7QUFkRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTZCODM7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbi5oZWFkZXItY29udGFpbmVyID4gZGl2IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXItY29udGFpbmVyX19sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5oZWFkZXItY29udGFpbmVyX19taWRkbGUge1xuICBmbGV4LWdyb3c6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5oZWFkZXItY29udGFpbmVyX19yaWdodCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXItY29udGFpbmVyX19yaWdodCAuY2FydC1jb3VudGVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICB3aWR0aDogMTdweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMTJweDtcbiAgei1pbmRleDogMjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmhlYWRlci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgfVxufVxuLmNhcnQtZHJvcGRvd24ge1xuICBtYXgtd2lkdGg6IDI4MHB4O1xuICBtaW4td2lkdGg6IDI4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuLmNhcnQtZHJvcGRvd25fX2VtcHR5IHtcbiAgcGFkZGluZzogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNhcnQtZHJvcGRvd25fX2NvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cbi5jYXJ0LWRyb3Bkb3duX19jb250ZW50IC5wcm9kdWN0LWxpc3Qge1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIG1heC1oZWlnaHQ6IDE4MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbi5jYXJ0LWRyb3Bkb3duX19jb250ZW50IC5wcm9kdWN0LWxpc3RfX2l0ZW0ge1xuICBwYWRkaW5nOiAxMnB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5jYXJ0LWRyb3Bkb3duX19jb250ZW50IC5wcm9kdWN0LWxpc3RfX2l0ZW0gLnByb2R1Y3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jYXJ0LWRyb3Bkb3duX19jb250ZW50IC5wcm9kdWN0LWxpc3RfX2l0ZW0gLnByb2R1Y3QtaXRlbV9fcmVtb3ZlIHtcbiAgdG9wOiA0cHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMjJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXJ0LWRyb3Bkb3duX19jb250ZW50IC5wcm9kdWN0LWxpc3RfX2l0ZW0gLnByb2R1Y3QtaXRlbV9faW1hZ2UgPiBpbWcge1xuICBoZWlnaHQ6IDcycHg7XG4gIHdpZHRoOiA3MnB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLmNhcnQtZHJvcGRvd25fX2NvbnRlbnQgLnByb2R1Y3QtbGlzdF9faXRlbSAucHJvZHVjdC1pdGVtX19kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xufVxuLmNhcnQtZHJvcGRvd25fX2NvbnRlbnQgLnByb2R1Y3QtbGlzdF9faXRlbSAucHJvZHVjdC1pdGVtX19kZXNjcmlwdGlvbiAucHJvZHVjdC1uYW1lIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbn1cbi5jYXJ0LWRyb3Bkb3duX19jb250ZW50IC5wcm9kdWN0LWxpc3RfX2l0ZW0gLnByb2R1Y3QtaXRlbV9fZGVzY3JpcHRpb24gLnByb2R1Y3QtYW1vdW50ID4gc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2FydC1kcm9wZG93bl9fY29udGVudCAuY2FydC1pbmZvIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5jYXJ0LWRyb3Bkb3duX19jb250ZW50IC5jYXJ0LWluZm8gLnNlbGVjdGVkLWFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4uY2FydC1kcm9wZG93bl9fY29udGVudCAuY2FydC1pbmZvIC50b3RhbC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jYXJ0LWRyb3Bkb3duX19jb250ZW50IC5jYXJ0LWN0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uY2FydC1kcm9wZG93bl9fY29udGVudCAuY2FydC1jdGEgPiBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5hdi1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbi5uYXYtY29udGFpbmVyID4gbmF2ID4gdWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm5hdi1jb250YWluZXIgPiBuYXYgPiB1bCA+IGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5zaWRlLW1lbnUge1xuICB3aWR0aDogMjg1cHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmc6IDU2cHggMHB4IDI0cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjg1cHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE2QjgzO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZTtcbiAgei1pbmRleDogMTAwMDI7XG59XG4uc2lkZS1tZW51ID4gaSB7XG4gIHRvcDogMjRweDtcbiAgcmlnaHQ6IDI0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2lkZS1tZW51X19jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2lkZS1tZW51X19jb250ZW50ID4gaDIge1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG4uc2lkZS1tZW51X19jb250ZW50ID4gaDI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7XG59XG4uc2lkZS1tZW51X19jb250ZW50ID4gbmF2ID4gdWwgPiBsaSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDhweCAwIDhweCAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cbi5zaWRlLW1lbnVfX2NvbnRlbnQgPiBuYXYgPiB1bCA+IGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MSwgNzAsIDcwLCAwLjg2Myk7XG59XG4uc2lkZS1tZW51X19jb250ZW50IC7wn42RIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNpZGUtbWVudV9fY29udGVudCAu8J+NkSA+IGJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICB3aWR0aDogMjM2cHg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5zaWRlLW1lbnUuc2hvdyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuLmRhcmtlbi1iYWNrZ3JvdW5kIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zNXMgZWFzZTtcbiAgei1pbmRleDogMTAwMDE7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZGFya2VuLWJhY2tncm91bmQuZW5hYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLmxvZ28ge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn0iXX0= */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "H+bZ");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token-storage.service */ "Zr0/");





class AuthService {
    constructor(_api, _token) {
        this._api = _api;
        this._token = _token;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this._token.getUser());
        this.user = this.userSubject.asObservable();
    }
    getUser() {
        console.log(this.userSubject);
        console.log(this.userSubject.value);
        return this.userSubject.value;
    }
    login(credentials) {
        return this._api
            .postTypeRequest('auth/login', {
            email: credentials.email,
            password: credentials.password,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => {
            let user = {
                email: credentials.email,
                token: res.token,
            };
            this._token.setToken(res.token);
            this._token.setUser(res.data[0]);
            console.log(res);
            this.userSubject.next(user);
            return user;
        }));
    }
    register(user) {
        return this._api.postTypeRequest('auth/register', {
            fullName: user.fullName,
            email: user.email,
            password: user.password,
        });
    }
    logout() {
        this._token.clearStorage();
        this.userSubject.next(null);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tB1I":
/*!*******************************************!*\
  !*** ./src/app/services/model.service.ts ***!
  \*******************************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ModelService {
    constructor(http) {
        this.http = http;
        this.getApi = 'https://mavericks-hackathon-aquila.herokuapp.com/api/models/';
        this.getByModelId = 'https://mavericks-hackathon-aquila.herokuapp.com/api/model/modelId';
        this.getByCategory = 'https://mavericks-hackathon-aquila.herokuapp.com/api/model/category';
    }
    getModel() {
        return this.http.get(this.getApi);
    }
    getModelByID(id) {
        return this.http.get(this.getByModelId + '/' + id);
    }
    getModelByCategory(category) {
        return this.http.get(this.getByCategory + '/' + category);
    }
}
ModelService.ɵfac = function ModelService_Factory(t) { return new (t || ModelService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ModelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModelService, factory: ModelService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tknV":
/*!*****************************************!*\
  !*** ./src/app/home/list-category.json ***!
  \*****************************************/
/*! exports provided: value, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"value\":[{\"type\":\"Sofa\",\"img\":\"https://hnicorpcdn.azureedge.net/furniture-mr/thumbnails/hexa1023.png\"},{\"type\":\"Chair\",\"img\":\"https://images.unsplash.com/photo-1610647186667-c62601403304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80\"},{\"type\":\"Lamp\",\"img\":\"https://images.pexels.com/photos/2168382/pexels-photo-2168382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\"},{\"type\":\"Table\",\"img\":\"https://i.pinimg.com/474x/c3/ef/07/c3ef07c1710d5aad3ba4a7e68e61f3a9.jpg\"},{\"type\":\"Set\",\"img\":\"https://images.unsplash.com/photo-1604011854873-76e939ef5a5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ4fHxzZXQlMjBmdXJuaXR1cmV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60\"},{\"type\":\"Cubicle\",\"img\":\"https://i.pinimg.com/564x/e6/ad/22/e6ad2241188928d7233926310ea74855.jpg\"},{\"type\":\"Lounge\",\"img\":\"https://i.pinimg.com/564x/c6/54/cd/c654cd4cce3d1fba84e64f4a54136255.jpg\"},{\"type\":\"Cabin\",\"img\":\"https://i.pinimg.com/474x/e8/a4/cd/e8a4cdf722c8d7ad1412f80befda8161.jpg\"},{\"type\":\"Large Seater\",\"img\":\"https://i.pinimg.com/564x/7c/1e/da/7c1eda06177ad596c8ba9303748a0ce3.jpg\"},{\"type\":\"Rack\",\"img\":\"https://i.pinimg.com/564x/1f/d6/fb/1fd6fb00c60f4fe2eb80c506e6f568b8.jpg\"},{\"type\":\"Hearth\",\"img\":\"https://images.pexels.com/photos/1724228/pexels-photo-1724228.jpeg?cs=srgb&dl=pexels-craig-adderley-1724228.jpg&fm=jpg\"}]}");

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
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-details/product-details.component */ "ylPK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/components/login/login.component */ "OuDC");
/* harmony import */ var _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-history/order-history.component */ "d759");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/components/register/register.component */ "ysMu");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth-guard.service */ "Hs9l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'login', component: _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
    },
    { path: 'product/:productId', component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_0__["ProductDetailsComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"] },
    {
        path: 'checkout',
        component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__["CheckoutComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
    },
    {
        path: 'order-history',
        component: _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_6__["OrderHistoryComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "ylPK":
/*!**************************************************************!*\
  !*** ./src/app/product-details/product-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _products_card_test_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../products-card/test.json */ "dQCy");
var _products_card_test_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../products-card/test.json */ "dQCy", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/model.service */ "tB1I");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function ProductDetailsComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", v_r1.Src);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](v_r1.Name);
} }
class ProductDetailsComponent {
    constructor(route, modelService) {
        this.route = route;
        this.modelService = modelService;
        this.data = _products_card_test_json__WEBPACK_IMPORTED_MODULE_0__["value"][0];
        this.variants = [];
    }
    ngOnInit() {
        const routeParams = this.route.snapshot.paramMap;
        const productIdFromRoute = String(routeParams.get('productId'));
        console.log(productIdFromRoute);
        this.modelService.getModelByID(productIdFromRoute).subscribe(data => {
            this.data = data[0];
            console.log(this.data);
        });
    }
    onSelect(event) {
    }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_model_service__WEBPACK_IMPORTED_MODULE_3__["ModelService"])); };
ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["app-product-details"]], decls: 43, vars: 8, consts: [[2, "background-color", "#eee", "height", "100%"], [1, "row"], [1, "col-md-6", "mb-4", "mb-md-0"], ["id", "mdb-lightbox-ui"], [1, "mdb-lightbox"], [1, "row", "product-gallery", "mx-1"], [1, "col-12", "mb-0"], [1, "view", "overlay", "rounded", "z-depth-1", "main-img"], [1, "swiper-container", "zoom-top"], [1, "swiper-wrapper"], ["id", "model-viewer-id", "ar", "", "ar-modes", "scene-viewer webxr quick-look", "ar-scale", "fixed", "camera-controls", "", "alt", "A 3D model of an astronaut", "background-color", "#9FB8AD", "shadow-intensity", "1", "auto-rotate", "", "magic-leap", "", "loading", "lazy", "ar-status", "not-presenting", 1, "c", "modal-fullscreen-md-down", 2, "background-color", "rgb(238, 238, 238)", "width", "400px", "height", "300px", 3, "src", "ios-src", "poster"], ["id", "controls", 1, "dim", 2, "position", "absolute", "bottom", "10px"], ["id", "src", "placeholder", "Re", 3, "change"], ["for", "src"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "container"], [1, "col-sm-6"], [1, "mb-2", "text-muted", "text-uppercase", "small"], [1, "mr-1"], [1, "row", 2, "margin-left", "110px"], [1, "qrtext", 2, "float", "left"], [1, "fa", "fa-android", 2, "font-size", "24px", "color", "#99cc00", "margin-left", "10px"], [1, "fa", "fa-apple", 2, "font-size", "24px", "margin-left", "10px"], [1, "pt-1"], ["type", "button", 1, "btn", "btn-primary", "btn-md", "mr-1", "mb-2"], ["type", "button", 1, "btn", "btn-light", "btn-md", "mr-1", "mb-2"], [1, "fas", "fa-shopping-cart", "pr-2"], [3, "value"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "figure", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "model-viewer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProductDetailsComponent_Template_select_change_13_listener($event) { return ctx.onSelect($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Product:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProductDetailsComponent_option_16_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "View in AR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Buy now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.data.Src);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("ios-src", ctx.data.IosSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("poster", ctx.data.Product_Image);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.variants);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.SubCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.PriceText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.Description);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap\");\nhtml[_ngcontent-%COMP%] {\n  background-color: #C2C2C2;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: #eee;\n  font-family: \"Poppins\", sans-serif;\n}\ndiv[_ngcontent-%COMP%] {\n  background-color: #eee;\n}\n.col-md-6[_ngcontent-%COMP%] {\n  background-color: #eee;\n}\n.card[_ngcontent-%COMP%] {\n  border: none;\n  overflow: hidden;\n}\n.thumbnail_images[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n}\n.thumbnail_images[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px;\n  padding: 10px;\n  border: 2px solid #eee;\n  cursor: pointer;\n  transition: all 0.5s;\n}\n.thumbnail_images[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  border: 2px solid #000;\n}\n.main_image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #eee;\n  height: 400px;\n  width: 100%;\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 14px;\n  border: none;\n}\n.demo[_ngcontent-%COMP%] {\n  width: 100%;\n}\nul[_ngcontent-%COMP%] {\n  list-style: none outside none;\n  padding-left: 0;\n  margin-bottom: 0;\n}\nli[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  margin-right: 6px;\n  cursor: pointer;\n}\nimg[_ngcontent-%COMP%] {\n  display: block;\n  height: auto;\n  width: 100%;\n}\n.colors[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.colors[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  padding-left: 0px;\n}\n.colors[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  display: flex;\n  border-radius: 50%;\n  margin-right: 10px;\n  cursor: pointer;\n}\n.colors[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #263f55;\n}\n.colors[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #96918b;\n}\n.colors[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  background-color: #68778e;\n}\nhr[_ngcontent-%COMP%] {\n  color: #d4d4d4;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.3rem 0.2rem;\n}\n.dim[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);\n  color: rgba(0, 0, 0, 0.8);\n  display: block;\n  font-weight: 700;\n  overflow-wrap: break-word;\n  padding: 0.5em 1em;\n  width: -webkit-max-content;\n  width: max-content;\n  --min-hotspot-opacity: 0;\n  margin-top: 100px;\n  margin-left: 90px;\n}\n.qrcode[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 150px;\n  height: 150px;\n}\n.qrtext[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.fa[_ngcontent-%COMP%]   fa-android[_ngcontent-%COMP%] {\n  color: #99cc00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpSEFBQTtBQUdSO0VBQ0kseUJBQUE7QUFESjtBQUdBO0VBQ0ksc0JBQUE7RUFDQSxrQ0FBQTtBQUFKO0FBR0E7RUFFSSxzQkFBQTtBQURKO0FBSUE7RUFDSSxzQkFBQTtBQURKO0FBSUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFFQSxtQkFBQTtFQUNBLGdCQUFBO0FBRko7QUFLQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFGSjtBQUtBO0VBQ0ksc0JBQUE7QUFGSjtBQUtBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUlBO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQURKO0FBSUE7RUFDSSxXQUFBO0FBREo7QUFJQTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREo7QUFJQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBREo7QUFJQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQURKO0FBSUE7RUFDSSxlQUFBO0FBREo7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQUo7QUFHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0FBQUo7QUFHQTtFQUNJLHlCQUFBO0FBQUo7QUFLQTtFQUNJLGNBQUE7QUFGSjtBQU9BO0VBQ0ksNkJBQUE7QUFKSjtBQU9BO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBR0EsZ0JBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEsMEJBQUE7RUFBQSxrQkFBQTtFQUdBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQVZKO0FBWUU7RUFFRSxZQUFBO0VBRUYsWUFBQTtFQUVBLGFBQUE7QUFaRjtBQWtCQTtFQUlJLGlCQUFBO0FBbEJKO0FBd0JBO0VBSUksY0FBQTtBQXhCSiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuXHJcbmh0bWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MyQzJDMjtcclxufVxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuZGl2e1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcblxyXG59XHJcbi5jb2wtbWQtNntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW5cclxufVxyXG5cclxuLnRodW1ibmFpbF9pbWFnZXMgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHhcclxufVxyXG5cclxuLnRodW1ibmFpbF9pbWFnZXMgdWwgbGkge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzXHJcbn1cclxuXHJcbi50aHVtYm5haWxfaW1hZ2VzIHVsIGxpOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDBcclxufVxyXG5cclxuLm1haW5faW1hZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxyXG59XHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgYm9yZGVyOiBub25lXHJcbn1cclxuXHJcbi5kZW1vIHtcclxuICAgIHdpZHRoOiAxMDAlXHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmUgb3V0c2lkZSBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMFxyXG59XHJcblxyXG5saSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxuLmNvbG9ycyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHhcclxufVxyXG4uY29sb3JzIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHhcclxufVxyXG5cclxuLmNvbG9ycyB1bCBsaSB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG5cclxuLmNvbG9ycyB1bCBsaTpudGgtY2hpbGQoMSkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2M2Y1NVxyXG59XHJcblxyXG4uY29sb3JzIHVsIGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTY5MThiXHJcbn1cclxuXHJcbi5jb2xvcnMgdWwgbGk6bnRoLWNoaWxkKDMpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ODc3OGVcclxufVxyXG5cclxuXHJcblxyXG5ociB7XHJcbiAgICBjb2xvcjogI2Q0ZDRkNFxyXG59XHJcblxyXG5cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMC4zcmVtIDAuM3JlbSAwLjJyZW1cclxufVxyXG5cclxuLmRpbXtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vIGZvbnQtZmFtaWx5OiBGdXR1cmEsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xyXG4gICAgLy8gZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIC8vIG1heC13aWR0aDogMTI4cHg7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgLy8gaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCk7XHJcbiAgICAtLW1pbi1ob3RzcG90LW9wYWNpdHk6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xyXG4gIH1cclxuICAucXJjb2Rle1xyXG5cclxuICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgd2lkdGg6IDE1MHB4O1xyXG5cclxuICBoZWlnaHQ6IDE1MHB4O1xyXG5cclxuIFxyXG5cclxufVxyXG5cclxuLnFydGV4dHtcclxuXHJcbiAgIFxyXG5cclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuXHJcblxyXG59XHJcblxyXG4uZmEgZmEtYW5kcm9pZHtcclxuXHJcbiAgIFxyXG5cclxuICAgIGNvbG9yOiAjOTljYzAwO1xyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ysMu":
/*!****************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/alert */ "Wfee");











const _c0 = function () { return { "margin-bottom": "16px" }; };
function RegisterComponent_nz_alert_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 21);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMessage", ctx_r0.errorMessage)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
class RegisterComponent {
    constructor(_api, _auth, _router) {
        this._api = _api;
        this._auth = _auth;
        this._router = _router;
        this.fullName = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.errorMessage = '';
        this.loading = false;
    }
    ngOnInit() { }
    onSubmit() {
        this.errorMessage = '';
        if (this.fullName && this.password && this.email && this.confirmPassword) {
            if (this.password !== this.confirmPassword) {
                this.errorMessage = 'Passwords need to match';
            }
            else {
                this.loading = true;
                this._auth
                    .register({
                    fullName: this.fullName,
                    email: this.email,
                    password: this.password,
                })
                    .subscribe((res) => {
                    console.log(res);
                    this.loading = false;
                    this._router.navigate(['/login']);
                }, (err) => {
                    this.errorMessage = err.error.message;
                    this.loading = false;
                });
            }
        }
        else {
            this.errorMessage = 'Make sure to fill everything ;)';
        }
    }
    canSubmit() {
        return this.fullName && this.email && this.password && this.confirmPassword
            ? true
            : false;
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 40, vars: 7, consts: [[1, "register-container"], [1, "form-container"], ["nzShowIcon", "", "nzType", "error", 3, "nzMessage", "ngStyle", 4, "ngIf"], [3, "ngSubmit"], ["registerForm", "ngForm"], [1, "input-container"], ["for", "fullName"], ["nz-input", "", "type", "text", "name", "fullName", "placeholder", "Enter your full name", 3, "ngModel", "ngModelChange"], ["for", "email"], ["nz-input", "", "type", "email", "name", "email", "placeholder", "Enter your email address", 3, "ngModel", "ngModelChange"], [1, "\uD83E\uDD2A"], ["for", "password"], ["nz-input", "", "type", "password", "name", "password", "placeholder", "Enter a strong password", 3, "ngModel", "ngModelChange"], ["for", "confirmPassword"], ["nz-input", "", "type", "password", "name", "confirmPassword", "placeholder", "Repeat your password", 3, "ngModel", "ngModelChange"], [1, "\u2705"], [1, "checkbox-container"], ["nz-input", "", "type", "checkbox"], [1, "cta-container"], ["nz-button", "", "type", "submit", 3, "disabled", "nzLoading"], ["routerLink", "/login"], ["nzShowIcon", "", "nzType", "error", 3, "nzMessage", "ngStyle"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign Up to Eccom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegisterComponent_nz_alert_4_Template, 1, 3, "nz-alert", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Full name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_10_listener($event) { return ctx.fullName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_19_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Confirm password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_23_listener($event) { return ctx.confirmPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "I agree to receive instructional and promotional emails");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " I agree to Eccom's Terms of Use & Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sign in with an existing user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.canSubmit())("nzLoading", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_10__["NzAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["@charset \"UTF-8\";\n.register-container[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  max-width: 475px;\n  padding: 24px 16px;\n  margin: 0 auto;\n  border-radius: 3px;\n  background-color: #fff;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > .error-container[_ngcontent-%COMP%] {\n  padding: 12px;\n  margin: 0 0 16px;\n  color: #fff;\n  background-color: #f83333;\n  border-radius: 4px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .\uD83E\uDD2A[_ngcontent-%COMP%] {\n  display: grid;\n  grid-column-gap: 12px;\n  grid-template-columns: 1fr 1fr;\n  margin-bottom: 24px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .\u2705[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .\u2705[_ngcontent-%COMP%]    > .checkbox-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .\u2705[_ngcontent-%COMP%]    > .checkbox-container[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  width: auto;\n  margin-right: 12px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .\u2705[_ngcontent-%COMP%]    > .checkbox-container[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .cta-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .cta-container[_ngcontent-%COMP%]    > button[type=submit][_ngcontent-%COMP%] {\n  height: 52px;\n  width: 100%;\n  padding: 0px 30px;\n  margin-bottom: 12px;\n}\n.register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%]    > .cta-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  text-align: left;\n}\n@media screen and (min-width: 768px) {\n  .register-container[_ngcontent-%COMP%] {\n    padding: 48px 16px 240px;\n  }\n  .register-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    padding: 36px;\n    border: 1px solid #ccc;\n  }\n}\n.input-container[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.input-container[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  display: inline-block;\n  margin-bottom: 6px;\n}\n.input-container[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0Usa0JBQUE7QUFFRjtBQURFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBR0o7QUFGSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFJTjtBQUZJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFJTjtBQURNO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUdSO0FBRE07RUFDRSxtQkFBQTtBQUdSO0FBRlE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUlWO0FBSFU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFLWjtBQUhVO0VBQ0Usa0JBQUE7QUFLWjtBQURNO0VBQ0Usa0JBQUE7QUFHUjtBQUZRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBSVY7QUFGUTtFQUNFLGdCQUFBO0FBSVY7QUFHQTtFQUNFO0lBQ0Usd0JBQUE7RUFBRjtFQUVFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0VBQUo7QUFDRjtBQUlBO0VBQ0UsbUJBQUE7QUFGRjtBQUdFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQURKIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnJlZ2lzdGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDI0cHggMTZweDtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA0NzVweDtcbiAgcGFkZGluZzogMjRweCAxNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnJlZ2lzdGVyLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgPiBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLmZvcm0tY29udGFpbmVyID4gLmVycm9yLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG1hcmdpbjogMCAwIDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjgzMzMzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiAu8J+kqiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtY29sdW1uLWdhcDogMTJweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLnJlZ2lzdGVyLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgPiBmb3JtID4gLuKchSB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiAu4pyFID4gLmNoZWNrYm94LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiAu4pyFID4gLmNoZWNrYm94LWNvbnRhaW5lciA+IGlucHV0IHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLmZvcm0tY29udGFpbmVyID4gZm9ybSA+IC7inIUgPiAuY2hlY2tib3gtY29udGFpbmVyID4gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi5yZWdpc3Rlci1jb250YWluZXIgLmZvcm0tY29udGFpbmVyID4gZm9ybSA+IC5jdGEtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJlZ2lzdGVyLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgPiBmb3JtID4gLmN0YS1jb250YWluZXIgPiBidXR0b25bdHlwZT1zdWJtaXRdIHtcbiAgaGVpZ2h0OiA1MnB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ucmVnaXN0ZXItY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciA+IGZvcm0gPiAuY3RhLWNvbnRhaW5lciA+IGRpdiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5yZWdpc3Rlci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDQ4cHggMTZweCAyNDBweDtcbiAgfVxuICAucmVnaXN0ZXItY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMzZweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB9XG59XG4uaW5wdXQtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5pbnB1dC1jb250YWluZXIgPiBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLmlucHV0LWNvbnRhaW5lciA+IGlucHV0IHtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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