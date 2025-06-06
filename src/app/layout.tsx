export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Pursuva - Educational Non-Profit</title>
            <meta name="description" content="Pursuva is an educational non-profit organization providing quality courses and tutoring in programming, mathematics, and test preparation." />
            <meta name="author" content="Pursuva" />

            <meta property="og:title" content="Pursuva - Educational Non-Profit" />
            <meta property="og:description" content="Pursuva is an educational non-profit organization providing quality courses and tutoring in programming, mathematics, and test preparation." />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/lovable-uploads/802db8de-7a0a-4d81-887c-b28d6e701edb.png" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@pursuva_edu" />
            <meta name="twitter:image" content="/lovable-uploads/802db8de-7a0a-4d81-887c-b28d6e701edb.png" />
            
            <link rel="icon" href="/lovable-uploads/802db8de-7a0a-4d81-887c-b28d6e701edb.png" type="image/png"/>
        </head>

        <body>
            <div id="root">{children}</div>
            {/* <!-- IMPORTANT: DO NOT REMOVE THIS SCRIPT TAG OR THIS VERY COMMENT! --> */}
            <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
        </body>
        </html>
    )
}