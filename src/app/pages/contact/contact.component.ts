import { AfterViewInit, Component } from '@angular/core';
import { FAQItem } from '../../interfaces/faq.model';

import Swiper from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements AfterViewInit {
  faqItems: FAQItem[] = [
    {
      question: 'how to contact for help?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      active: false,
    },
    {
      question: 'what is the best career in 2024?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      active: false,
    },
    {
      question: 'how much fees for web development?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      active: false,
    },
    {
      question: 'can I choose my own tutor?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      active: false,
    },
    {
      question: 'what payment methods are available?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      active: false,
    },
    {
      question: 'can I have free trial for a month?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      active: false,
    },
  ];

  toggleAccordion(item: FAQItem): void {
    this.faqItems.forEach((faq) => (faq.active = false));
    item.active = !item.active;
  }

  ngAfterViewInit(): void {
    new Swiper('.logo-slider', {
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    });
  }

  sendMessage(event: Event): void {
    event.preventDefault();
    alert('Message sent!');
  }
}
