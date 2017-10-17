import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { TimerService } from './TimerService';
import { Injectable } from '@angular/core';

@Injectable()
@Component({
    selector: 'app',
    templateUrl: `app/app.component.html`,
    providers: [TimerService],
    styleUrls: [`Content/styles.css`, "../node_modules/angular2-busy/build/style/busy.css"] 
})
export class AppComponent {

    constructor(private _TimerService: TimerService) { }

    milliseconds: number = 0;
    seconds: number=0;
    minutes: number=0;
    busy: Subscription;
    ticks = 0;
    button1: string = "START";
    LapTimeTable: string[] = [];
    LapTimeIndex: number = 0;

    start()
    {   
        if (this.button1 == "START") {
            let timer = Observable.timer(1, 10);
            this.busy = timer.subscribe(
                t => {
                    this.ticks = t;
                    this.milliseconds = this._TimerService.GetMilisecond(this.ticks);
                    this.seconds = this._TimerService.GetSeconds(this.ticks);
                    this.minutes = this._TimerService.GetMinutes(this.ticks);
                }
            );
            this.button1 = "STOP";
        }
        else 
        {            
            this.busy.unsubscribe();
            this.LapTimeTable = [];
            this.button1 = "START";
        }
    }
    LapTime()
    {
        var date = this.minutes + ":" + this.seconds + ":" + this.milliseconds;      
        if (this.LapTimeTable.length >= 5)
        {
            this.LapTimeTable.splice(this.LapTimeIndex, 1, date);
            if (this.LapTimeIndex >= 4) {
                this.LapTimeIndex = 0;           
            }
           else {
                this.LapTimeIndex++;           
           }
        }
        else
        {
            this.LapTimeTable.push(date);
            
        }
    }
    ngOnInit() {
        this.ticks = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.milliseconds = 0;
    }
}