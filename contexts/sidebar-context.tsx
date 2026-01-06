"use client";

import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

const SIDEBAR_STORAGE_KEY = "sidebar-collapsed-state";

type SidebarContextType = {
	isCollapsed: boolean;
	setIsCollapsed: (value: boolean) => void;
	toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [isInitialized, setIsInitialized] = useState(false);

	// Load initial state from localStorage
	useEffect(() => {
		const stored = localStorage.getItem(SIDEBAR_STORAGE_KEY);
		if (stored !== null) {
			setIsCollapsed(stored === "true");
		}
		setIsInitialized(true);
	}, []);

	// Save state to localStorage whenever it changes
	useEffect(() => {
		if (isInitialized) {
			localStorage.setItem(SIDEBAR_STORAGE_KEY, String(isCollapsed));
		}
	}, [isCollapsed, isInitialized]);

	const toggleSidebar = () => setIsCollapsed(!isCollapsed);

	return (
		<SidebarContext.Provider
			value={{ isCollapsed, setIsCollapsed, toggleSidebar }}
		>
			{children}
		</SidebarContext.Provider>
	);
}

export function useSidebarContext() {
	const context = useContext(SidebarContext);
	if (!context) {
		throw new Error("useSidebarContext must be used within SidebarProvider");
	}
	return context;
}
