# 🌟 Tailwind CSS: External Additions Summary (Custom Utilities & Animations)

## 🧩 What Are External Additions?

External additions in Tailwind CSS allow you to add **custom styles**, utilities, keyframes, and components **beyond the default Tailwind utility classes**.

---

## 🔧 1. `@layer` Directive

Tailwind uses the `@layer` directive to organize custom CSS into specific categories:

- `@layer base` – For base styles (e.g., resets, body font).
- `@layer components` – For custom component classes.
- `@layer utilities` – For custom utility classes (like custom animations or shadows).

---

## 🔁 2. Custom Animations

You can define **custom keyframes** and **animation utilities** using `@keyframes` inside `@layer utilities`.

### ✅ Example:
```css
@layer utilities {
  @keyframes loading {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(250%);
    }
  }

  .animate-loading-bar {
    animation: loading 1.5s infinite;
  }
}