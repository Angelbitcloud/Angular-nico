import { TestBed } from '@angular/core/testing';

import { ConsultasSqlService } from './consultas-sql.service';

describe('ConsultasSqlService', () => {
  let service: ConsultasSqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultasSqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
