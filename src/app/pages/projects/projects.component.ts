import { Component, OnInit } from '@angular/core';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import projects from '../../../assets/thumbnails.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: []
})
export class ProjectsComponent implements OnInit {

  private _caretLeftIcon = faCaretLeft;
  private _caretRightIcon = faCaretRight;
  private _carrouselIndex = 0;
  private _projects = projects;
  private _totalProjects = 0;

  constructor() { }

  ngOnInit(): void {
    this._totalProjects = this._projects.length;
  }

  get caretLeft(): any {
    return this._caretLeftIcon;
  }

  get caretRight(): any {
    return this._caretRightIcon;
  }

  get carrouselIndex(): number {
    return this._carrouselIndex;
  }

  get projects(): any[] {
    return this._projects;
  }

  get totalProjects(): number {
    return this._totalProjects;
  }

  nextCard(): void {
    this._carrouselIndex += 1;
  }

  previousCard(): void {
    this._carrouselIndex -= 1;
  }
}
