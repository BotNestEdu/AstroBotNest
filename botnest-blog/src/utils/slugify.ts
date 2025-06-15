export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD") // descompone caracteres con tildes
    .replace(/[\u0300-\u036f]/g, '') // elimina tildes
    .replace(/\s+/g, '-') // espacios → guiones
    .replace(/[^\w\-]+/g, '') // elimina símbolos no válidos
    .replace(/\-\-+/g, '-') // colapsa múltiples guiones
    .replace(/^-+/, '') // sin guiones al inicio
    .replace(/-+$/, ''); // sin guiones al final
}
