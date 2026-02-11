export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-600">
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          <a href="mailto:merlinvaldez@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/merlinvaldez/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/merlinvaldez" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <div>
          <p>Copyright (c) 2026 Merlin Valdez and Fahami Valdez Learning Services LLC.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
