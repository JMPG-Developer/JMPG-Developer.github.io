import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: '', redirectTo: 'main', pathMatch: 'full' }, // Redirige correctamente a 'main'
    { path: '**', redirectTo: 'main' } // Captura cualquier ruta desconocida y la envía a 'main'
];