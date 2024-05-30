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
    { image: 'assets/images/subject-icon-1.jpg', title: 'A1', modules: 12 },
    { image: 'assets/images/subject-icon-2.jpg', title: 'A2', modules: 12 },
    { image: 'assets/images/subject-icon-3.jpg', title: 'B1', modules: 12 },
    { image: 'assets/images/subject-icon-4.jpg', title: 'B2', modules: 12 },
    { image: 'assets/images/subject-icon-5.jpg', title: 'C1', modules: 12 },
    { image: 'assets/images/subject-icon-6.jpg', title: 'C2', modules: 12 },
  ];

  courses = [
    { image: 'assets/images/home-courses-1-1.jpg', title: 'A1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { image: 'assets/images/home-courses-1-2.jpg', title: 'A2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { image: 'assets/images/home-courses-1-3.jpg', title: 'B1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { image: 'assets/images/home-courses-1-4.jpg', title: 'B2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { image: 'assets/images/home-courses-1-5.jpg', title: 'C1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { image: 'assets/images/home-courses-1-6.jpg', title: 'C2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
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
