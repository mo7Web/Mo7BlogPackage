import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,c as h,b as s,d as i,a,w as n,e as d,o as r}from"./app-Dvnd8qII.js";const p={},o=d(`<h1 id="_2-fnm-管理-nodejs" tabindex="-1"><a class="header-anchor" href="#_2-fnm-管理-nodejs"><span>2.fnm 管理 Nodejs</span></a></h1><p>当你本地存在多个项目，且依赖的 nodejs 版本不尽相同，就需要使用 nodejs 版本管理工具了，它允许同一台机器中多个 nodejs 版本共存且可以随时切换。</p><p>fnm 类似于 nvm，是一个 nodejs 版本管理工具， 他比 nvm 更加迅速，应该是目前已知最好的 nodejs 版本管理工具。</p><p>fnm 的特点是:</p><ul><li>跨平台，支持 macOS、Windows、Linux。</li><li>使用 Rust 编写，速度快。发布为单文件，便于安装。</li><li>支持按应用自动切换 Node.js 版本。</li></ul><p>fnm 的 Github 仓库地址：<br><a href="https://github.com/Schniz/fnm" target="_blank" rel="noopener noreferrer">https://github.com/Schniz/fnm</a></p><h2 id="安装-fnm" tabindex="-1"><a class="header-anchor" href="#安装-fnm"><span>安装 fnm</span></a></h2><p>macOS &amp;&amp; Linux</p><p>第一步， 打开命令行执行如下操作</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://fnm.vercel.app/install</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> bash</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>第二步， 添加如下环境变量</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title=" ~/.zshenv 或 ~/.bashrc 文件中" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#  ~/.zshenv 或 ~/.bashrc 文件中:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> FNM_NODE_DIST_MIRROR</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">https</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">://</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">npmmirror</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">com</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">mirrors</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">node</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">eval</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">fnm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> env </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">--use-on-cd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">)&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fnm-的基本使用" tabindex="-1"><a class="header-anchor" href="#fnm-的基本使用"><span>fnm 的基本使用</span></a></h2><p>罗列远程服务器上所有的 nodejs 版本</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">fnm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ls-remote</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><p>安装某一个版本的 nodejs</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">fnm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">versio</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>例如：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">fnm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 20</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>则会安装 <code>Node v20.13.1 (arm64)</code> 也就是 node v20 的最新版本</p><hr><p>列出当前机器上已经安装的所有 nodejs 版本</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">fnm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ls</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><p>卸载某一版本的 Node</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">fnm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> uninstall</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">versio</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><p>切换 Node 版本</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">fnm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> use</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">versio</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><p>将某一版本设为默认</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">fnm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> default</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">versio</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><div class="hint-container info"><p class="hint-container-title">这一套操作相当于完成了 fnm 对本地 nodejs 一些基本操作</p><p>增: <code>fnm install</code><br> 删: <code>fnm uninstall</code><br> 改: <code>fnm use</code> 和 <code>fnm default</code><br> 查: <code>fnm ls-remote</code> 和 <code>fnm ls</code></p><p>在使用过 <code>fnm use</code> 命令后，就可以直接使用 对应的 node 版本了。</p></div><h2 id="windows-环境下不推荐使用-fnm" tabindex="-1"><a class="header-anchor" href="#windows-环境下不推荐使用-fnm"><span>Windows 环境下不推荐使用 fnm</span></a></h2>`,36),k=s("code",null,".msi",-1);function c(m,g){const e=l("RouteLink");return r(),h("div",null,[o,s("p",null,[i("因为我 Windows 开发环境一直使用的是 "),a(e,{to:"/tutorial/wsl_ready.html"},{default:n(()=>[i("WSL 子系统")]),_:1}),i(" ，如果 Windows 环境需要使用 nodejs 我建议直接下载 "),k,i(" 安装包进行使用。")]),s("p",null,[i("详情可参考 "),a(e,{to:"/developer/front_end_web/nodejs_ready.html"},{default:n(()=>[i("nodejs 基础环境搭建")]),_:1})])])}const u=t(p,[["render",c],["__file","fnm_ready.html.vue"]]),y=JSON.parse('{"path":"/developer/front_end_web/fnm_ready.html","title":"2.fnm 管理 Nodejs","lang":"zh-CN","frontmatter":{"order":2,"category":["前端"],"tag":["工具","技巧","环境搭建","教程"],"permalink":"/developer/front_end_web/fnm_ready.html","description":"2.fnm 管理 Nodejs 当你本地存在多个项目，且依赖的 nodejs 版本不尽相同，就需要使用 nodejs 版本管理工具了，它允许同一台机器中多个 nodejs 版本共存且可以随时切换。 fnm 类似于 nvm，是一个 nodejs 版本管理工具， 他比 nvm 更加迅速，应该是目前已知最好的 nodejs 版本管理工具。 fnm 的特点是:...","head":[["meta",{"property":"og:url","content":"https://blog.mo7.cc/developer/front_end_web/fnm_ready.html"}],["meta",{"property":"og:site_name","content":"墨七"}],["meta",{"property":"og:title","content":"2.fnm 管理 Nodejs"}],["meta",{"property":"og:description","content":"2.fnm 管理 Nodejs 当你本地存在多个项目，且依赖的 nodejs 版本不尽相同，就需要使用 nodejs 版本管理工具了，它允许同一台机器中多个 nodejs 版本共存且可以随时切换。 fnm 类似于 nvm，是一个 nodejs 版本管理工具， 他比 nvm 更加迅速，应该是目前已知最好的 nodejs 版本管理工具。 fnm 的特点是:..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-30T07:00:29.000Z"}],["meta",{"property":"article:author","content":"墨七"}],["meta",{"property":"article:tag","content":"工具"}],["meta",{"property":"article:tag","content":"技巧"}],["meta",{"property":"article:tag","content":"环境搭建"}],["meta",{"property":"article:tag","content":"教程"}],["meta",{"property":"article:modified_time","content":"2024-06-30T07:00:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2.fnm 管理 Nodejs\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-30T07:00:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"墨七\\",\\"url\\":\\"https://mo7.cc\\",\\"email\\":\\"mo7@mo7.cc\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.mo7.cc/atom.xml","title":"墨七 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.mo7.cc/feed.json","title":"墨七 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.mo7.cc/rss.xml","title":"墨七 RSS Feed"}]]},"headers":[{"level":2,"title":"安装 fnm","slug":"安装-fnm","link":"#安装-fnm","children":[]},{"level":2,"title":"fnm 的基本使用","slug":"fnm-的基本使用","link":"#fnm-的基本使用","children":[]},{"level":2,"title":"Windows 环境下不推荐使用 fnm","slug":"windows-环境下不推荐使用-fnm","link":"#windows-环境下不推荐使用-fnm","children":[]}],"git":{"createdTime":1716349329000,"updatedTime":1719730829000,"contributors":[{"name":"墨七","email":"mo7@mo7.cc","commits":2},{"name":"mo7","email":"mo7@mo7.cc","commits":1}]},"readingTime":{"minutes":1.59,"words":476},"filePathRelative":"developer/front_end_web/2.fnm管理nodejs.md","localizedDate":"2024年5月22日","excerpt":"\\n<p>当你本地存在多个项目，且依赖的 nodejs 版本不尽相同，就需要使用 nodejs 版本管理工具了，它允许同一台机器中多个 nodejs 版本共存且可以随时切换。</p>\\n<p>fnm 类似于 nvm，是一个 nodejs 版本管理工具， 他比 nvm 更加迅速，应该是目前已知最好的 nodejs 版本管理工具。</p>\\n<p>fnm 的特点是:</p>\\n<ul>\\n<li>跨平台，支持 macOS、Windows、Linux。</li>\\n<li>使用 Rust 编写，速度快。发布为单文件，便于安装。</li>\\n<li>支持按应用自动切换 Node.js 版本。</li>\\n</ul>\\n","autoDesc":true}');export{u as comp,y as data};
