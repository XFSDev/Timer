import { Injectable } from '@angular/core';
export class TimerService {

    public GetMilisecond(value: number) {
        return this.AddZero((value) % 100);
    }
    public GetSeconds(value: number) {
        return this.AddZero(Math.floor(value / 100) % 60);
    }
    public GetMinutes(value: number) {
        return this.AddZero(Math.floor(value / 6000) % 60);
    }
    private AddZero(value: any) {
        return value <= 9 ? '0' + value : value;
    }
}