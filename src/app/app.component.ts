import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  company: string = 'Lokalise';
  created_by: string = $localize`Created by ${this.company}`;
  tasksCount: number = 34;

  localesList: any[] = [
    { code: 'en-US', label: 'English' },
    { code: 'ru', label: 'Русский' }
  ]

  genderCode: number = 0;

  today: number = Date.now()

  male() { this.genderCode = 0 }
  female() { this.genderCode = 1 }
  other() { this.genderCode = 2 }
}
