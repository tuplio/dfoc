import React from "react";
import { HeaderShadow } from "./Header";
import { useTheme } from "@mui/material";

interface PageProps {
    children: React.ReactNode;
};

const Page = ({ children }: PageProps) => {
    const theme = useTheme();
    return (
        <div>
            <HeaderShadow />
            <div style={{
                display: 'flex', 
                height: 'calc(100vh - var(--HEADER_HEIGHT))',
                overflowY: 'scroll',
                overflowX: 'hidden',
                backgroundColor: `${theme.palette.secondary.light}`,
            }}>
                { children }
            </div>
        </div>
    );
}

export const withPage = (component: React.ReactNode) => (<Page>{ component }</Page>);
