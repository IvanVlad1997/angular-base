import {HeaderAwareComponent} from './header-aware-component';

export class TypeGuards {
  public static isHeaderAwareComponent(component: object): component is HeaderAwareComponent {
    return 'header' in component;
  }
}
