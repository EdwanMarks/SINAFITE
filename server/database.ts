import pg from "pg";
const { Pool } = pg;
import { drizzle } from "drizzle-orm/node-postgres";
import { eq } from "drizzle-orm";
import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle as drizzleNeon } from "drizzle-orm/neon-http";
import dotenv from "dotenv";

import {
  users,
  articles,
  services,
  contactMessages,
  subscribers,
  pages,
  User,
  Article,
  Service,
  ContactMessage,
  Subscriber,
  Page,
  InsertUser,
  InsertArticle,
  InsertService,
  InsertContactMessage,
  InsertSubscriber,
  InsertPage,
} from "../shared/schema";

// Load environment variables
dotenv.config();

let db: any;

// Configuring for serverless environments
if (process.env.NODE_ENV === "production") {
  // Use neon for serverless environments
  neonConfig.fetchConnectionCache = true;
  const sql = neon(process.env.DATABASE_URL!);
  db = drizzleNeon(sql);
} else {
  // Use regular pg for development
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  db = drizzle(pool);
}

// Helper function to sort by date
const sortByDate = (
  a: any,
  b: any,
  field: string,
  order: "asc" | "desc" = "desc",
) => {
  if (!a[field] || !b[field]) return 0;
  const dateA = new Date(a[field]).getTime();
  const dateB = new Date(b[field]).getTime();
  return order === "asc" ? dateA - dateB : dateB - dateA;
};

export class DbStorage {
  // Initialize database with some seed data
  async initializeDatabase() {
    console.log("Initializing database with seed data...");

    try {
      // Check if users table is empty
      const existingUsers = await db.select().from(users);

      if (existingUsers.length === 0) {
        // Create admin user
        await db.insert(users).values({
          name: "Administrador",
          username: "admin",
          password: "admin123", // In production, this should be hashed
          email: "admin@sinafite-df.org",
          role: "admin",
          createdAt: new Date(),
        });

        // Create regular member user
        await db.insert(users).values({
          name: "Membro",
          username: "membro",
          password: "membro123", // In production, this should be hashed
          email: "membro@example.com",
          role: "member",
          createdAt: new Date(),
        });

        // Create some sample articles
        await db.insert(articles).values([
          {
            title: "Assembleia aprova nova proposta de reajuste salarial",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
            summary:
              "Categoria aprova por unanimidade proposta de reajuste de 10% para os próximos 2 anos.",
            category: "Notícias",
            publishedAt: new Date(),
            authorId: 1,
          },
          {
            title: "Sinafite-DF celebra 25 anos de história",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
            summary:
              "Evento comemorativo reúne atuais e antigos membros da carreira fiscal do DF.",
            category: "Eventos",
            publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
            authorId: 1,
          },
          {
            title: "Nova decisão judicial beneficia filiados",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
            summary:
              "Sentença favorável garante direito a benefício retroativo para auditores fiscais.",
            category: "Jurídico",
            publishedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
            authorId: 1,
          },
        ]);

        // Create services
        await db.insert(services).values([
          {
            title: "Assessoria Jurídica",
            description:
              "Oferecemos assessoria jurídica especializada para filiados em questões relacionadas à carreira.",
            icon: "scale",
            isActive: true,
          },
          {
            title: "Convênios",
            description:
              "Parcerias com empresas e instituições que oferecem descontos e condições especiais para filiados.",
            icon: "handshake",
            isActive: true,
          },
          {
            title: "Capacitação Profissional",
            description:
              "Cursos, workshops e eventos para desenvolvimento profissional dos filiados.",
            icon: "graduation-cap",
            isActive: true,
          },
          {
            title: "Suporte Técnico",
            description:
              "Assistência técnica em questões relacionadas às atividades fiscais e sistemas do governo.",
            icon: "computer",
            isActive: true,
          },
        ]);

        // Create some pages
        await db.insert(pages).values([
          {
            slug: "home",
            title: "Página Inicial",
            content: "Conteúdo da página inicial",
            updatedAt: new Date(),
          },
          {
            slug: "about",
            title: "Sobre Nós",
            content:
              "# História do Sinafite-DF\n\nFundado em 1995, o Sinafite-DF (Sindicato dos Auditores Fiscais Integrantes da Carreira) tem como objetivo representar e defender os interesses dos Auditores Fiscais do Distrito Federal.\n\n## Missão\n\nRepresentar, defender e valorizar os Auditores Fiscais do DF, promovendo a união da categoria e o reconhecimento da importância do papel fiscal para a sociedade.\n\n## Valores\n\n- Ética e transparência\n- Compromisso com a justiça fiscal\n- Valorização profissional\n- Responsabilidade social\n\n## Diretoria Atual\n\n**Presidente**: João Silva\n**Vice-Presidente**: Maria Oliveira\n**Diretor Financeiro**: Pedro Santos\n**Diretor Jurídico**: Ana Pereira\n**Diretor de Comunicação**: Carlos Ferreira\n\n## Conquistas\n\nAo longo de sua história, o Sinafite-DF conquistou importantes vitórias para a categoria, como:\n\n- Implementação do plano de carreira dos Auditores Fiscais (2003)\n- Equiparação salarial com outras carreiras fiscais (2008)\n- Regulamentação das atribuições específicas da carreira (2012)\n- Reconhecimento do direito à aposentadoria especial (2018)\n\n## Estatuto\n\nO estatuto completo do Sinafite-DF está disponível para consulta. Entre em contato com nossa secretaria para mais informações.",
            updatedAt: new Date(),
          },
        ]);

        console.log("Database initialized with seed data.");
      } else {
        console.log("Database already contains data, skipping initialization.");
      }
    } catch (error) {
      console.error("Error initializing database:", error);
      throw error;
    }
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.username, username));
    return result[0];
  }

  async createUser(newUser: InsertUser): Promise<User> {
    const result = await db
      .insert(users)
      .values({
        ...newUser,
        createdAt: new Date(),
      })
      .returning();

    return result[0];
  }

  // Article operations
  async getArticles(limit?: number): Promise<Article[]> {
    let query = db.select().from(articles).orderBy(articles.publishedAt);

    if (limit) {
      query = query.limit(limit);
    }

    const result = await query;
    return result.sort((a: Article, b: Article) =>
      sortByDate(a, b, "publishedAt"),
    );
  }

  async getArticleById(id: number): Promise<Article | undefined> {
    const result = await db.select().from(articles).where(eq(articles.id, id));
    return result[0];
  }

  async getArticlesByCategory(category: string): Promise<Article[]> {
    const result = await db
      .select()
      .from(articles)
      .where(eq(articles.category, category));
    return result.sort((a: Article, b: Article) =>
      sortByDate(a, b, "publishedAt"),
    );
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const result = await db.insert(articles).values(insertArticle).returning();
    return result[0];
  }

  async updateArticle(
    id: number,
    articleUpdate: Partial<InsertArticle>,
  ): Promise<Article | undefined> {
    const result = await db
      .update(articles)
      .set(articleUpdate)
      .where(eq(articles.id, id))
      .returning();

    return result[0];
  }

  async deleteArticle(id: number): Promise<boolean> {
    const result = await db.delete(articles).where(eq(articles.id, id));
    return true; // If no error is thrown, we assume deletion was successful
  }

  // Service operations
  async getServices(): Promise<Service[]> {
    const result = await db.select().from(services);
    return result;
  }

  async getServiceById(id: number): Promise<Service | undefined> {
    const result = await db.select().from(services).where(eq(services.id, id));
    return result[0];
  }

  async createService(insertService: InsertService): Promise<Service> {
    const result = await db.insert(services).values(insertService).returning();
    return result[0];
  }

  async updateService(
    id: number,
    serviceUpdate: Partial<InsertService>,
  ): Promise<Service | undefined> {
    const result = await db
      .update(services)
      .set(serviceUpdate)
      .where(eq(services.id, id))
      .returning();

    return result[0];
  }

  async deleteService(id: number): Promise<boolean> {
    const result = await db.delete(services).where(eq(services.id, id));
    return true;
  }

  // Contact message operations
  async getContactMessages(): Promise<ContactMessage[]> {
    const result = await db.select().from(contactMessages);
    return result.sort((a: ContactMessage, b: ContactMessage) =>
      sortByDate(a, b, "createdAt"),
    );
  }

  async createContactMessage(
    insertMessage: InsertContactMessage,
  ): Promise<ContactMessage> {
    const result = await db
      .insert(contactMessages)
      .values({
        ...insertMessage,
        isRead: false,
        createdAt: new Date(),
      })
      .returning();

    return result[0];
  }

  async markMessageAsRead(id: number): Promise<boolean> {
    const result = await db
      .update(contactMessages)
      .set({ isRead: true })
      .where(eq(contactMessages.id, id));

    return true;
  }

  async deleteContactMessage(id: number): Promise<boolean> {
    const result = await db
      .delete(contactMessages)
      .where(eq(contactMessages.id, id));
    return true;
  }

  // Subscriber operations
  async getSubscribers(): Promise<Subscriber[]> {
    const result = await db.select().from(subscribers);
    return result;
  }

  async createSubscriber(
    insertSubscriber: InsertSubscriber,
  ): Promise<Subscriber> {
    const result = await db
      .insert(subscribers)
      .values({
        ...insertSubscriber,
        subscribedAt: new Date(),
      })
      .returning();

    return result[0];
  }

  async deleteSubscriber(id: number): Promise<boolean> {
    const result = await db.delete(subscribers).where(eq(subscribers.id, id));
    return true;
  }

  // Page operations
  async getPages(): Promise<Page[]> {
    const result = await db.select().from(pages);
    return result;
  }

  async getPageBySlug(slug: string): Promise<Page | undefined> {
    const result = await db.select().from(pages).where(eq(pages.slug, slug));
    return result[0];
  }

  async createPage(insertPage: InsertPage): Promise<Page> {
    const result = await db
      .insert(pages)
      .values({
        ...insertPage,
        updatedAt: new Date(),
      })
      .returning();

    return result[0];
  }

  async updatePage(
    id: number,
    pageUpdate: Partial<InsertPage>,
  ): Promise<Page | undefined> {
    const result = await db
      .update(pages)
      .set({
        ...pageUpdate,
        updatedAt: new Date(),
      })
      .where(eq(pages.id, id))
      .returning();

    return result[0];
  }

  async deletePage(id: number): Promise<boolean> {
    const result = await db.delete(pages).where(eq(pages.id, id));
    return true;
  }
}

export const dbStorage = new DbStorage();
