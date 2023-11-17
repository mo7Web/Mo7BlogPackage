import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c,a as n,d as s,b as e,e as i}from"./app-de9f6fbd.js";const r={},p=n("h1",{id:"环境安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#环境安装","aria-hidden":"true"},"#"),s(" 环境安装")],-1),d=n("h2",{id:"安装包下载地址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装包下载地址","aria-hidden":"true"},"#"),s(" 安装包下载地址")],-1),u={href:"https://studygolang.com/dl",target:"_blank",rel:"noopener noreferrer"},v=i(`<h2 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h2><p>下载 <code>.mis</code> 文件，直接下一步</p><h2 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> MacOS</h2><p>下载 <code>.pkg</code> 文件，直接下一步</p><h2 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h2><p>相关操作脚本如下:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看机器版本</span>
arch

<span class="token comment"># 下载 x86 版本</span>
<span class="token function">curl</span> <span class="token parameter variable">-o</span> <span class="token string">&quot;goPackage&quot;</span> https://dl.google.com/go/go1.21.3.linux-amd64.tar.gz
<span class="token comment"># 下载 ARM 版本</span>
<span class="token function">curl</span> <span class="token parameter variable">-o</span> <span class="token string">&quot;goPackage&quot;</span> https://dl.google.com/go/go1.21.3.linux-amd64.tar.gz

<span class="token comment"># 删除老版本</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/lib/go

<span class="token comment"># 解压新版本</span>
<span class="token function">sudo</span> <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> goPackage <span class="token parameter variable">-C</span> /usr/lib

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> goPackage
<span class="token comment"># 设置添加环境变量</span>
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/profile

<span class="token comment"># 追加如下</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOROOT</span><span class="token operator">=</span>/usr/lib/go
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$GOROOT</span>/bin:<span class="token variable">$GOPATH</span>/bin

<span class="token comment"># 重新加载配置</span>
<span class="token builtin class-name">source</span> /etc/profile

<span class="token comment"># 检查版本</span>
go version

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置代理" tabindex="-1"><a class="header-anchor" href="#设置代理" aria-hidden="true">#</a> 设置代理</h2>`,8),m={href:"https://goproxy.cn/",target:"_blank",rel:"noopener noreferrer"},b=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看当前go环境配置</span>
go <span class="token function">env</span>

<span class="token comment"># 设置代理</span>
go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on
go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.cn,direct

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 初始化仓库</span>
go mod init <span class="token operator">&lt;</span>projectName<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>./main.go</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>Args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 运行</span>
go run main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="版本管理" tabindex="-1"><a class="header-anchor" href="#版本管理" aria-hidden="true">#</a> 版本管理</h2>`,7),k={href:"https://www.cnblogs.com/pebblecome/p/14815365.html",target:"_blank",rel:"noopener noreferrer"},h=n("blockquote",null,[n("p",null,"我的建议是直接重新安装最新版本即可")],-1);function g(f,_){const a=t("ExternalLinkIcon");return o(),c("div",null,[p,d,n("p",null,[n("a",u,[s("https://studygolang.com/dl"),e(a)])]),v,n("p",null,[n("a",m,[s("https://goproxy.cn/"),e(a)])]),b,n("p",null,[n("a",k,[s("https://www.cnblogs.com/pebblecome/p/14815365.html"),e(a)])]),h])}const O=l(r,[["render",g],["__file","环境搭建.html.vue"]]);export{O as default};
