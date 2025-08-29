import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import axios from "axios";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from "react";
import { Mock } from "vitest";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});

const customRender = (ui: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, options = {}) =>
    render(ui, {
        wrapper: ({ children }) => (
            <QueryClientProvider client={queryClient}>
                <div id="__root">
                    {children}
                    <div id="__modal" />
                </div>
            </QueryClientProvider>
        ),
        ...options,
    });

export * from "@testing-library/react";

export { default as userEvent } from "@testing-library/user-event";

export { customRender as render };

interface Axios {
    get: Mock;
    post: Mock;
    put: Mock;
    patch: Mock;
    delete: Mock;
}

const mockedAxios = axios as unknown as Axios;

export { mockedAxios as axios };
