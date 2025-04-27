import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/models/IPost';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css',
})
export class DetailPageComponent {
  post: IPost | null = null;
  posts: IPost[] = [
    {
      id: 0,
      title: 'Kermes Etkinliği',
      date: '15 Nisan 2025',
      place: 'Dernek Bahçesi',
      mainText: [
        'Derneğimizin geleneksel hale gelen kermes etkinliği bu yıl da yoğun          katılımla gerçekleşti. Katılımcılar el emeği ürünlerini sergiledi,          ziyaretçiler hem alışveriş yaptı hem de dernek faaliyetleri hakkında          bilgi aldı.',
        'Etkinlik boyunca çocuklara özel oyun alanları, canlı müzik ve çeşitli          atölye çalışmaları ile dolu dolu bir gün yaşandı. Elde edilen gelir,          derneğimizin eğitim projelerinde kullanılmak üzere değerlendirilecektir.',
        ' Etkinlikte emeği geçen tüm gönüllülerimize, stand açan üyelerimize ve          katılan misafirlerimize teşekkür ederiz. Bir sonraki etkinlikte görüşmek üzere!',
      ],
      quote: `“Bu tür etkinlikler toplumsal dayanışmayı artırıyor. Katkı sunan
          herkese teşekkür ederiz.”`,
      images: [
        'assets/img/detailpage/app-1.jpg',
        'assets/img/detailpage/app-2.jpg',
        'assets/img/detailpage/app-3.jpg',
      ],
    },
    {
      id: 1,
      title: 'Kermes Etkinliği',
      date: '15 Nisan 2025',
      place: 'Dernek Bahçesi',
      mainText: [
        'Derneğimizin geleneksel hale gelen kermes etkinliği bu yıl da yoğun katılımla gerçekleşti. Katılımcılar el emeği ürünlerini sergiledi, ziyaretçiler hem alışveriş yaptı hem de dernek faaliyetleri hakkında bilgi aldı.',
        'Etkinlik boyunca çocuklara özel oyun alanları, canlı müzik ve çeşitli atölye çalışmaları ile dolu dolu bir gün yaşandı. Elde edilen gelir, derneğimizin eğitim projelerinde kullanılmak üzere değerlendirilecektir.',
        'Etkinlikte emeği geçen tüm gönüllülerimize, stand açan üyelerimize ve katılan misafirlerimize teşekkür ederiz. Bir sonraki etkinlikte görüşmek üzere!',
      ],
      quote: `"Bu tür etkinlikler toplumsal dayanışmayı artırıyor. Katkı sunan herkese teşekkür ederiz."`,
      images: [
        'assets/img/detailpage/app-1.jpg',
        'assets/img/detailpage/app-2.jpg',
        'assets/img/detailpage/app-3.jpg',
      ],
    },
    {
      id: 2,
      title: 'Kültürlerarası Diyalog Toplantısı',
      date: '20 Mayıs 2025',
      place: 'Kültür Merkezi',
      mainText: [
        'Derneğimiz, farklı kültürlerden gelen üyeleri bir araya getiren kültürlerarası diyalog toplantısını gerçekleştirdi. Toplantıda, farklı kültürlerin değerleri, gelenekleri ve yaşam biçimleri hakkında verimli bir tartışma yapıldı.',
        'Katılımcılar, kültürel farkındalıklarını artırarak toplumsal barışı güçlendirme konusunda fikir alışverişinde bulundular.',
        'Bu tür etkinlikler, toplumumuzun farklı kültürlerle barış içinde yaşaması için büyük önem taşımaktadır.',
      ],
      quote: `"Toplumsal barışı ve kültürel anlayışı artırmak için daha çok diyalog yapmalıyız."`,
      images: [
        'assets/img/detailpage/app-1.jpg',
        'assets/img/detailpage/app-2.jpg',
        'assets/img/detailpage/app-3.jpg',
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
        'assets/img/detailpage/app-1.jpg',
        'assets/img/detailpage/app-2.jpg',
        'assets/img/detailpage/app-3.jpg',
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
        'assets/img/detailpage/app-1.jpg',
        'assets/img/detailpage/app-2.jpg',
        'assets/img/detailpage/app-3.jpg',
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
        'assets/img/detailpage/app-1.jpg',
        'assets/img/detailpage/app-2.jpg',
        'assets/img/detailpage/app-3.jpg',
      ],
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.post =
      this.posts.find(
        (p) => p.id === Number(this.route.snapshot.paramMap.get('id'))
      ) || null;
  }
}
