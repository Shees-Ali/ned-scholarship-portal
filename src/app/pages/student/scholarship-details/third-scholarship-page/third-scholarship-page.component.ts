import { Component, Injector, Input } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'third-scholarship-page',
  templateUrl: './third-scholarship-page.component.html',
  styleUrls: ['./third-scholarship-page.component.scss'],
})
export class ThirdScholarshipPageComponent extends BasePage {
  @Input('scholarship') scholarship: any;
  scholarshipApplicationTips = [
    'Read the requirements carefully: Before you start your application, read the requirements of the scholarship you want to apply for carefully. This will help you understand what the scholarship is looking for in a candidate and ensure that you meet all the necessary criteria.',
    'Gather necessary documents: Gather all the documents required for the scholarship application, such as academic transcripts, personal statement, recommendation letters, and financial information. Make sure you have everything you need before you start your application.',
    'Meet the deadline: Be aware of the deadline for the scholarship and make sure you submit your application well before the deadline to avoid any last-minute rush. Plan your time accordingly and avoid procrastination.',
    'Write a strong personal statement: Your personal statement is an opportunity to showcase your achievements, goals, and why you are the best candidate for the scholarship. Make sure you write a strong and persuasive personal statement that showcases your strengths and highlights your unique qualities.',
    'Request recommendation letters: If the scholarship requires recommendation letters, ask your professors, academic advisors, or employers to write letters on your behalf. Make sure you give them enough time to write the letters, and provide them with any necessary information.',
    'Check for errors: Before you submit your application, double-check it for any errors or mistakes. Make sure all the information you have provided is accurate and complete.',
    'Follow the instructions: Follow the instructions on the scholarship application carefully. Make sure you provide all the required information and documents and complete all the necessary sections of the application.',
    "Be professional: Treat your scholarship application like a job application. Be professional in your communication, dress appropriately if there's an interview, and be prepared to answer questions confidently.",
    "Be persistent: If you don't get the scholarship the first time, don't give up. Keep trying and apply for other scholarships that you qualify for. Persistence is key in the scholarship application process.",
    'Thank the scholarship provider: After you have submitted your application, take the time to thank the scholarship provider for considering your application. It shows that you are grateful and appreciate the opportunity.',
  ];

  constructor(injector: Injector) {
    super(injector);
  }
}
