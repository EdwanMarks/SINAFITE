import {
  users, User, InsertUser,
  articles, Article, InsertArticle,
  services, Service, InsertService,
  contactMessages, ContactMessage, InsertContactMessage,
  subscribers, Subscriber, InsertSubscriber,
  pages, Page, InsertPage
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Article operations
  getArticles(limit?: number): Promise<Article[]>;
  getArticleById(id: number): Promise<Article | undefined>;
  getArticlesByCategory(category: string): Promise<Article[]>;
  createArticle(article: InsertArticle): Promise<Article>;
  updateArticle(id: number, article: Partial<InsertArticle>): Promise<Article | undefined>;
  deleteArticle(id: number): Promise<boolean>;
  
  // Service operations
  getServices(): Promise<Service[]>;
  getServiceById(id: number): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;
  updateService(id: number, service: Partial<InsertService>): Promise<Service | undefined>;
  deleteService(id: number): Promise<boolean>;
  
  // Contact message operations
  getContactMessages(): Promise<ContactMessage[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  markMessageAsRead(id: number): Promise<boolean>;
  deleteContactMessage(id: number): Promise<boolean>;
  
  // Subscriber operations
  getSubscribers(): Promise<Subscriber[]>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  deleteSubscriber(id: number): Promise<boolean>;
  
  // Page operations
  getPages(): Promise<Page[]>;
  getPageBySlug(slug: string): Promise<Page | undefined>;
  createPage(page: InsertPage): Promise<Page>;
  updatePage(id: number, page: Partial<InsertPage>): Promise<Page | undefined>;
  deletePage(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private articles: Map<number, Article>;
  private services: Map<number, Service>;
  private contactMessages: Map<number, ContactMessage>;
  private subscribers: Map<number, Subscriber>;
  private pages: Map<number, Page>;
  
  private currentUserId: number;
  private currentArticleId: number;
  private currentServiceId: number;
  private currentContactMessageId: number;
  private currentSubscriberId: number;
  private currentPageId: number;

  constructor() {
    this.users = new Map();
    this.articles = new Map();
    this.services = new Map();
    this.contactMessages = new Map();
    this.subscribers = new Map();
    this.pages = new Map();
    
    this.currentUserId = 1;
    this.currentArticleId = 1;
    this.currentServiceId = 1;
    this.currentContactMessageId = 1;
    this.currentSubscriberId = 1;
    this.currentPageId = 1;
    
    // Initialize with some data
    this.initializeData();
  }

  private initializeData() {
    // Create admin user
    this.createUser({
      username: "admin",
      password: "admin123", // In production, this would be hashed
      name: "Administrador",
      email: "admin@sinafite-df.org.br",
      role: "admin"
    });
    
    // Create some services
    this.createService({
      title: "Assessoria Jurídica",
      description: "Suporte jurídico especializado para questões profissionais e administrativas, com atendimento personalizado.",
      icon: "ri-scales-line",
      isActive: true
    });
    
    this.createService({
      title: "Representação Política",
      description: "Atuação junto ao Governo do DF e órgãos legislativos para defender os interesses da categoria.",
      icon: "ri-government-line",
      isActive: true
    });
    
    this.createService({
      title: "Capacitação Profissional",
      description: "Cursos, palestras e eventos para aprimoramento técnico e desenvolvimento profissional dos auditores.",
      icon: "ri-book-open-line",
      isActive: true
    });
    
    // Create some articles
    this.createArticle({
      title: "Assembleia aprova nova proposta de reajuste salarial",
      content: "Em reunião realizada ontem, os filiados aprovaram a proposta de reajuste salarial apresentada pelo Governo do DF após negociações intensas. A proposta inclui um aumento de 5% para este ano e mais 5% para o próximo ano, além de ajustes nos benefícios e vantagens da categoria. A diretoria do Sinafite-DF considera esta uma vitória importante para os auditores fiscais do DF.",
      summary: "Em reunião realizada ontem, os filiados aprovaram a proposta de reajuste salarial apresentada pelo Governo do DF após negociações.",
      image: "/images/news/assembly.jpg",
      category: "Notícias",
      publishedAt: new Date("2023-07-22T14:00:00"),
      authorId: 1
    });
    
    this.createArticle({
      title: "Seminário sobre reforma tributária acontecerá em agosto",
      content: "O Sinafite-DF realizará um seminário para discutir os impactos da reforma tributária na atuação dos auditores fiscais do DF. O evento contará com palestrantes renomados e ocorrerá no Centro de Convenções de Brasília.",
      summary: "O Sinafite-DF realizará um seminário para discutir os impactos da reforma tributária na atuação dos auditores fiscais do DF.",
      image: "/images/news/seminar.jpg",
      category: "Eventos",
      publishedAt: new Date("2023-07-15T10:30:00"),
      authorId: 1
    });
    
    this.createArticle({
      title: "Sindicato obtém vitória em ação coletiva sobre férias",
      content: "Após anos de disputa judicial, o Sinafite-DF conseguiu decisão favorável em processo sobre pagamento retroativo de adicional de férias. Esta é uma importante vitória para os auditores fiscais do DF.",
      summary: "Após anos de disputa judicial, o Sinafite-DF conseguiu decisão favorável em processo sobre pagamento retroativo de adicional de férias.",
      image: "/images/news/victory.jpg",
      category: "Jurídico",
      publishedAt: new Date("2023-07-10T16:45:00"),
      authorId: 1
    });
    
    // Create home page
    this.createPage({
      slug: "home",
      title: "Página Inicial",
      content: JSON.stringify({
        hero: {
          title: "Defendendo os direitos dos Auditores Fiscais do DF",
          subtitle: "Representando e protegendo os interesses dos funcionários integrantes da Carreira Auditoria Fiscal do Tesouro do Distrito Federal."
        }
      })
    });
    
    // Create about page
    this.createPage({
      slug: "about",
      title: "Sobre Nós",
      content: JSON.stringify({
        mission: "Defender e valorizar os auditores fiscais do Distrito Federal, promovendo melhorias nas condições de trabalho e representando os interesses da categoria.",
        vision: "Ser reconhecido como um sindicato de excelência, referência em representatividade e defesa dos direitos dos servidores públicos.",
        values: ["Ética", "Transparência", "Comprometimento", "Solidariedade", "Eficiência"]
      })
    });
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const now = new Date();
    const user: User = { id, ...insertUser, createdAt: now };
    this.users.set(id, user);
    return user;
  }
  
  // Article operations
  async getArticles(limit?: number): Promise<Article[]> {
    const articles = Array.from(this.articles.values());
    
    // Sort by published date (newest first)
    articles.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
    
    if (limit) {
      return articles.slice(0, limit);
    }
    
    return articles;
  }
  
  async getArticleById(id: number): Promise<Article | undefined> {
    return this.articles.get(id);
  }
  
  async getArticlesByCategory(category: string): Promise<Article[]> {
    return Array.from(this.articles.values())
      .filter(article => article.category === category)
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }
  
  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const id = this.currentArticleId++;
    const article: Article = { id, ...insertArticle };
    this.articles.set(id, article);
    return article;
  }
  
  async updateArticle(id: number, articleUpdate: Partial<InsertArticle>): Promise<Article | undefined> {
    const article = this.articles.get(id);
    if (!article) return undefined;
    
    const updatedArticle: Article = { ...article, ...articleUpdate };
    this.articles.set(id, updatedArticle);
    return updatedArticle;
  }
  
  async deleteArticle(id: number): Promise<boolean> {
    return this.articles.delete(id);
  }
  
  // Service operations
  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }
  
  async getServiceById(id: number): Promise<Service | undefined> {
    return this.services.get(id);
  }
  
  async createService(insertService: InsertService): Promise<Service> {
    const id = this.currentServiceId++;
    const service: Service = { id, ...insertService };
    this.services.set(id, service);
    return service;
  }
  
  async updateService(id: number, serviceUpdate: Partial<InsertService>): Promise<Service | undefined> {
    const service = this.services.get(id);
    if (!service) return undefined;
    
    const updatedService: Service = { ...service, ...serviceUpdate };
    this.services.set(id, updatedService);
    return updatedService;
  }
  
  async deleteService(id: number): Promise<boolean> {
    return this.services.delete(id);
  }
  
  // Contact message operations
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactMessageId++;
    const now = new Date();
    const message: ContactMessage = { 
      id, 
      ...insertMessage, 
      createdAt: now,
      isRead: false
    };
    this.contactMessages.set(id, message);
    return message;
  }
  
  async markMessageAsRead(id: number): Promise<boolean> {
    const message = this.contactMessages.get(id);
    if (!message) return false;
    
    const updatedMessage: ContactMessage = { ...message, isRead: true };
    this.contactMessages.set(id, updatedMessage);
    return true;
  }
  
  async deleteContactMessage(id: number): Promise<boolean> {
    return this.contactMessages.delete(id);
  }
  
  // Subscriber operations
  async getSubscribers(): Promise<Subscriber[]> {
    return Array.from(this.subscribers.values());
  }
  
  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    // Check if email already exists
    const existingSubscriber = Array.from(this.subscribers.values())
      .find(s => s.email === insertSubscriber.email);
    
    if (existingSubscriber) {
      return existingSubscriber;
    }
    
    const id = this.currentSubscriberId++;
    const now = new Date();
    const subscriber: Subscriber = { 
      id, 
      ...insertSubscriber, 
      createdAt: now,
      isActive: true
    };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }
  
  async deleteSubscriber(id: number): Promise<boolean> {
    return this.subscribers.delete(id);
  }
  
  // Page operations
  async getPages(): Promise<Page[]> {
    return Array.from(this.pages.values());
  }
  
  async getPageBySlug(slug: string): Promise<Page | undefined> {
    return Array.from(this.pages.values())
      .find(page => page.slug === slug);
  }
  
  async createPage(insertPage: InsertPage): Promise<Page> {
    const id = this.currentPageId++;
    const now = new Date();
    const page: Page = { id, ...insertPage, updatedAt: now };
    this.pages.set(id, page);
    return page;
  }
  
  async updatePage(id: number, pageUpdate: Partial<InsertPage>): Promise<Page | undefined> {
    const page = this.pages.get(id);
    if (!page) return undefined;
    
    const now = new Date();
    const updatedPage: Page = { ...page, ...pageUpdate, updatedAt: now };
    this.pages.set(id, updatedPage);
    return updatedPage;
  }
  
  async deletePage(id: number): Promise<boolean> {
    return this.pages.delete(id);
  }
}

export const storage = new MemStorage();
