import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../common/services/courses.service';
import { EMPTY_COURSE } from '../common/constants/course.constant';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = [];
  courses$: any;
  selectedCourse = EMPTY_COURSE;
  originalTitle = '';

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.fetchCourses();
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  fetchCourses() {
    this.courses$ = this.coursesService.all();
  }

  saveCourse(course) {
    if(course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  createCourse(course) {
    this.coursesService.create(course)
      .subscribe(result => this.fetchCourses());
  }

  updateCourse(course) {
    this.coursesService.update(course)
      .subscribe(result => this.fetchCourses());
  }

  deleteCourse(courseId) {
    this.coursesService.delete(courseId)
      .subscribe(result => this.fetchCourses());
  }

  reset() {
    this.selectCourse({...EMPTY_COURSE});
  }
}
