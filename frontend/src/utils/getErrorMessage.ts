/** Асинхронная функция для получения ошибки при отправке запроса
 * @param {unknown} error - Ошибка
 * @returns {Promise<string[]>} Возвращает массив ошибок
 */

import axios, { AxiosError } from "axios";

export default async function getErrorMessage(error: unknown): Promise<string[]> {
  let errorArr: string[] = [];

  if (axios.isAxiosError(error)) return getErrorAxios(error);

  /** Если ошибка не на стороне запроса */
  errorArr.push("Произошла непредвиденная ошибка");

  return errorArr;
}

/** Получение ошибок от аксиоса */
function getErrorAxios(error: AxiosError<any, any>) {
  let errorArr: string[] = [];
  const dataResponse = error.response?.data;

  if (error.response?.status === 403) {
    errorArr.push("У вас нет доступа");
  } else if (dataResponse?.errors && Array.isArray(dataResponse?.errors)) {
    const newErrorArr = dataResponse.errors.map((error: any) => {
      return `${error?.path ? error?.path.join(" ") : "Ошибка"}: ${error?.message || "Непредвиденная ошибка"}`;
    });

    errorArr = errorArr.concat(newErrorArr);
  } else {
    errorArr.push("Произошла непредвиденная ошибка");
  }

  return errorArr;
}
