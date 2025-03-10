---
sidebar_position: 3
---

# S4から離れろ

卒研において[S4 Simulation System](https://www.msi.co.jp/solution/s4/top.html)、通称S4(エスクアトロ)を利用したHsさんにインタビューを行いました。

## 卒業研究を終えて

——まずは卒業研究が終わりましたね。お疲れ様でした。

やったー！
終わったー！

——それについて今の心境はどうですか？

終わった直後ではないので、特にどうのこうのという気持ちはありません。
しかしやはり、この卒業研究が終わってから卒業までのモラトリアム期間を楽しんでいる節があります。

今日もみんなで飲みに行った帰りですし。
いや楽しいね。

——フフフフ(笑)

最高。

——いやー非常に楽しい会でしたね。ぜひとも1年に1回くらいやりたいですね。

やりたいね。

:::note

インタービュー日は2025年2月27日(木)であり、卒業研究の発表日である2月4日(火)からは時間が経っていました。
この日は4年生で集まり、研究室から借りていたパソコンの初期化を行いました。

その後、茗荷谷横丁という居酒屋で飲んでいました。
刺身が分厚くてとても美味しいです。

:::

——そんなこんなで卒業できます、と。

ホントに？

——ハハハ(笑)

いまだに不安なんだけど。

——できます。そしてHsさんはS4というやつを使っていましたね。

使ったー。

## S4は有用

——S4とは何ですか？

S4は様々なシミュレーションを行うための汎用的なシミュレーションパッケージのことです。

例えば、SFM(Social Force Model)を用いて人流の流れをシミュレーションすることができます。
このように、世の中の様々な事象を計算によって擬似的に再現することにより、世の中の問題を解決する方法を探すための道具がS4です。

——非常に素晴らしい道具だと聞こえます。S4を使ってとても良かったなと思う点を教えでください。

まず、自分でコードを書いてシミュレーターを作ることには高いハードルがあると思います。
マジでゼロから、from scratchでシミュレーターを作るとなったとき、どのような機能を実装すればいいのか、どのようなメソッドを追加してどのように動かせばいいのか、全然わかりません。
何も作ったことがないとね。

そういう基盤みたいなものをS4は用意してくれている。
全く分からない初心者でも「ああ、ここはこういうことをやってるんだな」　「これはこのために作られたメソッドなんだな」みたいな。
そういうことを、全く知識がない状態からでも勉強できるというのはすごくいいところかなと思います。

——なるほど。研究初心者、特に学部生にとっては、シミュレーションを自分で作っていろいろ実験とかしやすいんですね。

そうですね。
右も左もわからないよちよち歩きのひよこちゃんたちに、すごく有用なものなんじゃないかなと思います。

<iframe src="https://www.youtube.com/embed/3JM6sxJ8IO0?si=Xdyup546vdgaZJxq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ display: "block", width: "100%", aspectRatio: "auto 560 / 315" }} />

## S4はわかりづらい

——ここがどうなってる、とかっていうのは分かりやすかったんですか？

いいえ、めちゃくちゃ分かりづらいです。
マジで分かりづらくて、分かりづらくしている要因はやはり商用のパッケージであることが大きいと思っています。

商用であるからこそ全てがオープンになってるわけじゃなくて、コンパイルされているファイルを渡されて、それを裏でガチャガチャガチャガチャ使って。
なんか、、、ね。
よくわかんないようなコードになってるんですよ。
パッと見て。
「なんだこの変数は？」　「なんだこのメソッドは？」みたいな。

プログラム内で定義されていないものが呼び出されるみたいなことが多々あります。
そうなると「ここではこのようなことを恐らくしているんだろうな」みたいな推測をすることしかできません。
あまりにも抽象的になりすぎて、そのプログラムの概要を理解しづらいという状況に陥りがちでした。

——ここはどうしても分からなかったという部分、例えばメソッド名などはありますか？

僕は卒業研究でS4シミュレーションシステムを用いて、SFMという人の動きを計算する運動方程式みたいなものを定義するモデルを用いてシミュレーションを行いました。
その運動方程式を計算する部分が全てプログラム内じゃなくて、なんかどこかしらで計算が行われていました。

そうなると何が困るかというと、その時点で速度がどうなってるのか、向かっている向きがどうなのか、みたいなモデルにおいて一番重要な情報がどこにあるのか、よくわかんない状態に陥ってて。
そこはめちゃくちゃ困りましたね。

:::note

SFMイコールこれ！というような計算式はありませんが、以下のようなイメージです。

![SFMのイメージ](./img/sfm.svg)

中央の走る人に注目してください。
<span style={{ color: "var(--color-red)" }}>赤色の矢印</span>で示されるのは、彼が進みたい方向の力です。
<span style={{ color: "var(--color-blue)" }}>青色の矢印</span>で示されるのは、前を歩く人や通せんぼをする人、足を引っ張ったり引っ張られたりする人、寝転んでいる人など、周りの人から受ける斥力です。
同様に、壁や障害物などからも斥力を受けます。
このような力の合力にしたがって彼は移動するだろうというのがSFMの考え方です。

:::

——その計算式というのは結局分かったんですか？

計算式の定義自体は一応マニュアルには書いてありました。
それをプログラムでどのように実装しているのかは結局わからずじまいでしたね。

——その他にもマニュアル内で、例えばその時々のエージェントの速度を取得するにはこうするみたいなことは、書かれていなかったんですか？

一応ある程度、実装されているメソッドの説明はマニュアルには書いてありました。
あったんですけれども、その細かい説明がない。

例えば、エージェントのそのとき持っている速度ベクトルをゲットするには。
結論から言うと、エージェントが持っている`v`という変数。
`agent.v`っていう風にアクセスするとエージェントの速度が手に入るという感じだったんですね。

だだ、その説明がマニュアルには書いてなかった。
いや、書いてないわけじゃない、一応。
`agent.v`で手に入りますよとは書いてなくて。
別の場所で`agent.v`っていうのを使ってるみたいな表現があって、そこを見てたら多分こうなんじゃないかなって推測できました。
そして試したらなんか取得できた。
なんかできたみたいな。
やってたらなんかできたみたいな感じで。

`Agent`っていうクラスがどういうメンバー変数を持っているのか、みたいなすごく重要であり初歩的であり基本的な説明があまりにも乏しかった。
なのでそこはちょっとね、文句言いたいところですね。
全部書けよ。

:::note

[NTTデータ数理システムの活用事例の紹介ページ](https://www.msiism.jp/case/s4-simulation-system/)を見ると、多くの事例でNTTデータ数理システムからの提案、NTTデータ数理システムによるサポートを受けた上でS4が利用されているようです。

:::

——その速度`v`に関する記述がなければ、そもそもそれを取得することができなかったかもしれないというわけですね？

まぁ位置もそうだね。
エージェントがいる座標っていうのは、エージェントを描画する上で絶対必要なんで、持ってるはずなんですよ。
持っているはずなんですけど、それがマニュアルに書いてあるわけではなくて。
とあるメソッドにおいてエージェントの座標を使うメソッドがあって、その引数から推測するみたいな。

実際にこういうもの、こういう値がありますよって教えられたわけではなくて、別のところから勝手に推測して勝手に持ってくるみたいな。
そういう手間がありましたね。

## S4は中途半端

——先ほど初学者に対しては使いやすい

使いやすいとは言ってないです。
初学者にとっては、ないよりは使った方がいいよね、全く何を知らない状態よりかはS4を使った方がいいよねって感じなんだけども。

——使った方がいいかもしれないが、ただ推測しなければいけない部分が多々ある。

そうですね。
そもそもなんか自分が見ていて思ったのが、S4というのはGUIの方に重きを置いています。
サイトとか見たら分かりますが、アイコンを配置すると勝手にプログラム書き換えてくれて動くみたいな。

実際にプログラムを見て、プログラムを変更して、プログラムを動かす、っていうところへの親切心っていうのは、ちょっと足りてないような気がしました。

:::note

以下のようなGUIでモデルの記述ができるようです。

![グラフィカルなモデル記述](https://www.msi.co.jp/solution/img/s4GUI2.png)

:::

——研究者などではなく、プログラムを知らないけれどもシミュレーションを行う一般の人、例えばイベントの主催者や自治体で道路を整備する人、そういう人たちにとってはありがたいかもしれない。

ただ個人的に思うのが、プログラムを全く分からない人があのパッケージを使って、果たして本当にプログラムができるのか。
一応できる体はなしているけども、もっと細かい設定をしたいってなったときに絶対プログラムを見る必要があって。

う～ん。
中途半端な感じがしたな。

自分がどういう立場なのか、プログラムを結構知っている側なのか、それとも全く知らない側なのか。
おそらくどちらの人にとっても使えるパッケージであるんだけれども、それがゆえにすごく中途半端な設計になっているというような感じはしました。

——プログラムができない人からすると、どういうことまでできるとかありますか？

プログラムが全くできない人からすると、例えば紹介されてたのは銀行の窓口をいくつ作って、その待ち行列に発生するエージェントの間隔を色々いじって、どのくらい待ち時間が 発生するかをシミュレーションするみたいな。
かなり簡単なシミュレーションではあるんですけれども、GUIをいじることによってできるので、別にプログラムを全く知らない状態でもいじれる。

ただ、SFMを用いて実際に人流シミュレーションしようと思ったときに、この地点でどのくらい混雑が発生しているのか知りたいなってなったときに自分でコードを書き換えたいわけじゃないですか。
ただ、そのコードを書き換えようと思ったときに、すごく分かりづらい設計になっているみたいな。
ちょっと半端ですね。

:::note

以下のように銀行窓口の事例に使えるようです。

![銀行窓口のシミュレーション](https://www.msi.co.jp/solution/img/animation.png)

:::

## S4のおすすめの使い方

——そのマニュアルには説明があまりない。

ない。

——そして構造もあまり良くない。

分かりづらい。

まぁ僕がオススメする使い方としては、シミュレーションとはどういうものか、シミュレーションというのはどんな感じで作るのかを一旦大雑把にS4で把握する。
細かいことは分からなくても外面、構造というところで言えば分かるので。
S4に先に触れて自分で1から設計する、っていうのがいい使い方なんじゃないかなと。

もちろんそんなのはNTTデータ数理システムは望んではないと思いますが(笑)

ただ、そこが現実的な落としどころなんじゃないかなと思いますね。
俺は50万払ってあれを買おうとはとっても思わない。

——一旦S4を使ってみて、シミュレーションはどうすればいいのかイメージを掴んで、そこからS4を離れて、フルスクラッチで自分のやりたいようにやるのが

まぁいいんじゃないかなって思うし、髙松先生も実際そういうことをおっしゃる。

——それが正しいS4の使い方

正しいか正しくないかと言われると主観が関係してくるんじゃないかな。
僕はそれをお勧めしますっていう。

——分かりました。ほかに何かS4で良かったところは？

う～ん。。。
S4で良かったところ。。。
う～ん。。。

——例えば、シミュレーション結果が見やすいとか。

いや、別に。
シミュレーション結果は。

——それはなぜ？

巻き戻しできないし、ウィンドウに表示されるだけだし。
俺は使ってないけど確か、設定すれば人数の変化とか描画できるはずなんだけど、そんなのを設定するぐらいなら自分でコードを書いた方が早いし。

うん、まあ本当に基本的なシミュレーションの構造ができている。
マルチエージェントモデルとかいろんなモデルがゼロから実装されている。
というところが、まぁいいとこなんじゃないかな。

:::note

S4ではシミュレーション結果をブラウザで再生することで、巻き戻しなどもできるようです。

![人流解析](https://www.msi.co.jp/solution/img/flowAnalytics.png)

:::

——それを組み合わせれば、簡単なシミュレーションができると。

できると思う。

——ではほかに何か悪い点

さっき言ったように構造が分かりづらいとか、どこに何があるのかわからないで、マニュアルが不親切というところはまず大前提としてあって。

なんかS4自体の起動が遅いとか、プログラムを実行した時に動き始めるまで結構時間かかるとか。

——具体的にそれはどれくらいなの？例えばカップラーメンできちゃうぐらいなの？

いや、そもそもの起動自体は1分ぐらいかな。
それでも1分かかるってなるとちょっとね。
研究においては何回も何回もシミュレーションをして試行錯誤していくわけなんで、毎回起動して1分間っていうのはかなり面倒くさい。

——それは速くできない？

うん。
できない。
内部で何かをやってて。

——何かある。

でも、いいところが1つあった。OSM(OpenStreetMap)のデータをそのまま持って来れるっていう。
`.osm`とか`.geojson`ファイルとかをインポートすれば、その地図上のノードを一応読み込んで動かしてくれる。

かなり便利だなと思った機能が、OSMのキーと値を指定して、この値だけ読み込んでください。
例えば、人が歩けるマップデータだけこの`.osm`から読み込んでくださいみたいな指定すると、そこだけ切り取ってくれる。

——まぁ`.osm`っていっぱいデータが詰まっているので、全部読み込んだら大変だけど

それを抽出してくれるっていうのはかなり便利。

:::note

S4にはマップエディタも搭載されているようです。

![マップエディタ](https://www.msi.co.jp/solution/img/mapeditor.png)

:::
