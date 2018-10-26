import { Component, Input } from '@angular/core';

@Component({
  selector: 'rt-progress-bar',
  templateUrl: './rt-progress-bar.component.html',
  styleUrls: ["./rt-progress-bar.component.css"]
})
export class RtProgressBarComponent{

    /**
     * 
     */
    @Input("percentage") percentage: number;

    /**
     * 
     */
    @Input("bgColor") bgColor: string;

    /**
     * 
     */
    @Input("fgColor") fgColor: string;

}
