import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project';
import { Project } from '../../models/project';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html'
})
export class Admin implements OnInit {

  projects: Project[] = [];

  title = '';
  description = '';
  techInput = '';

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  addProject() {
    const newProject: Project = {
      title: this.title,
      description: this.description,
      tech: this.techInput.split(',')
    };

    this.projectService.addProject(newProject).subscribe(() => {
      this.loadProjects();
    });
  }

  deleteProject(title: string) {
    this.projectService.deleteProject(title).subscribe(() => {
      this.loadProjects();
    });
  }
}