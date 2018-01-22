let backendHost;
let frontendHost;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    backendHost = "http://localhost:8080";
    frontendHost = "http://localhost";
} else if (!process.env.NODE_ENV || process.env.NODE_ENV === "staging") {
    backendHost = "http://backendstagingexample.com";
    frontendHost = "http://frontendstagingexample.com";
} else {
    backendHost = "https://backendproductionexample.com";
    frontendHost = "https://frontendproductionexample.com";
}

export const API_ROOT = `${backendHost}`;
export const ROOT = `${frontendHost}`;
