import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProjectsService } from 'src/app/core/services/projects.service';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectFacade } from 'src/app/core/facades/project.facade';
import { Board } from 'src/app/core/interfaces/board';

@Component({
  selector: 'app-project-users',
  templateUrl: './project-users.component.html',
  styleUrls: ['./project-users.component.scss']
})
export class ProjectUsersComponent implements OnInit, OnDestroy {

  displayedColums = ['id', 'firstName', 'lastName', 'createdAt', 'actions'];

  dataSource = new MatTableDataSource<Board>();

  sub$ = new Subject();

  get projectId() {
    return this.projectFacade.getProject().id;
  }

  constructor(
    private projectsService: ProjectsService,
    private projectFacade: ProjectFacade
  ) { }



  ngOnInit(): void {
    this.getProjectUsers()
  }

  getProjectUsers() {
    this.projectsService.getProjectUsers(this.projectId).pipe(takeUntil(this.sub$)).subscribe(
      boards => {
        this.dataSource.data = boards
      }
    )
  }


  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }

}
