import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  courses: Course[] = [...COURSES];

  // @ViewChild(CourseCardComponent)
  @ViewChild('cardRef', {read: ElementRef})
  card: ElementRef;
  // card: CourseCardComponent;

  @ViewChild('cardRef2')
  card2: CourseCardComponent;

  // @ViewChildren(CourseCardComponent)
  // cards: QueryList<CourseCardComponent>;

  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cards: QueryList<ElementRef>;

  @ViewChild('courseImage')
  courseImage: ElementRef;

  @ViewChild('container')
  containerDiv: ElementRef;

  startDate = new Date(2000, 0 , 1);
  title = COURSES[1].description;
  price = 9.9956797;
  rate = 0.67;

  course: Course[] = COURSES[1];

  constructor() {
    // console.log('constructor', this.containerDiv);
  }

  ngAfterViewInit(): void {
    this.cards.changes.subscribe(
      cards => console.log('cardss', cards)
    );
    // console.log('ngAfterViewInit', this.containerDiv);
    // console.log('ngAfterViewInit', this.courseImage);
    // console.log('ngAfterViewInit', this.cards);
    // console.log('ngAfterViewInit', this.cards.first);
    // console.log('ngAfterViewInit', this.cards.last);
    // this.courses[1].description = 'test';

  }

  onCourseSelected(course: Course) {
    console.log('App component - click event bubbled... with course', course);
    console.log('card', this.card);
    console.log('card2', this.card2);
    console.log('containerDiv', this.containerDiv);
  }

  trackCourse(index: number, course: Course) {
    return course.id;
  }

  onCourseEdited() {
    this.courses.push(
      {
        id: 3,
        description: 'NgRx In Depth',
        longDescription: "Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics.",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png',
        category: 'ADVANCED',
        lessonsCount: 3,
      },
    )
  }
}
