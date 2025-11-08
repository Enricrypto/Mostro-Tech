# 🎶 Mostro-Tech

**Mostro** is a Web3-based platform redefining the relationship between **artists and fans** through **music, blockchain, and gamification**.  
It empowers creators to **tokenize their work**, **raise funds**, and **build vibrant communities** — all while giving fans a stake in their favorite artists’ journeys.

---

## 🚀 Features

- 🎵 **Tokenized Assets** — Artists can launch their own tokens, enabling new models of ownership and value exchange.
- 💰 **Crowdfunding Mechanisms** — Fans can directly fund artists through community-driven initiatives and token-based launches.
- 🕹️ **Gamification & Rewards** — Fans collect **perks** (music, events, merch, and more) and **exclusive content** (new releases, demos, special collections).

---

## 🛠️ Tech Stack

| Layer                    | Technologies                                                         |
| ------------------------ | -------------------------------------------------------------------- |
| **Frontend**             | React, Next.js (App Router), TailwindCSS, shadcn/ui                  |
| **State Management**     | Zustand                                                              |
| **Blockchain (Solana)**  | Rust, Anchor Framework                                               |
| **Wallet Integration**   | Solana Wallet Adapter                                                |
| **Backend (API Routes)** | Next.js API routes _(server-side logic, no separate backend needed)_ |
| **Design**               | Figma (UI/UX flows and components)                                   |

---

## 📁 Folder Structure

### 🧱 Frontend (`frontend/src`)
```

src/
├── components/ # Core component library
│ ├── atoms/ # Fundamental UI elements (buttons, icons, tooltips)
│ │ ├── Button
│ │ ├── Icon
│ │ ├── AlertDialog
│ │ ├── Tooltip
│ │ └── ...
│ │
│ ├── dashboard/ # Dashboard-specific UI (badges, metrics)
│ ├── display/ # Display cards and widgets (ArtistCard, SongCard, etc.)
│ ├── hero/ # Landing page hero components
│ ├── inputs/ # Input components (forms, voting buttons, selects)
│ ├── layout/ # Page structure and containers
│ ├── molecules/ # Complex reusable blocks (ProfileCard, VotingSection, etc.)
│ ├── navigation/ # Header, Navbar, Footer, and section controls
│ ├── sections/ # Page-level sections (Community, Music, Token, Proposals)
│ ├── templates/ # Dashboard and stats templates
│ ├── ui/ # Base shadcn/ui components (alert, input, dropdown, etc.)
│ └── utils/ # Component-level helpers (Badge, Graph, Modal)
│
├── app/ # Next.js App Router pages
│ ├── page.tsx # Landing page
│ ├── layout.tsx # Global layout
│ ├── globals.css # Global styles
│ ├── all-artists/ # All Artists listing page
│ ├── artists/ # Individual artist pages
│ ├── launches/ # New launches and discovery
│ ├── profile/ # User profile
│ └── vote/ # Voting pages
│
└── state/ # Zustand stores and state management

```

---

### ⚙️ Smart Contracts (`programs/`)

```

programs/
├── src/ # Solana programs written in Rust
│ ├── lib.rs # Entry point and module definitions
│ └── instructions/ # On-chain logic and handlers
├── Cargo.toml # Rust dependencies
└── Anchor.toml # Anchor configuration

```

---

### 🌐 Backend / API Integrations (`backend/`)

```

backend/
├── api/ # Next.js API routes (server-side endpoints)
└── services/ # Off-chain or third-party integrations

```

---

### 📘 Documentation (`docs/`)

```

docs/
├── architecture.md # System design overview
├── flow-diagrams/ # Visuals and process diagrams
└── planning/ # MVP roadmap, sprints, and milestones

````

---

## 🎯 MVP Scope

The **Mostro MVP** focuses on delivering the foundation of the Web3 music ecosystem:

- 🪩 **Landing Page** — Wallet connection (Solana Wallet Adapter) and introduction
- 🌍 **Home Page** — Global stats, featured artists, and live data
- 🎤 **Artist Page** — Token stats, proposals, and fan community
- 🗳️ **Proposal View** — Voting section for on-chain decisions
- 🚀 **Launches Page** — Discover new artist tokens and campaigns
- 👥 **All Artists Page** — Explore verified artists
- 🙋 **User Profile** — Manage wallet, perks, and collected music

---

## 🤝 Contributing

We welcome community contributions!
To get started:

1. **Fork** the repository
2. **Create** your feature branch
   ```bash
   git checkout -b feature/your-feature
   ```

3. **Commit** your changes

   ```bash
   git commit -m "Add your feature"
   ```

4. **Push** to your branch

   ```bash
   git push origin feature/your-feature
   ```

5. **Open a Pull Request** 🚀

---

## 📜 License

This project is licensed under the **MIT License**.
See the [LICENSE](./LICENSE) file for details.

---

## 🌐 Links

- **Website**: [mostro.xyz](https://mostro.xyz)
- **App**: [app.mostroxyz.com](https://app.mostroxyz.com)
- **Docs**: Coming soon
- **Designs**: [Figma](https://figma.com) (internal access)

---

### ✨ Built with passion by the Mostro Team
