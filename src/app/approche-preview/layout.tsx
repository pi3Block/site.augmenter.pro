// TEMP — preview-only layout that strips the global Header/Footer so the
// narrative's NavFixed is the only chrome. Deleted in PR 8 along with the
// preview route. The final /approche will use a route group with its own
// layout to achieve the same isolation.

export default function ApprochePreviewLayout({ children }: { children: React.ReactNode }) {
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
