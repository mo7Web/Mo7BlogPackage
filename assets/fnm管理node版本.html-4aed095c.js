import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as r,a as n,d as s,b as c,e as i}from"./app-de9f6fbd.js";const l={},d=n("h1",{id:"用-fnm-来管理-node-版本",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#用-fnm-来管理-node-版本","aria-hidden":"true"},"#"),s(" 用 fnm 来管理 node 版本")],-1),p={href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener noreferrer"},m=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://fnm.vercel.app/install <span class="token operator">|</span> <span class="token function">bash</span>


<span class="token comment"># ~/.zshenv    ~/.bashrc</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">FNM_NODE_DIST_MIRROR</span><span class="token operator">=</span>https://npmmirror.com/mirrors/node/
<span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>fnm <span class="token function">env</span> --use-on-cd<span class="token variable">)</span></span>&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function v(u,_){const e=t("ExternalLinkIcon");return o(),r("div",null,[d,n("p",null,[n("a",p,[s("https://github.com/Schniz/fnm"),c(e)])]),m])}const f=a(l,[["render",v],["__file","fnm管理node版本.html.vue"]]);export{f as default};
