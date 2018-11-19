import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const YokohamaCinemasPage = () => (
  <Layout>
    <Helmet
      title='横浜駅・みなとみらいエリアの映画館 割引カレンダー'
      meta={[
        { name: 'description',    content: '横浜駅・みなとみらいエリアの映画館の割引デーをまとめたカレンダーを公開しています。 Googleカレンダーで作成していますので自分のカレンダーに表示させることも可能です。映画館の一般料金は一律「1,800円」ですが，映画館によっては特定の「日」や「曜日」に割引料金を設定しており、1,100円程度で安く鑑賞することができます。' },
        { name: 'keywords',       content: '横浜,みなとみらい,映画館,シネマ,シネコン,料金,割引,カレンダー,サービスデー' },
        { name: 'og:type',        content: 'website' },
        { name: 'og:url',         content: 'https://rockin.work/yokohama-cinemas-discount-calendar' },
        { name: 'og:title',       content: '横浜駅・みなとみらいエリアの映画館 割引カレンダー' },
        { name: 'og:site_name',   content: '横浜駅・みなとみらいエリアの映画館 割引カレンダー' },
        { name: 'og:description', content: '横浜駅・みなとみらいエリアの映画館の割引デーをカレンダーにまとめています。映画館・シネコンの一般料金（大人料金）は一律「1,800円」ですが，映画館・シネコンによっては特定の「日にち」や「曜日」に割引料金を設定しており、1,100円程度の割引料金で安く鑑賞することが出来ます。' },
        { name: 'twitter:card',   content: 'summary' },
      ]}
    >
    </Helmet>

    <h1>横浜・みなとみらいエリアの映画館割引デーカレンダー</h1>
    <p>横浜駅・みなとみらいエリアには映画館が3つあって，それぞれ割引デーが設けられています。<br />アカデミー賞の時期で観たい映画がたくさんあるけど，できれば安く観たい！ということで各映画館の割引デーを把握できるカレンダーを作りました。</p>
    <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showTz=0&amp;height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=nnvglm1cfpop7pfa57fmopdcp8%40group.calendar.google.com&amp;color=%23B1440E&amp;ctz=Asia%2FTokyo" title="Yokohama cinemas discount calendar" width="800" height="600" scrolling="no"></iframe>
    <p>このページを見ることでもカレンダーを確認できますが，カレンダー右下の「+Googleカレンダー」をクリックすれば自分のGoogleカレンダーに追加することができますのでぜひ使ってみてください。</p>
    <p>スマホの場合は画面に表示しきれないので直接<a target="_blank" href="https://calendar.google.com/calendar/embed?src=bm52Z2xtMWNmcG9wN3BmYTU3Zm1vcGRjcDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ" rel="noopener noreferrer">Googleカレンダー</a>にアクセスください。</p>

    <h2>掲載している映画館と割引デー</h2>
    <ul>
      <li>横浜ブルク13</li>
      <ul>
        <li>ファーストデー（毎月1日）</li>
        <li>レディースデー（毎週水曜日・女性限定）</li>
      </ul>
      <li>ムービル</li>
      <ul>
        <li>ファーストデイ（毎月1日）</li>
        <li>109シネマズの日 （毎月10日）</li>
        <li>シネマポイントカード会員感謝の日（毎月19日）</li>
        <li>ペアデイ（毎月22日・男女問わずペア）</li>
        <li>レディースデイ（毎週金曜日・女性限定）</li>
      </ul>
      <li>イオンシネマみなとみらい</li>
      <ul>
        <li>ハッピーファースト（毎月1日）</li>
        <li>お客さま感謝デー（毎月20日30日）</li>
        <li>ハッピーマンデー（毎週月曜日）</li>
      </ul>
    </ul>

    川崎駅エリアは「<Link to="/kawasaki-cinemas-discount-calendar">こちら</Link>」から。
    フィードバックなどあれば <a href="https://twitter.com/oikwsat" target="_blank" rel="noopener noreferrer">@oikwsat</a>までお願いします！

  </Layout>
)

export default YokohamaCinemasPage
