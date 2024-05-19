import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  mymediumaccount: string;
  data: any;

  constructor() {
    this.mymediumaccount = 'azizkale';
    this.data = {
      sectionName: 'Articles',
      sectionDescription: ` My passion lies in sharing my knowledge, skills, and experiences. Writing on 
      <a href="https://azizkale.medium.com" target="_blank">medium.com</a> has become 
      a delightful outlet for me to share insights and contribute to a community of learners.
      I thoroughly enjoy expressing my thoughts and expertise, and I look forward to sharing more with you. 
      Feel free to explore my articles on <a href="https://azizkale.medium.com" target="_blank">medium.com</a> 
      and join me on this journey of knowledge-sharing.`,
      articles: [
        {
          title: 'How to implement and use Swagger in Node.js',
          preview: `Swagger is a set of open-source software tools built around the OpenAPI Specification with which we can build, document, and test our APIs.                    
          In this article, I will talk about...          
          `,
          imgUrl:
            'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*_jWH_5iO17G1qUPxlxVlVw.jpeg',
          url: 'https://medium.com/javascript-in-plain-english/how-to-implement-and-use-swagger-in-nodejs-d0b95e765245',
        },
        {
          title: 'Keycloak Integration with Spring Security 6',
          preview: `As the security needs of modern web applications continue to grow, reliable identity authentication and authorization systems become imperative....          
          `,
          imgUrl:
            'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Mlw-8UqpULqXjfDpdjQp1g.png',
          url: 'https://medium.com/javarevisited/keycloak-integration-with-spring-security-6-37999f43ec85',
        },
        {
          title: 'JWT in Spring Security 6 with Database connection',
          preview: `In a Java application, especially after migrating to Spring Security 6, you may need to create or update your security configurations without....         
          `,
          imgUrl:
            'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*KIjX5Ar2jOzjaJCv_qFRwg.png',
          url: 'https://medium.com/javarevisited/jwt-in-spring-security-6-with-database-connection-without-websecurityconfigureradapter-e74344196d11',
        },
        {
          title:
            'Authentication and Authorization with JWT in a GraphQL Server',
          preview: `The safety of a project is just as important as building it. Sometimes, we want our data to be accessed only by the people registered before, not everyone...          
          `,
          imgUrl:
            'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*MRyepp44EvCHsrlQn6OF6A.jpeg',
          url: 'https://medium.com/javascript-in-plain-english/authentication-and-authorization-with-jwt-in-a-graphql-server-d9cf6085f961',
        },
        {
          title: 'RESTful API Testing in Java with Mockito (Controller Layer)',
          preview: `In this article, I will continue covering Mockito in Java projects. In the previous article, we discussed how to create a unit test for the service layer....          
          `,
          imgUrl:
            'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*RD_6GNqIjpX_xo3q.png',
          url: 'https://medium.com/javarevisited/restful-api-testing-in-java-with-mockito-controller-layer-f4605f8ffaf3',
        },
        {
          title: 'Spring Security Without WebSecurity ConfigurerAdapter',
          preview: `In the world of securing Java applications, Spring Security acts as a strong protector, making sure that applications are safe from threats and unauthorized use...          
          `,
          imgUrl: '../../assets/img/articles/html-system-website-concept.jpg',
          url: 'https://medium.com/javarevisited/spring-security-without-websecurityconfigureradapter-c712b81cc6ed',
        },
      ],
    };
  }
}
