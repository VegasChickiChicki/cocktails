[![Lint Status](https://github.com/VegasChickiChicki/cocktails/actions/workflows/lint.yml/badge.svg)](https://github.com/VegasChickiChicki/cocktails/actions/workflows/lint.yml)

# Cocktails

**Cocktails** — это веб-приложение для просмотра и поиска рецептов коктейлей. Проект построен на базе Nuxt.js с использованием Vue, TypeScript и SCSS, что обеспечивает современную архитектуру и удобство разработки.

## О проекте

В данном проекте реализовано динамическое отображение информации о коктейлях. Каждый коктейль представлен на своей странице, где вы можете ознакомиться с ингредиентами, инструкциями по приготовлению и другой полезной информацией. Проект является расширенной версией Nuxt Minimal Starter и настроен для быстрого старта разработки и легкого развёртывания.

## Технологии

- Nuxt.js – фреймворк для разработки SSR и SPA приложений на Vue.
- Vue.js – прогрессивный JavaScript-фреймворк для создания пользовательских интерфейсов.
- TypeScript – статически типизированный надстройка над JavaScript.
- SCSS – препроцессор для CSS для более удобного написания стилей.

## Структура проекта

```
assets/           - Стили и статические ресурсы
components/       - Vue-компоненты для переиспользуемых UI-элементов
constants/        - Файлы с константами, используемыми в проекте
layouts/          - Макеты страниц приложения
middleware/       - Промежуточное ПО для обработки маршрутов
pages/[cocktail]/ - Динамические страницы для каждого коктейля
public/           - Публичные статические файлы (изображения, иконки и т.д.)
server/           - Серверная логика и API-эндпоинты
stores/cocktails/ - Хранилище состояния (например, с использованием Pinia) для управления данными коктейлей
utils/            - Утилиты и вспомогательные функции
```

## Установка

1. Клонируйте репозиторий:

   `git clone https://github.com/VegasChickiChicki/cocktails.git`

2. Перейдите в директорию проекта:

   `cd cocktails`

3. Установите зависимости:

    #### С использованием npm
    `npm install`

    #### Или с использованием yarn
    `yarn install`

    #### Или с использованием pnpm
    `pnpm install`
    
4. Создайте конфиг:

    `Пример конфига можно увидеть в файле .env.example`

## Запуск в режиме разработки

Запустите локальный сервер разработки:

### С использованием npm

`npm run dev`

### Или с использованием yarn

`yarn dev`

## Деплой

Для деплоя проекта ознакомьтесь с документацией Nuxt, где описаны различные варианты развёртывания (например, на Vercel, Netlify и т.д.).

## Контакты

Автор: [VegasChickiChicki](https://github.com/VegasChickiChicki)
