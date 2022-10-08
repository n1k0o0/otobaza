<template lang="pug">
  .container
    .mcontainer
      .response-message.about-title
        .mkub.mkubsuccess.aboutbg
        .rminfo
          h2.rmtt
            | {{ $t('about') }}
          p.about-txt(v-html="$t('about_description')")
      .about-section
        .row
          .col-12.col-sm-12.col-md-5.text-center
            .about-logo.pointer(@click="modalVisibility=true")
              img(alt='license', src='/css/icons/lisence.jpg')
          .col-12.col-sm-12.col-md-7
            .about-info
              h3.about-tt {{ $t('about_company') }}
              .about-txt {{ $t('about_full') }}
      .about-purpose
        .about-info
          h3.about-tt {{ $t('project_vision') }}
          .about-txt(v-html="$t('project_vision_text')")
          h3
            a.about-tt.text-decoration-underline.btn-link(href="/presentation.pdf", target='_blank') {{ $t('presentation') }}
      .about-items
        .container
          .row
            .col-12.col-sm-12
              h4.abitemstt {{$t('buyers.title')}}
          .row.abitems
            .col-12.col-sm-12.col-md-12.col-lg-4(v-for="(item,i) in $t('buyers.items')")
              .abitem
                .abnumber {{i + 1}}.
                .abitem-details
                  h4.about-tt {{item.title}}
                  .about-txt {{item.desc}}
      .about-items
        .container
          .row
            .col-12.col-sm-12
              h4.abitemstt {{$t('sellers.title')}}
          .row.abitems
            .col-12.col-sm-12.col-md-12.col-lg-4(v-for="(item,i) in  $t('sellers.items')")
              .abitem
                .abnumber {{i + 1}}.
                .abitem-details
                  h4.about-tt {{item.title}}
                  .about-txt {{item.desc}}
      .modal-about.pointer(v-if='modalVisibility' @click="modalVisibility=false")
        img(alt='license', src='/css/icons/lisence.jpg')
</template>
<script>
export default {
  name: 'About',
  layout: 'pages',
  data () {
    return {
      modalVisibility: false
    }
  }
}
</script>
