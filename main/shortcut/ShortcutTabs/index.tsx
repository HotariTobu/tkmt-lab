import { PropsWithChildren } from 'react';
import { OSTabsProps, OSTabs } from '@site/src/components/OSTabs';

import styles from './styles.module.css';

const itemDelimiter = ' / ';
const keyDelimiter = ' + ';
const placeholderPattern = /{.+}/

export const ShortcutTabs = (props: OSTabsProps) => (
    <OSTabs
        win={<Tab>{props.win}</Tab>}
        mac={<Tab>{props.mac}</Tab>}
    />
)

const Tab = (props: PropsWithChildren) => {
    if (typeof props.children === 'string') {
        return <List shortcut={props.children} />
    }
    else {
        return props.children
    }
}

const List = (props: {
    shortcut: string,
}) => (
    <div className={styles.shortcutList}>
        {props.shortcut.split(itemDelimiter).map(keySet => (
            <div className={styles.item} key={keySet}>
                {keySet.split(keyDelimiter).map(key => (
                    <div className={styles.key} key={key}>
                        <Label text={key} />
                        <div>+</div>
                    </div>
                ))}
            </div>
        ))}
    </div>
)

const Label = (props: {
    text: string,
}) => <>
        {placeholderPattern.test(props.text) && (
            <div />
        )}
        <div>{props.text}</div>
    </>
