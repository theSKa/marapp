import {Component, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Slides} from 'ionic-angular';

@Component({selector: 'page-home', templateUrl: 'home.html'})
export class HomePage {
  @ViewChild(Slides)slides : Slides;

  public images : string[];

  public backgroundColorIndex : number = 0;
  private backgroundColors : string[] = [
    "white",
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "cyan",
    "fuchsia",
    "indigo"
  ];
  public backgroundColor : string;

  constructor(public navCtrl : NavController) {
    this.images = [];
    for (let i : number = 1; i < 21; i++) {
      this
        .images
        .push(`/assets/imgs/${i}.png`);
    }
    this.backgroundColor = this.backgroundColors[this.backgroundColorIndex];
  }

  public center() {
    this.backgroundColorIndex = (this.backgroundColorIndex + 1) % this.backgroundColors.length;
    this.backgroundColor = this.backgroundColors[this.backgroundColorIndex];
  }

  public left() {
    this.moveSlide(-1);
  }

  public right() {
    this.moveSlide(1);
  }

  private moveSlide(step) {
    let currentIndex = this
      .slides
      .getActiveIndex();
    let nextIndex = currentIndex + step;
    if (nextIndex > -1 && nextIndex < this.images.length) {
      this
        .slides
        .slideTo(nextIndex, 2000);
    }
  }

}
