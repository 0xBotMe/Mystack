<p align="right"><strong>简体中文</strong> | <a href="./README.md">English</a></p>

<p align="center">
  <a href="https://mystack.sumku.cc">
    <img src="./public/favicon.svg" width="80" height="80" alt="Mystack Logo" />
  </a>
</p>

<h1 align="center">Mystack</h1>

<p align="center">
  <strong>可配置、可用于生产环境的 TanStack Start 应用生成器与平台模板。</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@0x0501/mystack"><img src="https://img.shields.io/npm/v/@0x0501/mystack?style=flat-square&color=d6c69c&label=npm" alt="npm version" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="License: MIT" /></a>
  <a href="https://nodejs.org"><img src="https://img.shields.io/badge/node-%3E%3D22.12.0-brightgreen?style=flat-square&logo=node.js" alt="Node.js version" /></a>
  <a href="https://bun.sh"><img src="https://img.shields.io/badge/bun-%3E%3D1.2-fbf0df?style=flat-square&logo=bun&logoColor=black" alt="Bun" /></a>
  <a href="https://tanstack.com/start"><img src="https://img.shields.io/badge/TanStack_Start-React_19-FF4154?style=flat-square&logo=react" alt="TanStack Start" /></a>
  <a href="https://mystack.sumku.cc"><img src="https://img.shields.io/badge/website-mystack.sumku.cc-10110f?style=flat-square" alt="Website" /></a>
</p>

<p align="center">
  <img src="./public/og.png" width="100%" alt="Mystack Open Graph Cover" />
</p>

---

使用 **Mystack** 创建配置完善、可用于生产环境的 **TanStack Start** 应用。Mystack 不提供僵化的单体模板或空白起步项目，而是通过交互式生成器，让你选择数据库、部署运行时、邮件和支付服务商。

每个生成的项目都包含强化的身份验证（Better Auth 自托管 OAuth2/OIDC 提供方、双因素验证和通行密钥）、基于角色的管理、全应用国际化（Paraglide JS），以及使用 Tailwind CSS v4 样式化的无头 Base UI。

> **注意：** 使用 `mystack create` 开始新项目。本仓库维护 CLI 和规范参考模板；应用开发应在生成的项目中进行。

## 快速开始

安装 Node.js 22.12+ 和 [Bun](https://bun.sh)。直接从 npm 运行 CLI，启动交互式设置向导：

```sh
bunx @0x0501/mystack
```

要在指定目录中创建项目：

```sh
bunx @0x0501/mystack@latest create my-app
cd my-app
```

按照生成的 `README.md` 配置 `.env`、应用数据库迁移并启动开发服务器：

```sh
cp .env.example .env
bun run db:migrate
bun run dev
```

打开 **http://localhost:3000**。在开发环境中，如果未提供服务商凭据，身份验证邮件会直接输出到控制台。

### 常用配方

#### 1. 零云端本地开发（Bun + SQLite）
无需云账户或 Docker，即刻开始构建：

```sh
bunx @0x0501/mystack@latest create my-app --yes --database bun-sqlite --deployment bun --email resend --payments none
cd my-app
cp .env.example .env
bun run db:migrate
bun run dev
```

#### 2. Cloudflare 边缘栈（PostgreSQL Hyperdrive + Workers）
采用参考模板配置进行边缘部署：

```sh
bunx @0x0501/mystack@latest create my-app --yes --database pg-hyperdrive --deployment cloudflare --email cloudflare --payments stripe
cd my-app
cp .env.example .env
bun run db:up      # 在 Docker Compose 中启动本地 Postgres
bun run db:migrate
bun run dev
```

#### 3. Serverless Turso + Resend + Polar
使用分布式 libSQL 存储及现代邮件和账单服务：

```sh
bunx @0x0501/mystack@latest create my-app --yes --database turso-cloud --deployment cloudflare --email resend --payments polar
```

## 兼容性

Mystack 会根据你选择的技术栈配置代码、迁移、环境变量和依赖。交互式向导会自动禁用不兼容的组合。

### 支持的集成

| 类别 | 徽章与支持的集成 |
|---|---|
| **运行时** | [![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-compatible-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/) [![Nitro / Node.js](https://img.shields.io/badge/Node.js_/_Nitro-compatible-339933?style=flat-square&logo=node.js&logoColor=white)](https://nitro.unjs.io/) [![Bun Native](https://img.shields.io/badge/Bun-compatible-fbf0df?style=flat-square&logo=bun&logoColor=black)](https://bun.sh/) |
| **数据库** | [![PostgreSQL / Hyperdrive](https://img.shields.io/badge/PostgreSQL-Hyperdrive_%7C_Direct-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/) [![Cloudflare D1](https://img.shields.io/badge/Cloudflare_D1-compatible-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://developers.cloudflare.com/d1/) [![Turso](https://img.shields.io/badge/Turso-Cloud_%7C_libSQL-4FF8D2?style=flat-square&logo=turso&logoColor=black)](https://turso.tech/) [![Bun SQLite](https://img.shields.io/badge/Bun_SQLite-native-fbf0df?style=flat-square&logo=bun&logoColor=black)](https://bun.sh/) |
| **邮件** | [![Cloudflare Email](https://img.shields.io/badge/Cloudflare_Email-compatible-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://developers.cloudflare.com/email-routing/) [![Resend](https://img.shields.io/badge/Resend-compatible-black?style=flat-square&logo=resend&logoColor=white)](https://resend.com/) |
| **支付** | [![Stripe](https://img.shields.io/badge/Stripe-compatible-635BFF?style=flat-square&logo=stripe&logoColor=white)](https://stripe.com/) [![Polar](https://img.shields.io/badge/Polar-compatible-0052FF?style=flat-square&logo=polar&logoColor=white)](https://polar.sh/) [![Creem](https://img.shields.io/badge/Creem-compatible-00D084?style=flat-square)](https://creem.io/) [![NOWPayments](https://img.shields.io/badge/NOWPayments-compatible-2B6DEF?style=flat-square)](https://nowpayments.io/) |

### 数据库与部署矩阵

| 数据库选项 | 标志 | 支持的部署方式 | 连接方式与特性 |
|---|---|---|---|
| **PostgreSQL (Hyperdrive)** | `pg-hyperdrive` | Cloudflare Workers | Cloudflare `HYPERDRIVE` 连接池 |
| **PostgreSQL (Direct)** | `pg` | Nitro / Node.js、Bun | 直连 `DATABASE_URL` 应用角色 |
| **Cloudflare D1** | `d1` | Cloudflare Workers | Cloudflare `DB` 原生绑定 |
| **Turso Cloud** | `turso-cloud` | Cloudflare、Nitro、Bun | 开发环境使用本地 `.local/turso-local.db`；生产环境使用远程 `libsql://` |
| **Turso Local (libSQL)** | `turso-local` | Nitro / Node.js、Bun | 本地 `file:.local/turso-local.db`（无需云令牌） |
| **Bun SQLite** | `bun-sqlite` | Bun | 原生 `bun:sqlite` 引擎（`local.db`） |

你的选择会记录在 `mystack.json` 中，供参考。

## 功能与平台能力

Mystack 提供平台基础设施，让你专注于构建产品：

- 🛡️ **强化的 Better Auth**：邮箱/密码身份验证、GitHub OAuth、通行密钥（WebAuthn）和双因素验证（2FA）。
- 🔑 **OAuth 2.0 / OIDC 提供方**：内置身份提供方，可签发令牌并公开 RFC 发现元数据（`/.well-known/openid-configuration`、`/.well-known/oauth-authorization-server/api/auth`）。
- ⚡ **TanStack Start 与 React 19**：全栈类型安全、流式 SSR、TanStack Router 文件路由、服务端函数（`createServerFn`）和 TanStack Query 状态缓存。
- 🌐 **全应用国际化**：基于 Paraglide JS，支持 SEO 友好的本地化 URL 路径（`/`、`/de`）和自动保存用户语言偏好。
- 🎨 **无头 UI 与 Tailwind CSS v4**：模块化 Base UI（`@base-ui/react`）原语，支持可定制的 Tailwind CSS v4 设计令牌和深色模式。
- 🔒 **行级安全（RLS）**：通过租户/服务上下文辅助工具隔离数据库事务范围。
- 🎛️ **管理控制台与审计日志**：基于角色的访问控制、管理员之间的相互保护、OAuth 客户端管理和审计日志跟踪。
- 💳 **可插拔支付**：模块化结账和 webhook 处理，支持 Stripe、Polar、Creem 和 NOWPayments（或 `none`）。

## 仓库结构

| 路径 | 用途 |
|---|---|
| 根目录（`src/`、`scripts/`、`drizzle/`） | 规范、可运行的参考模板（PostgreSQL + Cloudflare Workers） |
| [`packages/mystack/`](./packages/mystack/) | CLI 生成器、选项目录和模板适配器（`@0x0501/mystack`） |
| [`packages/website/`](./packages/website/) | 营销网站和基于目录的技术栈配置器（[mystack.sumku.cc](https://mystack.sumku.cc)） |
| [`docs/`](./docs/) | 架构决策记录（ADR）、规格说明和维护指南 |

根应用是规范模板的来源。有关组合与模板打包的详情，请参阅 [ADR 0012](./docs/adr/0012-mystack-project-generation.md)。

## 文档

- [开始使用](./docs/getting-started.md) — CLI 安装、参数和部署指南
- [项目指南](./docs/project-guide.md) — 在生成的应用中开发（随 CLI 打包）
- [参考模板](./docs/reference-template.md) — PostgreSQL / Workers 参考应用的维护者设置指南
- [设计](./DESIGN.md) — Headless Base UI 集成、设计令牌和动效
- [贡献指南](./docs/contributing.md) — 开发适配器和维护 CLI
- [发布](./docs/publishing.md) — 打包与自动化发布工作流
- [上下文与术语表](./CONTEXT.md) — 通用语言与架构不变量
- [文档索引](./docs/README.md) — 完整文档与 ADR 目录

## 参与贡献

欢迎贡献。参与方式：

1. Fork 本仓库。
2. 为你的改动创建一个分支。
3. 运行 `bun run check`。
4. 在 GitHub 上向 `main` 分支提交 Pull Request，并附上清晰的说明。

本地设置和项目开发指南请参阅[贡献指南](./docs/contributing.md)。

## 许可证

[MIT](./LICENSE)
