import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as d,a as n,d as e,b as r,e as o}from"./app-de9f6fbd.js";const c={},t=n("h1",{id:"将-golang-作为脚本语言使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#将-golang-作为脚本语言使用","aria-hidden":"true"},"#"),e(" 将 golang 作为脚本语言使用")],-1),u=n("p",null,"为什么？",-1),v={href:"https://github.com/erning/gorun",target:"_blank",rel:"noopener noreferrer"},h=o(`<h2 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式" aria-hidden="true">#</a> 使用方式</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
go <span class="token function">install</span> github.com/erning/gorun@latest


<span class="token function">sudo</span> <span class="token function">mv</span> ~/go/bin/gorun /usr/local/bin/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go build ./main.go

./main

<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行的结果是 42</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
go run ./main.go

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行的结果是 1</p>`,7);function m(b,g){const a=i("ExternalLinkIcon");return l(),d("div",null,[t,u,n("p",null,[n("a",v,[e("https://github.com/erning/gorun"),r(a)])]),h])}const f=s(c,[["render",m],["__file","将golang作为脚本语言使用.html.vue"]]);export{f as default};
