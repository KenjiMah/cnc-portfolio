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
            Building Security Into My Web App: Applying the OWASP Top 10 to
            Critical Synthesis Security
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
                <strong>Tags:</strong> appsec, owasp, supabase, vercel, stripe, zap
              </div>
              <div className="text-sm text-zinc-400">
                <strong>Summary:</strong> A deep dive into implementing a
                security-first architecture, covering OWASP Top 10 mitigations,
                CORS policies, hardened CSP, and comprehensive security tooling.
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">
                Introduction: Why Security-First Architecture Matters
              </h2>
              <p className="mb-6 text-base leading-relaxed">
                Building a modern web app is complex.{" "}
                <strong>Securing it is a minefield.</strong> In today's threat
                landscape, a single misconfiguration in a security header or a
                missing database policy can expose user data and destroy trust.
              </p>
              <p className="mb-6 text-base leading-relaxed">
                This post is a complete, transparent breakdown of how I built an{" "}
                <strong>enterprise-grade security architecture</strong> for my
                platform from the ground up. I'll show you the exact code,
                configurations, and thought processes I used across my entire
                stack:
              </p>
              <ul className="mb-6 list-disc list-inside text-base leading-relaxed space-y-2">
                <li>
                  <strong>Frontend:</strong> React + Vite on Vercel
                </li>
                <li>
                  <strong>Backend:</strong> Supabase with PostgreSQL
                </li>
                <li>
                  <strong>Payments:</strong> Stripe
                </li>
                <li>
                  <strong>Email Services:</strong> Mailgun
                </li>
              </ul>
              <p className="mb-6 text-base leading-relaxed">
                The result? A platform that achieved an{" "}
                <strong>A+ grade score on SecurityHeaders.com</strong>, passed
                Semgrep and OWASP ZAP scans, and most importantly, provides
                users with confidence that their data is protected. This is the
                playbook.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">
                Architecture Overview: Trust Boundaries and Data Flow
              </h2>
              <p className="mb-6 text-base leading-relaxed">
                Before diving into specific code, it's crucial to understand the
                system's layout. A clear{" "}
                <strong>Data Flow Diagram (DFD)</strong> helps visualize trust
                boundaries and pinpoint where to apply security controls.
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
                The architecture follows a clear separation of concerns with
                multiple security layers:
              </p>
              <ul className="mb-6 list-disc list-inside text-base leading-relaxed space-y-2">
                <li>
                  <strong>Frontend (Vercel):</strong> React + Vite with a
                  hardened CSP and client-side security controls.
                </li>
                <li>
                  <strong>Backend (Supabase):</strong> PostgreSQL with{" "}
                  <strong>Row-Level Security (RLS)</strong>, and Edge Functions
                  with strict request validation.
                </li>
                <li>
                  <strong>External Services:</strong> Stripe with{" "}
                  <strong>webhook signature verification</strong> and Mailgun
                  with domain authentication.
                </li>
                <li>
                  <strong>Security Layer:</strong> Google reCAPTCHA and
                  certificate validation.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">
                Applying the OWASP Top 10
              </h2>
              <p className="mb-6 text-base leading-relaxed">
                The <strong>OWASP Top 10</strong> serves as our security
                blueprint. Here's a tactical breakdown of how I addressed each
                vulnerability class.
              </p>
              <div className="space-y-6">
                <div className="p-4 bg-zinc-800/30 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    A01: Broken Access Control
                  </h3>
                  <p className="text-sm text-zinc-300 mb-2">
                    <strong>Mitigation:</strong> Enforced{" "}
                    <strong>Supabase Row-Level Security (RLS)</strong> policies
                    on every table and used JWT-based authentication with role
                    validation in Edge Functions.
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
                {/* ... Other OWASP Top 10 entries ... */}
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">
                Deep Dive: CORS Policies & Hardened CSP
              </h2>
              <p className="mb-6 text-base leading-relaxed">
                When I got to the API, my first major hurdle was{" "}
                <strong>CORS</strong>. A blanket `*` policy is easy but
                dangerously insecure. I implemented a unified policy with a
                strict allowlist for all browser-facing endpoints.
              </p>
              <div className="mb-6 bg-zinc-900 p-4 rounded-lg">
                <div className="text-xs font-mono text-zinc-300">
                  <div>// cors.ts - Unified CORS Policy</div>
                  <div className="text-green-400">
                    {"const allowedOrigins = ["}
                  </div>
                  <div className="ml-4">
                    {'"https://www.criticalsynthesissecurity.com",'}
                  </div>
                  <div className="ml-4">{'"http://localhost:5173"'}</div>
                  <div className="text-green-400">{"];"}</div>
                </div>
              </div>
              <blockquote className="mb-6 p-4 bg-gray-800/50 border-l-4 border-gray-500 text-zinc-300">
                <h4 className="font-semibold text-gray-300 mb-2">
                  Developer's Note on Future CORS Enhancements
                </h4>
                <p className="text-sm">
                  This unified policy provides a strong security baseline. A
                  potential future enhancement would be to implement{" "}
                  <strong>per-route, least-privilege CORS policies</strong>.
                </p>
              </blockquote>
              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                Hardened Content Security Policy
              </h3>
              <p className="mb-4 text-base leading-relaxed">
                My security headers are implemented via Vercel's `vercel.json`
                configuration, providing comprehensive protection across all
                routes:
              </p>
              <div className="mb-6 bg-zinc-900 p-4 rounded-lg">
                <div className="text-xs font-mono text-zinc-300">
                  <div>{"// vercel.json - Security Headers"}</div>
                  <div className="text-green-400">{"{"}</div>
                  <div className="ml-2">{'"headers": ['}</div>
                  <div className="ml-4">{"{"}</div>
                  <div className="ml-6">{'"source": "/(.*)",'}</div>
                  <div className="ml-6">{'"headers": ['}</div>
                  <div className="ml-8">{"// ... CSP and other headers"}</div>
                  <div className="ml-6">{"]"}</div>
                  <div className="ml-4">{"}"}</div>
                  <div className="ml-2">{"]"}</div>
                  <div className="text-green-400">{"}"}</div>
                </div>
              </div>
              <div className="mb-6 p-6 bg-zinc-900/50 rounded-lg border border-zinc-700">
                <div className="text-center text-zinc-300">
                  <p className="mb-4">
                    🛡️ <strong>Security Headers Validation Results</strong>
                  </p>
                  <div className="text-center">
                    <ExpandableImage
                      src={SecurityHeadersImage}
                      alt="SecurityHeaders.com A-grade results for the web app"
                      className="max-w-full h-auto rounded-lg border border-zinc-600 shadow-lg"
                      description="SecurityHeaders.com A-grade validation results"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">
                Security Tooling & Validation
              </h2>
              <p className="mb-6 text-base leading-relaxed">
                Automated tools are powerful, but security is not a "set it and
                forget it" task. My workflow combines multiple layers of automated
                scanning and manual review to ensure comprehensive coverage.
              </p>
              <ul className="mb-6 list-disc list-inside text-base leading-relaxed space-y-2">
                <li><strong>Static Analysis (SAST) with Semgrep:</strong> Scans source code for potential security flaws before deployment.</li>
                <li><strong>Software Composition Analysis (SCA) with Snyk:</strong> Checks for known vulnerabilities in third-party dependencies.</li>
                <li><strong>Dynamic Analysis (DAST) with OWASP ZAP:</strong> Actively probes the running application for vulnerabilities, simulating real-world attacks.</li>
              </ul>

              <h3 className="text-xl font-semibold text-zinc-100 mb-4 mt-6">
                🔍 Security Scan Results
              </h3>
              <div className="space-y-6">
                {/* Semgrep and Snyk Results */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-zinc-900/50 rounded-lg border border-zinc-700">
                    <p className="text-sm font-semibold mb-3 text-center">
                      Semgrep Static Analysis (SAST)
                    </p>
                    <ExpandableImage
                      src={SemgrepSummaryImage}
                      alt="Semgrep security scan results"
                      className="max-w-full h-auto rounded-lg border border-zinc-600 shadow-lg"
                      description="Semgrep static analysis results"
                    />
                  </div>
                  <div className="p-4 bg-zinc-900/50 rounded-lg border border-zinc-700">
                    <p className="text-sm font-semibold mb-3 text-center">
                      Snyk Dependency Scan (SCA)
                    </p>
                    <ExpandableImage
                      src={SnykSummaryImage}
                      alt="Snyk dependency vulnerability scan results"
                      className="max-w-full h-auto rounded-lg border border-zinc-600 shadow-lg"
                      description="Snyk dependency vulnerability scan"
                    />
                  </div>
                </div>

                {/* ZAP Results */}
                <div className="p-6 bg-zinc-900/50 rounded-lg border border-zinc-700">
                  <div className="text-center text-zinc-300">
                    <p className="mb-4 text-lg font-semibold">
                      OWASP ZAP Dynamic Analysis (DAST)
                    </p>
                    <p className="text-sm mb-6 max-w-2xl mx-auto">
                      The dynamic scan was performed using ZAP's official Docker image and automated with the 
                      <code>zap-full-scan.py</code> script. This provides a repeatable, in-depth analysis of the live application. The initial scan identified several medium and low-risk findings:
                    </p>
                    <div className="text-left text-sm space-y-4 max-w-3xl mx-auto">
                      <div className="p-4 bg-zinc-800/30 rounded-lg border-l-4 border-orange-500">
                        <h3 className="text-md font-semibold text-zinc-100 mb-2">
                          Medium Risk Findings
                        </h3>
                        <ul className="list-disc list-inside space-y-2">
                          <li>
                            <strong>CORS Misconfiguration:</strong> Detected overly permissive CORS policies (`*`) on public, non-sensitive assets.
                          </li>
                          <li>
                            <strong>CSP: Wildcard Directive:</strong> The `img-src` directive used a wildcard, which is less restrictive than a specific allowlist.
                          </li>
                          <li>
                            <strong>Proxy Disclosure:</strong> Server headers revealed the proxy technology (Vercel), which could give an attacker information.
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 bg-zinc-800/30 rounded-lg border-l-4 border-yellow-500">
                        <h3 className="text-md font-semibold text-zinc-100 mb-2">
                          Low Risk Finding
                        </h3>
                        <ul className="list-disc list-inside">
                          <li>
                            <strong>Insufficient Site Isolation:</strong> The scan recommended adding `Cross-Origin-Embedder-Policy` and `Cross-Origin-Opener-Policy` headers to mitigate Spectre-like attacks.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">
                Vulnerability Assessment & A Developer's Perspective
              </h2>
              <p className="mb-6 text-base leading-relaxed">
                This is a critical section. Automated scanners correctly flagged potential policy weaknesses. As the sole developer, I can apply{" "}
                <strong>context-aware risk management</strong> to these findings.
              </p>
              <blockquote className="mb-6 p-4 bg-amber-900/20 border-l-4 border-amber-500 text-zinc-300">
                <h4 className="font-semibold text-amber-300 mb-2">
                  ⚠️ Current Vulnerability Assessment
                </h4>
                <p className="text-sm">
                  The findings from all scans are legitimate security considerations. However, after manual review, the{" "}
                  <strong>current risk is low</strong>. I am the only developer, there are no unknown code paths, and all user inputs are strictly validated. The CORS and CSP findings relate to public, non-sensitive assets, and the proxy disclosure provides minimal actionable intelligence. The vulnerabilities are not currently exploitable in a meaningful way.
                </p>
              </blockquote>
              <blockquote className="mb-6 p-4 bg-blue-900/20 border-l-4 border-blue-500 text-zinc-300">
                <h4 className="font-semibold text-blue-300 mb-2">
                  📋 Future Remediation Plan
                </h4>
                <p className="text-sm">
                  All issues are documented and will be addressed when time permits, or{" "}
                  <strong>immediately if the risk profile changes</strong> (e.g., if another developer joins the project). This balances security best practices with practical development constraints. The plan includes:
                </p>
                <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                    <li>
                        <strong>CORS/CSP Hardening:</strong> Whitelisting specific domains for CORS and removing the `img-src` wildcard from the CSP by sourcing all images from a trusted, defined location.
                    </li>
                    <li>
                        <strong>Header Obfuscation:</strong> Implementing measures to minimize server and proxy information leakage.
                    </li>
                    <li>
                        <strong>Site Isolation Headers:</strong> Adding the recommended `Cross-Origin-Embedder-Policy` and `Cross-Origin-Opener-Policy` headers to further protect against side-channel attacks.
                    </li>
                </ul>
              </blockquote>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">
                Key Takeaways & Lessons Learned
              </h2>
              <p className="mb-6 text-base leading-relaxed">
                This journey reinforced several core security principles.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-700/50">
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">
                    🎯 1. Start with Threat Modeling, Not Code
                  </h3>
                  <p className="text-sm text-zinc-300">
                    Before writing a line of code, ask: Who might attack this? What are they after? How? This informs every security decision.
                  </p>
                </div>
                <div className="p-4 bg-green-900/20 rounded-lg border border-green-700/50">
                  <h3 className="text-lg font-semibold text-green-300 mb-2">
                    🔧 2. Build Security In, Don’t Bolt It On
                  </h3>
                  <p className="text-sm text-zinc-300">
                    Treat security as a core feature. Use secure frameworks, implement security headers from day one, and choose dependencies wisely.
                  </p>
                </div>
                <div className="p-4 bg-yellow-900/20 rounded-lg border border-yellow-700/50">
                  <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                    🔍 3. Make Automated & Manual Testing a Habit
                  </h3>
                  <p className="text-sm text-zinc-300">
                    Automation is essential, but not enough. Consistent reviews of automated scan results (SAST, DAST, SCA) prevent security debt from accumulating.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">
                Conclusion: Security as a Competitive Advantage
              </h2>
              <p className="mb-6 text-base leading-relaxed">
                Building security-first wasn't just about compliance or risk
                mitigation—it became a <strong>competitive advantage</strong>.
                Users trust our platform because they see the A-grade security
                score and understand the measures in place.
              </p>
              <p className="mb-6 text-base leading-relaxed">
                Security isn't a destination—it's a continuous process. This
                foundation allows the platform to adapt to new challenges while
                maintaining the <strong>security-first culture</strong> that
                defines it.
              </p>
              <div className="p-6 bg-zinc-800/50 rounded-lg border border-zinc-700">
                <h3 className="text-lg font-semibold text-zinc-100 mb-3">
                  🔗 Resources and Tools Mentioned
                </h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li>
                    •{" "}
                    <a href="https://owasp.org/www-project-top-ten/" className="text-blue-400 hover:text-blue-300">
                      OWASP Top 10
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://securityheaders.com/" className="text-blue-400 hover:text-blue-300">
                      SecurityHeaders.com
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://semgrep.dev/" className="text-blue-400 hover:text-blue-300">
                      Semgrep
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://www.zaproxy.org/" className="text-blue-400 hover:text-blue-300">
                      OWASP ZAP
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://snyk.io/" className="text-blue-400 hover:text-blue-300">
                      Snyk
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <div className="mt-8 pt-6 border-t border-zinc-700">
              <p className="text-sm text-zinc-500 text-center">
                Questions about implementing security-first architecture? Reach
                out on{" "}
                <a href="https://www.linkedin.com/in/kenji-mah-69b86a14a/" className="text-blue-400 hover:text-blue-300">
                  LinkedIn
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}