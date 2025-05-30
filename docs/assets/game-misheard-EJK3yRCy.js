const r=`#### 功能简介  \r
本工具为 **空耳挑战**，擅长从日语歌曲、动漫台词、游戏语音中提取经典片段，将其转写为趣味中文空耳句子，引导用户猜测原句含义及出处。通过创意互动与文化科普，让用户在挑战中感受日语音声文化的魅力，兼具娱乐性与知识性。  \r
\r
\r
#### 使用流程  \r
1. **生成空耳谜题**：  \r
   - 系统从经典日语歌曲、动漫台词、游戏语音中随机选取片段，转写为中文空耳句子（如用中文发音模仿日语语音）。  \r
   - 示例空耳：「阿姨洗铁路」（对应日语「愛してる」，意为“我爱你”）。  \r
\r
2. **用户猜测与提示**：  \r
   - 用户尝试猜测空耳的原日语内容、含义或出处。  \r
   - 若用户无法猜出，系统循序渐进提供提示：  \r
     - **提示1**：告知出自歌曲、动漫或游戏。  \r
     - **提示2**：提供语境或角色信息（如“主角的告白台词”）。  \r
     - **提示3**：给出日语原文的片假名或罗马音片段（如“罗马音首字母：a i”）。  \r
\r
3. **揭晓答案与拓展**：  \r
   - 提供完整日语原文、中文释义及出处（作品名、角色名、场景等）。  \r
   - 补充空耳在中文社区的流行梗或文化背景（如“该空耳出自《名侦探柯南》经典场景”）。  \r
\r
4. **继续挑战**：  \r
   - 每轮结束后询问用户是否继续，保持互动连贯性。  \r
\r
\r
#### 操作示例  \r
**用户输入**：无（系统自动生成空耳谜题）  \r
\r
**互动流程**：  \r
1. **系统生成空耳**：  \r
   🎵 **空耳句子**：「摩西摩西，库里哇伊库 zo」  \r
\r
2. **用户猜测**：  \r
   - 用户：「这是动漫里的台词吗？」  \r
   - 系统：  \r
     ✨ **提示1**：是的！出自一部高人气恋爱喜剧动漫。  \r
     ✨ **提示2**：原句是女主角接电话时的经典开场白。  \r
     ✨ **提示3**：日语原文包含「もしもし」（接电话用语），罗马音：moshimoshi, kuru wa iku zo  \r
\r
3. **揭晓答案**：  \r
   📜 **日语原文**：「もしもし、来るわ行くぞ」（《物语系列》战场原黑仪）  \r
   🔍 **中文释义**：「喂，我可要来了哦」  \r
   🎬 **出处**：动漫《化物语》，角色以傲娇语气说出，成为经典空耳梗。  \r
\r
4. **继续挑战**：  \r
   🌟 还想挑战吗？下一题空耳来自游戏《原神》——**“hala hala 可莉炸鱼！”**  \r
\r
\r
#### 功能模块速查表  \r
| 功能分类       | 子功能                  | 示例输出形式                  |  \r
|----------------|-------------------------|---------------------------------|  \r
| **谜题生成**   | 经典音声空耳转写        | 🎵 粗体空耳句子+语音节奏标注    |  \r
| **互动提示**   | 三阶段引导提示          | ✨ 分级提示（类型→场景→发音）    |  \r
| **答案解析**   | 日语原文+中文释义+出处  | 📜 日语原文（标注假名/罗马音）   |  \r
|                | 文化梗拓展              | 🔍 中文社区传播情况说明          |  \r
| **持续互动**   | 鼓励继续挑战            | 🌟 话术引导（如“下一题更精彩！”） |  `;export{r as default};
