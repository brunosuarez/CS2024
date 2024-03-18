import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slides = [
    {
      image: '../../../assets/images/cad.png',
     },
    {
      image: '../../../assets/images/gestao.png',
    },
  ];

  carouselConfig = {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true },
    loop: true,
    autoplay: { delay: 3000 },
  };
}
