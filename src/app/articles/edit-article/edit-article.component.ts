import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IArticle } from 'src/app/core/models/article';
import { ArticleService } from 'src/app/core/services/article.service';
import { editArticle } from 'src/app/+store/article/action';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  constructor(private articleService: ArticleService,
    private fb: FormBuilder, private route: ActivatedRoute,
    private store: Store) { }

  form: FormGroup;
  article$: Observable<IArticle>;
  id: string;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      category: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      price: ['', [Validators.required, Validators.minLength(5)]],
      quantity: ['', [Validators.required, Validators.minLength(5)]],
      imageURL: ['', [Validators.required, Validators.minLength(5)]]
    })
    this.article$ = this.articleService.getArticleById(this.id).pipe(tap(article => this.form.patchValue(article)));
  }

  editArticle() {
    if (this.form.invalid) { return; }
    this.store.dispatch(editArticle({ id: this.id, payload: this.form.value }))
  }
}
