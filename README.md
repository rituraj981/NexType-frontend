# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

==========================================

# NexType - Frontend ⚡

NexType is a high-performance, modern web application designed for seamless file conversion. Built with React and powered by Vite, it offers a sleek, dark-mode-first user experience with fluid animations.


## 🚀 Tech Stack
- **Framework:** React 19 (Vite)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **File Handling:** React Dropzone

## ✨ Key Features
- **Modern Dropzone:** Drag-and-drop interface with animated floating background icons.
- **Dynamic Auth:** Seamless, cross-fading Sign In and Sign Up modals.
- **Zero Layout Shift:** Optimized scroll-locking using `scrollbar-gutter`.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop.
- **Theme Support:** Native Dark/Light mode integration.

## 🛠️ Installation & Setup

1. **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/NexType-frontend.git](https://github.com/YOUR_USERNAME/NexType-frontend.git)
    cd NexType-frontend

2. Install dependencies:

    ```Bash
    npm install

3. Run the development server:

    ```Bash
  npm run dev

4. Build for production:

    ```Bash
    npm run build

📂 Project Structure
- src/features/: Feature-based modules (Auth, Converter, etc.)
- src/components/: Reusable UI components and layouts.
- src/hooks/: Custom React hooks for business logic.