// export const handleClick = async ({ data, setData, id }) => {
//   // Спочатку змінюємо стан
//   setData(!data);

//   // Виконуємо прокручування після зміни стану
//   await new Promise((resolve) => setTimeout(resolve, 0)); // Операція з затримкою для забезпечення виконання прокручування після оновлення стану

//   // Прокручування до кнопки після оновлення стану
//   document.getElementById(id).scrollIntoView({
//     behavior: 'smooth',
//     block: 'center',
//   });
// };
