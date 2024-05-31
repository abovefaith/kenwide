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
    { image: 'assets/images/home-courses-1-1.jpg', title: 'A1', description: 'For the ÖSD Zertifikat A1 exam, candidates should demonstrate the ability to communicate at a basic level, handling simple everyday situations with ease.' },
    { image: 'assets/images/home-courses-1-2.jpg', title: 'A2', description: 'For the ÖSD Zertifikat A2 exam, candidates must communicate effectively in basic situations, encompassing both personal and professional aspects of daily life.' },
    { image: 'assets/images/home-courses-1-3.jpg', title: 'B1', description: `The ÖSD Zertifikat Deutsch Österreich B1 exam, for immigrants aged 16+, evaluates language skills for daily life and work, following CEFR and RCC standards, with content reflecting Austrian daily life.` },
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
