import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent {
  public faqdata = [
    { green: true,
      question: 'Can I apply for multiple scholarships?', 
      answer: 'Yes, you can apply for multiple scholarships. However, be sure to carefully review the eligibility requirements and application deadlines for each scholarship program, and only apply for those for which you are truly eligible and interested.' 
    },
    { green: false,
      question: 'Who is eligible for scholarships?', 
      answer: 'Eligibility for scholarships can vary depending on the specific scholarship program and provider. Generally, students who demonstrate academic merit, financial need, or other exceptional achievements or characteristics may be eligible.' 
    },
    { green: false,
      question: 'What happens if I win a scholarship?', 
      answer: 'If you win a scholarship, you will receive notification from the admin. You may be required to provide additional documentation or information. The scholarship funds will directly disbursed to cover tuition, fees, or other educational expenses.' 
    },
    { green: true,
      question: 'Can international students apply for scholarships?', 
      answer: 'Yes, many scholarship programs are open to international students. However, eligibility requirements may vary and international students may be required to provide additional documentation or meet specific criteria.' 
    },
    { green: true,
      question: 'How do I apply for scholarships?', 
      answer: 'You can apply to the scholarships using the Scholarship Portal.' 
    },
    { green: false,
      question: 'Are scholarships only for undergraduate students?', 
      answer: 'No, scholarships are available for undergraduate, graduate, and professional students. ' 
    },
  ];
}
