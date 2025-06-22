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
      title: 'Gemeinsames Gebet in Zeiten von Corona',
      date: '24. April 2021',
      place: 'Online',
      mainText: [
        'In der herausfordernden Zeit der Corona-Pandemie haben sich vier verschiedene religiöse Gemeinschaften zu einem gemeinsamen Gebet online versammelt. Teilnehmer waren die Katholische Kirche, die Evangelische Kirche, die Reformierte Kirche sowie der muslimisch vertretene Verein Mürüvvet-Die Offene Tür e.V. Ziel war es, für ein baldiges Ende der Corona-Epidemie zu beten und die Rückkehr zu einem normalen Leben zu erbitten. Zwischen den Gebetsabschnitten präsentierte ein Künstler der katholischen Kirche sein Werk und trug so zur spirituellen Atmosphäre der Veranstaltung bei.',
      ],
      quote: `"Gemeinsam beten, gemeinsam hoffen – für Gesundheit, Zuversicht und ein baldiges Wiedersehen."`,
      images: [
        {
          url: 'assets/img/detailpage/corona_gebet.jpeg',
        },
      ],
    },
    {
      id: 4,
      title:
        'Besuch von Herrn Dirk Toepffer, Vorsitzender der CDU-Fraktion im Niedersächsischen Landtag',
      date: '18. Mai 2021',
      place: 'Niedersächsischer Landtag, Hannover',
      mainText: [
        'Im Rahmen des Besuchs von Herrn Dirk Toepffer, Vorsitzender der CDU-Fraktion im Niedersächsischen Landtag, fand ein intensives Gespräch über die Erfahrungen von Ömer Faruk Gergerlioglu statt, der zu Unrecht aus dem Parlament entlassen und in der Türkei inhaftiert wurde. Thematisiert wurden auch die Menschen, die vor allem nach dem Putschversuch am 15. Juli 2016 ungerechtfertigt ihren Arbeitsplatz und ihren Beruf verloren haben und ohne rechtliche Grundlage inhaftiert wurden.',
        'Diskutiert wurden die erlebten Rechtswidrigkeiten sowie die Schwierigkeiten von Personen, die aus ihrem Beruf entlassen wurden und auch in der Privatwirtschaft keine Arbeit finden durften. Ein weiteres zentrales Thema war die Tatsache, dass über 700 Kinder bei ihren Müttern im Gefängnis verbleiben mussten, was als ein weiterer Aspekt der erlebten Illegalität betrachtet wird.',
      ],
      quote: `"Gerechtigkeit bedeutet, die Stimme für jene zu erheben, denen sie genommen wurde."`,
      images: [
        {
          url: 'assets/img/detailpage/besuchvonherrdirktoepffer.png',
        },
      ],
    },
    {
      id: 5,
      title: 'Frauenpezifische Aspekte der Verfolgung am Beispiel der Türkei',
      date: '10. März 2021',
      place: 'Online',
      mainText: [
        'Am 10. März 2021 veranstaltete unser Verein anlässlich des Internationalen Frauentages ein Online-Seminar. Im Programm hielt Hanife Tosun einen Vortrag zum Thema „Frauenrechtsbeschwerden in der Türkei“. Anschließend berichtete ein Vereinsmitglied, Sümeyra Durmaz, von den Erfahrungen, die sie und ihre Familie nach dem sogenannten Putschversuch am 15. Juli 2016 machten. Sie informierte außerdem über ihre Ankunft in Deutschland und ihr jetziges Leben.',
      ],
      quote: `"Die Stimmen der Frauen erzählen von Mut, Hoffnung und dem unermüdlichen Einsatz für Gerechtigkeit."`,
      images: [
        {
          url: 'assets/img/detailpage/Frauentag.png',
        },
      ],
    },
    {
      id: 6,
      title: 'Flüchtlinge haben das Wort',
      date: '18. Juni 2021, 19.00 Uhr',
      place: 'Online',
      mainText: [
        'Anlässlich des Weltflüchtlingstags am 20. Juni organisierte Mürüvvet e.V. eine Reihe von Veranstaltungen, darunter das Online-Seminar „Flüchtlinge haben das Wort“. Im Mittelpunkt standen die Erfolgsgeschichten von zwei geflüchteten Frauen und zwei geflüchteten Männern, die erst kürzlich in Deutschland angekommen sind. Sie berichteten von den Gründen ihrer Flucht, ihren ersten Erfahrungen in Deutschland sowie den Herausforderungen, denen sie begegneten. Trotz aller Schwierigkeiten erzählten sie von ihrem Weg des Neuanfangs, ihren Bemühungen beim Spracherwerb, der Suche nach akademischen Stipendien oder beruflichen Möglichkeiten.',
        'Herr Masarwa vom AWO Arbeiterwohlfahrt Bundesverband e.V. stellte zusätzlich Programme zur Integration vor und betonte in seinem Vortrag die Bedeutung von Flüchtlingen für die Gesellschaft. Auch prominente Gäste wie der Bundestagsabgeordnete Thomas Ehbrecht, MdL, und Frau Hammer, Leiterin des Integrationsbüros, nahmen aktiv am Programm teil, trugen mit ihren Beiträgen zur Diskussion bei und gaben wertvolle Empfehlungen.',
        'Die Teilnehmenden hoben in ihren Rückmeldungen hervor, wie beeindruckt sie von den gezeigten Lebenswegen waren. Sie betonten, dass die erzielten Erfolge ein Ergebnis von großem Einsatz und Selbstaufopferung seien und lobten zugleich das Engagement des deutschen Staates für die Integration. Viele empfanden das Programm als inspirierend und sahen darin eine wichtige Motivation für andere Geflüchtete.',
      ],
      quote: `"Integration ist keine Einbahnstraße – sie ist eine Erfolgsgeschichte, die wir gemeinsam weiterschreiben können."`,
      images: [
        {
          url: 'assets/img/detailpage/fluechtling.png',
        },
      ],
    },
    {
      id: 7,
      title: 'Online-Kermes für Flüchtlinge in Griechenland',
      date: '11. April 2021',
      place: 'Mürüvvet e.V. Mitglieder, Time to Help e.V.',
      mainText: [
        'Am Sonntag, den 11. April 2021, veranstaltete Mürüvvet e.V. mit seinen Mitgliedern einen Online-Kermes, bei dem verschiedene Köstlichkeiten der türkischen Küche vorgestellt wurden – alle von den Mitgliedern liebevoll zu Hause zubereitet. Die Bestellungen der Teilnehmenden wurden direkt an ihre Haustür geliefert. Der gesamte Erlös der Aktion wurde mit Unterstützung von Time to Help e.V. an Flüchtlinge in Griechenland weitergeleitet.',
        'Im Anschluss an den Kermes fand ein Online-Nachprogramm statt. Dabei wurden die Teilnehmenden über Ziel und Wirkung der Spendenaktion informiert. Außerdem wurden Ölgemälde von Kübra Icyer, einem Mitglied des Vereins, präsentiert. Frau Icyer erzählte nicht nur über die Gemälde selbst, sondern auch über deren Entstehungsgeschichten. Nach dem kulturellen Teil konnten die Teilnehmenden die einzigartigen Aromen der türkischen Küche genießen.',
      ],
      quote: `"Gemeinsam teilen, gemeinsam helfen – jede noch so kleine Geste kann Hoffnung schenken und Brücken bauen, wo Not herrscht."`,
      images: [
        {
          url: 'assets/img/detailpage/kirmes1.png',
        },
        {
          url: 'assets/img/detailpage/kirmes2.png',
        },
      ],
    },
    {
      id: 8,
      title:
        'Ramadan-Iftar – Begegnung in familiärer Atmosphäre trotz Pandemie',
      date: 'Ramadan-Monat 2021',
      place: 'Zu Hause bei Mitgliedern des Vereins',
      mainText: [
        'Trotz der Einschränkungen durch die Pandemie organisierte Mürüvvet e.V. auch im Ramadan 2021 Iftar-Abende mit Gästen aus verschiedenen kulturellen und religiösen Hintergründen. Anders als in den Vorjahren konnten die Teilnehmenden dieses Mal nicht gemeinsam an einem großen Tisch sitzen. Stattdessen wurde das Iftar unter Einhaltung der geltenden Hygienevorschriften in den Privathaushalten der Vereinsmitglieder durchgeführt – jeweils mit einem Gast pro Haushalt.',
        'Während des Abends erhielten die Gäste Informationen über den islamischen Fastenmonat, über die spirituelle Bedeutung des Fastens und weitere Ramadan-Rituale. Gemeinsam wurde das Fasten gebrochen und anschließend gebetet. In den Gesprächen konnten auch Fragen zum islamischen Glauben gestellt und persönliche Erfahrungen ausgetauscht werden.',
        'Besonders eindrücklich war die Reaktion vieler Gäste: Einige erklärten, dass es das erste Mal sei, dass ein Muslim sie zu Hause besucht habe. Andere sagten: „Ich habe heute auch gefastet, um Sie besser zu verstehen.“ Mehrere Teilnehmende hoben hervor, dass die Vielfalt der Kulturen ein großer Reichtum für Deutschland sei und solche Begegnungen den gesellschaftlichen Zusammenhalt stärken.',
      ],
      quote: `"Auch auf Abstand kann Nähe entstehen – ein geteiltes Iftar-Mahl verbindet Herzen, selbst in herausfordernden Zeiten."`,
      images: [
        {
          url: 'assets/img/detailpage/ramadan1.jpeg',
        },
        {
          url: 'assets/img/detailpage/ramadan2.jpeg',
        },
        {
          url: 'assets/img/detailpage/ramadan3.jpeg',
        },
      ],
    },
    {
      id: 9,
      title: 'Pressefreiheit in der Türkei – Eine kritische Bestandsaufnahme',
      date: '7. Mai 2021, 19:00',
      place: 'Online',
      mainText: [
        'Anlässlich des Weltjournalistentags am 3. Mai organisierte Mürüvvet e.V. gemeinsam mit der Gesellschaft für bedrohte Völker e.V. ein Online-Programm zur aktuellen Situation der Pressefreiheit in der Türkei. Im Mittelpunkt standen insbesondere die Entwicklungen nach dem sogenannten Putschversuch vom 15. Juli 2016, der zu massiven Repressionen gegen Journalist*innen führte.',
        'Nach dem 15. Juli 2016 gerieten zahlreiche Medienschaffende in der Türkei unter enormen Druck. Hunderte Journalist*innen wurden verhaftet, Tausende verloren ihre berufliche Existenzgrundlage. Die Gesellschaft für bedrohte Völker e.V. verfasste hierzu einen ausführlichen Bericht, der an verschiedene Institutionen und Organisationen in Deutschland weitergeleitet wurde.',
        'Im Rahmen der Veranstaltung stellte Dr. Kemal Sido die zentralen Inhalte dieses Berichts vor und beleuchtete die Herausforderungen, denen Journalist*innen in der Türkei gegenüberstehen. Einen besonders bewegenden Beitrag lieferte Yüksel Durgut, der über 25 Jahre in der Türkei als Journalist tätig war, nach dem Putschversuch verhaftet wurde und lange Zeit im Gefängnis verbrachte. Als Zeitzeuge berichtete er über seine Erlebnisse und die Repressionen, denen er ausgesetzt war.',
        'Im Anschluss fand eine offene Fragerunde mit den Gästen statt, in der die Diskussion vertieft wurde. Die Veranstaltung stieß auf großes Interesse und sensibilisierte die Teilnehmenden für die prekäre Lage der Pressefreiheit in autokratischen Systemen.',
      ],
      quote: `"Freiheit der Presse ist das Fundament einer offenen Gesellschaft – erst im Dialog erkennen wir ihren wahren Wert."`,
      images: [
        {
          url: 'assets/img/detailpage/pressefreiheit.png',
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
