import { Component, inject, Input } from '@angular/core';
import { EnvironmentApp } from '@interfaces/environment';
import { ENV_APP } from '@tokens/environment.config';
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
  public envApp: EnvironmentApp = inject(ENV_APP);

  ngOnInit() {
    this.options = {
      path: `${this.envApp.URL_BASE_DEPLOY}/assets/animated/${this.animationName}/data.json`
    };
  }

}
