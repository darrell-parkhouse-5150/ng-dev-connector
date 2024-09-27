import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'ng-comment-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.scss'
})
export class CommentFormComponent {
  commentForm!: FormGroup;
  posteId!: number;

  constructor(private ps: PostService) {}


  ngOninit(): void {
    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required)
    })
  }

  onSubmit(): void {
    if (this.commentForm.valid) {
      this.ps.addComment(this.posteId, this.commentForm.value.text)
        .subscribe(_ => {
          this.commentForm.reset();
        })
    }
  }
}
