import { Directive, HostBinding,HostListener} from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective  {

@HostBinding('style.backgroundColor') color!:string;
@HostListener('mouseenter') mouseEnter(){
  this.color = 'green ';
}
@HostListener('mouseleave') mouseLeave(){
  this.color = 'white'
}
  constructor() { }
  ngOnInit(){
    this.color = 'white';
  }

}
