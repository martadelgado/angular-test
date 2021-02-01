import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonText!: string;
  @Input() nextStep!: string;
  @Input() isCatamaran!: boolean;
  @Input() isSail!: boolean;
  @Input() boatPage!: string;
  @Input() boatForm!: FormGroup;


  constructor() { }

  ngOnInit(): void {
  }
}
