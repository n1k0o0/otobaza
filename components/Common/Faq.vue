<template>
  <div class="container">
    <div class="mcontainer mt-4">
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
        en: [
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
