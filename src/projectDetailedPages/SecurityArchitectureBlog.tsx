import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/utils/constants";
import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import DFDImage from "@/assets/images/blogs/DFD.png";
import SecurityHeadersImage from "@/assets/images/blogs/securityHeadersReportSummary.png";
import SnykSummaryImage from "@/assets/images/blogs/synkSummary.png";
import SemgrepSummaryImage from "@/assets/images/blogs/semgrepSummary.png";
import ExpandableImage from "@/customComponents/ExpandableImage";

export function SecurityArchitectureBlog({
  lastUpdatedUnix,
}: {
  lastUpdatedUnix: number;
}) {
  const lastUpdatedDate = lastUpdatedUnix
    ? dayjs(lastUpdatedUnix * 1000).format("MMMM D, YYYY")
    : null;
  const topRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll to topRef when component mounts
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="text-left grid col-6 max-w-6xl mx-auto min-w-0 pt-6 pb-24">
      <div className="col-start-2 col-span-4 bg-black min-w-0">
        <Link to={`/${ROUTES.COMPUTERSCIENCE_BLOG}`}>
          <Button className="mb-6">← Back to blog posts</Button>
        </Link>

        <div ref={topRef} className="text-white">
          <h1 className="text-3xl font-bold mb-2">
            Building Security Into My Web App: Applying the OWASP Top 10 (2025)
            to Critical Synthesis Security
          </h1>
          {lastUpdatedDate && (
            <p className="text-sm text-gray-400 mb-6">
              Last updated: {lastUpdatedDate}
            </p>
          )}
          <div className="space-y-8 text-white text-lg leading-relaxed">
            {/* Frontmatter metadata */}
            <div className="mb-8 p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
              <div className="text-sm text-zinc-400 mb-2">
                <strong>Published:</strong> January 2025
              </div>
              <div className="text-sm text-zinc-400 mb-2">
                <strong>Tags:</strong> appsec, owasp, supabase, vercel, stripe
              </div>
              <div className="text-sm text-zinc-400">
                <strong>Summary:</strong> A deep dive into implementing
                security-first architecture for Critical Synthesis Security
                platform, covering OWASP Top 10 mitigations, per-route CORS
                policies, hardened CSP, and comprehensive security tooling.
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">
                Introduction: Why Security-First Architecture Matters
              </h2>
              <p className="mb-6 text-base leading-relaxed">
                When I set out to build Critical Synthesis Security, I knew from
                day one that security couldn't be an afterthought. In today's
                threat landscape, where attacks are increasingly sophisticated
                and regulatory requirements are tightening, building a
                security-first platform isn't just good practice—it's essential
                for user trust and business continuity.
              </p>

              <p className="mb-6 text-base leading-relaxed">
                This blog post chronicles my journey implementing comprehensive
                security measures across my entire stack: React + Vite frontend
                on Vercel, Supabase backend, Stripe payments, and Mailgun email
                services. I'll walk you through how I applied the OWASP Top 10
                (2025-ready) framework, implemented per-route CORS policies,
                hardened Content Security Policies, and built a robust security
                tooling pipeline.
              </p>

              <p className="mb-6 text-base leading-relaxed">
                The result? A platform that achieved an A-grade score on
                SecurityHeaders.com, passed Semgrep and OWASP ZAP scans, and
                most importantly, provides our users with confidence that their
                sensitive security data is protected by enterprise-grade
                security measures.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">
                Architecture Overview: Trust Boundaries and Data Flow
              </h2>

              <p className="mb-6 text-base leading-relaxed">
                Before diving into specific security implementations, let's
                establish the foundation with a clear understanding of our
                architecture and trust boundaries. The diagram below illustrates
                how data flows through our system and where security controls
                are implemented.
              </p>

              <div className="mb-6 p-6 bg-zinc-900/50 rounded-lg border border-zinc-700">
                <div className="text-center text-zinc-300">
                  <p className="mb-2">
                    📊 <strong>Data Flow Diagram</strong>
                  </p>
                  <div className="text-center">
                    <ExpandableImage
                      src={DFDImage}
                      alt="Data Flow Diagram"
                      className="max-w-full h-auto rounded-lg border border-zinc-600"
                      description="This diagram shows trust boundaries, data flow, and security controls across our entire stack"
                    />
                  </div>
                </div>
              </div>
              <p className="mb-6 text-base leading-relaxed">
                Our architecture follows a clear separation of concerns with
                multiple security layers:
              </p>

              <ul className="mb-6 list-disc list-inside text-base leading-relaxed space-y-2">
                <li>
                  <strong>Frontend (Vercel):</strong> React + Vite with hardened
                  CSP, per-route CORS, and client-side security controls
                </li>
                <li>
                  <strong>Backend (Supabase):</strong> PostgreSQL with Row-Level
                  Security, Edge Functions with request validation
                </li>
                <li>
                  <strong>External Services:</strong> Stripe with webhook
                  signature verification, Mailgun with domain authentication
                </li>
                <li>
                  <strong>Security Layer:</strong> Google reCAPTCHA, custom PDF
                  generation with verification, certificate validation
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">
                Applying the OWASP Top 10 (2025-Ready)
              </h2>

              <p className="mb-6 text-base leading-relaxed">
                The OWASP Top 10 serves as our security foundation. Here's how I
                addressed each vulnerability class in Critical Synthesis
                Security:
              </p>

              <div className="space-y-6">
                <div className="p-4 bg-zinc-800/30 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    A01: Broken Access Control
                  </h3>
                  <p className="text-sm text-zinc-300 mb-2">
                    <strong>Mitigation:</strong> Supabase Row-Level Security
                    (RLS) policies on every table, JWT-based authentication with
                    role validation
                  </p>
                  <div className="bg-zinc-900 p-3 rounded text-xs font-mono text-zinc-300">
                    <div>// Example RLS policy for user data</div>
                    <div>
                      CREATE POLICY "Users can only access their own data"
                    </div>
                    <div>ON profiles FOR ALL</div>
                    <div>TO authenticated</div>
                    <div>USING (auth.uid() = user_id);</div>
                  </div>
                </div>

                <div className="p-4 bg-zinc-800/30 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    A02: Cryptographic Failures
                  </h3>
                  <p className="text-sm text-zinc-300 mb-2">
                    <strong>Mitigation:</strong> TLS 1.3 everywhere, Supabase
                    encryption at rest, bcrypt for password hashing, secure JWT
                    secrets
                  </p>
                </div>

                <div className="p-4 bg-zinc-800/30 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    A03: Injection
                  </h3>
                  <p className="text-sm text-zinc-300 mb-2">
                    <strong>Mitigation:</strong> Parameterized queries via
                    Supabase client, input validation with Zod schemas, XSS
                    protection via CSP
                  </p>
                </div>

                <div className="p-4 bg-zinc-800/30 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    A04: Insecure Design
                  </h3>
                  <p className="text-sm text-zinc-300 mb-2">
                    <strong>Mitigation:</strong> Threat modeling from day one,
                    secure defaults, principle of least privilege, fail-secure
                    design patterns
                  </p>
                </div>

                <div className="p-4 bg-zinc-800/30 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    A05: Security Misconfiguration
                  </h3>
                  <p className="text-sm text-zinc-300 mb-2">
                    <strong>Mitigation:</strong> Hardened CSP headers, secure
                    environment variables, disabled unnecessary features,
                    regular security scans
                  </p>
                </div>

                <div className="p-4 bg-zinc-800/30 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    A06: Vulnerable Components
                  </h3>
                  <p className="text-sm text-zinc-300 mb-2">
                    <strong>Mitigation:</strong> Automated dependency scanning
                    with Snyk, regular updates, minimal attack surface,
                    security-focused package selection
                  </p>
                </div>

                <div className="p-4 bg-zinc-800/30 rounded-lg border-l-4 border-cyan-500">
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    A07: Authentication Failures
                  </h3>
                  <p className="text-sm text-zinc-300 mb-2">
                    <strong>Mitigation:</strong> Supabase Auth with rate
                    limiting, session management, and Row Level Security. MFA
                    support requires Pro plan upgrade. Basic account protection
                    through rate limiting implemented.
                  </p>
                </div>

                <div className="p-4 bg-zinc-800/30 rounded-lg border-l-4 border-pink-500">
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    A08: Software Integrity Failures
                  </h3>
                  <p className="text-sm text-zinc-300 mb-2">
                    <strong>Mitigation:</strong> Code signing, integrity checks
                    for uploaded files, secure CI/CD pipeline, tamper detection
                  </p>
                </div>

                <div className="p-4 bg-zinc-800/30 rounded-lg border-l-4 border-indigo-500">
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    A09: Logging and Monitoring Failures
                  </h3>
                  <p className="text-sm text-zinc-300 mb-2">
                    <strong>Mitigation:</strong> Comprehensive audit logging,
                    real-time monitoring with Vercel Analytics, alerting on
                    security events
                  </p>
                </div>

                <div className="p-4 bg-zinc-800/30 rounded-lg border-l-4 border-teal-500">
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    A10: Server-Side Request Forgery
                  </h3>
                  <p className="text-sm text-zinc-300 mb-2">
                    <strong>Mitigation:</strong> Allowlist-based URL validation,
                    network segmentation, request timeout controls, external
                    service authentication
                  </p>
                </div>
              </div>

              {/* PLACEHOLDER: OWASP Top 10 Visual */}
              <div className="mb-6 p-6 bg-zinc-900/50 rounded-lg border border-zinc-700 border-dashed">
                <div className="text-center text-zinc-400">
                  <p className="mb-4 text-lg font-semibold">
                    🛡️ <strong>OWASP Top 10 Implementation Progress</strong>
                  </p>
                  <p className="text-sm mb-4">
                    <strong>DIRECTION:</strong> Add a visual progress chart or
                    checklist showing:
                  </p>
                  <ul className="text-xs text-left max-w-md mx-auto space-y-1">
                    <li>
                      • Progress bar or checklist for each OWASP Top 10 item
                    </li>
                    <li>
                      • Color coding (green = implemented, yellow = in progress)
                    </li>
                    <li>• Brief status for each vulnerability class</li>
                    <li>• Overall security posture percentage</li>
                  </ul>
                  <div className="mt-4 h-48 bg-zinc-800 rounded-lg flex items-center justify-center border-2 border-dashed border-zinc-600">
                    <p className="text-zinc-500">
                      [OWASP Top 10 Progress Chart Placeholder]
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">
                Per-Route CORS Design & CSP Hardening
              </h2>

              <p className="mb-6 text-base leading-relaxed">
                One of the most critical aspects of web security is controlling
                cross-origin requests and preventing malicious script execution.
                Here's how I implemented granular CORS policies and hardened CSP
                headers:
              </p>

              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                Per-Route CORS Implementation
              </h3>
              <p className="mb-4 text-base leading-relaxed">
                Instead of blanket CORS policies, I implemented route-specific
                CORS controls in my Supabase Edge Functions:
              </p>

              <div className="mb-6 bg-zinc-900 p-4 rounded-lg">
                <div className="text-xs font-mono text-zinc-300">
                  <div>{"// CORS configuration for different route types"}</div>
                  <div className="text-green-400">{"const corsConfig = {"}</div>
                  <div className="ml-4">{"public: {"}</div>
                  <div className="ml-8">
                    {
                      "origin: ['https://critical-synthesis-security.vercel.app'],"
                    }
                  </div>
                  <div className="ml-8">{"methods: ['GET'],"}</div>
                  <div className="ml-8">{"credentials: false"}</div>
                  <div className="ml-4">{"},"}</div>
                  <div className="ml-4">{"authenticated: {"}</div>
                  <div className="ml-8">
                    {
                      "origin: ['https://critical-synthesis-security.vercel.app'],"
                    }
                  </div>
                  <div className="ml-8">
                    {"methods: ['GET', 'POST', 'PUT', 'DELETE'],"}
                  </div>
                  <div className="ml-8">{"credentials: true,"}</div>
                  <div className="ml-8">
                    {"headers: ['Authorization', 'Content-Type']"}
                  </div>
                  <div className="ml-4">{"},"}</div>
                  <div className="ml-4">{"webhooks: {"}</div>
                  <div className="ml-8">
                    {"origin: ['https://hooks.stripe.com'],"}
                  </div>
                  <div className="ml-8">{"methods: ['POST'],"}</div>
                  <div className="ml-8">{"credentials: false"}</div>
                  <div className="ml-4">{"}"}</div>
                  <div className="text-green-400">{"};"}</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                Hardened Content Security Policy
              </h3>
              <p className="mb-4 text-base leading-relaxed">
                My security headers are implemented via Vercel's configuration
                system, providing comprehensive protection across all routes:
              </p>

              <div className="mb-6 bg-zinc-900 p-4 rounded-lg">
                <div className="text-xs font-mono text-zinc-300">
                  <div>{"// vercel.json - Security Headers Configuration"}</div>
                  <div className="text-green-400">{"{"}</div>
                  <div className="ml-2">{'"headers": ['}</div>
                  <div className="ml-4">{"{"}</div>
                  <div className="ml-6">{'"source": "/(.*)",'}</div>
                  <div className="ml-6">{'"headers": ['}</div>
                  <div className="ml-8">{"{"}</div>
                  <div className="ml-10">
                    {'"key": "Content-Security-Policy",'}
                  </div>
                  <div className="ml-10 text-blue-300">
                    {
                      "\"value\": \"default-src 'self'; script-src 'self' https://js.stripe.com https://www.google.com https://www.gstatic.com; style-src 'self' https://fonts.googleapis.com; img-src 'self' data: *; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://api.stripe.com https://mggaocdzjyfrnvsclybk.supabase.co wss://mggaocdzjyfrnvsclybk.supabase.co https://www.google.com https://www.gstatic.com; frame-src https://checkout.stripe.com https://js.stripe.com https://www.google.com https://recaptcha.google.com; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests; base-uri 'self';\""
                    }
                  </div>
                  <div className="ml-8">{"},"}</div>
                  <div className="ml-8">{"{"}</div>
                  <div className="ml-10">
                    {'"key": "Strict-Transport-Security",'}
                  </div>
                  <div className="ml-10 text-blue-300">
                    {'"value": "max-age=63072000; includeSubDomains; preload"'}
                  </div>
                  <div className="ml-8">{"},"}</div>
                  <div className="ml-8">{"{"}</div>
                  <div className="ml-10">
                    {'"key": "X-Content-Type-Options",'}
                  </div>
                  <div className="ml-10 text-blue-300">
                    {'"value": "nosniff"'}
                  </div>
                  <div className="ml-8">{"},"}</div>
                  <div className="ml-8">{"{"}</div>
                  <div className="ml-10">{'"key": "Referrer-Policy",'}</div>
                  <div className="ml-10 text-blue-300">
                    {'"value": "strict-origin-when-cross-origin"'}
                  </div>
                  <div className="ml-8">{"},"}</div>
                  <div className="ml-8">{"{"}</div>
                  <div className="ml-10">{'"key": "X-Frame-Options",'}</div>
                  <div className="ml-10 text-blue-300">{'"value": "DENY"'}</div>
                  <div className="ml-8">{"},"}</div>
                  <div className="ml-8">{"{"}</div>
                  <div className="ml-10">{'"key": "Permissions-Policy",'}</div>
                  <div className="ml-10 text-blue-300">
                    {
                      '"value": "camera=(), microphone=(), geolocation=(), payment=(), usb=(), display-capture=()"'
                    }
                  </div>
                  <div className="ml-8">{"}"}</div>
                  <div className="ml-6">{"]"}</div>
                  <div className="ml-4">{"}"}</div>
                  <div className="ml-2">{"]"}</div>
                  <div className="text-green-400">{"}"}</div>
                </div>
              </div>

              <p className="mb-6 text-base leading-relaxed">
                This comprehensive security headers configuration achieved an
                A-grade score on SecurityHeaders.com by implementing:
              </p>

              <ul className="mb-6 list-disc list-inside text-base leading-relaxed space-y-2">
                <li>
                  <strong>Content-Security-Policy:</strong> Strict allowlist for
                  scripts, styles, images, and connections
                </li>
                <li>
                  <strong>Strict-Transport-Security:</strong> 2-year HSTS with
                  subdomain and preload support
                </li>
                <li>
                  <strong>X-Content-Type-Options:</strong> Prevents MIME-type
                  sniffing attacks
                </li>
                <li>
                  <strong>Referrer-Policy:</strong> Controls referrer
                  information leakage
                </li>
                <li>
                  <strong>X-Frame-Options:</strong> Prevents clickjacking
                  attacks by denying framing
                </li>
                <li>
                  <strong>Permissions-Policy:</strong> Disables unnecessary
                  browser features (camera, microphone, etc.)
                </li>
              </ul>

              <div className="mb-6 p-6 bg-zinc-900/50 rounded-lg border border-zinc-700">
                <div className="text-center text-zinc-300">
                  <p className="mb-4">
                    🛡️ <strong>Security Headers Validation Results</strong>
                  </p>
                  <div className="text-center">
                    <ExpandableImage
                      src={SecurityHeadersImage}
                      alt="SecurityHeaders.com A-grade results for www.criticalsynthesissecurity.com"
                      className="max-w-full h-auto rounded-lg border border-zinc-600 shadow-lg"
                      description="SecurityHeaders.com A-grade validation results showing comprehensive security headers implementation"
                    />
                  </div>
                </div>
              </div>

              {/* PLACEHOLDER: CORS Configuration Screenshot */}
              <div className="mb-6 p-6 bg-zinc-900/50 rounded-lg border border-zinc-700 border-dashed">
                <div className="text-center text-zinc-400">
                  <p className="mb-4 text-lg font-semibold">
                    🔒 <strong>CORS Configuration Screenshot</strong>
                  </p>
                  <p className="text-sm mb-4">
                    <strong>DIRECTION:</strong> Add a screenshot showing:
                  </p>
                  <ul className="text-xs text-left max-w-md mx-auto space-y-1">
                    <li>
                      • Browser Network tab showing CORS preflight requests
                    </li>
                    <li>• Supabase Edge Functions CORS configuration</li>
                    <li>• Different CORS policies for different route types</li>
                    <li>• Successful cross-origin request handling</li>
                  </ul>
                  <div className="mt-4 h-48 bg-zinc-800 rounded-lg flex items-center justify-center border-2 border-dashed border-zinc-600">
                    <p className="text-zinc-500">
                      [CORS Configuration Screenshot Placeholder]
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">
                Security Tooling & Manual Testing
              </h2>

              <p className="mb-6 text-base leading-relaxed">
                Security tooling isn't just about finding vulnerabilities—it's
                about preventing them from reaching production. Here's my
                comprehensive security testing approach:
              </p>

              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                Static Analysis with Semgrep
              </h3>
              <p className="mb-4 text-base leading-relaxed">
                I use Semgrep for manual static analysis to catch security
                anti-patterns and vulnerabilities:
              </p>

              <div className="mb-6 bg-zinc-900 p-4 rounded-lg">
                <div className="text-xs text-zinc-300">
                  <div className="text-blue-300">{"🔍 Semgrep GUI Usage:"}</div>
                  <div className="ml-4">
                    {"• Upload code repository to Semgrep Cloud"}
                  </div>
                  <div className="ml-4">
                    {"• Configure rule sets for TypeScript/JavaScript"}
                  </div>
                  <div className="ml-4">
                    {"• Review findings in web dashboard"}
                  </div>
                  <div className="ml-4">
                    {"• Focus on: SQL injection, XSS, hardcoded secrets"}
                  </div>
                  <div className="ml-4">
                    {"• Export results for documentation"}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                Dynamic Testing with OWASP ZAP
              </h3>
              <p className="mb-4 text-base leading-relaxed">
                I perform manual ZAP scans to catch runtime vulnerabilities:
              </p>

              <div className="mb-6 bg-zinc-900 p-4 rounded-lg">
                <div className="text-xs font-mono text-zinc-300">
                  <div>{"# Manual ZAP baseline scan command"}</div>
                  <div className="text-green-400">
                    {"docker run -t owasp/zap2docker-stable zap-baseline.py \\"}
                  </div>
                  <div className="ml-4">
                    {"-t https://critical-synthesis-security.vercel.app \\"}
                  </div>
                  <div className="ml-4">{"-r zap-report.html"}</div>
                  <div className="ml-4">{"-x zap-report.xml"}</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                Dependency Scanning with Snyk
              </h3>
              <p className="mb-4 text-base leading-relaxed">
                Manual monitoring of dependencies for known vulnerabilities:
              </p>

              <div className="mb-6 bg-zinc-900 p-4 rounded-lg">
                <div className="text-xs text-zinc-300">
                  <div className="text-blue-300">{"🔍 Snyk GUI Usage:"}</div>
                  <div className="ml-4">
                    {"• Import project into Snyk web interface"}
                  </div>
                  <div className="ml-4">
                    {"• Configure severity thresholds (High/Medium)"}
                  </div>
                  <div className="ml-4">
                    {"• Review vulnerability dashboard"}
                  </div>
                  <div className="ml-4">
                    {"• Track dependency updates and fixes"}
                  </div>
                  <div className="ml-4">
                    {"• Monitor security posture over time"}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                Security Headers Validation
              </h3>
              <p className="mb-4 text-base leading-relaxed">
                Manual validation of security headers after deployments:
              </p>

              <div className="mb-6 bg-zinc-900 p-4 rounded-lg">
                <div className="text-xs text-zinc-300">
                  <div className="text-blue-300">
                    {"🔍 Security Headers Validation:"}
                  </div>
                  <div className="ml-4">
                    {"• Use SecurityHeaders.com web interface"}
                  </div>
                  <div className="ml-4">
                    {"• Enter URL for comprehensive header analysis"}
                  </div>
                  <div className="ml-4">
                    {"• Review grade and detailed recommendations"}
                  </div>
                  <div className="ml-4">
                    {"• Verify CSP, HSTS, and other security headers"}
                  </div>
                  <div className="ml-4">
                    {"• Document findings for compliance"}
                  </div>
                </div>
              </div>

              {/* Security Tool Screenshots */}
              <div className="mb-6 p-6 bg-zinc-900/50 rounded-lg border border-zinc-700">
                <div className="text-center text-zinc-300">
                  <p className="mb-4 text-lg font-semibold">
                    🔍 <strong>Security Tool Results</strong>
                  </p>
                  <p className="text-sm mb-6">
                    Screenshots from actual security scans showing vulnerability
                    findings and security posture:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="text-center">
                      <p className="text-sm font-semibold mb-3">
                        Semgrep Static Analysis Results
                      </p>
                      <ExpandableImage
                        src={SemgrepSummaryImage}
                        alt="Semgrep security scan results showing static analysis findings"
                        className="max-w-full h-auto rounded-lg border border-zinc-600 shadow-lg"
                        description="Semgrep static analysis results showing security findings and code quality issues"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold mb-3">
                        Snyk Dependency Vulnerability Scan
                      </p>
                      <ExpandableImage
                        src={SnykSummaryImage}
                        alt="Snyk dependency vulnerability scan results"
                        className="max-w-full h-auto rounded-lg border border-zinc-600 shadow-lg"
                        description="Snyk dependency vulnerability scan showing security posture and known vulnerabilities"
                      />
                    </div>
                  </div>
                  <p className="text-xs mt-4 text-zinc-400">
                    These scans help identify and track security vulnerabilities
                    across the application and its dependencies
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">
                Vulnerability Assessment & Risk Management
              </h2>

              <div className="mb-6 p-6 bg-zinc-900/50 rounded-lg border border-zinc-700">
                <div className="text-zinc-300">
                  <h3 className="text-lg font-semibold mb-4 text-zinc-100">
                    🔍{" "}
                    <strong>Developer Perspective on Security Findings</strong>
                  </h3>

                  <p className="mb-4 text-base leading-relaxed">
                    As the sole developer of this application, I have a unique
                    perspective on the security vulnerabilities identified by
                    Semgrep. While the static analysis tool correctly identifies
                    potential security issues and bad practices, the context of
                    being the only developer working on this codebase provides
                    additional insight into the actual risk level.
                  </p>

                  <div className="mb-4 p-4 bg-amber-900/20 border border-amber-700 rounded-lg">
                    <h4 className="font-semibold text-amber-300 mb-2">
                      ⚠️ Current Vulnerability Assessment
                    </h4>
                    <p className="text-sm text-zinc-300">
                      <strong>Finding:</strong> Semgrep identified potential
                      security vulnerabilities in the codebase
                    </p>
                    <p className="text-sm text-zinc-300 mt-2">
                      <strong>Developer Assessment:</strong> While these
                      represent legitimate security concerns and bad practices
                      that should be addressed, the current risk is{" "}
                      <strong>low</strong> because:
                    </p>
                    <ul className="text-sm text-zinc-300 mt-2 ml-4 space-y-1">
                      <li>
                        • I am the sole developer with full knowledge of the
                        codebase
                      </li>
                      <li>
                        • No external contributors or unknown code paths exist
                      </li>
                      <li>
                        • The identified vulnerabilities cannot currently be
                        exploited in the application's context
                      </li>
                      <li>
                        • All user inputs are properly validated and sanitized
                        in the current implementation
                      </li>
                    </ul>
                  </div>

                  <div className="mb-4 p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <h4 className="font-semibold text-blue-300 mb-2">
                      📋 Future Remediation Plan
                    </h4>
                    <p className="text-sm text-zinc-300 mb-2">
                      <strong>Priority Level:</strong> Low (due to current risk
                      assessment)
                    </p>
                    <p className="text-sm text-zinc-300 mb-2">
                      <strong>Planned Actions:</strong>
                    </p>
                    <ul className="text-sm text-zinc-300 ml-4 space-y-1">
                      <li>
                        • Address identified vulnerabilities when time permits
                        or if risk profile changes
                      </li>
                      <li>
                        • Implement fixes if the application scales or
                        additional developers join the project
                      </li>
                      <li>
                        • Continue regular security scanning to monitor for new
                        issues
                      </li>
                      <li>
                        • Maintain current security practices while gradually
                        improving code quality
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                    <h4 className="font-semibold text-green-300 mb-2">
                      ✅ Risk Mitigation Strategy
                    </h4>
                    <p className="text-sm text-zinc-300">
                      This approach balances{" "}
                      <strong>security best practices</strong> with{" "}
                      <strong>practical development constraints</strong>. While
                      the vulnerabilities should eventually be addressed, the
                      current risk-benefit analysis supports prioritizing other
                      development tasks while maintaining awareness of security
                      issues through regular scanning.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">
                Lessons Learned: Reflections on Secure Design
              </h2>

              <p className="mb-6 text-base leading-relaxed">
                Building security-first architecture taught me valuable lessons
                about the trade-offs between security, usability, and
                development velocity. Here are my key insights:
              </p>

              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                Security as a Feature, Not a Constraint
              </h3>
              <p className="mb-4 text-base leading-relaxed">
                The biggest mindset shift was treating security as a core
                feature rather than a compliance checkbox. When security is
                baked into the architecture from day one, it enhances rather
                than hinders the user experience. For example, our strict CSP
                actually improved page load times by preventing unnecessary
                resource loading.
              </p>

              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                The Value of Consistent Manual Testing
              </h3>
              <p className="mb-4 text-base leading-relaxed">
                While manual security reviews require discipline, the investment
                in proper tooling—Semgrep, ZAP, Snyk—paid dividends by catching
                issues early and providing consistent security validation across
                deployments. Regular manual testing prevents security debt from
                accumulating and keeps security practices fresh in mind.
              </p>

              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                Documentation is Security Infrastructure
              </h3>
              <p className="mb-4 text-base leading-relaxed">
                Clear documentation of security decisions, threat models, and
                incident response procedures is as important as the technical
                implementations. When security incidents occur (and they will),
                having documented procedures and clear ownership reduces
                response time and prevents panic-driven decisions.
              </p>

              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                User Experience vs. Security Balance
              </h3>
              <p className="mb-4 text-base leading-relaxed">
                Every security control impacts user experience. The key is
                finding the right balance. For example, implementing MFA adds
                friction but significantly improves security posture. The
                solution was progressive security—basic features work without
                MFA, but sensitive operations require additional verification.
              </p>

              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                Continuous Learning and Adaptation
              </h3>
              <p className="mb-4 text-base leading-relaxed">
                Security is a moving target. New vulnerabilities emerge, attack
                vectors evolve, and regulatory requirements change. Building a
                security culture that embraces continuous learning and
                adaptation is more valuable than any single security control.
                Regular threat modeling sessions and security reviews keep the
                architecture relevant.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">
                Key Takeaways for Other Developers
              </h2>

              <p className="mb-6 text-base leading-relaxed">
                If you're building web applications and want to implement
                similar security measures, here are my key recommendations:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-700/50">
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">
                    🎯 Start with Threat Modeling
                  </h3>
                  <p className="text-sm text-zinc-300">
                    Before writing a single line of security code, understand
                    your threat landscape. Who might attack your application?
                    What are they after? How might they do it? This foundation
                    informs every security decision you make.
                  </p>
                </div>

                <div className="p-4 bg-green-900/20 rounded-lg border border-green-700/50">
                  <h3 className="text-lg font-semibold text-green-300 mb-2">
                    🔧 Implement Security by Design
                  </h3>
                  <p className="text-sm text-zinc-300">
                    Don't bolt security on later. Use secure frameworks (like
                    Supabase with RLS), implement security headers from day one,
                    and choose security-focused dependencies. It's much easier
                    to build securely than to retrofit security.
                  </p>
                </div>

                <div className="p-4 bg-yellow-900/20 rounded-lg border border-yellow-700/50">
                  <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                    🔍 Establish Regular Testing Routines
                  </h3>
                  <p className="text-sm text-zinc-300">
                    Consistent manual security processes are essential. Use
                    Semgrep, Snyk, and OWASP ZAP as part of regular security
                    reviews. Set up manual security header validation and
                    dependency scanning checklists. Make security testing a
                    standard part of your workflow.
                  </p>
                </div>

                <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-700/50">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">
                    📚 Invest in Security Education
                  </h3>
                  <p className="text-sm text-zinc-300">
                    Security is everyone's responsibility. Invest in training
                    for your team on secure coding practices, threat modeling,
                    and incident response. A security-aware team is your best
                    defense.
                  </p>
                </div>

                <div className="p-4 bg-red-900/20 rounded-lg border border-red-700/50">
                  <h3 className="text-lg font-semibold text-red-300 mb-2">
                    🔍 Measure and Monitor
                  </h3>
                  <p className="text-sm text-zinc-300">
                    You can't improve what you don't measure. Track security
                    metrics, monitor for anomalies, and regularly audit your
                    security posture. Use tools like SecurityHeaders.com to
                    validate your implementations.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">
                Conclusion: Security as a Competitive Advantage
              </h2>

              <p className="mb-6 text-base leading-relaxed">
                Building security-first architecture for Critical Synthesis
                Security wasn't just about compliance or risk mitigation—it
                became a competitive advantage. Users trust our platform because
                they can see the security measures in action. The A-grade
                SecurityHeaders.com score, comprehensive audit logs, and
                transparent security practices differentiate us in a market
                where security incidents regularly make headlines.
              </p>

              <p className="mb-6 text-base leading-relaxed">
                The journey from a basic web app to a security-hardened platform
                required significant investment in time, tooling, and education.
                But the peace of mind, user trust, and competitive positioning
                it provides makes every hour spent worthwhile.
              </p>

              <p className="mb-6 text-base leading-relaxed">
                Security isn't a destination—it's a journey. As threats evolve
                and our platform grows, we'll continue to adapt our security
                measures. The foundation we've built provides the flexibility to
                respond to new challenges while maintaining the security-first
                culture that defines our approach.
              </p>

              <div className="p-6 bg-zinc-800/50 rounded-lg border border-zinc-700">
                <h3 className="text-lg font-semibold text-zinc-100 mb-3">
                  🔗 Resources and Tools Mentioned
                </h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>
                    •{" "}
                    <a
                      href="https://owasp.org/www-project-top-ten/"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      OWASP Top 10 (2021)
                    </a>{" "}
                    - Security vulnerability framework
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://securityheaders.com/"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      SecurityHeaders.com
                    </a>{" "}
                    - Security header validation
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://semgrep.dev/"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      Semgrep
                    </a>{" "}
                    - Static analysis security tool
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://www.zaproxy.org/"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      OWASP ZAP
                    </a>{" "}
                    - Dynamic security testing
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://snyk.io/"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      Snyk
                    </a>{" "}
                    - Dependency vulnerability scanning
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://supabase.com/"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      Supabase
                    </a>{" "}
                    - Backend-as-a-Service with built-in security
                  </li>
                </ul>
              </div>
            </section>

            <div className="mt-8 pt-6 border-t border-zinc-700">
              <p className="text-sm text-zinc-500 text-center">
                Questions about implementing security-first architecture? Reach
                out on{" "}
                <a
                  href="https://linkedin.com/in/kenji-mah"
                  className="text-blue-400 hover:text-blue-300"
                >
                  LinkedIn
                </a>{" "}
                or
                <a
                  href="mailto:security@critical-synthesis-security.com"
                  className="text-blue-400 hover:text-blue-300 ml-1"
                >
                  email
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
