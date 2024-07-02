import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,c as m,f as u,a as h,w as a,b as e,n as k,g,d as s,e as n,o as f}from"./app-Dvnd8qII.js";const b={},v=e("p",null,"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。",-1),w=e("p",null,"你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。",-1),_=n('<h2 id="markdown-介绍" tabindex="-1"><a class="header-anchor" href="#markdown-介绍"><span>Markdown 介绍</span></a></h2><p>如果你是一个新手，还不会编写 Markdown，请先阅读 <a href="https://theme-hope.vuejs.press/zh/cookbook/markdown/" target="_blank" rel="noopener noreferrer">Markdown 介绍</a> 和 <a href="https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html" target="_blank" rel="noopener noreferrer">Markdown 演示</a>。</p><h2 id="markdown-配置" tabindex="-1"><a class="header-anchor" href="#markdown-配置"><span>Markdown 配置</span></a></h2><p>VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。</p><div class="hint-container important"><p class="hint-container-title">Frontmatter</p><p>Frontmatter 是 VuePress 中很重要的一个概念，请阅读 <a href="https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#front-matter" target="_blank" rel="noopener noreferrer">Frontmatter 介绍</a> 了解详情。</p></div><h2 id="markdown-扩展" tabindex="-1"><a class="header-anchor" href="#markdown-扩展"><span>Markdown 扩展</span></a></h2><p>VuePress 会使用 <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it</a> 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 <a href="https://github.com/markdown-it/markdown-it#syntax-extensions" target="_blank" rel="noopener noreferrer">语法扩展</a> 。</p><h3 id="vuepress-扩展" tabindex="-1"><a class="header-anchor" href="#vuepress-扩展"><span>VuePress 扩展</span></a></h3><p>为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。</p><p>关于这些扩展，请阅读 <a href="https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html" target="_blank" rel="noopener noreferrer">VuePress 中的 Markdown 扩展</a>。</p><h3 id="主题扩展" tabindex="-1"><a class="header-anchor" href="#主题扩展"><span>主题扩展</span></a></h3><p>通过 <a href="https://plugin-md-enhance.vuejs.press/zh/" target="_blank" rel="noopener noreferrer"><code>vuepress-plugin-md-enhance</code></a>，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。</p><h4 id="选项卡" tabindex="-1"><a class="header-anchor" href="#选项卡"><span>选项卡</span></a></h4>',13),y=e("p",null,"Apple",-1),x=e("p",null,"Banana",-1),j=e("p",null,"Orange",-1),z=n('<ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/content/tabs.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注"><span>脚注</span></a></h4><p>此文字有脚注<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/content/footnote.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="导入文件" tabindex="-1"><a class="header-anchor" href="#导入文件"><span>导入文件</span></a></h4><h2 id="permalink-posts" tabindex="-1"><a class="header-anchor" href="#permalink-posts"><span>permalink: /posts/</span></a></h2><h1 id="博文" tabindex="-1"><a class="header-anchor" href="#博文"><span>博文</span></a></h1>',7),M={class:"hint-container info"},A=n('<p class="hint-container-title">记录一些所思所想</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/content/include.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="tex-语法" tabindex="-1"><a class="header-anchor" href="#tex-语法"><span>TeX 语法</span></a></h4><p>$$<br> \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right)<br> = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right}<br> $$</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/grammar/tex.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="任务列表" tabindex="-1"><a class="header-anchor" href="#任务列表"><span>任务列表</span></a></h4><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 计划 1</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 计划 2</label></li></ul><p><a href="https://theme-hope.vuejs.press/zh/guide/markdown/grammar/tasklist.html" target="_blank" rel="noopener noreferrer">查看详情</a></p><h3 id="图片增强" tabindex="-1"><a class="header-anchor" href="#图片增强"><span>图片增强</span></a></h3><p>支持为图片设置颜色模式和大小。</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/grammar/image.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="上下角标" tabindex="-1"><a class="header-anchor" href="#上下角标"><span>上下角标</span></a></h4><p>19<sup>th</sup> H<sub>2</sub>O</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/grammar/sup-sub.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h4>',15),C=e("ul",null,[e("li",null,[e("a",{href:"https://theme-hope.vuejs.press/zh/guide/component/grammar.html",target:"_blank",rel:"noopener noreferrer"},"查看详情")])],-1),V=e("h4",{id:"提示容器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#提示容器"},[e("span",null,"提示容器")])],-1),F=e("div",null,[e("p",null,"安全的在 Markdown 中使用 {{ variable }}。")],-1),P=n('<div class="hint-container info"><p class="hint-container-title">自定义标题</p><p>信息容器，包含 <code>代码</code> 与 <a href="#%E6%8F%90%E7%A4%BA%E5%AE%B9%E5%99%A8">链接</a>。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">自定义标题</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">自定义标题</p><p>警告容器</p></div><div class="hint-container caution"><p class="hint-container-title">自定义标题</p><p>危险容器</p></div><details class="hint-container details"><summary>自定义标题</summary><p>详情容器</p></details><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/alert.html" target="_blank" rel="noopener noreferrer">GitHub 警示</a></li><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/hint.html" target="_blank" rel="noopener noreferrer">提示框</a></li></ul><h4 id="自定义对齐" tabindex="-1"><a class="header-anchor" href="#自定义对齐"><span>自定义对齐</span></a></h4><div style="text-align:center;"><p>我是居中的</p></div><div style="text-align:right;"><p>我在右对齐</p></div><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/align.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="属性支持" tabindex="-1"><a class="header-anchor" href="#属性支持"><span>属性支持</span></a></h4><p>一个拥有 ID 的 <strong id="word">单词</strong>。</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/attrs.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="标记" tabindex="-1"><a class="header-anchor" href="#标记"><span>标记</span></a></h4><p>你可以标记 <mark>重要的内容</mark> 。</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/mark.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="剧透" tabindex="-1"><a class="header-anchor" href="#剧透"><span>剧透</span></a></h4><p>VuePress Theme Hope !!十分强大!!.</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/spoiler.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="样式化" tabindex="-1"><a class="header-anchor" href="#样式化"><span>样式化</span></a></h4>',20),B=n(`<ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/stylize.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="图表" tabindex="-1"><a class="header-anchor" href="#图表"><span>图表</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/chartjs.html" width="100%" height="450"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/chartjs.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts"><span>ECharts</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/echarts.html" width="100%" height="800"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/echarts.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图"><span>流程图</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/flowchart.html" width="100%" height="450"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/flowchart.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="markmap" tabindex="-1"><a class="header-anchor" href="#markmap"><span>MarkMap</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/markmap.html" width="100%" height="380"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/markmap.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid"><span>Mermaid</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/mermaid.html" width="100%" height="620"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/mermaid.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="plantuml" tabindex="-1"><a class="header-anchor" href="#plantuml"><span>PlantUML</span></a></h4><p>@startuml<br> Alice -&gt; Bob: 认证请求</p><p>alt 成功情况</p><pre><code>Bob -&gt; Alice: 认证接受
</code></pre><p>else 某种失败情况</p><pre><code>Bob -&gt; Alice: 认证失败
group 我自己的标签
Alice -&gt; Log : 开始记录攻击日志
    loop 1000次
        Alice -&gt; Bob: DNS 攻击
    end
Alice -&gt; Log : 结束记录攻击日志
end
</code></pre><p>else 另一种失败</p><pre><code>Bob -&gt; Alice: 请重复
</code></pre><p>end<br> @enduml</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/plantuml.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块"><span>代码块</span></a></h4>`,27),D=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"pnpm"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," add"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -D"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," vuepress-theme-hope")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),T=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," add"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -D"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," vuepress-theme-hope")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),E=e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," i"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -D"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," vuepress-theme-hope")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),N=n('<ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/code-tabs.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="代码演示" tabindex="-1"><a class="header-anchor" href="#代码演示"><span>代码演示</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/code-demo.html" width="100%" height="450"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/demo.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="交互演示" tabindex="-1"><a class="header-anchor" href="#交互演示"><span>交互演示</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/playground.html" width="100%" height="480"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/playground.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="kotlin-交互演示" tabindex="-1"><a class="header-anchor" href="#kotlin-交互演示"><span>Kotlin 交互演示</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/kotlin-playground.html" width="100%" height="220"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/kotlin-playground.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="sandpack-交互演示" tabindex="-1"><a class="header-anchor" href="#sandpack-交互演示"><span>Sandpack 交互演示</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/sandpack.html" width="100%" height="380"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/sandpack.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="vue-交互演示" tabindex="-1"><a class="header-anchor" href="#vue-交互演示"><span>Vue 交互演示</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/vue-playground.html" width="100%" height="380"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/vue-playground.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="幻灯片" tabindex="-1"><a class="header-anchor" href="#幻灯片"><span>幻灯片</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/revealjs.html" width="100%" height="400"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/content/revealjs.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>这是脚注内容 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',21);function S(H,O){const l=i("Tabs"),o=i("VPCard"),p=i("Badge"),d=i("CodeTabs");return f(),m("div",null,[v,w,u(" more "),_,h(l,{id:"48",data:[{id:"apple"},{id:"banana"},{id:"orange"}],"tab-id":"fruit"},{title0:a(({value:t,isActive:r})=>[s("apple")]),title1:a(({value:t,isActive:r})=>[s("banana")]),title2:a(({value:t,isActive:r})=>[s("orange")]),tab0:a(({value:t,isActive:r})=>[y]),tab1:a(({value:t,isActive:r})=>[x]),tab2:a(({value:t,isActive:r})=>[j]),_:1}),z,e("div",M,[A,h(o,k(g({title:"Mr.Hope",desc:"Where there is light, there is hope",logo:"https://mister-hope.com/logo.svg",link:"https://mister-hope.com",background:"rgba(253, 230, 138, 0.15)"})),null,16),C,V,F]),P,e("p",null,[s("向 Mr.Hope 捐赠一杯咖啡。 "),h(p,{type:"tip"},{default:a(()=>[s("Recommended")]),_:1})]),B,h(d,{id:"377",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:2},{title0:a(({value:t,isActive:r})=>[s("pnpm")]),title1:a(({value:t,isActive:r})=>[s("yarn")]),title2:a(({value:t,isActive:r})=>[s("npm")]),tab0:a(({value:t,isActive:r})=>[D]),tab1:a(({value:t,isActive:r})=>[T]),tab2:a(({value:t,isActive:r})=>[E]),_:1}),N])}const L=c(b,[["render",S],["__file","markdown.html.vue"]]),Z=JSON.parse('{"path":"/posts/markdown.html","title":"Markdown 语法展示","lang":"zh-CN","frontmatter":{"title":"Markdown 语法展示","icon":"markdown","order":3,"category":["博文"],"tag":["演示","Markdown"],"permalink":"/posts/markdown.html","description":"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。 你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。","head":[["meta",{"property":"og:url","content":"https://blog.mo7.cc/posts/markdown.html"}],["meta",{"property":"og:site_name","content":"墨七"}],["meta",{"property":"og:title","content":"Markdown 语法展示"}],["meta",{"property":"og:description","content":"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。 你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-30T20:20:29.000Z"}],["meta",{"property":"article:author","content":"墨七"}],["meta",{"property":"article:tag","content":"演示"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:modified_time","content":"2024-06-30T20:20:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Markdown 语法展示\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-30T20:20:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"墨七\\",\\"url\\":\\"https://mo7.cc\\",\\"email\\":\\"mo7@mo7.cc\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.mo7.cc/atom.xml","title":"墨七 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.mo7.cc/feed.json","title":"墨七 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.mo7.cc/rss.xml","title":"墨七 RSS Feed"}]]},"headers":[{"level":2,"title":"Markdown 介绍","slug":"markdown-介绍","link":"#markdown-介绍","children":[]},{"level":2,"title":"Markdown 配置","slug":"markdown-配置","link":"#markdown-配置","children":[]},{"level":2,"title":"Markdown 扩展","slug":"markdown-扩展","link":"#markdown-扩展","children":[{"level":3,"title":"VuePress 扩展","slug":"vuepress-扩展","link":"#vuepress-扩展","children":[]},{"level":3,"title":"主题扩展","slug":"主题扩展","link":"#主题扩展","children":[]}]},{"level":2,"title":"permalink: /posts/","slug":"permalink-posts","link":"#permalink-posts","children":[]}],"git":{"createdTime":1673167122000,"updatedTime":1719778829000,"contributors":[{"name":"墨七","email":"mo7@mo7.cc","commits":1}]},"readingTime":{"minutes":3.52,"words":1055},"filePathRelative":"posts/4.Markdown演示.md","localizedDate":"2023年1月8日","excerpt":"<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>\\n<p>你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>\\n","autoDesc":true}');export{L as comp,Z as data};
