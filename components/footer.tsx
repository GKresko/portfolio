export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-muted-foreground">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Gustavo Kresko
          </p>

          <p>
            Cibersegurança & Segurança da Informação
          </p>
        </div>
      </div>
    </footer>
  )
}
