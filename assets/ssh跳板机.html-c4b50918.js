import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as n,e as i}from"./app-de9f6fbd.js";const d={},r=i(`<h1 id="ssh-跳板机" tabindex="-1"><a class="header-anchor" href="#ssh-跳板机" aria-hidden="true">#</a> ssh 跳板机</h1><blockquote><p>通过设置 ProxyCommand 来进行 ssh 跳板机</p></blockquote><p>代理 github ssh 协议 和 ssh 登录加速。</p><p>文件:<code>~/.ssh/config</code></p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>
Host itpo.mo7.cc
  HostName itpo.mo7.cc
  User root

Host test-www.OtterTrade.com
  HostName test-www.OtterTrade.com
  User root

Host www.OtterTrade.com
  HostName www.OtterTrade.com
  User root

Host github.com
  HostName github.com
  User git
  ProxyCommand ssh -W %h:%p test-www.OtterTrade.com

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[r];function o(t,a){return s(),n("div",null,c)}const v=e(d,[["render",o],["__file","ssh跳板机.html.vue"]]);export{v as default};
