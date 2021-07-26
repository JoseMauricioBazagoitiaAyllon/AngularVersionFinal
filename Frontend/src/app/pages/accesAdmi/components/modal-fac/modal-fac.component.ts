import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-fac',
  templateUrl: './modal-fac.component.html',
  styleUrls: ['./modal-fac.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalFacComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
