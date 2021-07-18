import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fooder',
  templateUrl: './fooder.component.html',
  styleUrls: ['./fooder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
