import { AfterViewInit, Component } from '@angular/core';
// import Swiper, { Pagination } from 'swiper';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit{

  subjects = [
    { image: 'assets/images/home-slide-1.jpg', title: 'graphic design', modules: 12 },
    { image: 'assets/images/home-slide-2.jpg', title: 'mathematics', modules: 12 },
    { image: 'assets/images/home-slide-3.jpg', title: 'teaching', modules: 12 },
    { image: 'assets/images/home-slide-4.jpg', title: 'development', modules: 12 },
    { image: 'assets/images/home-slide-8.jpg', title: 'science', modules: 12 },
    { image: 'assets/images/home-slide-9.jpg', title: 'engineering', modules: 12 },
  ];

  courses = [
    { image: 'assets/images/home-slide-11.jpg', title: 'Web development', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { image: 'assets/images/home-slide-1.jpg', title: 'Web development', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { image: 'assets/images/home-slide-12.jpg', title: 'Web development', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { image: 'assets/images/home-slide-13.jpg', title: 'Web development', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { image: 'assets/images/home-slide-1.jpg', title: 'Web development', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { image: 'assets/images/home-slide-2.jpg', title: 'Web development', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  ];

  ngAfterViewInit(): void {
    // Swiper.use([Pagination]);  // Use the pagination module

    new Swiper('.home-slider', {
      pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
      loop: true,
      grabCursor: true,
    });

    new Swiper('.home-courses-slider', {
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
    });

  }



}
