import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,a as n,d as s,b as c,e as i}from"./app-de9f6fbd.js";const l={},u=n("h1",{id:"两数之和-twosum",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#两数之和-twosum","aria-hidden":"true"},"#"),s(" 两数之和 (twoSum)")],-1),r={href:"https://leetcode.cn/problems/two-sum/",target:"_blank",rel:"noopener noreferrer"},k=i(`<hr><h2 id="解法思路" tabindex="-1"><a class="header-anchor" href="#解法思路" aria-hidden="true">#</a> 解法思路</h2><p>用 target 挨个 减去 nums 中的项，然后得出结果，如果结果 nums 中存在，则记录下标</p><h2 id="golang" tabindex="-1"><a class="header-anchor" href="#golang" aria-hidden="true">#</a> Golang</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>
		<span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	target <span class="token operator">:=</span> <span class="token number">6</span>

	results <span class="token operator">:=</span> <span class="token function">twoSum</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> target<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;results&quot;</span><span class="token punctuation">,</span> results<span class="token punctuation">)</span>

	results2 <span class="token operator">:=</span> <span class="token function">twoSum2</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> target<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;results2&quot;</span><span class="token punctuation">,</span> results2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 暴力求解</span>
<span class="token keyword">func</span> <span class="token function">twoSum</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> target <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	returnVal <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> k1<span class="token punctuation">,</span> v1 <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
		diff <span class="token operator">:=</span> target <span class="token operator">-</span> v1
		<span class="token keyword">for</span> k2<span class="token punctuation">,</span> v2 <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
			<span class="token keyword">if</span> diff <span class="token operator">==</span> v2 <span class="token operator">&amp;&amp;</span> k2 <span class="token operator">!=</span> k1 <span class="token punctuation">{</span>
				returnVal <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>returnVal<span class="token punctuation">,</span> k2<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> returnVal
<span class="token punctuation">}</span>

<span class="token comment">// 利用哈希 map</span>
<span class="token keyword">func</span> <span class="token function">twoSum2</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> target <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	hashTable <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> i<span class="token punctuation">,</span> x <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
		p<span class="token punctuation">,</span> ok <span class="token operator">:=</span> hashTable<span class="token punctuation">[</span>target<span class="token operator">-</span>x<span class="token punctuation">]</span>
		<span class="token keyword">if</span> ok <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>p<span class="token punctuation">,</span> i<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		hashTable<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> i
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 暴力求解</span>
<span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> el <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> diff <span class="token operator">=</span> target <span class="token operator">-</span> el<span class="token punctuation">;</span>
    <span class="token keyword">const</span> idxOf <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>diff<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>idxOf <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> idxOf <span class="token operator">!=</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span>i<span class="token punctuation">,</span> idxOf<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 利用哈希map</span>
<span class="token keyword">var</span> <span class="token function-variable function">twoSum2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> el <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> map<span class="token punctuation">[</span>target <span class="token operator">-</span> el<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span>res<span class="token punctuation">,</span> i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    map<span class="token punctuation">[</span>el<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 代码执行块</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
  <span class="token comment">// const result = twoSum(nums, target);</span>
  <span class="token comment">// console.log(&#39;result&#39;, result);</span>

  <span class="token keyword">const</span> result2 <span class="token operator">=</span> <span class="token function">twoSum2</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;result2&#39;</span><span class="token punctuation">,</span> result2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function d(v,m){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[n("a",r,[s("https://leetcode.cn/problems/two-sum/"),c(a)])]),k])}const w=t(l,[["render",d],["__file","index.html.vue"]]);export{w as default};
