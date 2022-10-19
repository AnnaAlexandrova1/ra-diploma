import TopSales from "./TopSales/TopSales";
import CatalogList from '../Catalog/CatalogList'
import CatalogCategories from "../Catalog/CatalogCategories";

export default function MainPage() {
  return (
    <>
      <TopSales />
      <h2 className="text-center">Каталог</h2>
      <CatalogCategories />
      <CatalogList />
    </>
  );
}
