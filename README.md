<h2>Авторство</h2>

Полностью самостоятельная разработка (дизайн, фронтенд, бэкенд).

<h2>Описание</h2>

Smurfs-lol - это полностью готовый, рабочий проект интернет-магазина League of Legends аккаунтов с автоматической доставкой логина / пароля на почту плательщика.
В качестве платёжного аггрегатора используется https://payop.com/.

<h2>Использованные технологии</h2>
<ul>
  <li>Фронт: Nuxt 2 (ssr) / tailwind css</li>
  <li>Бэкенд: Strapi Headless CMS, MySQL DB</li>
</ul>

<h2>Инструкция по развёртыванию проекта</h2>

<h3>Фронт</h3>

Необходимо перейти в директорию "client" и выполнить пару команд в указанной последовательности:

<ul>
  <li><code>yarn install</code></li>
  <li><code>yarn run dev</code></li>
</ul>

<h3>Бэкенд</h3>

Для запуска бекенда понадобится развернуть чистую MySQL базу данных и перенастроить под неё database конфиг, находящийся в директории <code>smurfs-lol/server/config/database.js</code>. Сделать это довольно просто, достаточно мельком ознакомиться с <a href="https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/required/databases.html#configuration-structure">соответствующим разделом официальной документации Strapi</a>.
