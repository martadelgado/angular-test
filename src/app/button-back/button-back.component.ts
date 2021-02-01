import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-button-back',
  templateUrl: './button-back.component.html',
  styleUrls: ['./button-back.component.scss']
})
export class ButtonBackComponent implements OnInit {
  @Input() previousStep!: string;
  buttonText = 'RETOUR';

  constructor( private location: Location) { }

  ngOnInit(): void {
  }


  goBack(): void {
    this.location.back();
  }

}
