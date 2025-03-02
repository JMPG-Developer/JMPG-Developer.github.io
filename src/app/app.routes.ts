import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { AboutComponent } from './pages/about/about.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { StatsComponent } from './pages/stats/stats.component';
import { ServicesComponent } from './pages/services/services.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'stats', component: StatsComponent },
    { path: 'testimonials', component: TestimonialsComponent },
    { path: '**', redirectTo: '' }
];