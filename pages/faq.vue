<template>
  <div class="container">
    <div class="mcontainer mh60vh">
      <div class="response-message about-title">
        <div class="mkub mkubsuccess faq-help-icon">
          <img alt="help" src="/css/icons/help_outline-24px.svg" />
        </div>
        <div class="rminfo">
          <h2 class="rmtt">
            {{ $t('faq') }}
          </h2>
          <p class="rmtxt">
            {{ $t('faq_desc') }}
          </p>
        </div>
      </div>
      <div class="faq-cover">
        <section aria-label="Question Accordions" class="accordion-section clearfix mt-3">
          <div class="container">
            <div
              id="accordion"
              aria-multiselectable="true"
              class="panel-group accordion"
              role="tablist"
            >
              <div
                v-for="(faq,i) in faqByLang"
                :key="i"
                class="panel panel-default"
              >
                <div
                  :id="`heading${i}`"
                  class="panel-heading mb-3"
                  role="tab"
                >
                  <h3 class="panel-title">
                    <a
                      :aria-controls="`collapse${i}`"
                      aria-expanded="true"
                      class="collapsed"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      :href="`#collapse${i}`"
                      role="button"
                      title=""
                    >
                      {{ faq.q }}
                    </a>
                  </h3>
                </div>
                <div
                  :id="`collapse${i}`"
                  :aria-labelledby="`heading${i}`"
                  class="panel-collapse collapse"
                  role="tabpanel"
                >
                  <div class="panel-body mb-4">
                    <p v-html="faq.a"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Faq',
  layout: 'pages',
  data () {
    return {
      faq: {
        az: [
          {
            q: 'Qeydiyyatdan necə keçə bilərik?',
            a: 'Qeydiyyat bölümünə daxil olunur və sizə uyğun olan bölüm seçilərək şəxsi məlumatlarınızı daxil edirsiniz'
          },
          {
            q: 'Ehtiyat hissəsini necə tapa bilərik?',
            a: 'Koda görə axtarış - detalın kodunu bildiyiniz halda sadəcə axtarış bölümünə axtaracağınız kod yazılır və axtarışa verilir Avtomobilə görə axtarış - ardıcıl olaraq avtomobilinizin marka, model, motor məlumatı və sizə seçilməsini tələb edən digər məlumatlar daxil edilərək avtomobil seçilir. Bundan sonra isə axtarmaq istədiyiniz detalın bölümləri seçilir və nəticədə sistem sizi lazımı detallara çıxarır.'
          },
          {
            q: 'Sifarişi necə verə bilərik?',
            a: 'Detal müəyyən edildikdən sonra SƏBƏT düyməsini basaraq sifariş listəsi hazırlaya bilərsiz. Sifariş listəsi hazırladıqdan sonra isə SƏBƏT bölümünə daxil olub sifarişin sayını dəyişə, ləğv edə və sifarişə verə bilərsiz. Sifariş tamamlandıqdan sonra sizin sifarişlər satıcılara yönlənir (fərqli satıcılar ola bilər) və satıcılar sizinlə sifarişlə bağlı əlaqə saxlayır.'
          },
          {
            q: 'Çatdırılma xidməti necə təşkil edilir?',
            a: 'Çatdırılma ilə bağlı Otobaza saytı heç bir məsuliyyət daşımır. Çatdırılmanı hər bir satıcı özü təşkil edir. Yə`ni satıcı ilə razılaşdırmanız lazımdır.'
          },
          {
            q: 'Alıcı ödənişi necə edə bilər?',
            a: 'Alıcı Satıcı ilə razılaşdıraraq ödənişi satıcının tələbinə uyğun edə bilər.'
          },
          {
            q: 'Balansın artırılması?',
            a: 'Card to card - kartdan karta ödəniş edərək.<br> Terminal - MilliÖn, ExpressPay və s. terminallar vasitəsi ilə<br>Golden Pay - online ödəniş portalı vasitəsi ilə'
          },
          {
            q: 'Ehtiyat hissələrinin qarantiya şərtləri?',
            a: 'Malların qarantiya şərtləri Satıcılar tərəfindən müəyyən edilir və bununla bağlı OTOBAZA heç bir məsuliyyət daşımır.'
          },
          {
            q: 'Ehtiyat hisslərin geri qaytarılması ilə bağlı?',
            a: 'Azərbaycan qanunvericiliyinə əsasən alınmış mallar zədələnmədikdə, istifadə edilmədikdə və paketlənmə pozulmadıqda 14 gün ərzində geri qaytarıla bilər. Bununla bağlı satıcılarla da danışmağınız gərəkir.'
          },
          {
            q: 'Detalın keyfiyyəti ilə bağlı?',
            a: 'Detalın keyfiyyəti ilə bağlı bütün məsuliyyət satıcıların öhdəliyindədir.'
          },
          {
            q: 'Satıcının ünvanı ilə bağlı məlumat?',
            a: 'Bir ehtiyat hissəsini fərqli mağazalar sata bilər. Ehtiyat hissəsinin qarşısında olan baxış düyməsini basdıqda həmin detalın hansı mağaza tərəfindən satılması ilə bağlı məlumat ətraflı olaraq verilir. <br> Eyni zamanda baxış bölümündə qeyd olunmuş nömrə ilə əlaqə saxlayaraq satıcının ünvanı barəsində məlumat əldə edə bilərsiz.'
          },
          {
            q: 'Qarajın hazırlanması və üstünlükləri.',
            a: 'Hər bir qeydiyatdan keçmiş Alıcı səxsi qarajını yarada bilər. Bunun 2 yol vardır. İlk səyfədən seçilmiş olan avtomobili qaraja əlavə etmək və Şəxsi məlumatlardakı Qaraj bölümündən əlavə etməklə. <br> Üstünlüyü - hər səfərində avtomobili bölüm-bölüm axtaraq seçməmək sadəcə bir düymə ilə lazım olan avtomobili seçmək.'
          },
          {
            q: 'Sifarişə verilən malların siyahısı və sifarişə vermənin üstünlükləri.',
            a: 'Detallar sifarişə verildikdə Mənim Sifarişlərim bölümündə sifariş listəsi hazırlanır və sizə bildiriş göndərilir.<br>Sifariş hazırlanmanın üstünlüyü ondan ibarətdir ki, sizin sifariş sadəcə siz tərəindən deyil eyni zamanda satıcı və bizim sayt tərəfindən təqib edilir. Bizim üçün sizin sifarişin tamamlanması daha vacibdir ki, siz bir daha bizim sayta müraciət edəsiniz və xidmətlərimizdən məmnun qalasız.'
          },
          {
            q: 'Avtomobil seçildikdə ehtiyat hissələrinin düzgünlüyü.',
            a: 'Detalın düzgünlüyü yalnız alıcı satıcı arasında və alıcının bilgilərinə görə müəyyənləşir.Bununla bağlı Otobaza heç bir məsuliyyət daşımır.'
          }
        ],
        ru: [
          {
            q: 'Как мы можем зарегистрироваться?',
            a: 'Войдите в раздел регистрации и введите свои персональные данные, выбрав подходящий вам раздел'
          },
          {
            q: 'Как мы можем найти запчасть?',
            a: 'Поиск по коду - если вы знаете код детали, просто напишите искомый код в разделе поиска и отправьте. Поиск по автомобилю - автомобиль выбирается путем последовательного ввода марки, модели, информации о двигателе и другой информации, которая требуется.После этого выбираются разделы детали, которые вы хотите найти, и в результате система направляет вас на нужные детали.'
          },
          {
            q: 'Как мы можем разместить заказ?',
            a: 'После определения деталей вы можете подготовить список заказов, нажав кнопку КОРЗИНА. После подготовки списка заказов вы можете войти в раздел КОРЗИНА и изменить номер заказа, отменить его и оформить заказ. После того, как заказ выполнен, ваши заказы передаются продавцам (могут быть разные продавцы), и продавцы связываются с вами по поводу заказа.'
          },
          {
            q: 'Как устроена служба доставки?',
            a: 'Сайт Otobaza не несет ответственности за доставку. Доставка организуется каждым продавцом. То есть нужно договориться с продавцом.'
          },
          {
            q: 'Как покупатель может произвести оплату?',
            a: 'Покупатель может произвести оплату по требованию продавца, договорившись с продавцом.'
          },
          {
            q: 'Увеличение баланса?',
            a: 'Card to card - оплата с карты на карту.<br> Терминал - MilliÖn, ExpressPay и др. через терминалы<br>Golden Pay - через портал онлайн-платежей'
          },
          {
            q: 'Условия гарантии на запчасти?',
            a: 'Гарантийные условия товара определяются Продавцами, и OTOBAZA не несет никакой ответственности в этом отношении.'
          },
          {
            q: 'По поводу возврата запчастей?',
            a: 'Согласно законодательству Азербайджанской Республики, купленные товары могут быть возвращены в течение 14 дней, если они не повреждены, не использовались и упаковка не повреждена. Об этом также следует поговорить с продавцами.'
          },
          {
            q: 'Что касается качества детали?',
            a: 'Продавцы несут полную ответственность за качество товара.'
          },
          {
            q: 'Информация об адресе продавца?',
            a: 'Запчасть может продаваться в разных магазинах. Нажав на запасную часть, вы получите подробную информацию о том, в каком магазине продается эта деталь. <br> При этом вы можете получить информацию об адресе продавца, связавшись по номеру, указанному в разделе отзывов.'
          },
          {
            q: 'Подготовка гаража и преимущества.',
            a: 'Каждый зарегистрированный Покупатель может создать свой личный гараж. Есть 2 способа сделать это. Добавление автомобиля в гараж на первой странице,  и добавление его из раздела Гараж в Личной информации. <br> Преимущество в том, что вам не придется искать машину в каждой поездке, вы можете выбрать нужную вам машину всего одной кнопкой.'
          },
          {
            q: 'Список заказываемых товаров и преимущества заказа.',
            a: 'Когда детали заказаны, в разделе Мои заказы подготавливается список заказов и Вам отправляется уведомление.<br>Преимущество оформления заказа в том, что за вашим заказом следите не только вы, но и продавец, и наш сайт. Для нас важнее выполнить ваш заказ, чтобы вы снова посетили наш сайт и остались довольны нашими услугами.'
          },
          {
            q: 'Правильность запчастей при выборе автомобиля.',
            a: 'Точность детализации определяется только между покупателем и продавцом и по информации покупателя. Otobaza не несет ответственности в этом отношении.'
          }
        ],
        en: [
          {
            q: 'How can we register?',
            a: 'Enter the registration section and enter your personal information by selecting the section that suits you.'
          },
          {
            q: 'How can we find a spare part?',
            a: 'Search by code - if you know the code of the part, simply write the code you are looking for in the search section and search. Search by car - a car is selected by sequentially entering the brand, model, engine information and other information that requires you to choose a car. After that, select the sections of the detail you want to search, and as a result, the system takes you to the necessary details.'
          },
          {
            q: 'How can we place an order?',
            a: 'After defining the details, you can prepare an order list by pressing the BASKET button. After preparing the order list, you can enter the BASKET section and change the number of the order, cancel it and place the order. After the order is completed, your orders are forwarded to the sellers (may be different sellers) and the sellers contact you about the order.'
          },
          {
            q: 'How is delivery service organized?',
            a: 'Otobaza website is not responsible for delivery. Delivery is arranged by each seller. That is, you need to agree with the seller.'
          },
          {
            q: 'How can buyer make payment?',
            a: 'The buyer can make the payment according to the seller\'s request by agreeing with the seller.'
          },
          {
            q: 'Balance increase?',
            a: 'Card to Account number - paying from card to account number.'
          },
          {
            q: 'Warranty conditions for spare parts?',
            a: 'The warranty conditions of the goods are determined by the Sellers, and OTOBAZA bears no responsibility in this regard.'
          },
          {
            q: 'Regarding the return of spare parts?',
            a: 'According to the legislation of the Republic of Azerbaijan, the purchased goods can be returned within 14 days if they are not damaged, not used and the packaging is not damaged. You should also talk to the sellers about this.'
          },
          {
            q: 'Regarding the quality of detail?',
            a: 'Sellers are responsible for item .'
          },
          {
            q: 'Information about the seller\'s address?',
            a: 'A spare part may be sold by different stores. Clicking on a spare part provides detailed information about which store sells that part. <br> At the same time, you can get information about the address of the seller by contacting the number mentioned in the review section.'
          },
          {
            q: 'Garage preparation and benefits.',
            a: 'Each registered Buyer can create his own garage. There are 2 ways to do this. Adding the car selected from the first page to the garage and adding it from the Garage section in Personal information. <br> The advantage is that you don\'t have to search for a car in each trip, you can choose the car you need with just one button.'
          },
          {
            q: 'List of ordered goods and advantages of ordering.',
            a: 'When the details are ordered, an order list is prepared in the My Orders section and a notification is sent to you.<br>The advantage of making an order is that your order is followed not only by you, but also by the seller and our website. It is more important for us to complete your order so that you can visit our site again and be satisfied with our services.'
          },
          {
            q: 'Correctness of spare parts when the car is selected.',
            a: 'The accuracy of the detail is determined only between the buyer and the seller and according to the information of the buyer. Otobaza bears no responsibility in this regard.'
          }
        ],
        tr: [
          {
            q: 'Nasıl kayıt olabiliriz?',
            a: 'Kayıt bölümüne girin ve size uygun olan bölümü seçerek kişisel bilgilerinizi girin.'
          },
          {
            q: 'Yedek parçayı nasıl bulabiliriz?',
            a: 'Kodla Arama - Parçanın kodunu biliyorsanız arama kısmına aradığınız kodu yazıp arama yapmanız yeterlidir. Arac ile arama - bir arac seçmenizi gerektiren marka, model, motor bilgileri ve diğer bilgileri sırayla girerek seçilir. Daha sonra detayın aramak istediğiniz bölümlerini seçin ve sonuç olarak sistem sizi gerekli detaylara götürür.'
          },
          {
            q: 'Nasıl sipariş verebiliriz?',
            a: 'Detayları tanımladıktan sonra SEPET butonuna tıklayarak+C11:C19 sipariş listesi hazırlayabilirsiniz. Sipariş listesini hazırladıktan sonra SEPET bölümüne girerek sipariş numarasını değiştirebilir, iptal edebilir ve sipariş verebilirsiniz. Siparişiniz tamamlandıktan sonra siparişleriniz satıcılara (farklı satıcılar olabilir) iletilir ve satıcılar sipariş ile ilgili sizinle iletişime geçer.'
          },
          {
            q: 'Teslimat hizmeti nasıl organize edilir?',
            a: 'Otobaza web sitesi teslimattan sorumlu değildir. Teslimat her satıcı tarafından düzenlenir. Yani, satıcıyla anlaşmanız gerekir.'
          },
          {
            q: 'Alıcı nasıl ödeme yapabilir?',
            a: 'Alıcı, satıcı ile anlaşarak satıcının isteğine göre ödemeyi yapabilir.'
          },
          {
            q: 'Bakiye artışı?',
            a: 'Karttan Hesap numarasına - karttan hesap numarasına ödeme.'
          },
          {
            q: 'Yedek parçalar için garanti koşulları?',
            a: 'Malların garanti koşulları Satıcılar tarafından belirlenir ve OTOBAZA\'nın bu konuda hiçbir sorumluluğu yoktur.'
          },
          {
            q: 'Yedek parça iadesi hakkında?',
            a: 'Azerbaycan Cumhuriyeti kurallarına göre, satın alınan mallar hasar görmemiş, kullanılmamış ve ambalajı hasar görmemiş ise 14 gün içinde iade edilebilir. Bu konuyu satıcılarla da konuşmalısınız.'
          },
          {
            q: 'Detay kalitesi ile ilgili olarak?',
            a: 'Satıcılar ürün kalitesinden sorumludur.'
          },
          {
            q: 'Satıcının adresi hakkında bilgi?',
            a: 'Bir yedek parça farklı mağazalar tarafından satılabilir. Bir yedek parçaya tıklamak, o parçayı hangi mağazanın sattığı hakkında ayrıntılı bilgi sağlar. <br> Aynı zamanda inceleme bölümünde belirtilen numara ile iletişime geçerek satıcının adresi hakkında bilgi alabilirsiniz.'
          },
          {
            q: 'Garaj hazırlığı ve faydaları.',
            a: 'Her kayıtlı Alıcı kendi garajını oluşturabilir. Bunu yapmanın 2 yolu vardır. İlk sayfadan seçilen arabayı garaja ekleme ve Kişisel bilgilerdeki Garaj bölümünden ekleme. <br> Avantajı ise her yolculukta araba aramak zorunda kalmamanız, ihtiyacınız olan arabayı tek tuşla seçebilmeniz.'
          },
          {
            q: 'Sipariş edilen malların listesi ve sipariş vermenin avantajları.',
            a: 'Detaylar sipariş edildiğinde Siparişlerim bölümünde sipariş listesi hazırlanır ve tarafınıza bilgilendirme yapılır.<br>Sipariş vermenin avantajı, siparişinizin sadece sizin tarafınızdan değil, satıcı ve web sitemiz tarafından da takip edilmekdedir. Sitemizi tekrar ziyaret edebilmeniz ve hizmetlerimizden memnun kalmanız için siparişinizin tamamlanması bizim için daha önemlidir.'
          },
          {
            q: 'Araba seçildiğinde yedek parçaların doğruluğu.',
            a: 'Detayın doğruluğu sadece alıcı ile satıcı arasında ve alıcının bilgilerine göre belirlenir. Otobaza\'nın bu konuda herhangi bir sorumluluğu bulunmamaktadır.'
          }
        ]
      }
    }
  },
  computed: {
    faqByLang () {
      return this.faq[this.$i18n.locale]
    }
  }
}
</script>
