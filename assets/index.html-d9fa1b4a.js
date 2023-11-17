import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as o,a as n,d as s,b as c,e as i}from"./app-de9f6fbd.js";const l={},u=n("h1",{id:"盛最多水的容器-maxarea",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#盛最多水的容器-maxarea","aria-hidden":"true"},"#"),s(" 盛最多水的容器 (maxArea)")],-1),r={href:"https://leetcode.cn/problems/container-with-most-water",target:"_blank",rel:"noopener noreferrer"},d=i(`<hr><h2 id="解法思路" tabindex="-1"><a class="header-anchor" href="#解法思路" aria-hidden="true">#</a> 解法思路</h2><h2 id="golang" tabindex="-1"><a class="header-anchor" href="#golang" aria-hidden="true">#</a> Golang</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>
		<span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	results <span class="token operator">:=</span> <span class="token function">maxArea</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;results&quot;</span><span class="token punctuation">,</span> results<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 暴力求解</span>
<span class="token comment">/*
计算最大容积
容积的公式为 底*高

底 = 当前下标和未来下标的差
高 = 二者之间最大值
*/</span>
<span class="token keyword">func</span> <span class="token function">maxArea</span><span class="token punctuation">(</span>height <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	res <span class="token operator">:=</span> <span class="token number">0</span>             <span class="token comment">// 最大面积</span>
	l <span class="token operator">:=</span> <span class="token number">0</span>               <span class="token comment">// 最左边</span>
	r <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>height<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">// 最右边</span>

	<span class="token keyword">for</span> l <span class="token operator">&lt;</span> r <span class="token punctuation">{</span>

		y <span class="token operator">:=</span> <span class="token number">0</span>
		x <span class="token operator">:=</span> r <span class="token operator">-</span> l

		<span class="token keyword">if</span> height<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">&lt;</span> height<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token punctuation">{</span>
			y <span class="token operator">=</span> height<span class="token punctuation">[</span>l<span class="token punctuation">]</span>
			l<span class="token operator">++</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			y <span class="token operator">=</span> height<span class="token punctuation">[</span>r<span class="token punctuation">]</span>
			r<span class="token operator">--</span>
		<span class="token punctuation">}</span>
		are <span class="token operator">:=</span> y <span class="token operator">*</span> x
		<span class="token keyword">if</span> are <span class="token operator">&gt;</span> res <span class="token punctuation">{</span>
			res <span class="token operator">=</span> are
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 暴力求解</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxArea</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 代码执行块</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">maxArea</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function k(v,m){const a=e("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[n("a",r,[s("https://leetcode.cn/problems/container-with-most-water"),c(a)])]),d])}const f=t(l,[["render",k],["__file","index.html.vue"]]);export{f as default};
