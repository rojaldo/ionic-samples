import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HeroModalComponent } from '../hero-modal/hero-modal.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {

  name = '';
  description = '';

  heroes = [
    {name: 'Windstorm', description: 'Weather control'},
    {name: 'Bombasto', description: 'Bomb control'},
    {name: 'Magneta', description: 'Magnet control'},
    {name: 'Tornado', description: 'Tornado control'},
  ];

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  remove(i: number) {
    this.heroes.splice(i, 1); 
  }

  async presentModal() {

    const modal = await this.modalController.create({
      component: HeroModalComponent,
      cssClass: 'my-custom-class'
    });
    modal.onDidDismiss().then((data) => {
      console.log(data);
      
      this.heroes.push(data.data);
      }
    );

    return await modal.present();
  }

}
