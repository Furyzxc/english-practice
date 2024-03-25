import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { appStore } from "@/app/appStore.ts";
import { App } from "@/app/app.tsx";

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<ReduxProvider store={appStore}>
			<App />
		</ReduxProvider>
	</React.StrictMode>
)
