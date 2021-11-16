import {Injectable} from '@angular/core';
import {Column, ColumnSelectFilterValue} from "agr-lib";
import {ColumnFilter} from "agr-lib/lib/column/column-filter.types";

@Injectable()
export abstract class AgrGridFilterSortService {
  protected constructor() {
  }

  abstract getColumnFilterValues(column: Column);
  abstract switchSort(column: Column, multiple?: boolean)
  abstract resetSort();
  abstract switchFilter(column: Column, filter:ColumnFilter)
  abstract removeFilter(column:Column)
  abstract getListFilterConditions():string[];

}

