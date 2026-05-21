// Strip the global Header/Footer for the narrative experience — NavFixed
// in src/app/approche/narrative/nav-fixed.tsx is the only chrome.
// The selectors target the layout-installed <header class="fixed top-0 …">
// and the site-wide <footer>; nothing else in the tree matches.

export default function ApprocheLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        body > header[class*="fixed"][class*="top-0"],
        body > footer { display: none !important; }
      `}</style>
      {children}
    </>
  );
}
