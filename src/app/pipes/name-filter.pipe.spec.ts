/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { NameFilterPipe, NamedItem } from './name-filter.pipe';

describe('Pipe: NameFiltere', () => {
  let pipe: NameFilterPipe;
  let namedItems: NamedItem[];

  beforeEach(() => {
    pipe = new NameFilterPipe();
    namedItems = [
      { name: 'nAme1' },
      { name: 'nAme2' },
      { name: 'AbC' },
      { name: 'A123_rC' }
    ];
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter by name (case insensitive)', () => {
    let filtered = pipe.transform(namedItems, 'ame2');

    expect(filtered[0].name).toBe('nAme2');
    expect(filtered.length).toBe(1);
  });

  it('should not filter if there is empty args', () => {
    let filtered = pipe.transform(namedItems, '');

    expect(filtered).toBe(namedItems);
  });
});
