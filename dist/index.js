// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";
var MemStorage = class {
  blogPosts;
  caseStudies;
  testimonials;
  contactSubmissions;
  constructor() {
    this.blogPosts = /* @__PURE__ */ new Map();
    this.caseStudies = /* @__PURE__ */ new Map();
    this.testimonials = /* @__PURE__ */ new Map();
    this.contactSubmissions = /* @__PURE__ */ new Map();
    this.seedData();
  }
  seedData() {
    const blogPosts2 = [
      {
        title: "Kubernetes Best Practices for Production Environments in 2024",
        slug: "kubernetes-best-practices-2024",
        excerpt: "A comprehensive guide to running Kubernetes in production, covering security, scalability, and operational excellence.",
        content: "Running Kubernetes in production requires careful planning and adherence to best practices...",
        category: "DevOps",
        author: "Sarah Chen",
        authorRole: "Lead DevOps Architect",
        imageUrl: "/attached_assets/stock_images/abstract_technology__a562ce83.jpg",
        publishedAt: /* @__PURE__ */ new Date("2024-11-15"),
        readTime: 12
      },
      {
        title: "Building Reusable Terraform Modules: A Practical Guide",
        slug: "terraform-modules-guide",
        excerpt: "Learn how to create maintainable and reusable infrastructure code with Terraform modules.",
        content: "Terraform modules are the building blocks of infrastructure as code...",
        category: "Infrastructure",
        author: "Michael Rodriguez",
        authorRole: "Cloud Architect",
        imageUrl: "/attached_assets/stock_images/abstract_technology__0544358e.jpg",
        publishedAt: /* @__PURE__ */ new Date("2024-11-12"),
        readTime: 8
      },
      {
        title: "Securing Your CI/CD Pipeline: Essential Strategies",
        slug: "cicd-pipeline-security",
        excerpt: "Discover critical security practices to protect your deployment pipeline from threats.",
        content: "CI/CD pipeline security is crucial for maintaining the integrity of your deployments...",
        category: "Security",
        author: "Emily Thompson",
        authorRole: "Security Engineer",
        imageUrl: "/attached_assets/stock_images/abstract_technology__f3375967.jpg",
        publishedAt: /* @__PURE__ */ new Date("2024-11-10"),
        readTime: 10
      },
      {
        title: "AWS Cost Optimization: Save 40% on Your Cloud Bill",
        slug: "aws-cost-optimization",
        excerpt: "Proven strategies to reduce AWS costs without compromising performance or reliability.",
        content: "Cloud costs can spiral out of control without proper optimization strategies...",
        category: "Cloud",
        author: "David Martinez",
        authorRole: "Cloud Solutions Architect",
        imageUrl: "/attached_assets/stock_images/abstract_technology__4d4c3775.jpg",
        publishedAt: /* @__PURE__ */ new Date("2024-11-08"),
        readTime: 15
      },
      {
        title: "Monitoring Microservices: Tools and Best Practices",
        slug: "microservices-monitoring",
        excerpt: "Effective monitoring strategies for distributed systems and microservices architectures.",
        content: "Monitoring microservices requires a different approach than traditional monolithic applications...",
        category: "DevOps",
        author: "James Wilson",
        authorRole: "Platform Engineer",
        imageUrl: "/attached_assets/stock_images/abstract_technology__e117ee5c.jpg",
        publishedAt: /* @__PURE__ */ new Date("2024-11-05"),
        readTime: 9
      },
      {
        title: "10 Docker Performance Optimization Tips",
        slug: "docker-performance-tips",
        excerpt: "Practical tips to improve Docker container performance and reduce resource consumption.",
        content: "Docker containers are lightweight, but they still require optimization for best performance...",
        category: "Containers",
        author: "Lisa Anderson",
        authorRole: "DevOps Consultant",
        imageUrl: "/attached_assets/stock_images/cloud_computing_netw_e6d9ab37.jpg",
        publishedAt: /* @__PURE__ */ new Date("2024-11-03"),
        readTime: 7
      }
    ];
    blogPosts2.forEach((post) => {
      const id = randomUUID();
      this.blogPosts.set(id, { ...post, id });
    });
    const caseStudies2 = [
      {
        title: "FinanceHub Cloud Migration",
        slug: "fintech-migration",
        client: "FinanceHub",
        industry: "Financial Services",
        challenge: "FinanceHub, a leading digital banking platform serving over 2 million customers, was struggling with their on-premises infrastructure. Their legacy systems couldn't scale to meet growing demand, deployments took weeks, and compliance requirements were becoming increasingly difficult to manage.",
        solution: "We designed and executed a comprehensive cloud migration strategy to AWS. The project included migrating critical banking applications to a highly available, multi-region architecture, implementing infrastructure as code with Terraform, setting up automated CI/CD pipelines, and establishing comprehensive monitoring and security controls.",
        results: "The transformation was remarkable. FinanceHub achieved 99.99% uptime, reduced infrastructure costs by 50%, and accelerated deployment cycles from weeks to hours. The new cloud infrastructure automatically scales to handle traffic spikes, and the team can now deploy updates multiple times per day.",
        imageUrl: "/attached_assets/stock_images/cloud_computing_netw_a0a74ee2.jpg",
        metrics: ["99.99% uptime", "50% cost reduction", "3x faster deployments"],
        technologies: ["AWS", "Kubernetes", "Terraform", "Docker"],
        testimonialQuote: "Quest Lab Services  transformed our infrastructure in just 3 months. The migration was seamless, with zero downtime, and the results exceeded our expectations.",
        testimonialAuthor: "Sarah Chen",
        testimonialRole: "CTO, FinanceHub"
      },
      {
        title: "HealthTech CI/CD Transformation",
        slug: "healthcare-automation",
        client: "MedConnect",
        industry: "Healthcare",
        challenge: "MedConnect needed to accelerate their release cycles while maintaining HIPAA compliance and ensuring zero downtime for their critical healthcare applications.",
        solution: "We implemented a comprehensive CI/CD pipeline with automated testing, security scanning, and HIPAA-compliant deployment processes. The solution included blue-green deployments, automated rollback capabilities, and comprehensive audit logging.",
        results: "Deployment time reduced from days to hours, with 100% HIPAA compliance maintained. The team achieved 80% faster releases with zero security incidents.",
        imageUrl: "/attached_assets/stock_images/cloud_computing_netw_e6d9ab37.jpg",
        metrics: ["80% faster releases", "Zero security incidents", "100% HIPAA compliance"],
        technologies: ["GitLab CI", "Kubernetes", "Vault", "Prometheus"],
        testimonialQuote: "The automation has transformed how we deliver value to our customers. We can now respond to market needs in days instead of months.",
        testimonialAuthor: "Dr. Michael Rodriguez",
        testimonialRole: "VP Engineering, MedConnect"
      },
      {
        title: "RetailPro Black Friday Success",
        slug: "ecommerce-scaling",
        client: "RetailPro",
        industry: "E-Commerce",
        challenge: "RetailPro's infrastructure couldn't handle Black Friday traffic spikes, resulting in lost sales and poor customer experience during peak shopping periods.",
        solution: "We built an auto-scaling infrastructure on AWS with CloudFront CDN, DynamoDB for session management, and Kubernetes for container orchestration. The solution included comprehensive load testing and performance optimization.",
        results: "Successfully handled 10x normal traffic during Black Friday with zero downtime. Page load times improved by 45%, and infrastructure costs were reduced by 30% through intelligent auto-scaling.",
        imageUrl: "/attached_assets/stock_images/cloud_computing_netw_1bf6f3b3.jpg",
        metrics: ["10x traffic handled", "45% faster load times", "Zero downtime"],
        technologies: ["AWS", "Kubernetes", "CloudFront", "DynamoDB"]
      },
      {
        title: "TechCorp Legacy Modernization",
        slug: "enterprise-modernization",
        client: "TechCorp Global",
        industry: "Enterprise",
        challenge: "TechCorp's monolithic applications were slowing down innovation and making it difficult to scale their development team.",
        solution: "We transformed their monolithic applications into microservices architecture on Kubernetes, implemented service mesh for communication, and established DevOps practices for continuous delivery.",
        results: "Deployment frequency increased by 80%, infrastructure costs reduced by 50%, and developer productivity improved 5x with better tooling and automation.",
        imageUrl: "/attached_assets/stock_images/software_developer_c_5f26974a.jpg",
        metrics: ["80% faster deployments", "50% cost savings", "5x developer productivity"],
        technologies: ["Kubernetes", "Istio", "Terraform", "Jenkins"]
      },
      {
        title: "StartupX Rapid Growth Infrastructure",
        slug: "startup-infrastructure",
        client: "StartupX",
        industry: "SaaS",
        challenge: "StartupX needed infrastructure that could scale rapidly to support their explosive user growth without breaking the bank.",
        solution: "We built a cost-optimized, auto-scaling infrastructure on Google Cloud Platform with containerized applications, managed databases, and comprehensive monitoring.",
        results: "Successfully scaled from 10K to 1M users with 99.9% uptime while optimizing costs by 60% through spot instances and right-sizing.",
        imageUrl: "/attached_assets/stock_images/software_developer_c_c0a960c0.jpg",
        metrics: ["100x user growth", "99.9% uptime", "60% cost optimization"],
        technologies: ["Google Cloud", "Kubernetes", "PostgreSQL", "Redis"]
      },
      {
        title: "DataSecure Compliance Automation",
        slug: "security-compliance",
        client: "DataSecure Inc",
        industry: "Cybersecurity",
        challenge: "DataSecure needed to automate security compliance monitoring to achieve SOC2 Type II certification while maintaining operational efficiency.",
        solution: "We implemented automated compliance monitoring, security scanning, and audit logging across their entire infrastructure. The solution included policy-as-code and automated remediation.",
        results: "Achieved SOC2 Type II certification with 90% automation of compliance checks and zero security breaches. Audit preparation time reduced from weeks to days.",
        imageUrl: "/attached_assets/stock_images/abstract_technology__a562ce83.jpg",
        metrics: ["SOC2 certified", "90% automation", "Zero breaches"],
        technologies: ["AWS Security Hub", "Terraform", "Vault", "Prisma Cloud"]
      }
    ];
    caseStudies2.forEach((study) => {
      const id = randomUUID();
      this.caseStudies.set(id, { ...study, id });
    });
    const testimonials2 = [
      {
        quote: "Quest Lab Services  transformed our infrastructure in just 3 months. Our deployment time went from days to minutes.",
        author: "Sarah Chen",
        role: "CTO",
        company: "TechCorp Inc.",
        avatarUrl: "/placeholder-avatar.jpg"
      },
      {
        quote: "The team's expertise in Kubernetes and cloud architecture saved us millions in infrastructure costs.",
        author: "Michael Rodriguez",
        role: "VP Engineering",
        company: "DataFlow Systems",
        avatarUrl: "/placeholder-avatar.jpg"
      },
      {
        quote: "Outstanding support and deep technical knowledge. They're true partners in our digital transformation.",
        author: "Emily Thompson",
        role: "Head of DevOps",
        company: "FinanceHub",
        avatarUrl: "/placeholder-avatar.jpg"
      }
    ];
    testimonials2.forEach((testimonial) => {
      const id = randomUUID();
      this.testimonials.set(id, { ...testimonial, id });
    });
  }
  async getBlogPosts() {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
    );
  }
  async getBlogPostBySlug(slug) {
    return Array.from(this.blogPosts.values()).find((post) => post.slug === slug);
  }
  async createBlogPost(insertPost) {
    const id = randomUUID();
    const post = { ...insertPost, id };
    this.blogPosts.set(id, post);
    return post;
  }
  async getCaseStudies() {
    return Array.from(this.caseStudies.values());
  }
  async getCaseStudyBySlug(slug) {
    return Array.from(this.caseStudies.values()).find((study) => study.slug === slug);
  }
  async createCaseStudy(insertStudy) {
    const id = randomUUID();
    const study = { ...insertStudy, id };
    this.caseStudies.set(id, study);
    return study;
  }
  async getTestimonials() {
    return Array.from(this.testimonials.values());
  }
  async createTestimonial(insertTestimonial) {
    const id = randomUUID();
    const testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
  async createContactSubmission(insertSubmission) {
    const id = randomUUID();
    const submission = {
      ...insertSubmission,
      id,
      submittedAt: /* @__PURE__ */ new Date()
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
  async getContactSubmissions() {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => b.submittedAt.getTime() - a.submittedAt.getTime()
    );
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  author: text("author").notNull(),
  authorRole: text("author_role").notNull(),
  imageUrl: text("image_url").notNull(),
  publishedAt: timestamp("published_at").notNull(),
  readTime: integer("read_time").notNull()
});
var insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true
});
var caseStudies = pgTable("case_studies", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  client: text("client").notNull(),
  industry: text("industry").notNull(),
  challenge: text("challenge").notNull(),
  solution: text("solution").notNull(),
  results: text("results").notNull(),
  imageUrl: text("image_url").notNull(),
  metrics: text("metrics").notNull().array(),
  technologies: text("technologies").notNull().array(),
  testimonialQuote: text("testimonial_quote"),
  testimonialAuthor: text("testimonial_author"),
  testimonialRole: text("testimonial_role")
});
var insertCaseStudySchema = createInsertSchema(caseStudies).omit({
  id: true
});
var contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  serviceInterest: text("service_interest").notNull(),
  message: text("message").notNull(),
  submittedAt: timestamp("submitted_at").notNull().default(sql`now()`)
});
var insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  submittedAt: true
});
var testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  quote: text("quote").notNull(),
  author: text("author").notNull(),
  role: text("role").notNull(),
  company: text("company").notNull(),
  avatarUrl: text("avatar_url").notNull()
});
var insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true
});

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/blog-posts", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });
  app2.get("/api/blog-posts/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });
  app2.post("/api/blog-posts", async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ error: "Invalid blog post data" });
    }
  });
  app2.get("/api/case-studies", async (req, res) => {
    try {
      const studies = await storage.getCaseStudies();
      res.json(studies);
    } catch (error) {
      console.error("Error fetching case studies:", error);
      res.status(500).json({ error: "Failed to fetch case studies" });
    }
  });
  app2.get("/api/case-studies/:slug", async (req, res) => {
    try {
      const study = await storage.getCaseStudyBySlug(req.params.slug);
      if (!study) {
        return res.status(404).json({ error: "Case study not found" });
      }
      res.json(study);
    } catch (error) {
      console.error("Error fetching case study:", error);
      res.status(500).json({ error: "Failed to fetch case study" });
    }
  });
  app2.post("/api/case-studies", async (req, res) => {
    try {
      const validatedData = insertCaseStudySchema.parse(req.body);
      const study = await storage.createCaseStudy(validatedData);
      res.status(201).json(study);
    } catch (error) {
      res.status(400).json({ error: "Invalid case study data" });
    }
  });
  app2.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials2 = await storage.getTestimonials();
      res.json(testimonials2);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });
  app2.post("/api/testimonials", async (req, res) => {
    try {
      const validatedData = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(validatedData);
      res.status(201).json(testimonial);
    } catch (error) {
      res.status(400).json({ error: "Invalid testimonial data" });
    }
  });
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      console.log("Contact submission received (ID redacted)");
      res.status(201).json({
        success: true,
        message: "Thank you for contacting us. We'll respond within 24 hours."
      });
    } catch (error) {
      console.error("Contact form error:", error);
      if (error.name === "ZodError") {
        return res.status(400).json({
          error: "Invalid form data",
          details: error.errors
        });
      }
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contact submissions" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      ),
      await import("@replit/vite-plugin-dev-banner").then(
        (m) => m.devBanner()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(process.cwd(), "dist", "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use("/attached_assets", express.static(path2.join(process.cwd(), "attached_assets")));
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
import path3 from "path";
var app = express2();
app.use(express2.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path4 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path4.startsWith("/api")) {
      let logLine = `${req.method} ${path4} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
app.use("/attached_assets", express2.static(path3.join(process.cwd(), "attached_assets")));
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  const host = process.env.NODE_ENV === "development" ? "localhost" : "0.0.0.0";
  server.listen(port, host, () => {
    log(`serving on ${host}:${port}`);
  });
})();
