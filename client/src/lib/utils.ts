import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function getAlphabetArray(): string[] {
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
}

export function groupBooksByFirstLetter(books: any[], sortField: string = "title") {
  const groupedBooks: { [key: string]: any[] } = {};
  
  getAlphabetArray().forEach(letter => {
    groupedBooks[letter] = books.filter(book => 
      book[sortField].toUpperCase().startsWith(letter)
    ).sort((a, b) => a[sortField].localeCompare(b[sortField]));
  });
  
  return groupedBooks;
}
