# 超初級編

import { ShortcutTabs } from './ShortcutTabs';
import { TextEditor, Browser, ItemList, RichTextEditor, DesignTool, VSCode } from './icons';

## コピー

|意味|対象|
|:-:|:-:|
|選択したものをクリップボードに写す|アプリ全般|

<ShortcutTabs
  win={"Ctrl + C"}
  mac={"Cmd + C"}
/>

## ペースト

|意味|対象|
|:-:|:-:|
|最後に[コピー](#コピー)したものをクリップボードから写す|アプリ全般|

テキストエディタの場合、選択していた部分との置換になります。

<ShortcutTabs
  win={"Ctrl + V"}
  mac={"Cmd + V"}
/>

## カット

|意味|対象|
|:-:|:-:|
|[コピー](#コピー)し、選択していたものを削除する|アプリ全般|

<ShortcutTabs
  win={"Ctrl + X"}
  mac={"Cmd + X"}
/>

## Undo

|意味|対象|
|:-:|:-:|
|直前に行った操作を、行わなかったことにする|アプリ全般|

<ShortcutTabs
  win={"Ctrl + Z"}
  mac={"Cmd + Z"}
/>

## Redo

|意味|対象|
|:-:|:-:|
|直前の[Undo](#undo)を、行わなかったことにする|アプリ全般|

<ShortcutTabs
  win={"Ctrl + Y / Ctrl + Shift + Z"}
  mac={"Cmd + Shift + Z / Cmd + Y"}
/>

## 選択範囲の拡大

|意味|対象|
|:-:|:-:|
|選択範囲を広げたり、隣接する要素をさらに選択したりする|<TextEditor /> <ItemList />|

<ShortcutTabs
  win={"Shift + { 移動 }"}
  mac={"Shift + { 移動 }"}
/>
