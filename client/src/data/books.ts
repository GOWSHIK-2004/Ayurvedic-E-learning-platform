export type AyurvedicBook = {
  id: number;
  title: string;
  author: string;
  year: number;
  description: string;
  language: string;
  category: "Ancient Text" | "Modern" | "Reference";
  imageUrl: string;
  popularity: number;
};

export const ayurvedicBooks: AyurvedicBook[] = [
  {
    id: 1,
    title: "Ashtanga Hridayam",
    author: "Vagbhata",
    year: 600,
    description: "A core text of Ayurveda covering eight branches of medicine, including internal medicine, surgery, and toxicology.",
    language: "Sanskrit",
    category: "Ancient Text",
    imageUrl: "https://images.unsplash.com/photo-1603827457577-609e6f42a45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 96
  },
  {
    id: 2,
    title: "Ayurveda Prakasha",
    author: "Madhava",
    year: 1650,
    description: "Focuses on metallurgical and alchemical processes in Ayurvedic medicine preparation.",
    language: "Sanskrit",
    category: "Reference",
    imageUrl: "https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 82
  },
  {
    id: 3,
    title: "Ayurvedic Healing",
    author: "Dr. David Frawley",
    year: 1989,
    description: "A comprehensive guide to Ayurvedic treatment methods for various health conditions.",
    language: "English",
    category: "Modern",
    imageUrl: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 89
  },
  {
    id: 4,
    title: "Ayurveda Dipika",
    author: "Chakrapani Datta",
    year: 1050,
    description: "A commentary on Charaka Samhita, illuminating the key concepts of Ayurvedic medicine.",
    language: "Sanskrit",
    category: "Ancient Text",
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 92
  },
  {
    id: 5,
    title: "Bhava Prakasha",
    author: "Bhavamishra",
    year: 1550,
    description: "A comprehensive treatise on herbs, minerals, and animal products used in Ayurvedic medicine.",
    language: "Sanskrit",
    category: "Ancient Text",
    imageUrl: "https://images.unsplash.com/photo-1517911041065-4960862d38f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 88
  },
  {
    id: 6,
    title: "Balanced Ayurvedic Living",
    author: "Dr. Melissa Sanders",
    year: 2018,
    description: "Practical guide for incorporating Ayurvedic principles into modern daily routines.",
    language: "English",
    category: "Modern",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 76
  },
  {
    id: 7,
    title: "Charaka Samhita",
    author: "Charaka",
    year: -300,
    description: "One of the foundational texts of Ayurveda, focusing on internal medicine (Kayachikitsa).",
    language: "Sanskrit",
    category: "Ancient Text",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 98
  },
  {
    id: 8,
    title: "Compendium of Ayurvedic Medicine",
    author: "Dr. K.R. Srikantha Murthy",
    year: 2000,
    description: "A modern reference guide summarizing key Ayurvedic medicinal preparations and treatments.",
    language: "English",
    category: "Reference",
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 85
  },
  {
    id: 9,
    title: "Dravyaguna Vijnana",
    author: "Dr. J.L.N. Sastry",
    year: 2005,
    description: "A comprehensive study of Ayurvedic pharmacology focusing on medicinal plants and their properties.",
    language: "English/Sanskrit",
    category: "Reference",
    imageUrl: "https://images.unsplash.com/photo-1540420828642-fca2c5c18abe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 83
  },
  {
    id: 10,
    title: "Deepak Chopra's Guide to Ayurveda",
    author: "Deepak Chopra",
    year: 1990,
    description: "A modern interpretation of Ayurvedic principles for contemporary wellness applications.",
    language: "English",
    category: "Modern",
    imageUrl: "https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 91
  },
  {
    id: 11,
    title: "Essential Ayurveda",
    author: "Dr. Shubhra Krishan",
    year: 2003,
    description: "A practical guide to Ayurvedic lifestyle practices for modern living.",
    language: "English",
    category: "Modern",
    imageUrl: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 80
  },
  {
    id: 12,
    title: "Gheranda Samhita",
    author: "Sage Gheranda",
    year: 1700,
    description: "A classical text on Hatha Yoga with Ayurvedic principles for physical and mental wellness.",
    language: "Sanskrit",
    category: "Ancient Text",
    imageUrl: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 86
  },
  {
    id: 13,
    title: "Healing Spices",
    author: "Dr. Bharat Aggarwal",
    year: 2011,
    description: "An exploration of the healing properties of spices used in Ayurvedic medicine.",
    language: "English",
    category: "Modern",
    imageUrl: "https://images.unsplash.com/photo-1580651315530-69c8e0026377?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 79
  },
  {
    id: 14,
    title: "Illustrated Sushruta Samhita",
    author: "Dr. K.L. Bhishagratna",
    year: 1998,
    description: "An illustrated translation of the ancient Ayurvedic surgical text with modern annotations.",
    language: "English/Sanskrit",
    category: "Reference",
    imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 84
  },
  {
    id: 15,
    title: "Jivaka Chintamani",
    author: "Traditional",
    year: 800,
    description: "A traditional Ayurvedic text focusing on pediatrics and women's health.",
    language: "Sanskrit",
    category: "Ancient Text",
    imageUrl: "https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 77
  },
  {
    id: 16,
    title: "Kayachikitsa",
    author: "Prof. R.H. Singh",
    year: 2010,
    description: "A comprehensive textbook on Ayurvedic internal medicine practices.",
    language: "English",
    category: "Reference",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 82
  },
  {
    id: 17,
    title: "Madhava Nidana",
    author: "Madhavakara",
    year: 800,
    description: "An ancient Ayurvedic text focused on diagnosis of diseases and their symptoms.",
    language: "Sanskrit",
    category: "Ancient Text",
    imageUrl: "https://images.unsplash.com/photo-1516382799247-87df95d790b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 89
  },
  {
    id: 18,
    title: "Nagarjuna's Rasashastra",
    author: "Nagarjuna",
    year: 900,
    description: "An ancient text focusing on alchemical preparations and mineral-based medicines in Ayurveda.",
    language: "Sanskrit",
    category: "Ancient Text",
    imageUrl: "https://images.unsplash.com/photo-1593642550744-5dd9e5fc6799?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 87
  },
  {
    id: 19,
    title: "Prakriti: Your Ayurvedic Constitution",
    author: "Dr. Robert Svoboda",
    year: 1988,
    description: "A detailed exploration of Ayurvedic constitutional types and personalized health approaches.",
    language: "English",
    category: "Modern",
    imageUrl: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 93
  },
  {
    id: 20,
    title: "Sharangdhara Samhita",
    author: "Sharangdhara",
    year: 1300,
    description: "A medieval Ayurvedic text focused on pharmaceutical preparations and pulse diagnosis.",
    language: "Sanskrit",
    category: "Ancient Text",
    imageUrl: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 85
  },
  {
    id: 21,
    title: "Sushruta Samhita",
    author: "Sushruta",
    year: -600,
    description: "One of the foundational texts of Ayurveda with a focus on surgery and anatomical knowledge.",
    language: "Sanskrit",
    category: "Ancient Text",
    imageUrl: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 97
  },
  {
    id: 22,
    title: "The Complete Book of Ayurvedic Home Remedies",
    author: "Dr. Vasant Lad",
    year: 1998,
    description: "A practical guide to using Ayurvedic remedies for common health issues at home.",
    language: "English",
    category: "Modern",
    imageUrl: "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 95
  },
  {
    id: 23,
    title: "Textbook of Dravyaguna",
    author: "Dr. P.V. Sharma",
    year: 1990,
    description: "A comprehensive reference on Ayurvedic pharmacology and medicinal plants.",
    language: "English",
    category: "Reference",
    imageUrl: "https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 81
  },
  {
    id: 24,
    title: "Yogaratnakara",
    author: "Unknown",
    year: 1700,
    description: "An 18th-century compendium of Ayurvedic treatments and therapeutic procedures.",
    language: "Sanskrit",
    category: "Ancient Text",
    imageUrl: "https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 83
  },
  {
    id: 25,
    title: "Vagbhata's Astanga Hrdayam",
    author: "Vagbhata",
    year: 600,
    description: "A concise summary of earlier Ayurvedic texts with emphasis on practical application.",
    language: "Sanskrit",
    category: "Ancient Text",
    imageUrl: "https://images.unsplash.com/photo-1609602644879-dd158c2b56d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popularity: 90
  }
];
