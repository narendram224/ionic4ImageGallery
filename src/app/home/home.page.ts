import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { ImageModelPage } from '../image-model/image-model.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sliderOpts = {
    zoom: false,
    slidesPerView : 1.5,
    centeredSlides: true,
    speceBetween : 20,
  }
  constructor (private modelcontrol: ModalController){}
  onClick(img) {
      this.modelcontrol.create({
        component:ImageModelPage,
        componentProps: {
          img:img
        }
      }).then(modal=> modal.present());
  }

}

