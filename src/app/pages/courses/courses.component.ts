import { Component } from '@angular/core';
import { Course } from '../../interfaces/course.model';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: Course[] = [
    { id: 1, image: 'images/course-2-1.jpg', title: 'development', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { id: 2, image: 'images/course-2-2.jpg', title: 'engineering', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { id: 3, image: 'images/course-2-3.jpg', title: 'mathematics', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { id: 4, image: 'images/course-2-4.jpg', title: 'doctor', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { id: 5, image: 'images/course-2-5.jpg', title: 'science', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { id: 6, image: 'images/course-2-6.jpg', title: 'business', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { id: 7, image: 'images/course-2-7.jpg', title: 'teaching', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { id: 8, image: 'images/course-2-8.jpg', title: 'designing', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    { id: 9, image: 'images/course-2-9.jpg', title: 'dancing', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' }
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

