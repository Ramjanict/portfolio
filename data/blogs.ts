export interface BlogSectionItem {
  id: string;
  title: string;
  content: string;
  codeBlocks?: { code: string; language?: string }[];
  bulletPoints?: string[];
  note?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  bannerTitle: string;
  bannerSub: string;
  bannerGradient: string;
  year: "2026" | "2025";
  sections: BlogSectionItem[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ai-agent-in-production",
    title: "Your AI Agent Works in Demo. Will It Survive Production?",
    excerpt:
      "An AI agent is not just an LLM with tools. It is a distributed system with an LLM inside it. A practical guide to building production-grade AI agents — from idempotency and circuit breakers to durable state and evaluation.",
    date: "2026-08-31",
    readTime: "15 Minutes",
    tags: [
      "ai-agents",
      "agentic-ai",
      "distributed-systems",
      "reliability",
      "llm",
      "backend",
      "system-design",
      "production",
    ],
    bannerTitle: "YOUR AI AGENT WORKS IN DEMO",
    bannerSub: "DIES IN PROD: From Demos to Reliable Systems",
    bannerGradient: "from-rose-950 via-zinc-900 to-black text-rose-300",
    year: "2026",
    sections: [
      {
        id: "demo-is-easy-part",
        title: "1. The Demo Is Usually the Easy Part",
        content:
          "There is a stage in almost every AI project where everything feels magical. You give the agent a prompt. It understands the task. It calls the right tool. It gets the right answer. You try it five, ten, maybe twenty times—and it works. So you think: 'The agent is ready.' Then you put it in production. And suddenly you start seeing: duplicate API calls, failed tool executions, agents stuck in loops, lost state, incorrect 'success' messages, huge token bills, timeouts, inconsistent outputs, and failures that are impossible to reproduce.",
        codeBlocks: [
          {
            code: `User\n  ↓\nLLM\n  ↓\nChoose Tool\n  ↓\nExecute Tool\n  ↓\nReturn Result\n  ↓\nAnswer User`,
          },
          {
            code: `1. Identify the order\n2. Call getOrder()\n3. Call cancelOrder()\n4. Tell the user: "Done!"`,
          },
          {
            code: `          ┌──────────┐\n          │   User   │\n          └────┬─────┘\n               │\n          ┌────▼─────┐\n          │   LLM    │\n          └────┬─────┘\n               │\n          ┌────▼─────┐\n          │Tool Layer│\n          └────┬─────┘\n               │\n┌──────────────▼──────────────┐\n│      External API / DB      │\n└──────────────┬──────────────┘\n               │\n┌──────────────▼──────────────┐\n│      Reliability Layer      │\n│ ──────────────────────────  │\n│ • Retry                     │\n│ • Timeout                   │\n│ • Idempotency               │\n│ • Circuit Breaker           │\n│ • State                     │\n│ • Verification              │\n└─────────────────────────────┘`,
          },
        ],
        bulletPoints: [
          "What if getOrder() takes 8 seconds?",
          "What if cancelOrder() succeeds but the response times out?",
          "What if the user sends the same request twice?",
          "What if the server crashes after step 2?",
          "What if the cancellation API is down?",
        ],
      },
      {
        id: "never-trust-agent-done",
        title: "2. Never Trust the Agent's \"Done\"",
        content:
          "This is probably the most important lesson. Imagine an agent is connected to a CRM. The user says: 'Update Rahul's phone number to 9876543210.' The agent calls updateContact({ contactId: '123', phone: '9876543210' }). The API request is sent. But then something happens. Maybe the CRM responds slowly. Maybe your HTTP client times out. Maybe the connection drops after the request reached the CRM. Your application receives Request Timeout. The agent thinks: updateContact() failed. So it tells the user: 'I couldn't update the contact.' But the CRM actually updated it.",
        codeBlocks: [
          {
            code: `await updateContact({\n  contactId: "123",\n  phone: "9876543210"\n});`,
            language: "typescript",
          },
          {
            code: `Request Timeout`,
          },
          {
            code: `updateContact() failed`,
          },
          {
            code: `Agent's belief: updateContact() failed\n                    ≠\nActual system state: Contact phone updated in CRM`,
          },
          {
            code: `updateContact()\n  ↓\nReceive response\n  ↓\nVerify external state\n  ↓\nIs phone actually updated?\n  ↓\nYES → Success\nNO  → Recovery`,
          },
        ],
        note: "The agent should not be the source of truth. Your database, CRM, payment provider, booking system, or external service is the source of truth.",
      },
      {
        id: "silent-green-problem",
        title: "3. The \"Silent Green\" Problem",
        content:
          "This leads to one of the nastiest problems in AI systems. Everything appears green in your dashboard logs, but the user's actual problem wasn't solved.",
        codeBlocks: [
          {
            code: `Agent completed\nTool completed\nRequest completed`,
          },
          {
            code: `"Cancel my subscription"\n  ↓\nAgent\n  ↓\ncancelSubscription()\n  ↓\nTool returns "request accepted"\n  ↓\nAgent\n  ↓\n"Your subscription has been cancelled."`,
          },
          {
            code: `❌ ERROR`,
          },
          {
            code: `✔ SUCCESS`,
          },
          {
            code: `❌ FAILED`,
          },
          {
            code: `Success =\n  Action completed\n  AND\n  Expected state verified`,
          },
        ],
      },
      {
        id: "retries-not-always-safe",
        title: "4. Retries Are Not Always Safe",
        content:
          "As backend engineers, we love retries. An API fails? retry(). Timeout? retry(). Temporary network issue? retry(). But retries become dangerous when the operation is not idempotent.",
        codeBlocks: [
          {
            code: `Agent\n  ↓\ncreateCampaign()\n  ↓\nRequest reaches server\n  ↓\nCampaign created\n  ↓\nNetwork timeout\n  ↓\nClient receives timeout`,
          },
          {
            code: `❌ Failed`,
          },
          {
            code: `createCampaign()`,
          },
          {
            code: `Campaign #101\nCampaign #102`,
          },
        ],
        note: "The problem isn't the retry. The problem is that the operation wasn't idempotent.",
      },
      {
        id: "idempotency-critical",
        title: "5. Idempotency Is Critical for Agents",
        content:
          "For important operations, generate an idempotency key before sending the request to external APIs.",
        codeBlocks: [
          {
            code: `const idempotencyKey = "campaign-user123-request456";\n\nawait createCampaign({\n  name: "August Campaign",\n  idempotencyKey\n});`,
            language: "typescript",
          },
          {
            code: `Request\n  ↓\nCheck idempotency key\n  ↓\nAlready processed?\n  ├── YES → Return previous result\n  └── NO  → Execute operation\n             └→ Store result`,
          },
        ],
        bulletPoints: [
          "payments & refunds",
          "bookings & reservations",
          "CRM updates & email dispatches",
          "phone calls & database mutations",
        ],
      },
      {
        id: "not-every-error-retried",
        title: "6. Not Every Error Should Be Retried",
        content:
          "Another common mistake is treating every failure the same. Suppose an API returns 500 Internal Server Error. A retry might make sense. But imagine 401 Unauthorized or 400 Invalid phone number. Retrying 10 times won't magically authenticate you or fix the phone number.",
        codeBlocks: [
          {
            code: `Timeout      → Retry with backoff\n429          → Respect Retry-After\n500          → Limited retry\n401          → Refresh authentication / fail\n400          → Don't retry blindly\nUnavailable  → Circuit breaker`,
          },
          {
            code: `catch {\n  retry();\n}`,
            language: "typescript",
          },
        ],
      },
      {
        id: "retry-with-backoff",
        title: "7. Retry With Backoff",
        content:
          "Suppose an external service is temporarily failing. Don't do retry + retry + retry + retry within milliseconds. Instead, use exponential backoff and jitter.",
        codeBlocks: [
          {
            code: `Attempt 1 → wait 500ms\nAttempt 2 → wait 1s\nAttempt 3 → wait 2s\nAttempt 4 → stop`,
          },
          {
            code: `delay = base * 2^attempt + jitter`,
            language: "typescript",
          },
        ],
      },
      {
        id: "multi-step-agents-fail",
        title: "8. Multi-Step Agents Multiply Failure",
        content:
          "Suppose each individual step has a 95% chance of succeeding. 1 step = 95%. 5 steps = 0.95^5 = 77%. 10 steps = 0.95^10 = 60%. So even if every individual operation looks reliable, the entire workflow can become surprisingly fragile. Autonomous workflows need checkpoints and recovery.",
        codeBlocks: [
          {
            code: `Step 1 → Checkpoint → Verify\nStep 2 → Checkpoint → Verify\nStep 3 → Checkpoint → Verify`,
          },
        ],
      },
      {
        id: "durable-state",
        title: "9. Your Agent Needs Durable State",
        content:
          "Imagine an agent is processing 100 customers. If state only existed inside process memory, a server crash would lose all progress. Long-running agent workflows should survive process crashes by persisting state in Redis, PostgreSQL, or a queue.",
        codeBlocks: [
          {
            code: `Workflow ID: campaign-123\n\nCustomer 1  → completed\nCustomer 2  → completed\nCustomer 3  → completed\n...\nCustomer 47 → completed\nCustomer 48 → pending`,
          },
          {
            code: `After restart:\nResume from Customer 48`,
          },
        ],
      },
      {
        id: "llm-context-not-db",
        title: "10. LLM Context Is Not Your Database",
        content:
          "This is another architectural mistake. Developers try to keep everything inside the conversation context: user history, CRM data, tool calls, business rules, memory. Eventually the context becomes huge. The LLM should receive relevant state, not the entire history of the universe.",
        codeBlocks: [
          {
            code: `              ┌──────────────┐\n              │  PostgreSQL  │\n              └──────┬───────┘\n                     │\nAgent State ─────────┼─── Redis\n                     │\n                     ├─── Vector Store\n                     │\n                     └─── Workflow DB`,
          },
        ],
      },
      {
        id: "memory-vs-state",
        title: "11. Memory Is Different From State",
        content:
          "State answers: 'What is happening right now?' Memory answers: 'What do we know from the past?' Don't force everything into one giant memory system.",
        codeBlocks: [
          {
            code: `campaign.status = "running"\ncall.status = "in_progress"\nworkflow.step = 4\ncustomer.id = 123`,
          },
          {
            code: `Customer prefers WhatsApp.\nCustomer previously rejected the premium plan.\nCustomer asked to be contacted next month.`,
          },
        ],
      },
      {
        id: "tool-design-matters",
        title: "12. Tool Design Matters More Than Prompt Design",
        content:
          "We often spend hours improving prompts. But sometimes the problem isn't the prompt, it's the tool interface.",
        codeBlocks: [
          {
            code: `type GetCustomerResult =\n  | {\n      status: "found";\n      customer: Customer;\n    }\n  | {\n      status: "not_found";\n    }\n  | {\n      status: "unauthorized";\n    }\n  | {\n      status: "rate_limited";\n      retryAfter: number;\n    };`,
            language: "typescript",
          },
        ],
      },
      {
        id: "bounded-autonomy",
        title: "13. Give Agents Bounded Autonomy",
        content:
          "'Let the agent figure it out' sounds great in a demo. It can be dangerous in production. A production agent needs execution boundaries.",
        codeBlocks: [
          {
            code: `const MAX_STEPS = 15;\nconst MAX_TOOL_CALLS = 20;\nconst MAX_RUNTIME = 60_000;`,
            language: "typescript",
          },
        ],
        bulletPoints: [
          "ask the user for clarification",
          "retry through a controlled recovery path",
          "escalate to a human agent",
          "save state and continue later",
        ],
      },
      {
        id: "evaluation-not-afterthought",
        title: "14. Evaluation Should Not Be An Afterthought",
        content:
          "Don't test agents manually by running one prompt and saying 'Looks good.' Build a benchmark evaluation dataset and run automated tests before deploying changes.",
        codeBlocks: [
          {
            code: `Before change:  92 / 100 passed\nAfter change:   87 / 100 passed  ❌ REGRESSION DETECTED`,
          },
        ],
      },
      {
        id: "observability-for-agents",
        title: "16. Observability Is Different for Agents",
        content:
          "With a normal API, logging POST /users -> 200 is enough. For an agent, you need trace IDs, tool call logs, retry counters, and token cost tracking so you can trace exactly what happened when a user reports a failure.",
        codeBlocks: [
          {
            code: `Trace ID: abc123\n\nUser request\n  ↓\nLLM call (Model: GPT-4o)\n  ↓\nTool: search_customer\n  ↓\nTool: get_campaign\n  ↓\nTool: create_call\n  ↓\nRetry\n  ↓\nVerification\n  ↓\nFinal response`,
          },
        ],
      },
      {
        id: "cost-reliability-problem",
        title: "17. Cost Is Also a Reliability Problem",
        content:
          "One request costing $0.02 is great. An agent entering a loop and making 100 iterations costs $2. 100,000 users in a loop costs $200,000. Cost controls are a safety mechanism.",
      },
      {
        id: "blast-radius",
        title: "18. Think About Blast Radius",
        content:
          "Traditional distributed systems teach us an important idea: don't let one failure take down everything. Use circuit breakers to contain outages.",
        codeBlocks: [
          {
            code: `CRM failures\n  ↓\nThreshold reached\n  ↓\nCircuit OPEN\n  ↓\nStop calling CRM\n  ↓\nFail fast / queue work`,
          },
        ],
      },
      {
        id: "production-architecture",
        title: "19. A Production Agent Architecture",
        content:
          "Putting all of these ideas together, a production AI agent architecture includes an API Gateway, Agent Runner, LLM Router, Tool Layer, Reliability Layer, Durable State, and Observability.",
        codeBlocks: [
          {
            code: `          ┌──────────┐\n          │   User   │\n          └────┬─────┘\n               │\n          ┌────▼─────┐\n          │ API Gateway│\n          └────┬─────┘\n               │\n          ┌────▼─────┐\n          │Agent Runner│\n          └────┬─────┘\n               │\n          ┌────▼─────┐\n          │LLM Router│\n          └────┬─────┘\n               │\n          ┌────▼─────┐\n          │ Tool Layer│\n          └────┬─────┘\n               │\n┌──────────────▼──────────────┐\n│      Reliability Layer      │\n│ • Idempotency  • Retry      │\n│ • Timeout      • Circuit    │\n│ • Verification • Metrics    │\n└──────────────┬──────────────┘\n               │\n┌──────────────▼──────────────┐\n│        Durable State        │\n│   Redis / DB / Queue       │\n└─────────────────────────────┘`,
          },
        ],
      },
      {
        id: "production-checklist",
        title: "20. My Production Checklist for AI Agents",
        content:
          "Before shipping an agent, verify: Idempotency keys set? Retries use backoff? Circuit breakers enabled? State persisted out of process? Evaluation benchmarks passing? Observability traces active?",
        bulletPoints: [
          "Can the operation be executed twice safely?",
          "Do I have idempotency keys?",
          "Can the workflow survive a server restart?",
          "Are maximum steps, tool calls, and token costs capped?",
          "Can I trace one agent execution end-to-end?",
        ],
      },
      {
        id: "bigger-lesson",
        title: "The Bigger Lesson",
        content:
          "Don't build an agent that works when everything goes right. Build a system that remains safe and recoverable when things go wrong. The LLM doesn't need to be perfectly reliable. Your system needs to be resilient to an imperfect LLM.",
      },
      {
        id: "final-takeaway",
        title: "Final Takeaway",
        content:
          "Let the model decide. Let the system enforce correctness. That is where the next phase of AI engineering is heading: building reliable infrastructure around agents.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
