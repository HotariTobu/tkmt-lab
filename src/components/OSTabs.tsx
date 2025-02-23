import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { ReactNode } from 'react';

export type OSTabsProps = {
    win: ReactNode,
    mac: ReactNode,
}

export const OSTabs = (props: OSTabsProps) => (
    <Tabs queryString="os">
        <TabItem value="win" label="Windows">{props.win}</TabItem>
        <TabItem value="mac" label="macOS">{props.mac}</TabItem>
    </Tabs>
)
