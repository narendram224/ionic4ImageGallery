import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams } from '@ionic/angular';
import{ModalController} from '@ionic/angular';
@Component({
  selector: 'app-image-model',
  templateUrl: './image-model.page.html',
  styleUrls: ['./image-model.page.scss'],
})
export class ImageModelPage implements OnInit {
img:any;
sliderOpts = {
  zoom :{
    maxRatio :5
  }
}

@ViewChild('slider',{read:ElementRef})slider:ElementRef;
  constructor(private navParams:NavParams,private modelcontroler:ModalController) { }

  ngOnInit() {

    this.img = this.navParams.get('img');
  }

  zoom(zoomIn:boolean){

    const zoom = this.slider.nativeElement.swiper.zoom;
    if(zoomIn){
      zoom.in();
    }else{
      zoom.out();
    }


  }
  close(){

    this.modelcontroler.dismiss();
  }

}
