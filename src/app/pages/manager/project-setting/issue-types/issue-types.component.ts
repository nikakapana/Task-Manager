import { Component, OnInit } from '@angular/core';
import {of, Subject, switchMap, takeUntil} from "rxjs";
import {IssueType} from "../../../../core/interfaces";
import {IssueTypeService} from "../../../../core/services/issue-type.service";

@Component({
  selector: 'app-issue-types',
  templateUrl: './issue-types.component.html',
  styleUrls: ['./issue-types.component.scss']
})
export class IssueTypesComponent implements OnInit {
  displayedColumns = ['id', 'name', 'createdAt', 'actions'];



  sub$ = new Subject();

  constructor(
    private issueTypeService: IssueTypeService,

  ) {

  }


  ngOnInit(): void {
    this.getIssueTypes();
  }

  getIssueTypes() {
    this.issueTypeService.getIssueTypes()


  }



  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();




  }
}
