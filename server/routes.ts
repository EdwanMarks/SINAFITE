import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
// Use database storage instead of memory storage
import { dbStorage as storage } from "./database";
import { 
  insertArticleSchema,
  insertContactMessageSchema,
  insertServiceSchema,
  insertSubscriberSchema,
  insertPageSchema,
  insertUserSchema
} from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Error handling middleware
  const handleError = (err: Error, res: Response) => {
    console.error(err);
    if (err instanceof ZodError) {
      const validationError = fromZodError(err);
      return res.status(400).json({ message: validationError.message });
    }
    return res.status(500).json({ message: err.message || 'Internal Server Error' });
  };

  // API routes
  // All routes prefixed with /api

  // Articles
  app.get("/api/articles", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      const articles = await storage.getArticles(limit);
      res.json(articles);
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  app.get("/api/articles/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const article = await storage.getArticleById(id);
      if (!article) {
        return res.status(404).json({ message: "Article not found" });
      }
      res.json(article);
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  app.get("/api/articles/category/:category", async (req, res) => {
    try {
      const category = req.params.category;
      const articles = await storage.getArticlesByCategory(category);
      res.json(articles);
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  app.post("/api/articles", async (req, res) => {
    try {
      const articleData = insertArticleSchema.parse(req.body);
      const article = await storage.createArticle(articleData);
      res.status(201).json(article);
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  app.put("/api/articles/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const articleData = insertArticleSchema.partial().parse(req.body);
      const article = await storage.updateArticle(id, articleData);
      if (!article) {
        return res.status(404).json({ message: "Article not found" });
      }
      res.json(article);
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  app.delete("/api/articles/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteArticle(id);
      if (!success) {
        return res.status(404).json({ message: "Article not found" });
      }
      res.status(204).send();
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  // Services
  app.get("/api/services", async (req, res) => {
    try {
      const services = await storage.getServices();
      res.json(services);
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  app.get("/api/services/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const service = await storage.getServiceById(id);
      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }
      res.json(service);
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  app.post("/api/services", async (req, res) => {
    try {
      const serviceData = insertServiceSchema.parse(req.body);
      const service = await storage.createService(serviceData);
      res.status(201).json(service);
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  app.put("/api/services/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const serviceData = insertServiceSchema.partial().parse(req.body);
      const service = await storage.updateService(id, serviceData);
      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }
      res.json(service);
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  app.delete("/api/services/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteService(id);
      if (!success) {
        return res.status(404).json({ message: "Service not found" });
      }
      res.status(204).send();
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  // Contact messages
  app.post("/api/contact", async (req, res) => {
    try {
      const messageData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(messageData);
      res.status(201).json({ success: true, message: "Message sent successfully" });
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  app.put("/api/contact/:id/read", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.markMessageAsRead(id);
      if (!success) {
        return res.status(404).json({ message: "Message not found" });
      }
      res.json({ success: true });
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  app.delete("/api/contact/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteContactMessage(id);
      if (!success) {
        return res.status(404).json({ message: "Message not found" });
      }
      res.status(204).send();
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  // Newsletter subscribers
  app.post("/api/subscribers", async (req, res) => {
    try {
      const subscriberData = insertSubscriberSchema.parse(req.body);
      const subscriber = await storage.createSubscriber(subscriberData);
      res.status(201).json({ success: true, message: "Subscription successful" });
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  app.get("/api/subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getSubscribers();
      res.json(subscribers);
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  app.delete("/api/subscribers/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteSubscriber(id);
      if (!success) {
        return res.status(404).json({ message: "Subscriber not found" });
      }
      res.status(204).send();
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  // Pages
  app.get("/api/pages", async (req, res) => {
    try {
      const pages = await storage.getPages();
      res.json(pages);
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  app.get("/api/pages/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const page = await storage.getPageBySlug(slug);
      if (!page) {
        return res.status(404).json({ message: "Page not found" });
      }
      res.json(page);
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  app.post("/api/pages", async (req, res) => {
    try {
      const pageData = insertPageSchema.parse(req.body);
      const page = await storage.createPage(pageData);
      res.status(201).json(page);
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  app.put("/api/pages/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const pageData = insertPageSchema.partial().parse(req.body);
      const page = await storage.updatePage(id, pageData);
      if (!page) {
        return res.status(404).json({ message: "Page not found" });
      }
      res.json(page);
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  app.delete("/api/pages/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deletePage(id);
      if (!success) {
        return res.status(404).json({ message: "Page not found" });
      }
      res.status(204).send();
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  // Authentication
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = z.object({
        username: z.string(),
        password: z.string()
      }).parse(req.body);
      
      const user = await storage.getUserByUsername(username);
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      
      // In a real application, we would use JWT or session here
      res.json({
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        role: user.role
      });
    } catch (err) {
      handleError(err as Error, res);
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
