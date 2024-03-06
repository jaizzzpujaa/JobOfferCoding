
import { Component, OnInit } from '@angular/core';
import { JobListService } from '../job-list.service';
import { FavoriteService } from '../favourites.service';
import { HttpHeaders } from '@angular/common/http';

const jobsData={
  "joboffer": [
    {
      "title": "Data Analyst",
      "companyName": "Microsoft",
      "salary": "30k",
      "description":" Data analysts are in great demand across various specialised fields like finance, healthcare, marketing, business, and the e-commerce sector as they play a decisive part in an organisation’s growth, development, and success.",
      "city": " Phoenix ",
      "reference": "UK",
      "logoUrl":"https://tse2.mm.bing.net/th?id=OIP.AwqQPPIsXyJ5Q7c0sSy0pgHaGt&pid=Api&P=0&h=180",
      "id": "1"
    },
    {
      "title": "Software Developer",
      "companyName": "Google",
      "salary": "40k",
      "description":"A job description for a software developer includes researching, designing, building, and managing computer and application software. They apply scientific and technological principles to user needs, write code, and ensure software functionality. These developers must know coding languages, have problem-solving and critical-thinking skills, and understand the software development process",
      "city": " Banglore ",
      "reference": "IN",
      "logoUrl":"https://searchengineland.com/figz/wp-content/seloads/2018/07/google-building-logo-shutterstock_559400386.jpg",
      "id": "2"
    },
    {
      "title": "Data Engineer",
      "companyName": "Infosys",
      "salary": "35k",
      "description":"Data engineering is the practice of designing and building systems for collecting, storing, and analyzing data at scale. It is a broad field with applications in just about every industry. Organizations have the ability to collect massive amounts of data, and they need the right people and technology to ensure it is in a highly usable state by the time it reaches data scientists and analysts",
      "city": " Pune ",
      "reference": "UK",
      "logoUrl":"https://c8.alamy.com/comp/F2HXYF/a-logo-sign-outside-of-a-facility-occupied-by-infosys-limited-in-plano-F2HXYF.jpg",
      "id": "3"
    },
    {
      "title": "Software Engineer",
      "companyName": "Techfocus",
      "salary": "35k",
      "description":"Software engineering is an engineering-based approach to software development. A software engineer is a person who applies the engineering design process to design, develop, test, maintain, and evaluate computer software. The term programmer is sometimes used as a synonym, but may emphasize software implementation over design and can also lack connotations of engineering education or skills.",
      "city": " Ranchi",
      "reference": "IN",
      "logoUrl":"data:image/jpeg;base64,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",
      "id": "4"
    },
    {
      "title": "Software Tester",
      "companyName": "Google",
      "salary": "50k",
      "city": " Banglore ",
      "description":"A software tester is a professional who validates software functionality against specified requirements. They identify bugs and issues, ensuring the software meets quality standards and user requirements. Their keen eye for detail and analytical skills are pivotal in optimizing software performance.",
      "reference": "UK",
      "logoUrl":"https://lh3.googleusercontent.com/WLzp2WUZdsajXGSUc9_Vm2QLN0zIZ7TOW-gRELHICmaeHSHvNucZ-pxKU-kL2ECqE6Aqe9HympFZN-ZC95UDjCK7Lw6vD5a0CjWaY4w=rw-e365-w842-v1",
      "id": "5"
    }

  ]
}

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

//  using api
//   http: any;
//   constructor(private service:JobListService,private favoriteService: FavoriteService){

//   }
//   jobs: any = [];
//   ngOnInit(): void {

//     this.service.jobslist().subscribe((result) => {
//       console.log(result);
//       this.jobs = result;
//     }
//     )  
//   }
  

//using dummy data in json format
jobs: any[] = [];
  ngOnInit(): void {
    this.jobs = jobsData.joboffer;  
  }
}