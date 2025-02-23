# 初級編

import { ShortcutTabs } from '../ShortcutTabs';
import { TextEditor, Browser, ItemList, RichTextEditor, DesignTool, VSCode } from '../icons';

## 履歴ペースト

|意味|対象|
|:-:|:-:|
|コピーしたものの履歴の中から選んでペーストする|アプリ全般|

<ShortcutTabs
  win={"Win + V"}
  mac={<div>macOSには標準でクリップボード履歴のような機能はありません。<a href="https://apps.apple.com/app/id993841014">CopyLess</a>のようなアプリを利用しましょう。</div>}
/>

## 次にフォーカス

|意味|対象|
|:-:|:-:|
|次の入力ボックスやボタンなどにフォーカスする|アプリ全般|

<ShortcutTabs
  win={"Tab"}
  mac={"Tab"}
/>

![Next Focus](./img/next-focus.gif)

## 前にフォーカス

|意味|対象|
|:-:|:-:|
|前の入力ボックスやボタンなどにフォーカスする|アプリ全般|

<ShortcutTabs
  win={"Shift + Tab"}
  mac={"Shift + Tab"}
/>

![Prev Focus](./img/prev-focus.gif)

## 押す

|意味|対象|
|:-:|:-:|
|フォーカスしているボタンを押す|アプリ全般|

<ShortcutTabs
  win={"Enter / Space"}
  mac={"Enter / Space"}
/>

## キャンセル

|意味|対象|
|:-:|:-:|
|行おうとしている操作をキャンセルする|アプリ全般|

<ShortcutTabs
  win={"Esc"}
  mac={"Esc"}
/>

## 全選択

|意味|対象|
|:-:|:-:|
|選択できるものを全て選択する|アプリ全般|

<ShortcutTabs
  win={"Ctrl + A"}
  mac={"Cmd + A"}
/>

## 検索

|意味|対象|
|:-:|:-:|
|検索ボックスにフォーカスする|アプリ全般|

<ShortcutTabs
  win={"Ctrl + F"}
  mac={"Cmd + F"}
/>

## 次を検索

|意味|対象|
|:-:|:-:|
|検索でマッチした次の箇所を選択する|アプリ全般|

<ShortcutTabs
  win={"Enter / F3 / Ctrl + G"}
  mac={"Enter / Cmd + G"}
/>

## 前を検索

|意味|対象|
|:-:|:-:|
|検索でマッチした前の箇所を選択する|アプリ全般|

<ShortcutTabs
  win={"Shift + Enter / Shift + F3 / Ctrl + Shift + G"}
  mac={"Shift + Enter / Cmd + Shift + G"}
/>

## ドロップコピー

|意味|対象|
|:-:|:-:|
|ドラッグアンドドロップで移動ではなくコピーをする|アプリ全般|

<ShortcutTabs
  win={"Ctrl + { ドロップ }"}
  mac={"Opt + { ドロップ }"}
/>

## 削除

|意味|対象|
|:-:|:-:|
|選択したものを削除する|アプリ全般|

<ShortcutTabs
  win={"Backspace / Del"}
  mac={"Backspace / Del / Cmd + Backspace"}
/>

## 上書き保存

|意味|対象|
|:-:|:-:|
|暗黙的に指定されているファイルにデータを書き込む|アプリ全般|

<details>
<summary>自動保存を設定しているから使わない？</summary>

![アーニャのフッ](https://alu-web-herokuapp-com.global.ssl.fastly.net/cropped_images/5BIiaFcXKLhaOW9hjrtmQJCmAnb2/c_1571252147895)
</details>

<ShortcutTabs
  win={"Ctrl + S"}
  mac={"Cmd + S"}
/>

## 別名で保存

|意味|対象|
|:-:|:-:|
|ファイルを指定してデータを書き込む|アプリ全般|

<ShortcutTabs
  win={"Ctrl + Shift + S"}
  mac={"Cmd + Shift + S"}
/>

## 行頭へ移動

|意味|対象|
|:-:|:-:|
|カーソルを行頭へ移動する|<TextEditor />|

<ShortcutTabs
  win={"Home"}
  mac={"Cmd + ◀"}
/>

## 行末へ移動

|意味|対象|
|:-:|:-:|
|カーソルを行末へ移動する|<TextEditor />|

<ShortcutTabs
  win={"End"}
  mac={"Cmd + ▶"}
/>

## 先頭へ移動

|意味|対象|
|:-:|:-:|
|カーソルをファイルの先頭へ移動する|<TextEditor />|

<ShortcutTabs
  win={"Ctrl + Home"}
  mac={"Cmd + ▲"}
/>

## 末尾へ移動

|意味|対象|
|:-:|:-:|
|カーソルをファイルの末尾へ移動する|<TextEditor />|

<ShortcutTabs
  win={"Ctrl + End"}
  mac={"Cmd + ▼"}
/>

## 前の区切りへ移動

|意味|対象|
|:-:|:-:|
|カーソルを前の区切りへ移動する|<TextEditor />|

VSCodeの場合、[Japanese Word Handler](https://marketplace.visualstudio.com/items?itemName=sgryjp.japanese-word-handler)を使うと日本語の区切りができます。

<ShortcutTabs
  win={"Ctrl + ◀"}
  mac={"Opt + ◀"}
/>

## 次の区切りへ移動

|意味|対象|
|:-:|:-:|
|カーソルを次の区切りへ移動する|<TextEditor />|

VSCodeの場合、[Japanese Word Handler](https://marketplace.visualstudio.com/items?itemName=sgryjp.japanese-word-handler)を使うと日本語の区切りができます。

<ShortcutTabs
  win={"Ctrl + ▶"}
  mac={"Opt + ▶"}
/>

## 置換

|意味|対象|
|:-:|:-:|
|置換ボックスにフォーカスする|<TextEditor />|

<ShortcutTabs
  win={"Ctrl + H"}
  mac={"Opt + Cmd + F"}
/>

## 前の区切りまでを削除

|意味|対象|
|:-:|:-:|
|カーソルから前の区切りまでを削除する|<TextEditor />|

VSCodeの場合、[Japanese Word Handler](https://marketplace.visualstudio.com/items?itemName=sgryjp.japanese-word-handler)を使うと日本語の区切りができます。

<ShortcutTabs
  win={"Ctrl + Backspace"}
  mac={"Opt + Backspace"}
/>

## 次の区切りまでを削除

|意味|対象|
|:-:|:-:|
|カーソルから次の区切りまでを削除する|<TextEditor />|

VSCodeの場合、[Japanese Word Handler](https://marketplace.visualstudio.com/items?itemName=sgryjp.japanese-word-handler)を使うと日本語の区切りができます。

<ShortcutTabs
  win={"Ctrl + Del"}
  mac={"Opt + Fn + Backspace"}
/>

## リネーム

|意味|対象|
|:-:|:-:|
|選択している要素の名前を変更する|<ItemList />|

<ShortcutTabs
  win={"F2"}
  mac={"Enter"}
/>

## 個別追加選択

|意味|対象|
|:-:|:-:|
|要素をさらに個別に選択する|<ItemList />|

<ShortcutTabs
  win={"Ctrl + { クリック }"}
  mac={"Cmd + { クリック }"}
/>

## 太字

|意味|対象|
|:-:|:-:|
|選択している部分の**太字**を切り替える|<RichTextEditor />|

<ShortcutTabs
  win={"Ctrl + B"}
  mac={"Cmd + B"}
/>

## 斜体

|意味|対象|
|:-:|:-:|
|選択している部分の*斜体*を切り替える|<RichTextEditor />|

<ShortcutTabs
  win={"Ctrl + I"}
  mac={"Cmd + I"}
/>

## 下線

|意味|対象|
|:-:|:-:|
|選択している部分の<u>下線</u>を切り替える|<RichTextEditor />|

<ShortcutTabs
  win={"Ctrl + U"}
  mac={"Cmd + U"}
/>

## プレーンペースト

|意味|対象|
|:-:|:-:|
|文字列のみペーストする|<RichTextEditor />|

<ShortcutTabs
  win={"Ctrl + Shift + V"}
  mac={"Cmd + Shift + V"}
/>

## 追加選択

|意味|対象|
|:-:|:-:|
|要素をさらに選択する|<DesignTool />|

<ShortcutTabs
  win={"Shift + { クリック }"}
  mac={"Shift + { クリック }"}
/>

## 複製

|意味|対象|
|:-:|:-:|
|選択している要素を複製する|<DesignTool />|

<ShortcutTabs
  win={"Ctrl + D"}
  mac={"Cmd + D"}
/>
