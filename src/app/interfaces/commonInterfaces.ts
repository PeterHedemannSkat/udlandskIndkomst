import { Observable } from "rxjs/Observable";

export interface CountryPeriodMap {

  id: string;
  value: number;
  startDate ?: string;

}

export interface StoredData {
  id: string;
  data: any;
  observable: Observable<any>;
}
