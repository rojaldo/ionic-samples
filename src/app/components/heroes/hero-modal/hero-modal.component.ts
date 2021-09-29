import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-hero-modal',
  templateUrl: './hero-modal.component.html',
  styleUrls: ['./hero-modal.component.scss'],
})
export class HeroModalComponent implements OnInit {

  name = '';
  description = '';

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  onClick() {
    // this.heroes.push({name: this.name, description: this.description});
    this.modalController.dismiss({name: this.name, description: this.description});
    this.name = '';
    this.description = '';
  }

}
