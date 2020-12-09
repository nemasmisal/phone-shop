import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createArticle } from 'src/app/+store/article/action'

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  form: FormGroup;
  constructor( private fb: FormBuilder, private store: Store) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern('[A-Za-z0-9 ]+')]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(20)]],
      price: ['', [Validators.required, Validators.min(1)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      imageURL: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^(https?:\/\/).+')]],
    })
  }

  createArticle() {
    if (this.form.invalid) { return; }
    this.store.dispatch(createArticle({ payload: this.form.value }));
  }

  get f() {
    return this.form.controls;
  }
}
