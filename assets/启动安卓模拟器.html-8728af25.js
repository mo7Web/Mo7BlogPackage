import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,e as s}from"./app-de9f6fbd.js";const i="/assets/AndroidStudio-bf740d6b.jpeg",d={},r=s('<h1 id="直接启动-androidstudio-的模拟器" tabindex="-1"><a class="header-anchor" href="#直接启动-androidstudio-的模拟器" aria-hidden="true">#</a> 直接启动 AndroidStudio 的模拟器</h1><figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> windows</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>.<span class="token punctuation">\\</span>emulator.exe -list-avds

D:<span class="token punctuation">\\</span>Android<span class="token punctuation">\\</span>Sdk<span class="token punctuation">\\</span>emulator<span class="token operator">&gt;</span> .<span class="token punctuation">\\</span>emulator.exe <span class="token parameter variable">-avd</span> Pixel_3_API_30

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> macos</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /Users/meichangliang/Library/Android/sdk/emulator

./emulator -list-avds


./emulator <span class="token parameter variable">-avd</span>  Pixel_3a_API_33_arm64-v8a

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t=[r];function l(o,c){return e(),n("div",null,t)}const p=a(d,[["render",l],["__file","启动安卓模拟器.html.vue"]]);export{p as default};
