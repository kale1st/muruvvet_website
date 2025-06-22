import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from './models/IPost';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiUrl = 'https://muruvvet-website-api.vercel.app/send-email'; // Vercel URL
  //private apiUrl = 'http://localhost:3000/send-email'; // Vercel URL

  post: IPost | null = null;
  posts: IPost[] = [
    {
      id: 0,
      title:
        'Interreligiöser Dialog und gemeinsamer Raum für den Frieden – Vorstellung des Projekts „House of One“',
      date: '21 Juni 2021, 19.00 - 20.30 Uhr',
      place: 'Online',
      mainText: [
        'In einer Zeit, in der unsere Welt mehr denn je Frieden braucht, haben sich jüdische, christliche und muslimische Gemeinschaften in Berlin zusammengeschlossen, um ein gemeinsames Gebets- und Begegnungshaus zu errichten. Das Projekt trägt den Namen „House of One“ und vereint Gotteshäuser und Bildungsräume der drei abrahamitischen Religionen unter einem Dach. Darüber hinaus soll es ein Ort des Austauschs und des Dialogs zwischen Menschen unterschiedlicher Glaubensrichtungen und Perspektiven sein.',
        'Im Rahmen dieser Veranstaltung stellte Osman Örs vom Verein Forum Dialog das Projekt vor. Der Grundstein für das Gebäude wurde bereits in Berlin gelegt. Die Kosten des Projekts belaufen sich auf insgesamt 47 Millionen Euro. Davon übernimmt die Bundesregierung 20 Millionen Euro und das Land Berlin 10 Millionen Euro. Der verbleibende Betrag wird durch private Spenden finanziert.',
        'Initiiert wurde das Projekt von den Berliner Kirchengemeinden St. Petri und St. Marien, unterstützt von der Jüdischen Gemeinde Berlin und dem Abraham-Geiger-Kolleg, das Rabbiner ausbildet. Forum Dialog beteiligt sich als Vertreter der muslimischen Gemeinschaft an dem Projekt. Dieses innovative Vorhaben soll in Zukunft als Vorbild für ähnliche interreligiöse Initiativen dienen.',
      ],
      quote: `“Frieden entsteht, wenn wir den Mut haben, Brücken zwischen unseren Unterschieden zu bauen.”`,
      images: [
        {
          url: 'assets/img/detailpage/houseofone.jpg',
        },
      ],
    },
    {
      id: 1,
      title: 'Gemeinsames Gebetsprogramm zum Tag der Menschenrechte',
      date: '24. Dezember 2020, 12:00 Uhr',
      place: 'Online',
      mainText: [
        'Menschenrechtsverletzungen und Unterdrückung sind weltweit traurige Realität. Um ein Zeichen gegen dieses Leiden zu setzen, fand am 24. Dezember 2020 ein gemeinsames Gebetsprogramm mit Vertreter*innen verschiedener religiöser Gemeinschaften statt.',
        'An dem Online-Programm beteiligten sich die Katholische Kirche (St. Michael), die Evangelisch-Lutherische Kirche, die Reformierte Kirche sowie die muslimisch geprägte Organisation Mürüvvet – Die Offene Tür e.V.',
        'Zwischen den Gebetsabschnitten wurde ein künstlerischer Beitrag von einem Vertreter der katholischen Kirche präsentiert. Diese interreligiöse Zusammenkunft setzte ein starkes Zeichen für Mitgefühl, Menschenwürde und die gemeinsame Verantwortung aller Glaubensrichtungen für Gerechtigkeit und Frieden in der Welt.',
      ],
      quote: `"Gemeinsam beten heißt, gemeinsam Verantwortung für Gerechtigkeit und Frieden in der Welt zu tragen."`,
      images: [
        {
          url: 'assets/img/detailpage/gemeinsam.png',
        },
      ],
    },
    {
      id: 2,
      title: 'Mittagstisch – Mittagessen für Obdachlose am Weltflüchtlingstag',
      date: '20. Juni 2021',
      place: 'Kirche Sankt Michael',
      mainText: [
        'Anlässlich des Weltflüchtlingstags am 20. Juni 2021 organisierte Mürüvvet – Die Offene Tür e.V. in Zusammenarbeit mit der Kirche Sankt Michael einen Mittagstisch für Obdachlose in Göttingen.',
        'In den Räumlichkeiten der Kirche wurde ein warmes Mittagessen angeboten, bei dem verschiedene Spezialitäten der türkischen Küche serviert wurden. Die Gerichte wurden mit großer Sorgfalt und mit Beiträgen unserer Mitglieder zubereitet.',
        'Diese soziale Aktion diente nicht nur der Versorgung Bedürftiger, sondern setzte zugleich ein Zeichen der Solidarität und Menschlichkeit am Weltflüchtlingstag. Die Veranstaltung förderte den Austausch, das gegenseitige Verständnis und die Sichtbarkeit gesellschaftlicher Verantwortung.',
      ],
      quote: `"Solidarität beginnt mit einer warmen Mahlzeit und einem offenen Herzen"`,
      images: [
        {
          url: 'assets/img/detailpage/Mittagstisch5.jpg',
        },
        {
          url: 'assets/img/detailpage/Mittagstisch2.jpg',
        },
        {
          url: 'assets/img/detailpage/Mittagstisch3.jpg',
        },
        {
          url: 'assets/img/detailpage/Mittagstisch4.jpg',
        },
        {
          url: 'assets/img/detailpage/Mittagstisch1.jpg',
        },
      ],
    },
    {
      id: 3,
      title: 'Sanat ve Yaratıcılık Atölyesi',
      date: '10 Haziran 2025',
      place: 'Sanat Galerisi',
      mainText: [
        'Sanatseverler, derneğimizin düzenlediği Sanat ve Yaratıcılık Atölyesi’nde bir araya geldi. Katılımcılar, sanatın farklı dallarında kendi eserlerini yaratma fırsatı buldu.',
        'Atölye, katılımcılara yaratıcı düşünme becerilerini geliştirme, özgün eserler yaratma konusunda ilham verdi.',
        'Sanatın gücünden faydalanarak, duygularını ifade etmek isteyen herkese teşekkür ederiz.',
      ],
      quote: `"Sanat, insanın kendini en özgür şekilde ifade etmesidir."`,
      images: [
        {
          url: 'assets/img/detailpage/app-1.jpg',
        },
        {
          url: 'assets/img/detailpage/app-2.jpg',
        },
        {
          url: 'assets/img/detailpage/app-3.jpg',
        },
      ],
    },
    {
      id: 4,
      title: 'Köy Festivalimiz',
      date: '25 Temmuz 2025',
      place: 'Köy Meydanı',
      mainText: [
        'Köyümüzde düzenlediğimiz geleneksel festivalde, yöresel yemekler, el sanatları ve köy müziği eşliğinde keyifli bir gün geçirdik.',
        'Katılımcılar, köyümüzün kültürünü yakından tanıma fırsatı buldular, aynı zamanda köy meydanında gerçekleştirilen etkinliklerle eğlenceli zaman geçirdiler.',
        'Festivalin geliri, köyümüzdeki sosyal projelere katkı sağlamak amacıyla kullanılacaktır.',
      ],
      quote: `"Köy festivalleri, kültürümüzü yaşatmak ve gelecek nesillere aktarmak için önemlidir."`,
      images: [
        {
          url: 'assets/img/detailpage/app-1.jpg',
        },
        {
          url: 'assets/img/detailpage/app-2.jpg',
        },
        {
          url: 'assets/img/detailpage/app-3.jpg',
        },
      ],
    },
    {
      id: 5,
      title: 'Çevre Temizliği Kampanyası',
      date: '5 Ağustos 2025',
      place: 'Şehir Parkı',
      mainText: [
        'Derneğimizin düzenlediği çevre temizliği kampanyasına katıldık. Şehir parkımızı temizleyerek doğaya katkıda bulunduk.',
        'Katılımcılar, çevre bilinciyle hareket ederek doğayı korumanın önemini bir kez daha hatırladılar.',
        'Herkese teşekkür ederiz, doğa hepimizin sorumluluğudur.',
      ],
      quote: `"Doğayı korumak, yaşamı korumaktır."`,
      images: [
        {
          url: 'assets/img/detailpage/app-1.jpg',
        },
        {
          url: 'assets/img/detailpage/app-2.jpg',
        },
        {
          url: 'assets/img/detailpage/app-3.jpg',
        },
      ],
    },
  ];

  constructor(private http: HttpClient) {}

  sendEmail(
    sender: string,
    subject: string,
    textContent: string
  ): Observable<any> {
    const emailData = { sender, subject, textContent };
    return this.http.post(this.apiUrl, emailData);
  }
}
