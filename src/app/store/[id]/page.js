import BookDetails from "@/app/ui/books/BookDetails";
import { getBookById } from "@/db/queries";

const BookDetailsPage = async ({ params: { id } }) => {
  const book = await getBookById(id);

  console.log(book);

  return <BookDetails book={book} />;
};

export default BookDetailsPage;
