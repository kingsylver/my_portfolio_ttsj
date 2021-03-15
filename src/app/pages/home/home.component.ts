import { DataApiService } from './../../services/http/data-api.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  skills;
  featuredProjects;
  workExperience;
  profile;
  results = [];

  public Search: string = null;
  showMobileImages = false;
  page:string = null;

  constructor(
    public dataApi: DataApiService,
    private router:Router
  ) { }

  @HostListener('window:resize', ['$event'])
  onresize(event): void {
    console.log('WINDOW_RESIZE_EVENT', event);
    this.checkWindowSize();
  }

  private checkWindowSize(): void {
    window.innerWidth <= 768
      ? this.showMobileImages = true
      : this.showMobileImages = false;
  }

  async ngOnInit(): Promise<void> {
    this.checkWindowSize();


    this.skills = await this.dataApi.getTopSkills().then((data)=>{console.log(data); return data;}).catch((error) => {
      const errorSub = throwError (error);
      errorSub.subscribe();
     });
    console.log('SKILLS', this.skills);

    this.featuredProjects = await this.dataApi.getFeaturedProjects();
    console.log('PROJECTS', this.featuredProjects);

    this.workExperience = await this.dataApi.getWorkHistory();
    console.log('WORK', this.workExperience);


    this.profile = await this.dataApi.getProfile();
    console.log('PROFILE', this.profile);

  }

  async downloadResume(): Promise<void> {
    const pdf: any =  await this.dataApi.getBase64CV();
    const byteCharacters = atob(pdf.resume);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const file = new Blob([byteArray], { type: 'application/pdf;base64' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(pdf);
    a.setAttribute('download', `${this.profile.name} CV.pdf`.replace(/\s/g, ''));
    a.click();
  }

  downloadCv(){
      this.router.navigateByUrl("/CV")
  }

  public OnSearched(searchTerm: string) {
    this.Search = searchTerm;
  }
}
