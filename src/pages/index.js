import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="首頁">
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>ROO Blog</h1>
      <p>你好，歡迎光臨
        <br />因為看了一整年的<Link to="https://wiwi.blog/">https://wiwi.blog/</Link>所以被推坑想做一個自己的網站看看  
        <br />
        <br />目前還不知道這裡會變成甚麼樣子，就是想從分享一些東西開始
        <br />但以前在用IG好像也都在分享一些丟臉ㄉ東西
        <br />所以可預期這裡能欣賞一些夏夕夏景
        </p>
<div style={{ height: '3rem' }} />
<h1>關於我</h1>
<p>儒，所以ROO，一個喜歡唱歌跟懷舊電玩的流汗瘦宅
  <span className="muted">
    （原本是想打流汗肥宅，但因為真的不夠肥所以只能打瘦宅，然後瘦宅唸起來真的好不順）
  </span>
  <br />正在努力從一個假宅男變成一個Gigachad宅男的路上邁進
</p>
<div style={{ height: '6rem' }} />
<p>訂閱我的RSS:<a href="https://fujizr.github.io/ROO-BLOG/blog/atom.xml">https://fujizr.github.io/ROO-BLOG/blog/atom.xml</a>
<br />我的Mail:
<a href="mailto:frank505032@protonmail.com">
  frank505032@protonmail.com
</a>
</p>
    </main>
    </Layout>
  );
}