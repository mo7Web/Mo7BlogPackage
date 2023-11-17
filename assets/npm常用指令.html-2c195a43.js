import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c as d,a as n,d as e,b as s,e as t}from"./app-de9f6fbd.js";const c={},o=n("h1",{id:"npm-常用命令",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#npm-常用命令","aria-hidden":"true"},"#"),e(" npm 常用命令")],-1),p=n("h2",{id:"阿里巴巴开源镜像站",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#阿里巴巴开源镜像站","aria-hidden":"true"},"#"),e(" 阿里巴巴开源镜像站")],-1),m={href:"https://developer.aliyun.com/mirror/",target:"_blank",rel:"noopener noreferrer"},u=n("h2",{id:"npm-代理加速设置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#npm-代理加速设置","aria-hidden":"true"},"#"),e(" npm 代理加速设置")],-1),v={href:"http://www.npmmirror.com/",target:"_blank",rel:"noopener noreferrer"},h=t(`<h2 id="windows-下-使用-git-bash-来运行-npm-run" tabindex="-1"><a class="header-anchor" href="#windows-下-使用-git-bash-来运行-npm-run" aria-hidden="true">#</a> windows 下 使用 git-bash 来运行 npm run</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm config set script-shell &quot;C:\\\\meichangliang\\\\soft\\\\Git\\\\bin\\\\bash.exe&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linux-设置本地代理" tabindex="-1"><a class="header-anchor" href="#linux-设置本地代理" aria-hidden="true">#</a> Linux 设置本地代理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ALL_PROXY</span><span class="token operator">=</span>socks5://127.0.0.1:10808

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一些其它指令" tabindex="-1"><a class="header-anchor" href="#一些其它指令" aria-hidden="true">#</a> 一些其它指令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">## npm 升级</span>
<span class="token function">npm</span> <span class="token parameter variable">-g</span> <span class="token function">install</span> <span class="token function">npm</span>

<span class="token comment">## 清除缓存</span>
<span class="token function">npm</span> cache clean <span class="token parameter variable">--force</span>

<span class="token comment">## 卸载</span>

<span class="token function">npm</span> uninstall xxx <span class="token punctuation">(</span>-g<span class="token punctuation">)</span>


<span class="token comment">## 查看更新</span>
<span class="token function">npm</span> <span class="token parameter variable">-g</span> outdated


<span class="token comment">## 其它指令</span>

<span class="token function">npm</span> audit fix

<span class="token function">npm</span> audit fix <span class="token parameter variable">--force</span>

<span class="token function">npm</span> audit

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function b(f,_){const a=l("ExternalLinkIcon");return r(),d("div",null,[o,p,n("p",null,[n("a",m,[e("https://developer.aliyun.com/mirror/"),s(a)])]),u,n("p",null,[n("a",v,[e("http://www.npmmirror.com/"),s(a)])]),h])}const g=i(c,[["render",b],["__file","npm常用指令.html.vue"]]);export{g as default};
