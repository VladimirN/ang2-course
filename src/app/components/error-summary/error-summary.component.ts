import { Component, OnInit } from '@angular/core';
import { SummaryError } from './summary-error';

@Component({
  selector: 'error-summary',
  templateUrl: './error-summary.component.html',
  styleUrls: ['./error-summary.component.css'],
  inputs: ['errors']
})
export class ErrorSummaryComponent {
    errors: SummaryError[];
}
