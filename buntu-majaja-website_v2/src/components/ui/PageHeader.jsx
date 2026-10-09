/** Standard inner-page opening: large title and a lede, with generous top space under the nav. */
export default function PageHeader({ title, lede, children }) {
  return (
    <header className="gutter pb-16 pt-36 sm:pb-20 sm:pt-44">
      <h1 className="t-h1 max-w-[14ch]">{title}</h1>
      {lede && <p className="t-lede mt-6">{lede}</p>}
      {children}
    </header>
  )
}
