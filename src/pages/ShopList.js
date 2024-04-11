import { Card } from "../components";
import { useTitle } from "../hooks";

export const ShopList = ({title}) => {
  useTitle(title)
  return (
    <main>
      <section className="products poppins-regular">
        <Card/>
      </section>
    </main>
    
  )
}

