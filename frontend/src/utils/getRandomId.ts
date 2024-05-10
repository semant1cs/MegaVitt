/** Функция для получения рандомного id. Использовать крайне аккуратно! */
export function randomId(): string {
    return "" + Date.now() + Math.floor(Math.random()) * 100000000000000
}