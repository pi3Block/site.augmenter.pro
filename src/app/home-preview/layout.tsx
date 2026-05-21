// TEMP — preview-only layout that strips the global Header/Footer so the
// narrative's NavFixed is the only chrome. Same approach as /approche.

export default function HomePreviewLayout({ children }: { children: React.ReactNode }) {
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
