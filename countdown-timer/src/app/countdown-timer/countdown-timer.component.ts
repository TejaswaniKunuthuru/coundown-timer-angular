import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {

  private launchDate: Date;
  private Countdowntime: String;
  counter;

  constructor(private el: ElementRef) { }

  calFunction(distance) {
    var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 30 * 12));
    var months = Math.floor((distance % (1000 * 60 * 60 * 24 * 30 * 12)) / (1000 * 60 * 60 * 24 * 30));
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var total = '';
    if (years > 0) {
      total = years + 'Years';
    }
    if (months > 0) {
      total += ' ' + months + 'Months';
    }
    if (days > 0) {
      total += ' ' + days + 'Days';
    }
    if (hours > 0) {
      total += ' ' + hours + 'Hours';
    }
    if (minutes > 0) {
      total += ' ' + minutes + 'Minutes'
    } if (seconds > 0) {
      total += ' ' + seconds + 'Seconds'
    }
    return total;
  }

  displayTime(date) {
    if (date) {
      this.launchDate = new Date(date);

      this.counter = setInterval(() => {
        const difference = (this.launchDate.getTime() - new Date().getTime())
        this.Countdowntime = this.calFunction(difference);
        if (difference < 0) {
          this.Countdowntime = ' Expired ';
          clearInterval(this.counter);
        }
      }, 1000);
    } else {
      this.Countdowntime = 'Please select valid date and time'
    }
  }
  ngOnInit() {
  }
}
