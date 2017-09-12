import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var RtProgressBarComponent = (function () {
    function RtProgressBarComponent() {
    }
    return RtProgressBarComponent;
}());
RtProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'rt-progress-bar',
                template: "<div class=\"row\" layout-align=\"center center\"> <div class=\"meter\" style=\"background: #{{fgColor}};\" > <span class=\"progressParent\" [style.width.%]=\"percentage\"> <span class=\"progress\" style=\"background: #{{bgColor}};\"></span> </span> </div> </div>",
                styles: [".row { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; display: flex; padding: 0px 40px 10px 40px; } .meter {  width: 100%; display: block; height: 30px; position: relative; overflow: hidden; } .meter span { display: block; height: 100%; } .progress { -webkit-animation: progressBar 1s ease-in-out; -webkit-animation-fill-mode:both;  -moz-animation: progressBar 1s ease-in-out; -moz-animation-fill-mode:both; } .progressParent { width: 0px; -webkit-transition: width 1s; -moz-transition: width 1s;  transition: width 1s; } @-webkit-keyframes progressBar { 0% { width: 0; } 100% { width: 100%; } } @-moz-keyframes progressBar { 0% { width: 0; } 100% { width: 100%; } }"]
            },] },
];
/**
 * @nocollapse
 */
RtProgressBarComponent.ctorParameters = function () { return []; };
RtProgressBarComponent.propDecorators = {
    'percentage': [{ type: Input, args: ["percentage",] },],
    'bgColor': [{ type: Input, args: ["bgColor",] },],
    'fgColor': [{ type: Input, args: ["fgColor",] },],
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
    { type: NgModule, args: [{
                imports: [
                    CommonModule
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

export { RtProgressBarModule, RtProgressBarComponent };
