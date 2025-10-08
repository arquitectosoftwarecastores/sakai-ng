import { Component, Input } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-animations-svg',
  imports: [LottieComponent],
  templateUrl: './animations-svg.component.html',
  styleUrl: './animations-svg.component.scss'
})
export class AnimationsSvgComponent {
  @Input() animationName: string = "";
  @Input() height: string = "";
  @Input() width: string = "";
  @Input() containerClass: string = "";

  public options: AnimationOptions = {} as AnimationOptions;

  ngOnInit() {
    this.options = {
      path: `assets/animated/${this.animationName}/data.json`
    };
  }

}
