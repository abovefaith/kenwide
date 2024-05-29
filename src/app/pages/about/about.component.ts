import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit {
  teachers = [
    {
      image: 'assets/images/teacher-1.png',
      name: 'John Deo',
      title: 'expert tutor',
    },
    {
      image: 'assets/images/teacher-2.png',
      name: 'John Deo',
      title: 'expert tutor',
    },
    {
      image: 'assets/images/teacher-3.png',
      name: 'John Deo',
      title: 'expert tutor',
    },
    {
      image: 'assets/images/teacher-4.png',
      name: 'John Deo',
      title: 'expert tutor',
    },
    {
      image: 'assets/images/teacher-5.png',
      name: 'John Deo',
      title: 'expert tutor',
    },
    {
      image: 'assets/images/teacher-6.png',
      name: 'John Deo',
      title: 'expert tutor',
    },
  ];

  reviews = [
    {
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      image: 'assets/images/pic-1.png',
      name: 'John Deo',
      stars: [1, 1, 1, 1, 0.5],
    },
    {
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      image: 'assets/images/pic-2.png',
      name: 'John Deo',
      stars: [1, 1, 1, 1, 0.5],
    },
    {
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      image: 'assets/images/pic-3.png',
      name: 'John Deo',
      stars: [1, 1, 1, 1, 0.5],
    },
    {
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      image: 'assets/images/pic-4.png',
      name: 'John Deo',
      stars: [1, 1, 1, 1, 0.5],
    },
    {
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      image: 'assets/images/pic-5.png',
      name: 'John Deo',
      stars: [1, 1, 1, 1, 0.5],
    },
    {
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      image: 'assets/images/pic-6.png',
      name: 'John Deo',
      stars: [1, 1, 1, 1, 0.5],
    },
  ];

  ngAfterViewInit(): void {
    new Swiper('.teachers-slider', {
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
    });

    new Swiper('.reviews-slider', {
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      breakpoints: {
        0: {
          slidesPerView: 1,
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
