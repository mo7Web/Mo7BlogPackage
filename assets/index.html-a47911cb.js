import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,a as n,d as s,b as c,e as l}from"./app-de9f6fbd.js";const i={},u=n("h1",{id:"最长连续序列-longestconsecutive",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#最长连续序列-longestconsecutive","aria-hidden":"true"},"#"),s(" 最长连续序列 (longestConsecutive)")],-1),r={href:"https://leetcode.cn/problems/longest-consecutive-sequence",target:"_blank",rel:"noopener noreferrer"},k=l(`<hr><h2 id="解法思路" tabindex="-1"><a class="header-anchor" href="#解法思路" aria-hidden="true">#</a> 解法思路</h2><p>用 target 挨个 减去 nums 中的项，然后得出结果，如果结果 nums 中存在，则记录下标</p><h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h2><h2 id="golang" tabindex="-1"><a class="header-anchor" href="#golang" aria-hidden="true">#</a> Golang</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sort&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>
		<span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	results <span class="token operator">:=</span> <span class="token function">longestConsecutive</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;results&quot;</span><span class="token punctuation">,</span> results<span class="token punctuation">)</span>

	results2 <span class="token operator">:=</span> <span class="token function">longestConsecutive2</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;results2&quot;</span><span class="token punctuation">,</span> results2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 暴力求解</span>
<span class="token comment">/*
下一个减去上一个，结果为1则判定为有效
*/</span>
<span class="token keyword">func</span> <span class="token function">longestConsecutive</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token comment">// 去重</span>
	hasMap <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">bool</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	newArr <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token operator">!</span>hasMap<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token punctuation">{</span>
			hasMap<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
			newArr <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>newArr<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 排序</span>
	sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span>

	<span class="token comment">// fmt.Println(&quot;newArr&quot;, newArr)</span>

	lineArr <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token comment">// result := [][]int{}</span>

	max <span class="token operator">:=</span> <span class="token number">0</span>

	<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token number">1</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> idx<span class="token punctuation">,</span> item <span class="token operator">:=</span> <span class="token keyword">range</span> newArr <span class="token punctuation">{</span>
		nextIdx <span class="token operator">:=</span> idx <span class="token operator">+</span> <span class="token number">1</span>
		<span class="token keyword">if</span> nextIdx <span class="token operator">&gt;</span> <span class="token function">len</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
			nextIdx <span class="token operator">=</span> <span class="token number">0</span>
		<span class="token punctuation">}</span>
		now <span class="token operator">:=</span> item
		next <span class="token operator">:=</span> newArr<span class="token punctuation">[</span>nextIdx<span class="token punctuation">]</span>

		<span class="token keyword">if</span> next<span class="token operator">-</span>now <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			<span class="token keyword">continue</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> next<span class="token operator">-</span>now <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
			lineArr <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>lineArr<span class="token punctuation">,</span> item<span class="token punctuation">)</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			lineArr <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>lineArr<span class="token punctuation">,</span> item<span class="token punctuation">)</span>
			<span class="token comment">// result = append(result, lineArr)</span>
			<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>lineArr<span class="token punctuation">)</span> <span class="token operator">&gt;</span> max <span class="token punctuation">{</span>
				max <span class="token operator">=</span> <span class="token function">len</span><span class="token punctuation">(</span>lineArr<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			lineArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

	<span class="token punctuation">}</span>

	<span class="token comment">// fmt.Println(&quot;result&quot;, result)</span>

	<span class="token keyword">return</span> max
<span class="token punctuation">}</span>

<span class="token comment">// 利用哈希表</span>
<span class="token comment">/*
将数组映射成哈希表
然后在哈希表中找-1的数字是否存在
*/</span>
<span class="token keyword">func</span> <span class="token function">longestConsecutive2</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	numSet <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">bool</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> num <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
		numSet<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>
	longestStreak <span class="token operator">:=</span> <span class="token number">0</span>
	<span class="token keyword">for</span> num <span class="token operator">:=</span> <span class="token keyword">range</span> numSet <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token operator">!</span>numSet<span class="token punctuation">[</span>num<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
			currentNum <span class="token operator">:=</span> num
			currentStreak <span class="token operator">:=</span> <span class="token number">1</span>
			<span class="token keyword">for</span> numSet<span class="token punctuation">[</span>currentNum<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
				currentNum<span class="token operator">++</span>
				currentStreak<span class="token operator">++</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> longestStreak <span class="token operator">&lt;</span> currentStreak <span class="token punctuation">{</span>
				longestStreak <span class="token operator">=</span> currentStreak
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> longestStreak
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 暴力求解</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestConsecutive</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//去重</span>
  <span class="token keyword">const</span> hasMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>hasMap<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      hasMap<span class="token punctuation">[</span>item<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      newArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 排序</span>
  newArr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> lineArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>newArr<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> newArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> nextIdx <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nextIdx <span class="token operator">&gt;</span> newArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nextIdx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> now <span class="token operator">=</span> newArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> next <span class="token operator">=</span> newArr<span class="token punctuation">[</span>nextIdx<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">-</span> now <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">continue</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">-</span> now <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      lineArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>now<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      lineArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>now<span class="token punctuation">)</span><span class="token punctuation">;</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>lineArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>lineArr<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        max <span class="token operator">=</span> lineArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      lineArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 代码执行块</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">longestConsecutive</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function d(v,m){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[n("a",r,[s("https://leetcode.cn/problems/longest-consecutive-sequence"),c(a)])]),k])}const f=t(i,[["render",d],["__file","index.html.vue"]]);export{f as default};
