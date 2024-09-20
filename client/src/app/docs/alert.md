# Alert component

#### Parameters

#### Explanation

this component is responseible for displaying a message to the user.

#### example usage

```html
<ng-alert type="success"></ng-alert>
<ng-alert type="warning">
```

#### testing

```ts
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AlertComponent } from "./alert.component";

describe("AlertComponent", () => {
    let component: AlertComponent;
    let fixture: ComponentFixture<AlertComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AlertComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AlertComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should display an alert window for a short period of time", () => {});
    it("should have an icon with the specified type of alert", () => {})
});
```
