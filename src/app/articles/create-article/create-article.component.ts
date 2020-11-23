import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  form: FormGroup;
  constructor(private articleService: ArticleService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      category: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      price: ['', [Validators.required, Validators.minLength(5)]],
      quantity: ['', [Validators.required, Validators.minLength(5)]],
      imageURL: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  createArticle() {
    this.articleService.createArticle(this.form.value).subscribe((data) => {
      this.router.navigate(['home'])
    }, err => {
      console.error(err);
    })
  }

}
