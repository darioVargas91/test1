import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-form-lib',
  template: `
   
    <header>
    <div class="container">
        <h1>Formbuilder</h1>
    </div>
</header>
<div class="container">
<lib-questionario>
</lib-questionario>
</div>
<footer>

</footer>
  `,
  styles: [
  ]
})
export class FormLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
