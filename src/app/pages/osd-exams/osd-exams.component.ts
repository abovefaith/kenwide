import { Component } from '@angular/core';
import { Osd } from '../../interfaces/osd.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-osd-exams',
  templateUrl: './osd-exams.component.html',
  styleUrl: './osd-exams.component.scss',

})
export class OsdExamsComponent {

osd: Osd[] = [
  {
      id: 1,
      image: 'assets/images/OSD-1-1.jpg',
      title: 'ÖSD Zertifikat A1',
      description: 'Certifies basic language skills',
      examDates: [new Date('2024-06-01'), new Date('2024-06-02')],
      registrationDeadline: new Date('2024-05-15'),
      examFee: 120
  },
  {
      id: 2,
      image: 'assets/images/OSD-1-2.jpg',
      title: 'ÖSD Zertifikat A1 / Österreich',
      description: 'Tailored to Austrian German ',
      examDates: [new Date('2024-06-05'), new Date('2024-06-06')],
      registrationDeadline: new Date('2024-05-20'),
      examFee: 130
  },
  {
      id: 3,
      image: 'assets/images/OSD-1-3.jpg',
      title: 'ÖSD KID A1',
      description: 'For children',
      examDates: [new Date('2024-06-10'), new Date('2024-06-11')],
      registrationDeadline: new Date('2024-05-25'),
      examFee: 110
  },
  {
      id: 4,
      image: 'assets/images/OSD-1-4.jpg',
      title: 'ÖSD Zertifikat A2',
      description: 'Elementary language skills',
      examDates: [new Date('2024-06-15'), new Date('2024-06-16')],
      registrationDeadline: new Date('2024-05-30'),
      examFee: 125
  },
  {
      id: 5,
      image: 'assets/images/OSD-1-2.jpg',
      title: 'ÖSD Zertifikat A2 / Österreich',
      description: 'Tailored to Austrian German',
      examDates: [new Date('2024-06-20'), new Date('2024-06-21')],
      registrationDeadline: new Date('2024-06-05'),
      examFee: 135
  },
  {
      id: 6,
      image: 'assets/images/OSD-1-3.jpg',
      title: 'ÖSD KID A2',
      description: 'For children',
      examDates: [new Date('2024-06-25'), new Date('2024-06-26')],
      registrationDeadline: new Date('2024-06-10'),
      examFee: 115
  },
  {
      id: 7,
      image: 'assets/images/OSD-1-7.jpg',
      title: 'ÖSD Zertifikat Deutsch Österreich B1',
      description: 'Intermediate skills',
      examDates: [new Date('2024-07-01'), new Date('2024-07-02')],
      registrationDeadline: new Date('2024-06-15'),
      examFee: 140
  },
  {
      id: 8,
      image: 'assets/images/OSD-1-8.jpg',
      title: 'ÖSD Zertifikat Deutsch Österreich B1 / Jugendliche',
      description: 'For teenagers',
      examDates: [new Date('2024-07-05'), new Date('2024-07-06')],
      registrationDeadline: new Date('2024-06-20'),
      examFee: 150
  },
  {
      id: 9,
      image: 'assets/images/OSD-1-9.jpg',
      title: 'ÖSD Zertifikat B1 qualification',
      description: 'General B1 for adults',
      examDates: [new Date('2024-07-10'), new Date('2024-07-11')],
      registrationDeadline: new Date('2024-06-25'),
      examFee: 145
  },
  {
      id: 10,
      image: 'assets/images/OSD-1-8.jpg',
      title: 'ÖSD Zertifikat B1 / Jugendliche',
      description: 'General B1 for teenagers',
      examDates: [new Date('2024-07-15'), new Date('2024-07-16')],
      registrationDeadline: new Date('2024-06-30'),
      examFee: 155
  },
  {
      id: 11,
      image: 'assets/images/OSD-1-11.jpg',
      title: 'ÖSD Zertifikat B2',
      description: 'Upper-intermediate skills',
      examDates: [new Date('2024-07-20'), new Date('2024-07-21')],
      registrationDeadline: new Date('2024-07-05'),
      examFee: 160
  },
  {
      id: 12,
      image: 'assets/images/OSD-1-8.jpg',
      title: 'ÖSD Zertifikat B2 / Jugendliche',
      description: 'For teenagers',
      examDates: [new Date('2024-07-25'), new Date('2024-07-26')],
      registrationDeadline: new Date('2024-07-10'),
      examFee: 170
  },
  {
      id: 13,
      image: 'assets/images/OSD-1-113.jpg',
      title: 'ÖSD Zertifikat B2 / Pflege und medizinische Berufe',
      description: 'For medical professionals',
      examDates: [new Date('2024-08-01'), new Date('2024-08-02')],
      registrationDeadline: new Date('2024-07-15'),
      examFee: 165
  },
  {
      id: 14,
      image: 'assets/images/OSD-1-14.avif',
      title: 'ÖSD Zertifikat C1',
      description: 'Advanced skills',
      examDates: [new Date('2024-08-05'), new Date('2024-08-06')],
      registrationDeadline: new Date('2024-07-20'),
      examFee: 175
  },
  {
      id: 15,
      image: 'assets/images/OSD-1-8.jpg',
      title: 'ÖSD Zertifikat C1 / Jugendliche',
      description: 'For teenagers',
      examDates: [new Date('2024-08-10'), new Date('2024-08-11')],
      registrationDeadline: new Date('2024-07-25'),
      examFee: 180
  },
  {
      id: 16,
      image: 'assets/images/OSD-1-16.jpg',
      title: 'ÖSD Zertifikat C2',
      description: 'Mastery of the language.',
      examDates: [new Date('2024-08-15'), new Date('2024-08-16')],
      registrationDeadline: new Date('2024-07-30'),
      examFee: 190
  },
  {
      id: 17,
      image: 'assets/images/OSD-1-17.jpg',
      title: 'ÖSD Zertifikat C2 / Wirtschaftssprache Deutsch',
      description: 'For business purposes',
      examDates: [new Date('2024-08-20'), new Date('2024-08-21')],
      registrationDeadline: new Date('2024-08-05'),
      examFee: 200
  }
];

  visibleOsd: Osd[] = [];
  loadCount = 4;
  showLoadMore = true;

  constructor() {
    this.loadMore();
  }

  loadMore() {
    const nextOsd = this.osd.slice(this.visibleOsd.length, this.visibleOsd.length + this.loadCount);
    this.visibleOsd = [...this.visibleOsd, ...nextOsd];
    if (this.visibleOsd.length >= this.osd.length) {
      this.showLoadMore = false;
    }
  }

  formatExamDates(dates: Date[]): string {
    if (dates.length === 1) {
      return formatDate(dates[0], 'MMMM d, y', 'en-US');
    } else {
      const startDate = formatDate(dates[0], 'MMMM d', 'en-US');
      const endDate = formatDate(dates[dates.length - 1], 'MMMM d, y', 'en-US');
      return `${startDate} - ${endDate}`;
    }
  }

}
