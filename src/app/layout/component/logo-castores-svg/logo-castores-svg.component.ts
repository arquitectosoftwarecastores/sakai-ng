import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-castores-svg',
  imports: [],
  templateUrl: './logo-castores-svg.component.html',
  styleUrl: './logo-castores-svg.component.scss'
})
export class LogoCastoresSvgComponent {
  @Input() color: string = '#000000';
  @Input() height: string = '65';
  @Input() class: string = 'mb-8 shrink-0 mx-auto';
}
