type Mods = Record<string, boolean | string>; // обьект у которого ключ строка, значение ключ или строка

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = []
): string {
  return [
    cls, // основной класс
    ...additional.filter(Boolean), // дополнительный
    ...Object.entries(mods)
      .filter(([_, value]) => value) // оставляем со значением тру
      .map(([key, _]) => key), //оставляем только ключи*/
  ].join(" "); // соединяем в строку
}
