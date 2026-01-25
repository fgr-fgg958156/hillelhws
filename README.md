ДЗ 4. 🌏 Countries App (React Router)

SPA-застосунок для відображення інформації про країни.

**Стек:**

1. React Router✔️
2. API: https://restcountries.com/✔️

**Структура додатку:**✔️

1. На кожній сторінці зверху    відображається **header** з компонентом **Menu**.
    * Компонент **Menu** – це навігація по сторінкам. В меню лише один пункт – Home.✔️
2. Сторінка **Home** містить:
    * **Компонент зі списком країн.** Дані отримуємо з API https://restcountries.com/v3.1/all?fields=name,cca2,flag,region.
        - Кожен елемент списку — це посилання на сторінку /countries/:code (Country.jsx), де code — це country.cca2. Текст посилання: «{country.flag} {country.name.official}», наприклад: «🇪🇷 State of Eritrea».✔️
    * 🌟 Компонент з фільтром – для фільтрації країн за властивістю region.✔️
        - Select з options:
            1. Americas
            2. Asia
            3. Europe
            4. Oceania
            5. Africa
3. Сторінка **Country** містить:✔️
 * Компонент зі списком інформації про країну. ✔️
    - Дані отримуємо з API https://restcountries.com/v3.1/alpha/{code}, де {code} це властивість cca2. Наприклад, https://restcountries.com/v3.1/alpha/ua✔️
    - Вивести всі ключі обʼєкта країни у форматі: key: value✔️
    - 🌟 Кнопка «Back to countries list»✔️