(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['rt-progress-bar'] = {}),global.core,global.common));
}(this, (function (exports,core,common) { 'use strict';

var RtProgressBarComponent = (function () {
    function RtProgressBarComponent() {
    }
    return RtProgressBarComponent;
}());
RtProgressBarComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'rt-progress-bar',
                template: "<div class=\"row\" layout-align=\"center center\"> <div class=\"meter\"> <span class=\"progressParent\" [style.width.%]=\"percentage\"> <span class=\"progress\"></span> </span> </div> </div>",
                styles: [".row { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; display: flex; padding: 0px 40px 10px 40px; } .meter {  width: 100%; display: block; height: 30px; position: relative; background-color: rgba(0, 150, 136, 0.30); overflow: hidden; } .meter span { display: block; height: 100%; } .progress { background: #009688; -webkit-animation: progressBar 1s ease-in-out; -webkit-animation-fill-mode:both;  -moz-animation: progressBar 1s ease-in-out; -moz-animation-fill-mode:both; } .progressParent { width: 0px; -webkit-transition: width 1s; -moz-transition: width 1s;  transition: width 1s; } @-webkit-keyframes progressBar { 0% { width: 0; } 100% { width: 100%; } } @-moz-keyframes progressBar { 0% { width: 0; } 100% { width: 100%; } }"]
            },] },
];
/**
 * @nocollapse
 */
RtProgressBarComponent.ctorParameters = function () { return []; };
RtProgressBarComponent.propDecorators = {
    'percentage': [{ type: core.Input, args: ["percentage",] },],
};

var RtProgressBarModule = (function () {
    function RtProgressBarModule() {
    }
    /**
     * @return {?}
     */
    RtProgressBarModule.forRoot = function () {
        return {
            ngModule: RtProgressBarModule,
        };
    };
    return RtProgressBarModule;
}());
RtProgressBarModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    RtProgressBarComponent,
                ],
                exports: [
                    RtProgressBarComponent,
                ]
            },] },
];
/**
 * @nocollapse
 */
RtProgressBarModule.ctorParameters = function () { return []; };

exports.RtProgressBarModule = RtProgressBarModule;
exports.RtProgressBarComponent = RtProgressBarComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
