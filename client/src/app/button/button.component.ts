import { Component, Input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
@Component({
  selector: 'ng-button',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = '';

  @Input() size: "small" | "medium" | "large" = "medium";
  @Input() btn_style: "filled" | "outlined" | "text" = "filled";
  @Input() color: "primary" | "secondary" | "sucess" | "danger" = "primary";
testing: any;

  getStyle() {
    return `btn-${this.btn_style}`
  }

  getSize() {
    return {
      padding: this.getPaddingVal(this.size),
      fontSize: this.getFontSizeVal(this.size)
    }
  }

  getColor() {
    return {

      backgroundColor: this.getColorVal(this.color),
      
      color: this.getTextColorVal(this.color)
    
    }
  }
  getColorVal(color: string) {
    switch (color) {
      case 'primary':
        return '#3498db';

      case 'secondary':
        return '#f1c50f';

      case'success':
        return '#2ecc71';

      case 'danger':
        return '#e74c3c';

      default:
        return '#3498db'
    }
  }

  private getTextColorVal(color: string) {
    switch (color) {
      case 'primary':
      case 'success':
        return '#fff'

      case 'secondary':
      case 'danger':
        return '#333'

      default:
        return '#fff'
    }
  }

  private getPaddingVal(size: string) {
    switch(size) {
      case 'small':
        return '4px 8px';

      case 'medium':
        return '8px 16px';

      case 'large':
        return '12px 24px';

      default:
        return '16px';
    }
  }

  private getFontSizeVal(size: string) {
    switch (size) {
      case 'small':
        return '14px';

      case 'medium':
        return '16px';

      case 'large':
        return '18px';

      default:
        return '16px';
    }
  }
}
