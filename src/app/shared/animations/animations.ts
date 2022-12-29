import { trigger, style, transition, animate } from '@angular/animations';

export const CardAnimation = trigger('CardAnimation', [
  // Cubic-bezier for a tiny bouncing feel (que he quitado al poner 1 en cuarto lugar).
  transition(':enter', [
    style({transform: 'scale(0.5)', opacity: 0}),
    animate('0.4s cubic-bezier(0.35, 0, 0.25, 1)',
      style({transform: 'scale(1)', opacity: 1}))
  ])
]);

export const FadeInAnimation = trigger('FadeInAnimation', [
  transition('void => *', [
    style({opacity: 0}),
    animate(300, style({opacity: 1}))
  ])
]);
