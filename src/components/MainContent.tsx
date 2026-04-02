import React from 'react';
import styles from './MainContent.module.css';

const MainContent: React.FC = () => {
  return (
    <main className={styles.main}>
      {/* 一篇完整的文章，使用 article 包裹 */}
      <article className={styles.article}>
        <header className={styles.articleHeader}>
          <h2>理解 API Key</h2>
          <p>发布于 <time dateTime="2030-08-10">2030年8月10日</time> by 徐樱桃</p>
        </header>

        {/* 使用 section 划分章节 */}
        <section className={styles.section}>
          <h3>什么是 API Key</h3>
          <p>API Key（应用程序编程接口密钥） 就像是给软件程序使用的“身份证”或“密码”。

当你使用某个服务（比如 ChatGPT、高德地图或天气预报数据）时，对方的服务器需要知道你是谁，以及你是否有权访问这些数据。API Key 就是这个身份凭证。</p>
        </section>

        <section className={styles.section}>
          <h3>API Key 的核心作用</h3>
          <p>身份验证 (Authentication)： 确认“你是你”。它告诉服务器，当前发出请求的开发者或应用程序是合法的。

访问控制 (Authorization)： 确定你的权限。比如，你买的是“白银套餐”，API Key 就会限制你每天只能查询 1000 次数据。

计费与监控： 平台通过 API Key 记录你使用了多少资源，以便月底给你寄账单，或者在你流量异常时进行拦截。</p>
          <pre className={styles.codeBlock}>
            {`function createCounter() {
            let count = 0;
            return function() {
                count++;
                return count;
            };
            }`}
          </pre>
        </section>

        <footer className={styles.articleFooter}>
          <p>标签: <a href="#">API</a>, <a href="#">BUG BOUNTY</a></p>
        </footer>
      </article>

      {/* 第二个文章示例（可复用） */}
      <article className={styles.article}>
        <header className={styles.articleHeader}>
          <h2>CSS Grid 入门</h2>
          <p>发布于 <time dateTime="2030-08-15">2030年8月15日</time> by 徐樱桃</p>
        </header>
        <section className={styles.section}>
          <p>Grid 是二维布局系统，可同时处理行和列...（省略具体内容）</p>
        </section>
        <footer className={styles.articleFooter}>
          <p>标签: <a href="#">CSS</a>, <a href="#">布局</a></p>
        </footer>
      </article>

      {/* 营销元素：高亮显示的额外 CTA（在文章列表下方） */}
      <div className={styles.highlightCta}>
        <p><mark className={styles.mark}>🔥 热门教程：</mark> 想要掌握更多BUG BOUNTY技巧？<a href="#">点击这里订阅我的 newsletter</a>，每周推送干货！</p>
      </div>
    </main>
  );
};

export default MainContent;