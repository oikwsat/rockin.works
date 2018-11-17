import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const KawasakiCinemasPage = () => (
  <Layout>
    <Helmet
      title='川崎エリアの映画館 割引カレンダー'
      meta={[
        { name: 'description',    content: '川崎エリアの映画館の割引デーをカレンダーにまとめています。映画館・シネコンの一般料金（大人料金）は一律「1,800円」ですが，映画館・シネコンによっては特定の「日にち」や「曜日」に割引料金を設定しており、1,100円程度の割引料金で安く鑑賞することが出来ます。' },
        { name: 'keywords',       content: '川崎,映画館,シネマ,シネコン,料金,割引,カレンダー,サービスデー' },
        { name: 'og:type',        content: 'website' },
        { name: 'og:url',         content: 'https://rockin.work/kawasaki-cinemas-discount-calendar' },
        { name: 'og:title',       content: '川崎エリアの映画館 割引カレンダー' },
        { name: 'og:site_name',   content: '川崎エリアの映画館 割引カレンダー' },
        { name: 'og:description', content: '川崎エリアの映画館の割引デーをカレンダーにまとめています。映画館・シネコンの一般料金（大人料金）は一律「1,800円」ですが，映画館・シネコンによっては特定の「日にち」や「曜日」に割引料金を設定しており、1,100円程度の割引料金で安く鑑賞することが出来ます。' },
        { name: 'twitter:card',   content: 'summary' },
      ]}
    >
    </Helmet>

    <h1>川崎エリアの映画館 割引カレンダー</h1>
    <p>以前，<Link to="/yokohama-cinemas-discount-calendar/">横浜駅・みなとみらいエリアの映画館割引デー カレンダー</Link>を作ったのですが，便利に使っているので川崎駅版も作成してみました。</p>
    <iframe src="https://calendar.google.com/calendar/embed?src=k4b9k56bcdf9s1tr3l21mias5o%40group.calendar.google.com&ctz=Asia/Tokyo" title="Kawasaki cinemas discount calendar" width="800" height="600" scrolling="no"></iframe>
    <p>このページを見ることでもカレンダーを確認できますが，カレンダー右下の「+Googleカレンダー」をクリックすれば自分のGoogleカレンダーに追加することができますのでぜひ使ってみてください。</p>
    <p>スマホの場合は画面に表示しきれないので直接<a target="_blank" href="https://www.google.com/calendar/embed?src=azRiOWs1NmJjZGY5czF0cjNsMjFtaWFzNW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ" rel="noopener noreferrer">Googleカレンダー</a>にアクセスください。</p>

    <h2>掲載している映画館と割引デー</h2>
    <ul>
      <li><a href="http://cinecitta.co.jp/" target="_blank" rel="noopener noreferrer">CINECITTA’ （チネチッタ）</a>
        <ul>
          <li>映画の日（毎月1日）</li>
          <li>チネチッタデー（毎月23日）</li>
          <li>レディースデー（毎水曜女性のみ）</li>
        </ul>
      </li>
      <li><a href="http:https://hlo.tohotheater.jp/net/schedule/010/TNPI2000J01.do" target="_blank" rel="noopener noreferrer">TOHOシネマズ 川崎</a>
        <ul>
          <li>ファーストデイ (毎月1日)</li>
          <li>TOHOシネマズデイ (毎月14日)</li>
          <li>レディースデイ (毎週水曜日 女性)</li>
        </ul>
      </li>
      <li><a href="http://109cinemas.net/kawasaki/" target="_blank" rel="noopener noreferrer">109シネマズ川崎</a>
        <ul>
          <li>ファーストデイ（毎月1日）</li>
          <li>109シネマズの日 （毎月10日）</li>
          <li>ペアデイ（毎月22日・男女問わずペア）</li>
          <li>レディースデイ（毎週水曜日・女性限定）</li>
        </ul>
      </li>
    </ul>

    横浜駅・みなとみらいエリアは「<Link to="/yokohama-cinemas-discount-calendar">こちら</Link>」から。
    フィードバックなどあれば <a href="https://twitter.com/oikwsat" target="_blank" rel="noopener noreferrer">@oikwsat</a>までお願いします！

  </Layout>
)

export default KawasakiCinemasPage
