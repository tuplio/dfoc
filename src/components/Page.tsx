import React from "react";
import { HeaderShadow } from "./Header";

interface PageProps {
    children: React.ReactNode;
};

const Page = ({ children }: PageProps) => {
    return (
        <div>
            <HeaderShadow />
            <div style={{ display: 'flex' }}>
                { children }
            </div>
        </div>
    );
}

export const withPage = (component: React.ReactNode) => (<Page>{ component }</Page>);
