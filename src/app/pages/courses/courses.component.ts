import { Component } from '@angular/core';
import { Course } from '../../interfaces/course.model';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: Course[] = [
    { id: 1, image: 'assets/images/course-2-1.jpg', title: 'A1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { id: 2, image: 'assets/images/course-2-2.jpg', title: 'A2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { id: 3, image: 'assets/images/course-2-3.jpg', title: 'B1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { id: 4, image: 'assets/images/course-2-4.jpg', title: 'B2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { id: 5, image: 'assets/images/course-2-5.jpg', title: 'C1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { id: 6, image: 'assets/images/course-2-6.jpg', title: 'C2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { id: 7, image: 'assets/images/course-2-7.jpg', title: 'teaching', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { id: 8, image: 'assets/images/course-2-8.jpg', title: 'examining', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { id: 9, image: 'assets/images/course-2-9.jpg', title: 'specialize', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' }
  ];

  visibleCourses: Course[] = [];
  loadCount = 6;
  showLoadMore = true;

  constructor() {
    this.loadMore();
  }

  loadMore() {
    const nextCourses = this.courses.slice(this.visibleCourses.length, this.visibleCourses.length + this.loadCount);
    this.visibleCourses = [...this.visibleCourses, ...nextCourses];
    if (this.visibleCourses.length >= this.courses.length) {
      this.showLoadMore = false;
    }
  }
}

