import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,a as n,d as s,b as c,e as i}from"./app-de9f6fbd.js";const l={},u=n("h1",{id:"三数之和-threesum",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#三数之和-threesum","aria-hidden":"true"},"#"),s(" 三数之和 (threeSum)")],-1),r={href:"https://leetcode.cn/problems/3sum",target:"_blank",rel:"noopener noreferrer"},k=i(`<hr><h2 id="解法思路" tabindex="-1"><a class="header-anchor" href="#解法思路" aria-hidden="true">#</a> 解法思路</h2><h2 id="golang" tabindex="-1"><a class="header-anchor" href="#golang" aria-hidden="true">#</a> Golang</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sort&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>
		<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	results <span class="token operator">:=</span> <span class="token function">threeSum</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;results&quot;</span><span class="token punctuation">,</span> results<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 暴力求解</span>
<span class="token comment">/*
 */</span>
<span class="token keyword">func</span> <span class="token function">threeSum</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	ans <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
	n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>

	<span class="token comment">// 枚举a</span>
	<span class="token keyword">for</span> first <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
		<span class="token keyword">if</span> first <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>first<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>first<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
			<span class="token keyword">continue</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// c 对应的指针初始指向数组的最右端</span>
		third <span class="token operator">:=</span> n <span class="token operator">-</span> <span class="token number">1</span>
		target <span class="token operator">:=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>first<span class="token punctuation">]</span>
		<span class="token comment">// 枚举B</span>
		<span class="token keyword">for</span> second <span class="token operator">:=</span> first <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> second <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> second<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token comment">// 需要和上一次枚举的数不同threeSum</span>
			<span class="token keyword">if</span> second <span class="token operator">&gt;</span> first<span class="token operator">+</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>second<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>second<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
				<span class="token keyword">continue</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// 需要保证 b 的指针在 c 的指针的左侧</span>
			<span class="token keyword">for</span> second <span class="token operator">&lt;</span> third <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>second<span class="token punctuation">]</span><span class="token operator">+</span>nums<span class="token punctuation">[</span>third<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target <span class="token punctuation">{</span>
				third<span class="token operator">--</span>
			<span class="token punctuation">}</span>

			<span class="token comment">// 如果指针重合，随着 b 后续的增加</span>
			<span class="token comment">// 就不会有满足 a+b+c=0 并且 b&lt;c 的 c 了，可以退出循环</span>
			<span class="token keyword">if</span> second <span class="token operator">==</span> third <span class="token punctuation">{</span>
				<span class="token keyword">break</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> nums<span class="token punctuation">[</span>second<span class="token punctuation">]</span><span class="token operator">+</span>nums<span class="token punctuation">[</span>third<span class="token punctuation">]</span> <span class="token operator">==</span> target <span class="token punctuation">{</span>
				ans <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>nums<span class="token punctuation">[</span>first<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>second<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>third<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>

		<span class="token punctuation">}</span>

	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 暴力求解</span>
<span class="token keyword">var</span> <span class="token function-variable function">threeSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 代码执行块</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">threeSum</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function d(m,v){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[n("a",r,[s("https://leetcode.cn/problems/3sum"),c(a)])]),k])}const f=t(l,[["render",d],["__file","index.html.vue"]]);export{f as default};
