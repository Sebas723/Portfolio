import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-scroll-arrow',
  imports: [],
  templateUrl: './scroll-arrow.component.html',
  styleUrl: './scroll-arrow.component.css'
})
export class ScrollArrowComponent {
  @Input() targetSection?: string;
  @Input() marginTop?: string;
  @Input() rotateIcon?: string;

  scrollTo() {
    console.log(this.targetSection);
  }
}
