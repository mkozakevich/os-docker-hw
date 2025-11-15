import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly httpClient = inject(HttpClient);

  protected readonly createdFilesNames = signal<string[]>([]);

  protected onClick() {
    this.httpClient
      .post<{ fileName: string }>('http://localhost:3000/create', {})
      .subscribe(({ fileName }) => {
        this.createdFilesNames.update((currentValue) => [
          ...currentValue,
          fileName,
        ]);
      });
  }
}
