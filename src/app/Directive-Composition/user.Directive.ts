import { AfterViewInit, DestroyRef, Directive, ElementRef, inject, input, output } from "@angular/core";
import { fromEvent } from "rxjs";



@Directive({standalone: true})
export class UserDirective implements AfterViewInit {
    userId = input.required<number>();
    userRemoved = output<number>();

    private elementRef = inject(ElementRef);
    private destroyRef = inject(DestroyRef);

    ngAfterViewInit() {
        this.userRemoveListener();
    }

    private userRemoveListener() {
        const removeButton =
            this.elementRef.nativeElement.querySelector('button.user-remove');

        if (!removeButton) return;

        const listener$ = fromEvent(removeButton, 'click');
        listener$
            .pipe(
                takeUntilDestroyed(this.destroyRef) // unsubscribe on destroy
            )
            .subscribe(() => this.userRemoved.emit(this.userId()));
    }

    // ...
}







function takeUntilDestroyed(destroyRef: DestroyRef): import("rxjs").OperatorFunction<unknown, unknown> {
    throw new Error("Function not implemented.");
}

