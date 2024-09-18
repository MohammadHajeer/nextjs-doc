import { fetchInvoicesPages } from "@/app/lib/data";
import Pagination from "./pagination";

export default async function PaginationFetcher({ query }: { query: string }) {
  const totalPages = await fetchInvoicesPages(query);
  return <Pagination totalPages={totalPages}/>;
}
