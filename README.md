# TalkFlow

AI-powered, voice-first mock interviews with auto-generated questions, live transcripts, and structured feedback that helps candidates practice like a real conversation.

## Overview
TalkFlow connects a multi-modal voice agent (powered by Vapi, Deepgram, and ElevenLabs) with a Next.js dashboard and Firebase data layer. Candidates log in, generate role-specific question sets with Google Gemini, speak through the interview in real time, and immediately receive a rubric-based performance review. All interviews, transcripts, and feedback are persisted so users can iterate on their preparation.

## Feature Highlights
- **Conversational AI interviewer** – Real-time WebRTC call flow via Vapi with natural speech detection (Deepgram) and synthetic voice playback (ElevenLabs).
- **Guided interview generator** – Gemini Flash 2.0 crafts technical/behavioral questions based on role, level, tech stack, and desired difficulty.
- **Personal interview hub** – Authenticated dashboard lists past sessions, newly generated interviews, and community templates the user can take next.
- **Live transcript ticker** – Finalized agent/user utterances stream into the UI so users can review what was said even while the call is active.
- **Automated scoring & feedback** – After each call, Gemini analyzes the transcript and stores total score, per-category comments, strengths, and growth areas.
- **Firebase-backed auth & storage** – Email/password auth with Firebase Authentication plus Firestore collections for interviews and feedback.

## Tech Stack
- **Frontend:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Radix UI, Lucide, Sonner.
- **Voice & AI:** Vapi Web SDK, Deepgram (transcription), ElevenLabs (voice), Google Gemini via `@ai-sdk/google`.
- **Data & Auth:** Firebase Authentication (client SDK), Firebase Admin SDK for Firestore access.
- **Forms & Validation:** React Hook Form, Zod, `@hookform/resolvers`.

## Getting Started
### Prerequisites
- Node.js 20+ and npm (or pnpm/yarn) installed locally.
- Firebase project with Authentication and Firestore enabled.
- Vapi workspace with a published workflow and web token.
- Google AI Studio API key for Gemini models.

### Installation
1. Clone the repository and install dependencies:
   ```bash
   git clone <repo-url>
   cd talkflow
   npm install
   ```
2. Create a `.env.local` file (or copy from `.env.local.example`) and populate the environment variables listed below.

### Local development
- Start the dev server: `npm run dev`
- The app runs at `http://localhost:3000`.
- Optional sanity checks:
  - `npm run lint`
  - `npm run build && npm start` to simulate production.

## Required Environment Variables / API Keys
Add the following to `.env.local` (never commit real secrets):

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_VAPI_WEB_TOKEN` | Public web token from Vapi dashboard used by the browser SDK. |
| `NEXT_PUBLIC_VAPI_WORKFLOW_ID` | Workflow ID that defines the interviewer assistant. |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase client API key. |
| `NEXT_PUBLIC_FIREBASE_CLIENT_AUTH_DOMAIN` | Firebase auth domain (e.g., `your-app.firebaseapp.com`). |
| `NEXT_PUBLIC_FIREBASE_CLIENT_PROJECT_ID` | Firebase project ID for the client SDK. |
| `NEXT_PUBLIC_FIREBASE_CLIENT_STORAGE_BUCKET` | Storage bucket URL (used by Firebase SDK even if storage is optional). |
| `NEXT_PUBLIC_FIREBASE_CLIENT_MESSAGING_SENDER` | Firebase messaging sender ID. |
| `NEXT_PUBLIC_FIREBASE_CLIENT_APP_ID` | Firebase app ID. |
| `NEXT_PUBLIC_FIREBASE_CLIENT_MEASUREMENT_ID` | Optional analytics ID; required if analytics is enabled. |
| `FIREBASE_PROJECT_ID` | Server-side Firestore project ID for the Admin SDK. |
| `FIREBASE_CLIENT_EMAIL` | Service account client email for Firebase Admin. |
| `FIREBASE_PRIVATE_KEY` | Multiline private key for the service account (escape `\n` as actual newlines). |
| `GOOGLE_GENERATIVE_AI_API_KEY` | Google AI Studio key used by `@ai-sdk/google` to call Gemini Flash models. |

> Tip: when pasting the Firebase private key into `.env.local`, wrap it in quotes or replace literal newlines with `\n` so Next.js can parse it.

Once the environment is configured, run `npm run dev`, create an account through the UI, and start generating interviews with TalkFlow.
