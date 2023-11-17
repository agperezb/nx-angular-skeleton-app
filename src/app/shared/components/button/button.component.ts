import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    Renderer2,
    ViewChild
} from '@angular/core';
import { CommonModule }                                                                   from '@angular/common';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements AfterViewInit {
    @Input({required: true}) type: 'primary' | 'secondary' | 'danger' | 'outline' | 'link' = 'primary';
    @Input() size: 'small' | 'medium' | 'large' = 'medium';
    @Input() disabled: boolean = false;
    @Input() focus?: boolean;
    @Input() label?: string;

    @ViewChild('button') button: ElementRef<HTMLButtonElement> | undefined;

    constructor(
        private renderer: Renderer2
    ) {}

    ngAfterViewInit() {
        console.log(`Button ${this.type} initialized`);
        if (this.focus) {
            this.focusButton();
        }
    }

    private focusButton(): void {
        if (this.button) {
            this.renderer.setProperty(this.button.nativeElement, 'focus', 'true');
        }
    }
}
