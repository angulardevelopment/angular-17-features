

What problems directive composition solves? 
Imagine that you have three components
which share some functionality – color change (all of them), disabled state (button and toggle).
The most basic way to achieve this is to set up inputs for each of the components.
One of possible solutions is to use inheritance. We can create a Base Component, which each component will extend.

In that case, the spinner component has support for a disabled state, which is irrelevant for it, and overall, it is not the best practice to expose an api which will not be used.

To eliminate that, we could create two directives – Disable Directive and Color Directive. This way our code will be granulated for each functionality.

@Directive({
    // ...
    hostDirectives: [UserDirective]
})
Directives used in hostDirectives must be Standalone. I.e., they should have standalone: true set in their decorator metadata.

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

<user-cart [userId]="user.id" (userRemoved)="removeUser($event)"/>

@Component({
    selector: 'user-cart',
    template: `
      <button class="user-remove">X</button> 
      ...
    `,
    standalone: true,
-   hostDirectives: [UserDirective]
+   hostDirectives: [
+       {
+           directive: UserDirective,
+           inputs: ['userId'],
+           outputs: ['userRemoved'],
+       },
+   ],
})

<user-cart [id]="user.id" (removed)="removeUser($event)"/>
// aliases
@Component({
    selector: 'user-cart',
    template: `
      <button class="user-remove">X</button> 
      ...
    `,
    standalone: true,
    hostDirectives: [{
        directive: UserDirective,
+       inputs: ['userId: id'],
+       outputs: ['userRemoved: removed'],
    }]
})
export class UserCartComponent {}

