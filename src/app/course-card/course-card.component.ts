import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output, QueryList,
  ViewChild
} from '@angular/core';
import {Course} from '../model/course';
import {NgClass, NgForOf, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {CourseImageComponent} from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    NgStyle,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgForOf
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit {
 @Input(/*{
   required: true,
 }*/)
  course: Course;

 // @Input({ required: true })
 // index: number;
  @ContentChild('courseImage')
  image: any;

  // @ContentChild(CourseImageComponent)
  // images: CourseImageComponent;

  @ContentChild(CourseImageComponent, {read: ElementRef})
  images: ElementRef;

  // @ContentChildren(CourseImageComponent, { read: ElementRef })
  // imageList: QueryList<ElementRef>;

  @ContentChildren(CourseImageComponent)
  imageList: QueryList<CourseImageComponent>;

  @ViewChild('container')
  container: any;

 @Input()
 cardIndex: number;

 @Output('courseSelected') courseEmitter: EventEmitter<Course> = new EventEmitter<Course>();

  onCourseViewed() {
    console.log('card component - button is clicked...');

    this.courseEmitter.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if (this.course.category === 'BEGINNER') {
      return ['beginner'];
    }

    // return {
    //   'beginner': this.course.category === 'BEGINNER',
    //   // 'course-card': true
    // };
  }

  cardStyles() {
   return {'text-decoration': 'underline'};
  }

  imageStyles() {
    return {
      'background-image': `url(${this.course.iconUrl})`
    }
  }

  ngAfterViewInit(): void {
    console.log('image', this.image);
    console.log('container', this.container);
    console.log('11images', this.images);
  }

  ngAfterContentInit(): void {
    console.log('imageList', this.imageList);
  }
}
