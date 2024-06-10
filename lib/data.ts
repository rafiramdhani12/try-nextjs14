import {prisma} from "@/lib/prisma";

// menampilkan 5 record per halaman
const ITEMS_PER_PAGE = 5;

export const getContacts = async (query: string, currentPage: number) => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    // yg dibawah ini adalah sintaks untuk mendelay fetching data agar skeleton berjalan dan hanya untuk uji coba
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const contacts = await prisma.contact.findMany({
      skip: offset,
      // take = limit
      take: ITEMS_PER_PAGE,
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
              // artinya mencari data tidak memperdulikan upper dan lower
            },
          },
          {
            phone: {
              contains: query,
              mode: "insensitive",
              // artinya mencari data tidak memperdulikan upper dan lower
            },
          },
        ],
      },
    });
    return contacts;
  } catch (error) {
    throw new Error("failed to fetch contact data");
  }
};
export const getContactsPages = async (query: string) => {
  try {
    const contacts = await prisma.contact.count({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
              // artinya mencari data tidak memperdulikan upper dan lower
            },
          },
          {
            phone: {
              contains: query,
              mode: "insensitive",
              // artinya mencari data tidak memperdulikan upper dan lower
            },
          },
        ],
      },
    });
    const totalPage = Math.ceil(Number(contacts) / ITEMS_PER_PAGE);
    return totalPage;
  } catch (error) {
    throw new Error("failed to fetch contact data");
  }
};

export const getContactsById = async (id: string) => {
  try {
    const contact = await prisma.contact.findUnique({
      where: {id},
    });
    return contact;
  } catch (error) {
    throw new Error("failed to fetch contact data");
  }
};
