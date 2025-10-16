import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/utils/constants";
import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import type { ProjectEntry } from "@/utils/projectData";
import DFDImage from "@/assets/images/blogs/DFD.png";

export function SecurityArchitectureBlog({ lastUpdatedUnix }: ProjectEntry) {
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
                  <p className="text-sm">
                    <img src={DFDImage} alt="Data Flow Diagram" />
                  </p>
                  <p className="text-xs mt-2 text-zinc-500">
                    This diagram shows trust boundaries, data flow, and security
                    controls across our entire stack
                  </p>
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
                    <strong>Mitigation:</strong> Supabase Auth with MFA support,
                    rate limiting, account lockout policies, session management
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
                My CSP implementation uses a strict allowlist approach with
                nonce-based script execution:
              </p>

              <div className="mb-6 bg-zinc-900 p-4 rounded-lg">
                <div className="text-xs font-mono text-zinc-300">
                  <div>{"// Hardened CSP for production"}</div>
                  <div className="text-green-400">{"const cspPolicy = `"}</div>
                  <div>{"default-src 'self';"}</div>
                  <div>
                    {"script-src 'self' 'nonce-{nonce}' https://js.stripe.com;"}
                  </div>
                  <div>
                    {
                      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;"
                    }
                  </div>
                  <div>{"font-src 'self' https://fonts.gstatic.com;"}</div>
                  <div>{"img-src 'self' data: https: blob:;"}</div>
                  <div>
                    {
                      "connect-src 'self' https://*.supabase.co https://api.stripe.com;"
                    }
                  </div>
                  <div>
                    {
                      "frame-src 'self' https://js.stripe.com https://www.google.com;"
                    }
                  </div>
                  <div>{"object-src 'none';"}</div>
                  <div>{"base-uri 'self';"}</div>
                  <div>{"form-action 'self' https://*.stripe.com;"}</div>
                  <div>{"upgrade-insecure-requests;"}</div>
                  <div className="text-green-400">{"`;"}</div>
                </div>
              </div>

              <p className="mb-6 text-base leading-relaxed">
                This CSP configuration achieved an A-grade score on
                SecurityHeaders.com by:
              </p>

              <ul className="mb-6 list-disc list-inside text-base leading-relaxed space-y-2">
                <li>Blocking inline scripts except those with valid nonces</li>
                <li>Restricting resource loading to trusted domains only</li>
                <li>
                  Preventing data exfiltration through strict connect-src
                  policies
                </li>
                <li>Enforcing HTTPS for all external resources</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">
                Tooling & Automation: Security in CI/CD
              </h2>

              <p className="mb-6 text-base leading-relaxed">
                Security tooling isn't just about finding vulnerabilities—it's
                about preventing them from reaching production. Here's my
                comprehensive security pipeline:
              </p>

              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                Static Analysis with Semgrep
              </h3>
              <p className="mb-4 text-base leading-relaxed">
                Semgrep runs on every commit to catch security anti-patterns and
                vulnerabilities:
              </p>

              <div className="mb-6 bg-zinc-900 p-4 rounded-lg">
                <div className="text-xs font-mono text-zinc-300">
                  <div>{"# .semgrep.yml"}</div>
                  <div className="text-green-400">{"rules:"}</div>
                  <div className="ml-4">{"- id: detect-sql-injection"}</div>
                  <div className="ml-8">
                    {"languages: [typescript, javascript]"}
                  </div>
                  <div className="ml-8">{"severity: ERROR"}</div>
                  <div className="ml-4">{"- id: detect-xss"}</div>
                  <div className="ml-8">
                    {"languages: [typescript, javascript]"}
                  </div>
                  <div className="ml-8">{"severity: ERROR"}</div>
                  <div className="ml-4">{"- id: detect-hardcoded-secrets"}</div>
                  <div className="ml-8">
                    {"languages: [typescript, javascript]"}
                  </div>
                  <div className="ml-8">{"severity: WARNING"}</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                Dynamic Testing with OWASP ZAP
              </h3>
              <p className="mb-4 text-base leading-relaxed">
                Automated ZAP scans in CI/CD catch runtime vulnerabilities:
              </p>

              <div className="mb-6 bg-zinc-900 p-4 rounded-lg">
                <div className="text-xs font-mono text-zinc-300">
                  <div>{"# GitHub Actions ZAP scan"}</div>
                  <div className="text-green-400">
                    {"- name: ZAP Baseline Scan"}
                  </div>
                  <div className="ml-4">
                    {"uses: zaproxy/action-baseline@v0.7.0"}
                  </div>
                  <div className="ml-4">{"with:"}</div>
                  <div className="ml-8">
                    {"target: 'https://critical-synthesis-security.vercel.app'"}
                  </div>
                  <div className="ml-8">
                    {"rules_file_name: '.zap/rules.tsv'"}
                  </div>
                  <div className="ml-8">{"cmd_options: '-a'"}</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                Dependency Scanning with Snyk
              </h3>
              <p className="mb-4 text-base leading-relaxed">
                Continuous monitoring of dependencies for known vulnerabilities:
              </p>

              <div className="mb-6 bg-zinc-900 p-4 rounded-lg">
                <div className="text-xs font-mono text-zinc-300">
                  <div>{"# snyk test with fail-on threshold"}</div>
                  <div className="text-green-400">
                    {"snyk test --severity-threshold=high --fail-on=all"}
                  </div>
                  <div className="text-green-400">
                    {
                      'snyk monitor --project-name="critical-synthesis-security"'
                    }
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                Security Headers Validation
              </h3>
              <p className="mb-4 text-base leading-relaxed">
                Automated validation of security headers on every deployment:
              </p>

              <div className="mb-6 bg-zinc-900 p-4 rounded-lg">
                <div className="text-xs font-mono text-zinc-300">
                  <div>{"# Security headers check"}</div>
                  <div className="text-green-400">
                    {
                      "curl -I https://critical-synthesis-security.vercel.app | \\"
                    }
                  </div>
                  <div className="ml-8">
                    {
                      'grep -E "(Strict-Transport-Security|X-Content-Type-Options|X-Frame-Options)"'
                    }
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
                The Automation Imperative
              </h3>
              <p className="mb-4 text-base leading-relaxed">
                Manual security reviews don't scale. The investment in automated
                tooling—Semgrep, ZAP, Snyk—paid dividends by catching issues
                early and providing consistent security validation across all
                deployments. The initial setup time was significant, but it
                prevents security debt from accumulating.
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
                    🤖 Automate Everything
                  </h3>
                  <p className="text-sm text-zinc-300">
                    Manual security processes don't scale. Integrate Semgrep,
                    Snyk, and OWASP ZAP into your CI/CD pipeline. Set up
                    automated security header validation and dependency
                    scanning. Make security failures block deployments.
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
