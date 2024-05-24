/** Функция для получения рандомного id. Использовать крайне аккуратно! */
export function randomId(): string {
  return (
    "" +
    Math.floor(Math.random() * Math.floor(Math.random() * Date.now())) +
    Date.now() +
    Math.floor(100000 + Math.random() * 900000)
  );
}
