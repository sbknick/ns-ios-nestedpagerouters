import { Component } from "@angular/core";


@Component({
    moduleId: module.id,
    template: `
    <StackLayout>
        <Label text="I am outer-header-text!"></Label>
        <page-router-outlet name="inner-outlet" actionBarVisibility="never"></page-router-outlet>
    </StackLayout>
    `
})
export class OuterComponent {

}
