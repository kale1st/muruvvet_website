import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  mymediumaccount: string;
  data: any;


  constructor() {
    this.mymediumaccount = 'azizkale'
    this.data = {
      "sectionName": "Articles",
      "sectionDescription": ` My passion lies in sharing my knowledge, skills, and experiences. Writing on 
      <a href="https://azizkale.medium.com" target="_blank">medium.com</a> has become 
      a delightful outlet for me to share insights and contribute to a community of learners.
      I thoroughly enjoy expressing my thoughts and expertise, and I look forward to sharing more with you. 
      Feel free to explore my articles on <a href="https://azizkale.medium.com" target="_blank">medium.com</a> 
      and join me on this journey of knowledge-sharing.`,
      "articles": [
        {
          "title": "How to implement and use Swagger in Node.js",
          "preview": `Swagger is a set of open-source software tools built around the OpenAPI Specification with which we can build, document, and test our APIs.                    
          In this article, I will talk about...          
          `,
          "imgUrl": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*_jWH_5iO17G1qUPxlxVlVw.jpeg",
          "url": "https://medium.com/javascript-in-plain-english/how-to-implement-and-use-swagger-in-nodejs-d0b95e765245"
        },
        {
          "title": "How to Use TypeScript in HTML",
          "preview": `JavaScript is the most common language programmers can use on both the front end and back end. However, it’s unclear what type the data is in plain JavaScript...          
          `,
          "imgUrl": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*WJ4Z8KEN2zFrdgn4mV04fA.png",
          "url": "https://medium.com/javascript-in-plain-english/how-to-use-typescript-in-html-2df0be436d8b"
        },
        {
          "title": "How to connect ChatGPT with NodeJS",
          "preview": `Artificial Intelligence is one of the popular topic for the people now, who are interested in technology. What is that exactly? And will it be able to control mankind?...          
          `,
          "imgUrl": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*MAEstZ42FlK921-an_z53w.png",
          "url": "https://medium.com/javascript-in-plain-english/how-to-connect-chatgpt-with-nodejs-b176ae418c7e"
        },
        {
          "title": "Authentication and Authorization with JWT in a GraphQL Server",
          "preview": `The safety of a project is just as important as building it. Sometimes, we want our data to be accessed only by the people registered before, not everyone...          
          `,
          "imgUrl": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*MRyepp44EvCHsrlQn6OF6A.jpeg",
          "url": "https://medium.com/javascript-in-plain-english/authentication-and-authorization-with-jwt-in-a-graphql-server-d9cf6085f961"
        },
        {
          "title": "Three Smart Collections in Java Everyone Should Know",
          "preview": `Collections are indispensable structures in a software project. And Java has some magic collections to make your project stronger and more manageable.In this article, I’ll handle three advanced collections...          
          `,
          "imgUrl": "https://miro.medium.com/v2/resize:fit:786/format:webp/1*eg10ywR7Tpq1fHkwhKi8dQ.jpeg",
          "url": "https://medium.com/javarevisited/three-smart-collections-in-java-everyone-should-know-ad1c32720358"
        },
        {
          "title": "Spring Security Without WebSecurityConfigurerAdapter",
          "preview": `In the world of securing Java applications, Spring Security acts as a strong protector, making sure that applications are safe from threats and unauthorized use...          
          `,
          "imgUrl": "../../assets/img/articles/html-system-website-concept.jpg",
          "url": "https://medium.com/javarevisited/spring-security-without-websecurityconfigureradapter-c712b81cc6ed"
        }
      ]
    }
  }

}
