import { dev } from "$app/env";

export class Env {
  public static getApiBaseUri(): string {
    console.log(`Environment: ${dev ? "Dev" : "Prod"}`);
    if (dev) {
      return "http://127.0.0.1:8000";
    } else {
      return `https://chat-app-backend.onrender.com`;
    }
  }
}
