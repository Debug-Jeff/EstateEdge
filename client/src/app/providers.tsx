"use client";

// Specific for providers not redux in general, but can be used for other providers in the future if needed

import StoreProvider from "@/state/redux";

const Providers = ({ children } : { children: React.ReactNode }) => {
    return (
        <StoreProvider>
            {children}
        </StoreProvider>
    )
}

export default Providers;