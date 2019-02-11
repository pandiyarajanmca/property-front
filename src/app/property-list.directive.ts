import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appPropertyList]'
})
export class PropertyListDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) { }

    @Input() set appPropertyList(time: number) {
      setTimeout(() => {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        console.log(this.templateRef);
      }, time);
    }

}
