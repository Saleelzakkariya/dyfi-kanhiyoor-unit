import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pdf-view';
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  ngOnInit() {
    console.log('pdf');
  }
}
