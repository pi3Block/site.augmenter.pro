// Strip the global Header/Footer for `/` so the narrative's NavFixed is
// the only chrome. Same approach as src/app/approche/layout.tsx — the
// selectors target the layout-installed <header class="fixed top-0 …">
// and the site-wide <footer> at body level.

export default function HomeLayout({ children }: { children: React.ReactNode }) {
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
