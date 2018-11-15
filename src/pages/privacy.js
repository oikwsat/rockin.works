import React from 'react'

import Layout from '../components/layout'

const PrivacyPage = () => (
  <Layout>
    <h1>プライバシーポリシー</h1>

    <section>
      <h2>広告の配信について</h2>
      <p><strong>・ウェブサイト</strong></p>
      <p>当サイトは第三者配信の広告サービス「Google Adsense グーグルアドセンス」を利用しています。</p>
      <p>広告配信事業者は，ユーザーの興味に応じた広告を表示するためにCookie（クッキー）を使用することがあります。</p>
      <p>Cookie（クッキー）を無効にする設定およびGoogleアドセンスに関する詳細は「<a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener">広告 – ポリシーと規約 – Google</a>」をご覧ください。</p>

      <p><strong>・アプリケーション</strong></p>
      <p>アプリケーションでは広告を配信するためにGoogle AdMobによって提供されるサービスを利用しております。Google AdMobの利用により収集されたデータは，Google社のプライバシーポリシーに基づいて管理されます。
        <p>Google – ポリシーと規約 – 広告<br/>
        <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a></p>
      </p>

      <p>また，Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである，Amazonアソシエイト・プログラムの参加者です。</p>
      <p>第三者がコンテンツおよび宣伝を提供し，訪問者から直接情報を収集し，訪問者のブラウザにCookie（クッキー）を設定したりこれを認識したりする場合があります。</p>
    </section>

    <section>
      <h2>アクセス解析ツールについて</h2>
      <p><strong>・ウェブサイト</strong></p>
      <p>当サイトでは，Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。</p>
      <p>このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており，個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので，お使いのブラウザの設定をご確認ください。この規約に関して，詳しくは<a href="https://www.google.com/analytics/terms/jp.html" target="_blank" rel="noopener noreferrer">ここをクリック</a>してください。</p>

      <h2 id="firebase">Google Firebaseの利用について</h2>
      <p>配信するアプリでは，利用状況を把握するためにFirebaseによって提供されるサービスを利用しております。Firebaseの利用により収集されたデータは，Google社のプライバシーポリシーに基づいて管理されます。</p>
        <p>Firebaseのプライバシーとセキュリティ<br/>
        <a href="https://firebase.google.com/support/privacy/" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy/</a>
      </p>
    </section>

    <hr/>

    <section>
      <p><strong>免責事項</strong></p>
      <p>当サイトで掲載している画像の著作権・肖像権等は各権利所有者に帰属致します。権利を侵害する目的ではございません。記事の内容や掲載画像等に問題がございましたら，各権利所有者様本人が直接メールでご連絡下さい。確認後，対応させて頂きます。</p>
      <p>当サイトからリンクやバナーなどによって他のサイトに移動された場合，移動先サイトで提供される情報，サービス等について一切の責任を負いません。</p>
      <p>当サイトのコンテンツ・情報につきまして，可能な限り正確な情報を掲載するよう努めておりますが，誤情報が入り込んだり，情報が古くなっていることもございます。</p>
      <p>当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。</p>
    </section>
  </Layout>
)

export default PrivacyPage