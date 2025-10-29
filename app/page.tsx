import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CalendarCheck,
  Gauge,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import heroIllustration from "@/public/robot.png";
import interview from "../public/interview_2.jpg";
import logo from "../public/logo_1.png";
import SignOutButton from "@/components/SignOutButton";
import { isAuthenticate } from "@/lib/actions/auth.action";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#faq", label: "FAQ" },
];

const features = [
  {
    icon: <BrainCircuit className="size-6 text-primary-200" />,
    title: "Adaptive Interview Coach",
    description:
      "Personalized question loops that adapt to your role, seniority, and skill focus in real time.",
  },
  {
    icon: <MessageCircle className="size-6 text-primary-200" />,
    title: "Instant Voice Feedback",
    description:
      "Receive instant coaching on tone, pace, and clarity so you can iterate faster after every session.",
  },
  {
    icon: <ShieldCheck className="size-6 text-primary-200" />,
    title: "Hiring Team Ready",
    description:
      "Export structured summaries and scoring rubrics to help hiring teams shortlist confident candidates.",
  },
];

const metrics = [
  { label: "Interview Scenarios", value: "50+" },
  { label: "Avg. Confidence Boost", value: "92%" },
  { label: "Feedbacks", value: "5 Different" },
];

const useCases = [
  {
    icon: <Bot className="size-6 text-primary-200" />,
    title: "Mock Recruiter Calls",
    description:
      "Warm up with recruiter-style screening conversations and sharpen your story in minutes.",
  },
  {
    icon: <CalendarCheck className="size-6 text-primary-200" />,
    title: "High-Stakes Prep",
    description:
      "Simulate panel interviews with domain-specific prompts and calibrate your responses per interviewer.",
  },
  {
    icon: <Gauge className="size-6 text-primary-200" />,
    title: "Skill Benchmarking",
    description:
      "Track progress over time with calibrated scoring, transcripts, and highlights you can revisit anytime.",
  },
];

const faqs = [
  {
    question: "Who is TalkFlow for?",
    answer:
      "TalkFlow helps job seekers, hiring teams, and bootcamps streamline interview practice with AI-powered voice simulations.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No installation required. Launch practice sessions directly in the browser and get instant feedback.",
  },
  {
    question: "Can teams collaborate?",
    answer:
      "Yes. Invite teammates, assign interview flows, and review unified feedback dashboards across candidates.",
  },
];

export default async function LandingPage() {
  const isUserAuthenticated = await isAuthenticate();

  return (
    <main className="w-full">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 py-10 md:px-12 lg:px-16">
        <header className="flex flex-col gap-16">
          <nav className="flex items-center justify-between gap-6 rounded-full border border-white/10 bg-black/20 px-5 py-3 backdrop-blur">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold text-white"
            >
              <span className="tracking-tight">TalkFlow</span>
              <span className="flex size-8 items-center justify-center">
                <Image src={logo} alt="logo" width={40} height={40} />
              </span>
            </Link>
            <div className="hidden items-center gap-6 text-sm text-light-100 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3">
              {isUserAuthenticated ? (
                <>
                  <SignOutButton
                    variant="outline"
                    className="hidden border-white/30 text-white hover:bg-white/10 md:inline-flex"
                  />
                  <SignOutButton
                    variant="ghost"
                    className="md:hidden text-white hover:bg-white/10"
                  />
                </>
              ) : (
                <>
                  <Button
                    asChild
                    variant="outline"
                    className="hidden border-white/30 text-white hover:bg-white/10 md:inline-flex"
                  >
                    <Link href="/sign-in">Sign In</Link>
                  </Button>
                  <Button asChild className="md:hidden" variant="ghost">
                    <Link href="/sign-in">
                      Sign In
                      <ArrowRight className="ml-1 size-4" />
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </nav>

          <div className="flex flex-col items-start gap-10 text-white md:flex-row md:items-center md:justify-between">
            <div className="flex max-w-xl flex-col gap-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-200/40 bg-primary-200/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-200">
                Real-Time AI Interview Partner
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-primary-200 via-light-400 to-white bg-clip-text text-transparent">
                  AI-powered practice for confident interviews
                </span>{" "}
                that sound like the real thing.
              </h1>
              <p className="text-base text-light-100 sm:text-lg">
                TalkFlow&apos;s voice agent helps you rehearse as if you were on
                a live call, gives actionable coaching, and keeps your progress
                organized in one place.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                {isUserAuthenticated ? (
                  <Button
                    asChild
                    className="bg-primary-200 text-black hover:bg-primary-100"
                  >
                    <Link href="/interviews">
                      Explore Interviews
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                ) : (
                  <>
                    <Button
                      asChild
                      className="bg-primary-200 text-black hover:bg-primary-100"
                    >
                      <Link href="/sign-up">
                        Get Started
                        <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10"
                    >
                      <Link href="/interviews">Explore Interviews</Link>
                    </Button>
                  </>
                )}
              </div>
              <div className="grid grid-cols-3 gap-4 pt-6 sm:pt-8">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center"
                  >
                    <p className="text-2xl font-semibold text-white">
                      {metric.value}
                    </p>
                    <p className="text-xs uppercase tracking-widest text-light-100">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm shrink-0 md:max-w-md">
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-primary-200/20 via-light-400/10 to-transparent blur-3xl" />
              <div className="rounded-3xl border border-white/10 bg-[#12151F]/70 p-6 backdrop-blur">
                <div className="flex items-center justify-between text-sm text-light-100">
                  <span className="flex items-center gap-2">
                    <Sparkles className="size-4 text-primary-200" />
                    Smart Coach
                  </span>
                  <span className="rounded-full border border-white/20 px-3 py-0.5 text-xs">
                    Live
                  </span>
                </div>
                <Image
                  src={interview}
                  alt="TalkFlow AI assistant"
                  className="mt-6 rounded-2xl border border-white/10 bg-black/40 object-cover"
                  priority
                />
                <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-light-100">
                  <div className="flex items-start gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full border border-primary-200/30 bg-primary-200/10">
                      <Bot className="size-5 text-primary-200" />
                    </div>
                    <p>
                      “Let&apos;s rehearse the opening to your product manager
                      interview. Imagine the recruiter asks why you&apos;re
                      excited about their roadmap.”
                    </p>
                  </div>
                  <div className="rounded-xl border border-light-400/20 bg-light-400/10 p-3 text-white">
                    <p>
                      “I&apos;m excited because your roadmap bridges customer
                      listening with experimentation. The AI assistant empowers
                      immediate feedback so teams can iterate faster.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="features"
          className="flex flex-col gap-10 rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-10"
        >
          <div className="flex flex-col gap-4 text-center text-white">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-light-100">
              Built For Focus
            </span>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Everything you need to walk into interviews ready
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-light-100 sm:text-base">
              Practice, review, and share interview sessions without leaving
              your browser. TalkFlow keeps every transcript, rubric, and
              coaching moment in one collaborative workspace.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-left text-light-100"
              >
                <div className="flex size-12 items-center justify-center rounded-full border border-primary-200/40 bg-primary-200/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="use-cases"
          className="grid gap-8 text-white md:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-10">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Unlock confident stories for every interview format
            </h2>
            <p className="text-sm text-light-100 sm:text-base">
              Design mock interviews with real prompts from top companies and
              track how your answers evolve. Share progress with mentors or
              teammates instantly.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex size-11 items-center justify-center rounded-full border border-primary-200/40 bg-primary-200/10">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-light-100">{item.description}</p>
                </div>
              ))}
            </div>
            <Button
              asChild
              className="self-start bg-primary-200 text-black hover:bg-primary-100"
            >
              <Link href="/sign-up">
                Create free account
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-black/30 p-6 sm:p-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-light-100">
                From our users
              </span>
              <p className="mt-4 text-lg text-light-100">
                “The voice feedback is uncanny. After three sessions with
                TalkFlow, our bootcamp cohort doubled their onsite invite rate.”
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-light-100">
              <div className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10">
                <Sparkles className="size-5 text-primary-200" />
              </div>
              <div>
                <p className="text-white">Monica R., Program Director</p>
                <p>Product Launch Academy</p>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-light-100">
                  Fast track
                </p>
                <p className="text-xl font-semibold text-white">
                  Team onboarding in under 5 minutes
                </p>
              </div>
              <ArrowRight className="size-6 text-primary-200" />
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="grid gap-8 rounded-3xl border border-white/10 bg-black/30 p-6 text-white sm:p-10 md:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-light-100">
              Questions
            </span>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Answers before you jump in
            </h2>
            <p className="text-sm text-light-100 sm:text-base">
              Need clarity on how TalkFlow works? Here are the topics teams ask
              about most often. We are one message away if you need anything
              else.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-lg font-semibold text-white">
                  {faq.question}
                </p>
                <p className="mt-2 text-sm text-light-100">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6 rounded-3xl border border-primary-200/40 bg-gradient-to-r from-[#1E2333] via-[#1A1E29] to-[#101321] p-8 text-white sm:p-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Ready to sound like your best self in every interview?
            </h2>
            <p className="mt-4 text-sm text-light-100 sm:text-base">
              Join TalkFlow and coach with an AI partner that understands your
              story, voice, and goals. Teams can launch in under five minutes.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-primary-200 text-black hover:bg-primary-100">
              <Link href="/sign-up">
                Start practicing
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <a href="mailto:hello@talkflow.ai?subject=TalkFlow%20Demo%20Request">
                Schedule a demo
              </a>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
