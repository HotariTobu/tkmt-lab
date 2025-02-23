import { CSSProperties } from 'react';
import textEditorImage from './img/text-editor.png';
import ChromeSvg from './img/chrome.svg';
import ItemListSvg from './img/item-list.svg';
import GoogleDocsSvg from './img/google-docs.svg';
import GoogleSlidesSvg from './img/google-slides.svg';
import VSCodeSvg from './img/vscode.svg';

const style = {
    maxWidth: '2rem',
    maxHeight: '2rem',
} satisfies CSSProperties

export const TextEditor = () => (
    <img src={textEditorImage} alt="Text Editor" style={style} />
)

export const Browser = () => (
    <ChromeSvg style={style} />
)

export const ItemList = () => (
    <ItemListSvg style={style} />
)

export const RichTextEditor = () => (
    <GoogleDocsSvg style={style} />
)

export const DesignTool = () => (
    <GoogleSlidesSvg style={style} />
)

export const VSCode = () => (
    <VSCodeSvg style={style} />
)
