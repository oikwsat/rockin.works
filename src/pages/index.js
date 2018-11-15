import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>welcome to rockin' works</h1>
    <p>This site is oikwsat's portfolio.</p>

    <div class="card">
      <h3 class="card-header">Softwares</h3>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><a href="https://play.google.com/store/apps/details?id=work.rockin.timeprogress" target="_blank" rel="noopener noreferrer">Time Progress - Google Play のアプリ</a></li>
        <li class="list-group-item"><a href="https://chrome.google.com/webstore/detail/labelcounter-for-trello/eahijelcdannijiaikdpdpjnhcjoblie" target="_blank" rel="noopener noreferrer">Chromeウェブストア - LabelCounter for Trello</a></li>
      </ul>
    </div>

    <div class="card">
      <h3 class="card-header">Tools</h3>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><Link to="/yokohama-cinemas-discount-calendar/">横浜駅・みなとみらいエリアの映画館 割引デー カレンダー</Link></li>
        <li class="list-group-item"><Link to="/kawasaki-cinemas-discount-calendar/">川崎エリアの映画館 割引デー カレンダー</Link></li>
      </ul>
    </div>

    <div class="card">
      <h3 class="card-header">Articles</h3>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><a href="https://medium.com/@oikawa" target="_blank" rel="noopener noreferrer">Blog</a></li>
        <li class="list-group-item"><a href="https://github.com/oikwsat/EffectiveJavaScript/raw/master/build/Effective%20JavaScript%20-%20Dynamic%20Scripting.pdf" target="_blank" rel="noopener noreferrer">Download Effective JavaScript - Dynamic Scripting.pdf</a></li>
      </ul>
    </div>

    <div class="card">
      <h3 class="card-header">Writing</h3>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><a href="http://gihyo.jp/magazine/SD/archive/2013/201304" target="_blank" rel="noopener noreferrer">Software Design 2013年4月号 ／ 第1特集 僕（私）の言語の学び方 裏口からのプログラミング入門 - 今すぐはじめよう！ 脱超初心者からのベストプラクティス</a></li>
        <li class="list-group-item"><a href="http://gihyo.jp/book/2012/978-4-7741-5335-3" target="_blank" rel="noopener noreferrer">Smartphone Design－スマートフォンアプリ開発者とデザイナのための総合情報誌 ／ Enterprise Pages 業務アプリケーションをスマホやタブレットで使おう！ 既存のPCサイトをスマートフォン用に変換！</a></li>

      </ul>
    </div>

    <div class="card">
      <h3 class="card-header">Links</h3>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><a href="//github.com/oikwsat" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li class="list-group-item"><a href="//twitter.com/oikwsat" target="_blank" rel="noopener noreferrer">twitter</a></li>
        <li class="list-group-item"><a href="//amzn.to/2e3H0wc" target="_blank" rel="noopener noreferrer">Amazon</a></li>
        <li class="list-group-item"><a href="//d.hatena.ne.jp/renoiv/" target="_blank" rel="noopener noreferrer">old blog</a></li>
      </ul>
    </div>

  </Layout>
)

export default IndexPage
