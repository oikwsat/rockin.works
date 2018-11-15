import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>川崎駅エリアの映画館割引デーカレンダー</h1>
    <p>以前，<a href="/yokohama-movies-discount-calendar/">横浜駅・みなとみらいエリアの映画館割引デー カレンダー</a>を作ったのですが，便利に使っているので川崎駅版も作成してみました。</p>
    <iframe src="https://calendar.google.com/calendar/embed?src=k4b9k56bcdf9s1tr3l21mias5o%40group.calendar.google.com&ctz=Asia/Tokyo" title="Kawasaki cinemas discount calendar" width="800" height="600" frameborder="0" scrolling="no"></iframe>
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

export default SecondPage
