import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  features = [
    {
      name: 'Temperature Control',
      icon: 'fa-thermometer-half',
      description:
        'Monitor and maintain optimal water temperatures for aquatic life.',
    },
    {
      name: 'pH Optimization',
      icon: 'fa-tint',
      description:
        'Ensure the correct pH levels for a thriving aquatic environment.',
    },
    {
      name: 'Water Level Management',
      icon: 'fa-water',
      description:
        'Keep track of water levels to prevent overflow or drought conditions.',
    },
    {
      name: 'Rainfall Tracking',
      icon: 'fa-cloud-rain',
      description:
        'Stay informed about weather conditions affecting the pond ecosystem.',
    },
    {
      name: 'Oxygen Saturation Monitoring',
      icon: 'fa-wind',
      description:
        'Manage oxygen levels for healthy aquatic life and water quality.',
    },
  ];

  techStack = [
    { name: 'Frontend', tech: 'Angular', icon: 'fa-angular' },
    { name: 'Backend', tech: 'Spring Boot', icon: 'fa-leaf' },
    { name: 'Database', tech: 'MongoDB with Hibernate', icon: 'fa-database' },
    {
      name: 'IoT Integration',
      tech: 'Arduino IDE with sensors',
      icon: 'fa-microchip',
    },
  ];

  benefits = [
    'Real-time monitoring and alerts',
    'Data-driven decision making',
    'Automated pond management',
    'Improved aquatic ecosystem health',
    'Cost-effective and efficient operations',
  ];
}
