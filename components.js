class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="w-full border-t brutalist-border brutalist-bg">
          <div class="p-8 lg:p-16 flex flex-col justify-between min-h-[300px] max-w-xl">
              <div>
                  <h4 class="text-sm font-black tracking-widest uppercase mb-4 brutalist-text select-none">Get in touch</h4>
                  <p class="text-sm brutalist-text-muted mb-4 leading-relaxed">
                      Explore partnership frameworks, research alignments, or technical deployments.
                  </p>

                  <div class="flex items-center gap-4 mb-8">
                      <!-- GitHub -->
                      <a href="https://github.com" target="_blank" aria-label="GitHub Profile"
                          class="p-2 border border-transparent hover:border-current transition-all duration-200 brutalist-text cursor-pointer">
                          <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                          </svg>
                      </a>

                      <!-- LinkedIn -->
                      <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn Profile"
                          class="p-2 border border-transparent hover:border-current transition-all duration-200 brutalist-text cursor-pointer">
                          <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                      </a>

                      <!-- Codeforces -->
                      <a href="https://codeforces.com" target="_blank" aria-label="Codeforces Profile"
                          class="p-2 border border-transparent hover:border-current transition-all duration-200 brutalist-text cursor-pointer">
                          <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.5 7.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 10.5 7.5v15a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 4.5 22.5zm6-4.5A1.5 1.5 0 0 1 12 1.5h3A1.5 1.5 0 0 1 16.5 3v19.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5zm6 7.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5z"/>
                          </svg>
                      </a>
                  </div>
              </div>

              <div class="space-y-2 text-sm font-bold tracking-tight brutalist-text font-mono">
                  <div><a href="mailto:hello@research.com" class="hover:underline">hello@research.com</a></div>
                  <div><a href="tel:+1234567890" class="hover:underline">+1 (234) 567-890</a></div>
              </div>
          </div>
      </footer>
      <div class="border-t brutalist-border p-8 text-center text-[11px] font-bold brutalist-text-muted tracking-widest uppercase brutalist-surface select-none">
          © 2026 ADITYA DORGE PORTFOLIO WEBSITE //
      </div>
    `;
  }
}

// Register the custom HTML tag <site-footer></site-footer>
customElements.define('site-footer', SiteFooter);