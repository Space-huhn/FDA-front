export default function RootLayout({children, params}) {

  return (
    <>
      <div className="wrapper">
        {children}
      </div>
    </>
  );
}
